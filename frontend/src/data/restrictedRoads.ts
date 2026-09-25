/**
 * MIT Campus Navigation — Restricted Roads and Obstacle Boundaries
 * 
 * Strict Enforcement:
 * Roads entering or passing through the student hostel residential zones,
 * private faculty residences, or construction areas are permanently RESTRICTED/BLOCKED
 * for general campus walking navigation.
 * 
 * Specifically:
 * - From Back Gate, come straight south.
 * - The First Left (turning west into the hostel quadrangle at Bhavani/Amaravathi) is STRICTLY RESTRICTED.
 * - Normal walking navigation takes the Second Left at the East Campus Four-Way Junction onto MIT Road.
 */

export const RESTRICTED_ROAD_EDGE_IDS = [
  'e-hostel-first-left',
  'e-hostel-block-1',
  'e-hostel-block-2',
  'e-hostel-block-3',
  'e-hostel-block-4',
  'e-hostel-block-5',
  'e-hostel-block-6',
  'e-hostel-block-7',
  'e-hostel-block-8',
  'e-hostel-block-9',
] as const;

export type RestrictedRoadEdgeId = typeof RESTRICTED_ROAD_EDGE_IDS[number];

export interface RestrictedZone {
  id: string;
  name: string;
  description: string;
  status: 'RESTRICTED' | 'BLOCKED';
  reason: string;
  bounds?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export const RESTRICTED_ZONES: RestrictedZone[] = [
  {
    id: 'zone-first-left-hostel',
    name: 'Hostel First Left Corridor (Bhavani 51 / Amaravathi 46)',
    description: 'First left branch when walking south from Back Gate',
    status: 'RESTRICTED',
    reason: 'Hostel residential security zone. Normal public navigation must continue straight to the second left at the Four-Way Junction.',
    bounds: {
      x: 820,
      y: 110,
      width: 100,
      height: 40
    }
  },
  {
    id: 'zone-hostel-residential',
    name: 'Hostel Residential Quadrangle & Internal Roads',
    description: 'Internal pathways connecting Birla, Bhavani, Amaravathi, and Cauvery hostels',
    status: 'RESTRICTED',
    reason: 'Hostel security perimeter. Normal navigation must strictly route via the Four-Way Junction and MIT Road.',
    bounds: {
      x: 770,
      y: 90,
      width: 180,
      height: 120
    }
  }
];

/**
 * Validates whether a specific road edge is restricted or blocked.
 * Any restricted edge must be completely ignored by the routing algorithm.
 */
export function isRestrictedRoad(edgeId: string): boolean {
  return RESTRICTED_ROAD_EDGE_IDS.includes(edgeId as RestrictedRoadEdgeId);
}

/**
 * Checks if an edge's classification forbids public walking.
 */
export function isWalkableAccessType(accessType: string): boolean {
  return accessType !== 'RESTRICTED' && 
         accessType !== 'RESTRICTED_ROAD' && 
         accessType !== 'BLOCKED_ROAD' && 
         accessType !== 'HOSTEL_ACCESS';
}
