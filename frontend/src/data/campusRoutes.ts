import { 
  CAMPUS_ROAD_NODES, 
  CAMPUS_ROAD_EDGES, 
  CampusRoadNode, 
  CampusRoadEdge, 
  isValidPublicEdge,
  RoadAccessType 
} from './campusRoadGraph';
import { isRestrictedRoad } from './restrictedRoads';

export type { RoadAccessType, CampusRoadEdge };

export interface NavigationStep {
  stepNumber: number;
  instruction: string;
  distanceMeters: number;
  fromNode: CampusRoadNode;
  toNode: CampusRoadNode;
}

export interface RouteResult {
  nodeIds: string[];
  nodes: CampusRoadNode[];
  totalDistanceMeters: number;
  estimatedTimeMinutes: number;
  steps: NavigationStep[];
  pathD: string;
}

// Distance conversion calibrations for 1024x512 campus map
const METERS_PER_PIXEL = 0.85;
const WALKING_SPEED_METERS_PER_MIN = 75; // Average walking speed ~4.5 km/h

// Helper to calculate Euclidean distance along road segment
function calculateDistance(a: CampusRoadNode, b: CampusRoadNode): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Build adjacency graph strictly from walkable public road edges
interface AdjRoadNode {
  nodeId: string;
  weight: number;
  edgeId: string;
}
let ROAD_ADJACENCY: Record<string, AdjRoadNode[]> | null = null;

// Reset adjacency graph to force rebuild with current edge data
ROAD_ADJACENCY = null;

function initRoadGraph() {
  if (ROAD_ADJACENCY) return;

  ROAD_ADJACENCY = {};
  for (const nodeId of Object.keys(CAMPUS_ROAD_NODES)) {
    ROAD_ADJACENCY[nodeId] = [];
  }

  for (const edge of CAMPUS_ROAD_EDGES) {
    // CRITICAL ENFORCEMENT:
    // Only verified, non-restricted, walkable public road edges are admitted.
    // Hostel access roads and blocked passages are 100% EXCLUDED from graph construction.
    if (!isValidPublicEdge(edge)) {
      continue;
    }

    const nodeU = CAMPUS_ROAD_NODES[edge.from];
    const nodeV = CAMPUS_ROAD_NODES[edge.to];
    if (!nodeU || !nodeV) continue;

    const w = calculateDistance(nodeU, nodeV);
    ROAD_ADJACENCY[edge.from].push({ nodeId: edge.to, weight: w, edgeId: edge.id });
    ROAD_ADJACENCY[edge.to].push({ nodeId: edge.from, weight: w, edgeId: edge.id });
  }
}

/**
 * Validates a calculated route against all campus road network constraints.
 * Ensures every segment corresponds to an authoritative, walkable, public road edge.
 */
export function validateRoute(route: RouteResult | null): boolean {
  if (!route || !route.nodes || route.nodes.length < 2) return false;

  for (let i = 0; i < route.nodes.length - 1; i++) {
    const fromId = route.nodes[i].id;
    const toId = route.nodes[i + 1].id;

    // Locate matching edge in authoritative edge list
    const edge = CAMPUS_ROAD_EDGES.find(
      (e) => (e.from === fromId && e.to === toId) || (e.from === toId && e.to === fromId)
    );

    if (!edge) {
      console.error(`[Route Validation Failed] No explicit road edge between ${fromId} and ${toId}`);
      return false;
    }

    if (!isValidPublicEdge(edge)) {
      console.error(`[Route Validation Failed] Edge ${edge.id} (${edge.name}) is restricted or non-walkable`);
      return false;
    }

    if (isRestrictedRoad(edge.id)) {
      console.error(`[Route Validation Failed] Edge ${edge.id} belongs to RESTRICTED_ROAD_EDGE_IDS`);
      return false;
    }
  }

  return true;
}

/**
 * Dijkstra's shortest path algorithm operating STRICTLY on the authoritative road graph.
 * 
 * Rules:
 * 1. ZERO Euclidean interpolation.
 * 2. ZERO shortcuts through green zones, buildings, or restricted hostel areas.
 * 3. Back Gate strictly routes straight to the Four-Way Junction, then left onto MIT Road.
 * 4. Destination marker placed at actual building entrance.
 */
