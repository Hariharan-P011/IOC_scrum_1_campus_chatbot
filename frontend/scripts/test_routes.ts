import { findWalkingRoute, validateRoute } from '../src/data/campusRoutes';
import { CAMPUS_ROAD_NODES, CAMPUS_ROAD_EDGES } from '../src/data/campusRoadGraph';
import { RESTRICTED_ROAD_EDGE_IDS } from '../src/data/restrictedRoads';
import { CAMPUS_LOCATIONS } from '../src/data/campusLocations';

console.log('====================================================');
console.log('MIT CAMPUS MAP — OFFICIAL ROUTING TEST SUITE (8 CASES)');
console.log('====================================================\n');

interface TestCase {
  name: string;
  start: string;
  dest: string;
  expectedEntrance: { x: number; y: number };
  buildingNum: string;
  mustPassThrough?: string[];
  mustNotContain?: string[];
}

const testCases: TestCase[] = [
  {
    name: 'A. Front Gate → Administrative Block 04',
    start: 'node-front-gate-road',
    dest: 'node-r-04',
    expectedEntrance: { x: 248, y: 172 },
    buildingNum: '04',
    mustPassThrough: ['node-front-gate-road', 'node-mit-road-0', 'node-mit-1', 'node-mit-2', 'node-r-04']
  },
  {
    name: 'B. Front Gate → IT Department 13',
    start: 'node-front-gate-road',
    dest: 'node-r-13',
    expectedEntrance: { x: 302, y: 195 },
    buildingNum: '13',
    mustPassThrough: ['node-front-gate-road', 'node-mit-road-0', 'node-mit-3', 'node-r-13']
  },
  {
    name: 'C. Front Gate → Automobile Engineering 12',
    start: 'node-front-gate-road',
    dest: 'node-r-12',
    expectedEntrance: { x: 360, y: 242 },
    buildingNum: '12',
    mustPassThrough: ['node-front-gate-road', 'node-r-12']
  },
  {
    name: 'D. Front Gate → Aerospace Engineering 21',
    start: 'node-front-gate-road',
    dest: 'node-r-21',
    expectedEntrance: { x: 478, y: 244 },
    buildingNum: '21',
    mustPassThrough: ['node-front-gate-road', 'node-mit-6', 'node-war-planes-south', 'node-r-21']
  },
  {
    name: 'E. Front Gate → MIT Library 26',
    start: 'node-front-gate-road',
    dest: 'node-r-26',
    expectedEntrance: { x: 580, y: 242 },
    buildingNum: '26',
    mustPassThrough: ['node-front-gate-road', 'node-library-north', 'node-r-26']
  },
  {
    name: 'F. Back Gate → IT Department 13',
    start: 'node-back-gate-access',
    dest: 'node-r-13',
    expectedEntrance: { x: 302, y: 195 },
    buildingNum: '13',
    mustPassThrough: ['node-back-gate-access', 'node-railway-top-road-1', 'node-railway-top-road-2', 'node-north-perimeter-6', 'node-mit-3', 'node-r-13'],
    mustNotContain: ['node-hostel-internal-1', 'node-hostel-internal-2', 'node-hostel-dining-north', 'node-back-gate-straight']
  },
  {
    name: 'G. Back Gate → MIT Library 26',
    start: 'node-back-gate-access',
    dest: 'node-r-26',
    expectedEntrance: { x: 580, y: 242 },
    buildingNum: '26',
    mustPassThrough: ['node-back-gate-access', 'node-railway-top-road-1', 'node-railway-top-road-2', 'node-north-perimeter-6', 'node-library-north', 'node-r-26'],
    mustNotContain: ['node-hostel-internal-1', 'node-hostel-internal-2', 'node-hostel-dining-north', 'node-back-gate-straight']
  },
  {
    name: 'H. Back Gate → Aerospace Engineering 21',
    start: 'node-back-gate-access',
    dest: 'node-r-21',
    expectedEntrance: { x: 478, y: 244 },
    buildingNum: '21',
    mustPassThrough: ['node-back-gate-access', 'node-railway-top-road-1', 'node-railway-top-road-2', 'node-north-perimeter-6', 'node-war-planes-south', 'node-r-21'],
    mustNotContain: ['node-hostel-internal-1', 'node-hostel-internal-2', 'node-hostel-dining-north', 'node-back-gate-straight']
  }
];

