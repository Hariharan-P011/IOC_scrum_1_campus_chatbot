import { CAMPUS_ROAD_NODES, CAMPUS_ROAD_EDGES, isValidPublicEdge } from '../src/data/campusRoadGraph';
import { CAMPUS_LOCATIONS } from '../src/data/campusLocations';

function lineIntersectsRect(x1: number, y1: number, x2: number, y2: number, rx: number, ry: number, rw: number, rh: number) {
  const steps = 30;
  for (let i = 1; i < steps; i++) {
    const t = i / steps;
    const px = x1 + t * (x2 - x1);
    const py = y1 + t * (y2 - y1);
    // inside the rect with a small margin
    if (px > rx + 2 && px < rx + rw - 2 && py > ry + 2 && py < ry + rh - 2) {
      return { px, py };
    }
  }
  return null;
}

console.log('--- Checking Public Road Edges Intersecting Building Footprints ---');
let found = 0;
for (const edge of CAMPUS_ROAD_EDGES) {
  if (!isValidPublicEdge(edge)) continue;
  const u = CAMPUS_ROAD_NODES[edge.from];
  const v = CAMPUS_ROAD_NODES[edge.to];
  if (!u || !v) continue;

  for (const bld of CAMPUS_LOCATIONS) {
    const bp = bld.buildingPosition || bld;
    const hit = lineIntersectsRect(u.x, u.y, v.x, v.y, bp.x, bp.y, bp.width, bp.height);
    if (hit) {
      found++;
      console.log(`[COLLISION] Edge "${edge.id}" (${edge.name}) from ${u.id}(${u.x},${u.y}) -> ${v.id}(${v.x},${v.y}) intersects Bld ${bld.number} "${bld.name}" [x:${bp.x}, y:${bp.y}, w:${bp.width}, h:${bp.height}] at approx (${Math.round(hit.px)}, ${Math.round(hit.py)})`);
    }
  }
}
console.log(`Total collisions found: ${found}`);