export function findWalkingRoute(startNodeId: string, destNodeId: string): RouteResult | null {
  initRoadGraph();

  // Resolve aliases
  let actualStart = startNodeId;
  if (actualStart === 'node-back-gate-road' || actualStart === 'backGateAccessNode') {
    actualStart = 'node-back-gate-access';
  }

  let actualDest = destNodeId;
  if (actualDest === 'hostelFourWayJunction' || actualDest === 'eastCampusFourWayJunction') {
    actualDest = 'hostelFourWayJunction';
  }

  if (!CAMPUS_ROAD_NODES[actualStart] || !CAMPUS_ROAD_NODES[actualDest]) {
    console.warn(`[findWalkingRoute] Invalid node: start=${actualStart}, dest=${actualDest}`);
    return null;
  }

  const distances: Record<string, number> = {};
  const previous: Record<string, string | null> = {};
  const unvisited = new Set<string>();

  for (const nodeId of Object.keys(CAMPUS_ROAD_NODES)) {
    distances[nodeId] = Infinity;
    previous[nodeId] = null;
    unvisited.add(nodeId);
  }

  distances[actualStart] = 0;

  while (unvisited.size > 0) {
    let current: string | null = null;
    let smallestDist = Infinity;

    for (const nodeId of unvisited) {
      if (distances[nodeId] < smallestDist) {
        smallestDist = distances[nodeId];
        current = nodeId;
      }
    }

    if (!current || smallestDist === Infinity) break;
    if (current === actualDest) break;

    unvisited.delete(current);

    const neighbors = ROAD_ADJACENCY![current] || [];
    for (const neighbor of neighbors) {
      if (!unvisited.has(neighbor.nodeId)) continue;
      const alt = distances[current] + neighbor.weight;
      if (alt < distances[neighbor.nodeId]) {
        distances[neighbor.nodeId] = alt;
        previous[neighbor.nodeId] = current;
      }
    }
  }

  // Reconstruct path
  const path: string[] = [];
  let curr: string | null = actualDest;

  while (curr !== null) {
    path.unshift(curr);
    curr = previous[curr];
  }

  if (path.length === 0 || path[0] !== actualStart) {
    return null;
  }

  const nodes = path.map((id) => CAMPUS_ROAD_NODES[id]);
  
  // Calculate pixel distance and steps
  let totalPixelDistance = 0;
  const steps: NavigationStep[] = [];

  for (let i = 0; i < nodes.length - 1; i++) {
    const fromN = nodes[i];
    const toN = nodes[i + 1];
    const distPx = calculateDistance(fromN, toN);
    totalPixelDistance += distPx;
    const distMeters = Math.max(10, Math.round(distPx * METERS_PER_PIXEL));

    let instruction = `Proceed from ${fromN.name} to ${toN.name}.`;
    
    // Explicit guidance for Back Gate → West → South → MIT Road path
    if (fromN.id === 'node-back-gate-access' || fromN.id === 'backGateAccessNode') {
      instruction = `From Back Gate, go WEST along the North Perimeter Road.`;
    } else if (fromN.id === 'node-railway-top-road-1' && toN.id === 'node-railway-top-road-2') {
      instruction = `Continue WEST along the North Perimeter Road past hostels.`;
    } else if (fromN.id === 'node-railway-top-road-2' && toN.id === 'node-north-perimeter-6') {
      instruction = `Continue WEST to the North Road junction near Hanger-1.`;
    } else if (fromN.id === 'node-north-perimeter-6' && toN.id === 'node-mit-roundabout') {
      instruction = `Turn SOUTH at the junction, go down to MIT Road (Treatment Plant Roundabout).`;
    } else if (toN.id === 'node-back-gate-access' || toN.id === 'backGateAccessNode') {
      instruction = `Arrive at Back Gate (Chromepet Railway Station Side).`;
    } else if (toN.id === 'node-r-04') {
      instruction = `Turn north onto the Administrative Block access driveway to arrive at the entrance porch.`;
    } else if (i === 0) {
      instruction = `Start at ${fromN.name} and follow public roadway toward ${toN.name}.`;
    } else if (i === nodes.length - 2) {
      instruction = `Arrive at destination entrance: ${toN.name}.`;
    } else {
      instruction = `Follow public road past ${fromN.name} towards ${toN.name}.`;
    }

    steps.push({
      stepNumber: i + 1,
      instruction,
      distanceMeters: distMeters,
      fromNode: fromN,
      toNode: toN
    });
  }

  const totalDistanceMeters = Math.max(30, Math.round(totalPixelDistance * METERS_PER_PIXEL));
  const estimatedTimeMinutes = Math.max(1, Math.ceil(totalDistanceMeters / WALKING_SPEED_METERS_PER_MIN));

  // Build SVG path string connecting all waypoints cleanly to the entrance doorstep
  const pathD = nodes.reduce((acc, n, idx) => {
    return `${acc} ${idx === 0 ? 'M' : 'L'} ${n.x} ${n.y}`;
  }, '');

  const candidateRoute: RouteResult = {
    nodeIds: path,
    nodes,
    totalDistanceMeters,
    estimatedTimeMinutes,
    steps,
    pathD
  };

  // Enforce Section 14 Route Validation
  if (!validateRoute(candidateRoute)) {
    console.error('[findWalkingRoute] Generated candidate route failed validation and was rejected.');
    return null;
  }

  return candidateRoute;
}