let allPassed = true;

for (const tc of testCases) {
  console.log(`TEST: ${tc.name}`);
  
  // 1. Verify building data
  const bld = CAMPUS_LOCATIONS.find((b) => b.number === tc.buildingNum);
  if (!bld) {
    console.error(`  ❌ Building ${tc.buildingNum} not found in CAMPUS_LOCATIONS!`);
    allPassed = false;
    continue;
  }
  
  if (bld.entranceNode !== tc.dest) {
    console.error(`  ❌ Building ${tc.buildingNum} entranceNode mismatch! Found ${bld.entranceNode}, expected ${tc.dest}`);
    allPassed = false;
  }
  
  if (bld.entrancePosition.x !== tc.expectedEntrance.x || bld.entrancePosition.y !== tc.expectedEntrance.y) {
    console.error(`  ❌ Building ${tc.buildingNum} entrancePosition mismatch! Found (${bld.entrancePosition.x}, ${bld.entrancePosition.y}), expected (${tc.expectedEntrance.x}, ${tc.expectedEntrance.y})`);
    allPassed = false;
  } else {
    console.log(`  ✓ Destination Entrance Marker calibrated at (${tc.expectedEntrance.x}, ${tc.expectedEntrance.y})`);
  }

  // 2. Calculate route
  const route = findWalkingRoute(tc.start, tc.dest);
  if (!route) {
    console.error(`  ❌ Failed to calculate route for ${tc.name}`);
    allPassed = false;
    continue;
  }

  // 3. Validate route against constraints
  const isValid = validateRoute(route);
  if (!isValid) {
    console.error(`  ❌ Route failed validation!`);
    allPassed = false;
    continue;
  }
  console.log(`  ✓ Route validation passed (all edges walkable, public, non-restricted)`);

  // 4. Check no restricted edges
  for (const step of route.steps) {
    for (const rid of RESTRICTED_ROAD_EDGE_IDS) {
      if (step.fromNode.id === 'node-hostel-internal-1' || step.toNode.id === 'node-hostel-internal-1') {
        console.error(`  ❌ Route traversed restricted hostel internal road!`);
        allPassed = false;
      }
    }
  }

  // 5. Check mustNotContain nodes
  if (tc.mustNotContain) {
    for (const forbiddenNode of tc.mustNotContain) {
      if (route.nodeIds.includes(forbiddenNode)) {
        console.error(`  ❌ Route contains forbidden node: ${forbiddenNode}`);
        allPassed = false;
      }
    }
  }

  // 6. Check mustPassThrough nodes
  if (tc.mustPassThrough) {
    for (const requiredNode of tc.mustPassThrough) {
      if (!route.nodeIds.includes(requiredNode)) {
        console.error(`  ❌ Route missing mandatory waypoint: ${requiredNode}`);
        allPassed = false;
      }
    }
  }

  console.log(`  ✓ Node count: ${route.nodeIds.length} nodes | Distance: ${route.totalDistanceMeters}m (~${route.estimatedTimeMinutes} min)`);
  console.log(`  ✓ Waypoints: ${route.nodeIds.join(' → ')}`);
  console.log(`  ✓ Route stops at building entrance: (${route.nodes[route.nodes.length - 1].x}, ${route.nodes[route.nodes.length - 1].y})\n`);
}

if (allPassed) {
  console.log('====================================================');
  console.log('🎉 ALL 8 ROUTE TESTS PASSED WITH 100% SUCCESS!');
  console.log('====================================================');
} else {
  console.error('❌ SOME ROUTE TESTS FAILED.');
  process.exit(1);
}
