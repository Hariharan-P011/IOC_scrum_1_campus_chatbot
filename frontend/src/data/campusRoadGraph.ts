/**
 * MIT Campus Navigation — Authoritative Road Graph
 * 
 * Every public walking route travels strictly through this manually defined road network.
 * Node-to-node connectivity only: ZERO Euclidean shortcuts, ZERO crossing of buildings,
 * green areas, or restricted zones.
 */

import { isRestrictedRoad } from './restrictedRoads';

export type RoadNodeType = 'gate' | 'junction' | 'access' | 'road';

export interface CampusRoadNode {
  id: string;
  name: string;
  x: number;
  y: number;
  type: RoadNodeType;
}

// Backwards compatibility alias
export type CampusNode = CampusRoadNode;

export type RoadAccessType =
  | 'PUBLIC_WALKING_ROAD'
  | 'RESTRICTED'
  | 'RESTRICTED_ROAD'
  | 'BLOCKED_ROAD'
  | 'BUILDING_ACCESS'
  | 'HOSTEL_ACCESS';

export interface CampusRoadEdge {
  id: string;
  from: string;
  to: string;
  accessType: RoadAccessType;
  walkable: boolean;
  name?: string;
}

/**
 * Authoritative Campus Road Network Graph Nodes
 * Strictly positioned on visible public roadways, corridors, and building entrances.
 */
export const CAMPUS_ROAD_NODES: Record<string, CampusRoadNode> = {
  // ── 1. GATES & WEST MAIN ENTRANCE (Madambakkam Main Road) ──
  'node-front-gate-road': {
    id: 'node-front-gate-road',
    name: 'Front Gate Access (Main Entrance)',
    x: 60,
    y: 238,
    type: 'gate'
  },
  'node-parking-turn': {
    id: 'node-parking-turn',
    name: 'Parking Access / MIT Road West Entrance',
    x: 60,
    y: 192,
    type: 'junction'
  },
  'node-madambakkam-south': {
    id: 'node-madambakkam-south',
    name: 'Madambakkam Main Road / South Access Junction',
    x: 60,
    y: 295,
    type: 'junction'
  },
  'node-mit-road-0': {
    id: 'node-mit-road-0',
    name: 'MIT Road - Parking Front Junction',
    x: 100,
    y: 192,
    type: 'road'
  },

  // ── 2. MIT ROAD MAIN TRUNK (Horizontal Central Arterial Road at Y ≈ 185) ──
  'node-mit-1': {
    id: 'node-mit-1',
    name: 'MIT Road - Building 01/02 Junction',
    x: 165,
    y: 190,
    type: 'road'
  },
  'node-mit-cross-1': {
    id: 'node-mit-cross-1',
    name: 'MIT Road / Central Park West Crossing',
    x: 234,
    y: 185,
    type: 'junction'
  },
  'node-mit-2': {
    id: 'node-mit-2',
    name: 'MIT Road - Admin Block (04) Access Driveway Junction',
    x: 248,
    y: 185,
    type: 'junction'
  },
  'node-mit-3': {
    id: 'node-mit-3',
    name: 'MIT Road - Info Tech (13) & Lecture Hall (16) Crossing',
    x: 302,
    y: 185,
    type: 'junction'
  },
  'node-mit-cross-2': {
    id: 'node-mit-cross-2',
    name: 'MIT Road - Electronics (14) & Rajam Hall (17) Crossing',
    x: 345,
    y: 185,
    type: 'junction'
  },
  'node-mit-4': {
    id: 'node-mit-4',
    name: 'MIT Road / Canteen Avenue Crossing',
    x: 385,
    y: 185,
    type: 'junction'
  },
  'node-mit-5': {
    id: 'node-mit-5',
    name: 'MIT Road - Electronics-II (15) & IOT (20) Crossing',
    x: 435,
    y: 185,
    type: 'junction'
  },
  'node-mit-6': {
    id: 'node-mit-6',
    name: 'MIT Road - War Planes Monument Plaza / Hanger-2 Crossing',
    x: 480,
    y: 185,
    type: 'junction'
  },
  'node-mit-cross-3': {
    id: 'node-mit-cross-3',
    name: 'MIT Road - Production Tech (27) & Workshop (30) Crossing',
    x: 540,
    y: 185,
    type: 'junction'
  },
  'node-mit-7': {
    id: 'node-mit-7',
    name: 'MIT Road - Central Library Avenue Crossing',
    x: 580,
    y: 185,
    type: 'road'
  },
  'node-mit-8': {
    id: 'node-mit-8',
    name: 'MIT Road - Mechatronics (31) & Hanger-1 (32) Crossing',
    x: 640,
    y: 185,
    type: 'junction'
  },
  'node-mit-9': {
    id: 'node-mit-9',
    name: 'MIT Road - Alumni House (33) & Pebbles Track Crossing',
    x: 690,
    y: 185,
    type: 'road'
  },
  'node-mit-roundabout': {
    id: 'node-mit-roundabout',
    name: 'MIT Road - Treatment Plant Roundabout',
    x: 722,
    y: 185,
    type: 'junction'
  },
  'node-mit-11': {
    id: 'node-mit-11',
    name: 'MIT Road - Rajam Hostel (37) & Amenities Crossing',
    x: 790,
    y: 185,
    type: 'junction'
  },
  'node-mit-12': {
    id: 'node-mit-12',
    name: 'MIT Road East boundary connector',
    x: 962,
    y: 185,
    type: 'junction'
  },
  'node-mit-east-end': {
    id: 'node-mit-east-end',
    name: 'MIT Road East End',
    x: 962,
    y: 185,
    type: 'road'
  },

  // ── 3. SOUTH ROAD & COMPUTER TECHNOLOGY BLOCK (06, 07, 08, 09, 12) ──
  'node-south-road-west': {
    id: 'node-south-road-west',
    name: 'South Access Road West End',
    x: 205,
    y: 295,
    type: 'junction'
  },
  'node-comp-turn-south': {
    id: 'node-comp-turn-south',
    name: 'South Road - Turning towards Computer Block 08',
    x: 205,
    y: 375,
    type: 'junction'
  },
  'node-comp-08-south': {
    id: 'node-comp-08-south',
    name: 'Building 08 Entrance Road (Dept of Computer Tech CB Block)',
    x: 258,
    y: 375,
    type: 'access'
  },
  'node-comp-08-east': {
    id: 'node-comp-08-east',
    name: 'Road East of Computer Tech (08) & AU-KBC (10)',
    x: 295,
    y: 375,
    type: 'junction'
  },
  'node-comp-07-east': {
    id: 'node-comp-07-east',
    name: 'Road between Avionics (07) and Automobile (12)',
    x: 295,
    y: 242,
    type: 'junction'
  },
  'node-comp-north-path': {
    id: 'node-comp-north-path',
    name: 'Road north of Computer Tech GJ Block (09)',
    x: 250,
    y: 242,
    type: 'road'
  },
  'node-comp-01-05-path': {
    id: 'node-comp-01-05-path',
    name: 'Road between Building 01 and Golden Jubilee Park (05)',
    x: 234,
    y: 242,
    type: 'junction'
  },
  'node-auto-north': {
    id: 'node-auto-north',
    name: 'Road north of Automobile (12) and south of IT (13)',
    x: 360,
    y: 242,
    type: 'road'
  },
  'node-auto-east': {
    id: 'node-auto-east',
    name: 'Road between Automobile (12) and Aerospace (21)',
    x: 450,
    y: 242,
    type: 'junction'
  },

  // ── 4. DEEP SOUTH ROAD (10, 11, Transformer, 22, 23, 24, 25, 36, 40) ──
  'node-ds-10': {
    id: 'node-ds-10',
    name: 'Road in front of AU-KBC Research Centre 1 (10)',
    x: 326,
    y: 375,
    type: 'access'
  },
  'node-ds-11': {
    id: 'node-ds-11',
    name: 'Road in front of AU-KBC Research Centre 2 (11)',
    x: 394,
    y: 375,
    type: 'access'
  },
  'node-ds-transformer': {
    id: 'node-ds-transformer',
    name: 'Road at Campus Transformer Yard',
    x: 465,
    y: 375,
    type: 'junction'
  },
  'node-ds-rajam-hall': {
    id: 'node-ds-rajam-hall',
    name: 'Road in front of Rajam Hall Auditorium (22)',
    x: 534,
    y: 375,
    type: 'access'
  },
  'node-ds-nss': {
    id: 'node-ds-nss',
    name: 'Road at NSO / NSS / YRC (23) & OAT (25)',
    x: 582,
    y: 375,
    type: 'access'
  },
  'node-ds-micsat': {
    id: 'node-ds-micsat',
    name: 'Road in front of CASR MICSAT (24)',
    x: 630,
    y: 375,
    type: 'access'
  },
  'node-ds-36': {
    id: 'node-ds-36',
    name: 'Road at Campus Block 36',
    x: 700,
    y: 375,
    type: 'access'
  },
  'node-ds-health': {
    id: 'node-ds-health',
    name: 'Road at Health Centre & Block 40',
    x: 858,
    y: 375,
    type: 'access'
  },
  'node-ds-cauvery': {
    id: 'node-ds-cauvery',
    name: 'Road at Cauvery Hostel (42)',
    x: 930,
    y: 375,
    type: 'access'
  },

  // ── 5. CENTRAL LIBRARY / AEROSPACE / MONUMENT ROAD CORRIDORS ──
  'node-war-planes-south': {
    id: 'node-war-planes-south',
    name: 'Road south of War Planes Monument Plaza',
    x: 480,
    y: 242,
    type: 'junction'
  },
  'node-library-north': {
    id: 'node-library-north',
    name: 'Road north of MIT Library (26) / south of 27',
    x: 580,
    y: 240,
    type: 'access'
  },
  'node-library-south': {
    id: 'node-library-south',
    name: 'Road south of MIT Library (26)',
    x: 580,
    y: 305,
    type: 'junction'
  },
  'node-library-east': {
    id: 'node-library-east',
    name: 'Road east of MIT Library / near Alumni House (33)',
    x: 650,
    y: 242,
    type: 'junction'
  },
  'node-pebbles-path': {
    id: 'node-pebbles-path',
    name: 'Road at Pebbles Track (34)',
    x: 686,
    y: 230,
    type: 'access'
  },
  'node-treatment-south': {
    id: 'node-treatment-south',
    name: 'Road south of Water Treatment Plant (35)',
    x: 750,
    y: 245,
    type: 'junction'
  },
  'node-treatment-east': {
    id: 'node-treatment-east',
    name: 'Road east of Water Treatment Plant (35)',
    x: 750,
    y: 185,
    type: 'junction'
  },

  // ── 6. NORTH PERIMETER & ACADEMIC HANGER ROADS (Y ≈ 55) ──
  'node-north-perimeter-1': {
    id: 'node-north-perimeter-1',
    name: 'North Road - LHC (16) West Junction',
    x: 290,
    y: 55,
    type: 'junction'
  },
  'node-north-perimeter-2': {
    id: 'node-north-perimeter-2',
    name: 'North Road - between RLHC (17) and Canteen (19)',
    x: 385,
    y: 55,
    type: 'junction'
  },
  'node-canteen-access': {
    id: 'node-canteen-access',
    name: 'Canteen (19) Entrance Access Road',
    x: 385,
    y: 125,
    type: 'access'
  },
  'node-north-perimeter-3': {
    id: 'node-north-perimeter-3',
    name: 'North Road - east of Canteen / west of Hanger-2 (28)',
    x: 460,
    y: 55,
    type: 'junction'
  },
  'node-north-perimeter-4': {
    id: 'node-north-perimeter-4',
    name: 'North Road - between Hanger-2 (28) and Production Tech (29)',
    x: 540,
    y: 55,
    type: 'junction'
  },
  'node-north-perimeter-5': {
    id: 'node-north-perimeter-5',
    name: 'North Road - between Workshop (30) and Hanger-1 (32)',
    x: 640,
    y: 55,
    type: 'junction'
  },
  'node-north-perimeter-6': {
    id: 'node-north-perimeter-6',
    name: 'North Road - east of Hanger-1 (32)',
    x: 740,
    y: 55,
    type: 'junction'
  },

  // ── 7. CHROMEPET RAILWAY STATION, BACK GATE & EAST CAMPUS FOUR-WAY JUNCTION ──
  'backGateAccessNode': {
    id: 'backGateAccessNode',
    name: 'Back Gate Access Road (Chromepet Railway Station Side)',
    x: 962,
    y: 55,
    type: 'gate'
  },
  'node-back-gate-access': {
    id: 'node-back-gate-access',
    name: 'Back Gate Access Road (Chromepet Railway Station Side)',
    x: 962,
    y: 55,
    type: 'gate'
  },
  'node-back-gate-road': {
    id: 'node-back-gate-road',
    name: 'Back Gate Access (Chromepet Railway Station Side)',
    x: 962,
    y: 55,
    type: 'gate'
  },
  'node-back-gate-straight-1': {
    id: 'node-back-gate-straight-1',
    name: 'Back Gate Straight Public Road (North)',
    x: 962,
    y: 100,
    type: 'road'
  },
  'node-hostel-first-left-junction': {
    id: 'node-hostel-first-left-junction',
    name: 'First Left Junction (Hostel Access) [RESTRICTED BRANCH]',
    x: 962,
    y: 125,
    type: 'junction'
  },
  'node-back-gate-straight': {
    id: 'node-back-gate-straight',
    name: 'Straight Public Road (Passes First Left towards Second Left)',
    x: 962,
    y: 155,
    type: 'road'
  },
  'hostelFourWayJunction': {
    id: 'hostelFourWayJunction',
    name: 'East Campus Four-Way Junction (Second Left / MIT Road)',
    x: 962,
    y: 182,
    type: 'junction'
  },
  'eastCampusFourWayJunction': {
    id: 'eastCampusFourWayJunction',
    name: 'East Campus Four-Way Junction (Second Left / MIT Road)',
    x: 962,
    y: 182,
    type: 'junction'
  },
  'node-east-campus-four-way-junction': {
    id: 'node-east-campus-four-way-junction',
    name: 'East Campus Four-Way Junction (Second Left / MIT Road)',
    x: 962,
    y: 182,
    type: 'junction'
  },
  'node-mit-11b': {
    id: 'node-mit-11b',
    name: 'MIT Road East Trunk (Hostel Office / Dining Hall Front)',
    x: 865,
    y: 182,
    type: 'road'
  },
  'node-east-road-south': {
    id: 'node-east-road-south',
    name: 'East Road South past Health Centre (40)',
    x: 962,
    y: 355,
    type: 'road'
  },
  'node-railway-top-road-1': {
    id: 'node-railway-top-road-1',
    name: 'North Perimeter Road above Hostel 51/49',
    x: 820,
    y: 55,
    type: 'road'
  },
  'node-railway-top-road-2': {
    id: 'node-railway-top-road-2',
    name: 'North Perimeter Road above Hostel 49',
    x: 740,
    y: 55,
    type: 'junction'
  },
  'node-hostel-spine-east': {
    id: 'node-hostel-spine-east',
    name: 'East Perimeter Road past Dining Hall (44)',
    x: 885,
    y: 115,
    type: 'road'
  },
  'node-hostel-internal-1': {
    id: 'node-hostel-internal-1',
    name: 'Hostel Internal Road (Birla 47 & Gymnasium 50) [RESTRICTED]',
    x: 790,
    y: 130,
    type: 'junction'
  },
  'node-hostel-internal-2': {
    id: 'node-hostel-internal-2',
    name: 'Hostel Internal Road (Amaravathi 46 & Bhavani 51) [RESTRICTED]',
    x: 845,
    y: 130,
    type: 'junction'
  },
  'node-hostel-dining-north': {
    id: 'node-hostel-dining-north',
    name: 'Hostel Road between Recreation (52) and Dining Hall (44) [RESTRICTED]',
    x: 885,
    y: 115,
    type: 'junction'
  },
  'node-radha-nagar-east': {
    id: 'node-radha-nagar-east',
    name: 'Road south towards Radha Nagar & Cauvery Hostel (42)',
    x: 962,
    y: 290,
    type: 'junction'
  },

  // ── 8. SPECIFIC BUILDING ENTRANCE ACCESS NODES ON ADJACENT ROADS ──
  'node-r-01': { id: 'node-r-01', name: 'Instrumentation-I (01) Entrance', x: 165, y: 190, type: 'access' },
  'node-r-02': { id: 'node-r-02', name: 'Instrumentation-II (02) Entrance', x: 168, y: 172, type: 'access' },
  'node-r-03': { id: 'node-r-03', name: 'Instrumentation Engineering (03) Entrance', x: 168, y: 172, type: 'access' },
  // Building 04: Accessible Entrance porch at the south perimeter driveway off MIT Road
  'node-r-04': { id: 'node-r-04', name: 'Administrative Block (04) Entrance Porch', x: 248, y: 172, type: 'access' },
  'node-r-05': { id: 'node-r-05', name: 'Golden Jubilee Park (05) Pathway Entrance', x: 236, y: 185, type: 'access' },
  'node-r-06': { id: 'node-r-06', name: 'Rubber & Plastics Tech (06) Entrance', x: 205, y: 295, type: 'access' },
  'node-r-07': { id: 'node-r-07', name: 'Avionics (07) Entrance', x: 305, y: 265, type: 'access' },
  'node-r-08': { id: 'node-r-08', name: 'Dept of Computer Tech CB Block (08) Entrance', x: 258, y: 350, type: 'access' },
  'node-r-09': { id: 'node-r-09', name: 'Dept of Computer Tech GJ Block (09) Entrance', x: 250, y: 262, type: 'access' },
  'node-r-10': { id: 'node-r-10', name: 'AU-KBC Research Centre 1 (10) Entrance', x: 326, y: 355, type: 'access' },
  'node-r-11': { id: 'node-r-11', name: 'AU-KBC Research Centre 2 (11) Entrance', x: 394, y: 355, type: 'access' },
  'node-r-12': { id: 'node-r-12', name: 'Department of Automobile Engineering (12) Entrance', x: 360, y: 242, type: 'access' },
  // Building 13: North Entrance facing MIT Road
  'node-r-13': { id: 'node-r-13', name: 'Department of Information Technology (13) Entrance', x: 302, y: 195, type: 'access' },
  'node-r-14': { id: 'node-r-14', name: 'Department of Electronics Eng - I (14) Entrance', x: 345, y: 185, type: 'access' },
  'node-r-15': { id: 'node-r-15', name: 'Department of Electronics Eng - II (15) Entrance', x: 435, y: 185, type: 'access' },
  'node-r-16': { id: 'node-r-16', name: 'Lecture Hall Complex (16) Entrance', x: 290, y: 125, type: 'access' },
  'node-r-17': { id: 'node-r-17', name: 'Rajam Lecture Hall Complex (17) Entrance', x: 385, y: 125, type: 'access' },
  'node-r-18': { id: 'node-r-18', name: 'AU Zone IV Exam Office (18) Entrance', x: 415, y: 170, type: 'access' },
  'node-r-19': { id: 'node-r-19', name: 'Canteen (19) Main Entrance', x: 385, y: 125, type: 'access' },
  'node-r-20': { id: 'node-r-20', name: 'Centre for IOT (20) Entrance', x: 435, y: 185, type: 'access' },
  // Building 21: Aerospace Engineering Entrance (distinct from Aircraft Monument at 480, 212)
  'node-r-21': { id: 'node-r-21', name: 'Aerospace Engineering (21) Entrance', x: 478, y: 244, type: 'access' },
  'node-r-22': { id: 'node-r-22', name: 'Rajam Hall - Auditorium (22) Entrance', x: 534, y: 370, type: 'access' },
  'node-r-23': { id: 'node-r-23', name: 'NSO / NSS / YRC (23) Entrance', x: 582, y: 372, type: 'access' },
  'node-r-24': { id: 'node-r-24', name: 'Centre for Aerospace Research MICSAT (24) Entrance', x: 630, y: 370, type: 'access' },
  'node-r-25': { id: 'node-r-25', name: 'C.N. Ramaswamy OAT (25) Entrance', x: 580, y: 305, type: 'access' },
  // Building 26: Central MIT Library Main Entrance
  'node-r-26': { id: 'node-r-26', name: 'MIT Library (26) Main Entrance', x: 580, y: 242, type: 'access' },
  'node-r-27': { id: 'node-r-27', name: 'Dept of Production Tech Humanities (27) Entrance', x: 540, y: 185, type: 'access' },
  'node-r-28': { id: 'node-r-28', name: 'Hanger-2 (28) Entrance', x: 478, y: 185, type: 'access' },
  'node-r-29': { id: 'node-r-29', name: 'Dept of Production Technology Main (29) Entrance', x: 540, y: 140, type: 'access' },
  'node-r-30': { id: 'node-r-30', name: 'Central Workshop (30) Entrance', x: 540, y: 185, type: 'access' },
  'node-r-31': { id: 'node-r-31', name: 'Mechatronics (31) Entrance', x: 640, y: 185, type: 'access' },
  'node-r-32': { id: 'node-r-32', name: 'Hanger-1 (32) Entrance', x: 640, y: 185, type: 'access' },
  'node-r-33': { id: 'node-r-33', name: 'Alumni House (33) Entrance', x: 650, y: 242, type: 'access' },
  'node-r-34': { id: 'node-r-34', name: 'Pebbles Track (34) Entrance', x: 686, y: 230, type: 'access' },
  'node-r-35': { id: 'node-r-35', name: 'Overhead Treatment Plant (35) Entrance', x: 722, y: 185, type: 'access' },
  'node-r-36': { id: 'node-r-36', name: 'Campus Facility Block 36 Entrance', x: 700, y: 315, type: 'access' },
  'node-r-37': { id: 'node-r-37', name: 'Rajam Hostel (37) Entrance', x: 790, y: 185, type: 'access' },
  'node-r-38-tm': { id: 'node-r-38-tm', name: 'Tamil Mandram Office (38) Entrance', x: 790, y: 185, type: 'access' },
  'node-r-38-ho': { id: 'node-r-38-ho', name: 'Hostel Office (38) Entrance', x: 865, y: 185, type: 'access' },
  'node-r-39': { id: 'node-r-39', name: 'Health Centre (39) Entrance', x: 858, y: 305, type: 'access' },
  'node-r-40': { id: 'node-r-40', name: 'Campus Block 40 Entrance', x: 858, y: 305, type: 'access' },
  'node-r-41': { id: 'node-r-41', name: 'Health Centre (41) Entrance', x: 858, y: 305, type: 'access' },
  'node-r-42': { id: 'node-r-42', name: 'Cauvery Hostel (42) Entrance', x: 962, y: 266, type: 'access' },
  'node-r-44': { id: 'node-r-44', name: 'Dining Hall (44) Entrance', x: 962, y: 195, type: 'access' },
  'node-r-45': { id: 'node-r-45', name: 'Amenities Hall (45) Entrance', x: 962, y: 195, type: 'access' },
  'node-r-46': { id: 'node-r-46', name: 'Amaravathi Hostel (46) Entrance', x: 962, y: 195, type: 'access' },
  'node-r-47': { id: 'node-r-47', name: 'Birla Hostel (47) Entrance', x: 790, y: 130, type: 'access' },
  'node-r-48': { id: 'node-r-48', name: 'Hostel Store (48) Entrance', x: 790, y: 130, type: 'access' },
  'node-r-49': { id: 'node-r-49', name: 'Tamilabharani Hostel (49) Entrance', x: 790, y: 130, type: 'access' },
  'node-r-50': { id: 'node-r-50', name: 'Gymnasium (50) Entrance', x: 790, y: 130, type: 'access' },
  'node-r-51': { id: 'node-r-51', name: 'Bhavani Hostel (51) Entrance', x: 845, y: 130, type: 'access' },
  'node-r-52': { id: 'node-r-52', name: 'Recreation Centre (52) Entrance', x: 885, y: 115, type: 'access' },
  'node-r-53': { id: 'node-r-53', name: 'Hanger-1 Store Room (53) Entrance', x: 715, y: 110, type: 'access' }
};

// Aliases for backwards compatibility
export const CAMPUS_NODES = CAMPUS_ROAD_NODES;

/**
 * Authoritative Campus Road Network Edges
 * Explicitly distinguishes walkable public roadways from restricted hostel roads.
 */
export const CAMPUS_ROAD_EDGES: CampusRoadEdge[] = [
  // ── 1. Front Gate & Madambakkam Main Road ──
  { id: 'e-fg-1', from: 'node-front-gate-road', to: 'node-parking-turn', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Main Entrance Approach Road' },
  { id: 'e-fg-2', from: 'node-parking-turn', to: 'node-mit-road-0', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road West Entry' },
  { id: 'e-fg-3', from: 'node-front-gate-road', to: 'node-madambakkam-south', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Madambakkam South Road' },

  // ── 2. MIT Road Main Trunk (Continuous horizontal campus spine) ──
  { id: 'e-mit-0-1', from: 'node-mit-road-0', to: 'node-mit-1', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road past 01 / 04' },
  { id: 'e-mit-1-c1', from: 'node-mit-1', to: 'node-mit-cross-1', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road / South Road Crossing' },
  { id: 'e-mit-c1-2', from: 'node-mit-cross-1', to: 'node-mit-2', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road past Administrative Block' },
  { id: 'e-mit-2-3', from: 'node-mit-2', to: 'node-mit-3', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road - Approaching Dept of IT (13)' },
  { id: 'e-mit-3-c2', from: 'node-mit-3', to: 'node-mit-cross-2', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road past IT (13) & Electronics-I (14)' },
  { id: 'e-mit-c2-4', from: 'node-mit-cross-2', to: 'node-mit-4', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road / Canteen Avenue Crossing' },
  { id: 'e-mit-4-5', from: 'node-mit-4', to: 'node-mit-5', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road past Electronics-II (15)' },
  { id: 'e-mit-5-6', from: 'node-mit-5', to: 'node-mit-6', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road past War Planes Monument Plaza' },
  { id: 'e-mit-6-c3', from: 'node-mit-6', to: 'node-mit-cross-3', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road - Production Tech Crossing' },
  { id: 'e-mit-c3-7', from: 'node-mit-cross-3', to: 'node-mit-7', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road Central Avenue' },
  { id: 'e-mit-7-8', from: 'node-mit-7', to: 'node-mit-8', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road past Mechatronics & Hanger-1' },
  { id: 'e-mit-8-9', from: 'node-mit-8', to: 'node-mit-9', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road past Alumni House & Pebbles Track' },
  { id: 'e-mit-9-rb', from: 'node-mit-9', to: 'node-mit-roundabout', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road Treatment Plant Roundabout' },
  { id: 'e-mit-rb-11', from: 'node-mit-roundabout', to: 'node-mit-11', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road past Rajam Hostel' },
  { id: 'e-mit-11-11b', from: 'node-mit-11', to: 'node-mit-11b', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road past Amenities to Dining Hall Front' },
  { id: 'e-mit-11b-fwj', from: 'node-mit-11b', to: 'hostelFourWayJunction', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road to East Campus Four-Way Junction' },
  { id: 'e-mit-11b-fwj-alias', from: 'node-mit-11b', to: 'node-east-campus-four-way-junction', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road to East Campus Four-Way Junction' },
  { id: 'e-fwj-12', from: 'hostelFourWayJunction', to: 'node-mit-12', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road East boundary connector' },
  { id: 'e-fwj-12-alias', from: 'node-east-campus-four-way-junction', to: 'node-mit-12', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road East boundary connector' },
  { id: 'e-mit-12-end', from: 'node-mit-12', to: 'node-mit-east-end', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road East End' },

  // ── 3. South Access Road & Computer Technology Area (06, 07, 08, 09, 12) ──
  { id: 'e-so-1', from: 'node-madambakkam-south', to: 'node-south-road-west', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'South Access Road West End' },
  { id: 'e-so-2', from: 'node-south-road-west', to: 'node-comp-turn-south', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'South Road - Turning towards Computer Block 08' },
  { id: 'e-so-3', from: 'node-comp-turn-south', to: 'node-comp-08-south', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Computer Block 08 South Access Road' },
  { id: 'e-so-4', from: 'node-comp-08-south', to: 'node-comp-08-east', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Road between Computer Block 08 and 09' },
  { id: 'e-so-5', from: 'node-comp-08-east', to: 'node-comp-07-east', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Road east of Avionics (07)' },
  { id: 'e-so-6', from: 'node-comp-07-east', to: 'node-comp-north-path', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Pathway north of Computer Technology' },
  { id: 'e-so-7', from: 'node-comp-north-path', to: 'node-comp-01-05-path', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Road between 01 and 05' },
  { id: 'e-so-8', from: 'node-comp-01-05-path', to: 'node-mit-cross-1', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'South Road / MIT Road connection' },
  { id: 'e-so-9', from: 'node-comp-07-east', to: 'node-auto-north', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Road north of Automobile Eng (12)' },
  { id: 'e-so-10', from: 'node-auto-north', to: 'node-auto-east', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Road east of Automobile Eng (12)' },
  { id: 'e-so-11', from: 'node-auto-east', to: 'node-war-planes-south', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Automobile East to War Planes Plaza' },

  // ── 4. Deep South Road (10, 11, Transformer, 22, 23, 24, 25, 36, 40) ──
  { id: 'e-ds-1', from: 'node-comp-08-south', to: 'node-ds-10', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Road past AU-KBC Block 10' },
  { id: 'e-ds-2', from: 'node-ds-10', to: 'node-ds-11', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Road past AU-KBC Block 11' },
  { id: 'e-ds-3', from: 'node-ds-11', to: 'node-ds-transformer', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Deep South Road / Transformer' },
  { id: 'e-ds-4', from: 'node-ds-transformer', to: 'node-ds-rajam-hall', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Road in front of Rajam Hall (22)' },
  { id: 'e-ds-5', from: 'node-ds-rajam-hall', to: 'node-ds-nss', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Road at NSO / NSS / YRC (23)' },
  { id: 'e-ds-6', from: 'node-ds-nss', to: 'node-ds-micsat', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Road at CASR MICSAT (24)' },
  { id: 'e-ds-7', from: 'node-ds-micsat', to: 'node-ds-36', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Road at Campus Block 36' },
  { id: 'e-ds-8', from: 'node-ds-36', to: 'node-ds-health', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Road towards Health Centre (40)' },
  { id: 'e-ds-9', from: 'node-ds-health', to: 'node-east-road-south', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Road past Health Centre to East Road' },
  { id: 'e-ds-10', from: 'node-east-road-south', to: 'hostelFourWayJunction', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'East Road South to Four-Way Junction' },
  { id: 'e-ds-10-alias', from: 'node-east-road-south', to: 'node-east-campus-four-way-junction', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'East Road South to Four-Way Junction' },
  // ── 5. Central Library / Aerospace / War Planes Corridors ──
  { id: 'e-cl-1', from: 'node-mit-6', to: 'node-war-planes-south', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road to War Planes south corridor' },
  { id: 'e-cl-2', from: 'node-war-planes-south', to: 'node-library-north', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'War Planes to Library North Road' },
  { id: 'e-cl-4', from: 'node-library-north', to: 'node-library-east', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Library North to Library East' },
  { id: 'e-cl-5', from: 'node-library-east', to: 'node-mit-8', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Library East to MIT Road' },
  { id: 'e-cl-6', from: 'node-library-east', to: 'node-pebbles-path', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Library East to Pebbles Track (34)' },
  { id: 'e-cl-7', from: 'node-pebbles-path', to: 'node-treatment-south', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Pebbles Track to Treatment Plant South' },
  { id: 'e-cl-8', from: 'node-treatment-south', to: 'node-treatment-east', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Treatment Plant South to East' },
  { id: 'e-cl-8b', from: 'node-treatment-east', to: 'node-mit-roundabout', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Treatment East to Roundabout' },
  { id: 'e-cl-9', from: 'node-treatment-south', to: 'node-ds-36', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Treatment Plant to Block 36' },

  // ── 6. North Academic Perimeter & Hanger Roads ──
  { id: 'e-np-1', from: 'node-mit-3', to: 'node-north-perimeter-1', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'MIT Road past IT (13) to North Perimeter' },
  { id: 'e-np-2', from: 'node-north-perimeter-1', to: 'node-north-perimeter-2', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'North Road between 16 and 17' },
  { id: 'e-np-3', from: 'node-north-perimeter-2', to: 'node-canteen-access', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'North Road to Canteen Entrance' },
  { id: 'e-np-4', from: 'node-canteen-access', to: 'node-mit-4', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Canteen south to MIT Road' },
  { id: 'e-np-5', from: 'node-north-perimeter-2', to: 'node-north-perimeter-3', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'North Road past 19 / 28' },
  { id: 'e-np-7', from: 'node-north-perimeter-3', to: 'node-north-perimeter-4', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'North Road past Production Tech (29)' },
  { id: 'e-np-8', from: 'node-north-perimeter-4', to: 'node-mit-cross-3', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Production Tech to MIT Road' },
  { id: 'e-np-9', from: 'node-north-perimeter-4', to: 'node-north-perimeter-5', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'North Road past Central Workshop (30)' },
  { id: 'e-np-10', from: 'node-north-perimeter-5', to: 'node-mit-8', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Workshop south to MIT Road' },
  { id: 'e-np-11', from: 'node-north-perimeter-5', to: 'node-north-perimeter-6', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'North Road past Hanger-1 (32)' },
  { id: 'e-np-12', from: 'node-north-perimeter-6', to: 'node-treatment-south', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'North Road to East Campus Treatment Road' },

  // ── 7. BACK GATE: GOES WEST ALONG NORTH PERIMETER ROAD (then south to MIT Road) ──
  // Rule: From Back Gate, go WEST along the top perimeter road.
  // Pass the First Left junction (south into hostels — RESTRICTED). 
  // Continue west → turn SOUTH at the correct junction → reach MIT Road.
  // The straight-south path (going south at x=962) is CLOSED — passes over hostel buildings.

  // ✅ TOP ROAD: Back Gate → West along North Perimeter (PUBLIC)
  { id: 'e-top-bg', from: 'node-back-gate-access', to: 'node-railway-top-road-1', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Back Gate West along North Perimeter Road' },
  { id: 'e-top-bg-alias', from: 'backGateAccessNode', to: 'node-railway-top-road-1', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'Back Gate West along North Perimeter Road' },
  { id: 'e-top-bg-2', from: 'node-railway-top-road-2', to: 'node-railway-top-road-1', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'North Perimeter Road' },
  { id: 'e-top-bg-3', from: 'node-north-perimeter-6', to: 'node-railway-top-road-2', accessType: 'PUBLIC_WALKING_ROAD', walkable: true, name: 'North Perimeter Road west of Hostel 49' },

  // 🚫 STRAIGHT-SOUTH FROM BACK GATE IS CLOSED (goes over Dining Hall / hostel buildings)
  { id: 'e-bg-straight-1', from: 'node-back-gate-access', to: 'node-back-gate-straight-1', accessType: 'RESTRICTED', walkable: false, name: 'Back Gate South — CLOSED (passes over hostel buildings)' },
  { id: 'e-bg-straight-1-alias', from: 'backGateAccessNode', to: 'node-back-gate-straight-1', accessType: 'RESTRICTED', walkable: false, name: 'Back Gate South Alias — CLOSED' },
  { id: 'e-bg-straight-1-old', from: 'node-back-gate-road', to: 'node-back-gate-straight-1', accessType: 'RESTRICTED', walkable: false, name: 'Back Gate South Old — CLOSED' },
  { id: 'e-bg-straight-2', from: 'node-back-gate-straight-1', to: 'node-hostel-first-left-junction', accessType: 'RESTRICTED', walkable: false, name: 'Back Gate South — CLOSED' },
  { id: 'e-hostel-first-left', from: 'node-hostel-first-left-junction', to: 'node-hostel-internal-2', accessType: 'RESTRICTED', walkable: false, name: 'Hostel First Left Cut (Amaravathi/Bhavani) - 🚫 RESTRICTED' },
  { id: 'e-bg-straight-3', from: 'node-hostel-first-left-junction', to: 'node-back-gate-straight', accessType: 'RESTRICTED', walkable: false, name: 'Back Gate South Past First Left — CLOSED' },
  { id: 'e-bg-straight-4', from: 'node-back-gate-straight', to: 'hostelFourWayJunction', accessType: 'RESTRICTED', walkable: false, name: 'Back Gate South to Four-Way — CLOSED' },
  { id: 'e-bg-straight-4-alias', from: 'node-back-gate-straight', to: 'eastCampusFourWayJunction', accessType: 'RESTRICTED', walkable: false, name: 'Back Gate South Alias — CLOSED' },
  { id: 'e-bg-straight-4-alias2', from: 'node-back-gate-straight', to: 'node-east-campus-four-way-junction', accessType: 'RESTRICTED', walkable: false, name: 'Back Gate South Alias2 — CLOSED' },

  // ── 8. RESTRICTED & BLOCKED HOSTEL ROADS (STRICTLY NON-WALKABLE: walkable=false, accessType='RESTRICTED') ──
  // These roads enter or cut through the hostel area. They are permanently excluded from routing.
  { id: 'e-hostel-block-1', from: 'node-railway-top-road-1', to: 'node-hostel-internal-1', accessType: 'RESTRICTED', walkable: false, name: 'Hostel Shortcut (Birla/Gymnasium) - 🚫 BLOCKED' },
  { id: 'e-hostel-block-2', from: 'node-hostel-internal-1', to: 'node-mit-11', accessType: 'RESTRICTED', walkable: false, name: 'Hostel Internal Road to MIT Road - 🚫 BLOCKED' },
  { id: 'e-hostel-block-3', from: 'node-hostel-spine-east', to: 'node-hostel-internal-2', accessType: 'RESTRICTED', walkable: false, name: 'Hostel Internal Cut (Amaravathi/Bhavani) - 🚫 BLOCKED' },
  { id: 'e-hostel-block-4', from: 'node-hostel-internal-2', to: 'node-mit-11', accessType: 'RESTRICTED', walkable: false, name: 'Hostel Internal Road to MIT Road - 🚫 BLOCKED' },
  { id: 'e-hostel-block-5', from: 'node-hostel-spine-east', to: 'node-hostel-dining-north', accessType: 'RESTRICTED', walkable: false, name: 'Hostel Dining Hall Access - 🚫 BLOCKED' },
  { id: 'e-hostel-block-6', from: 'node-hostel-dining-north', to: 'node-mit-12', accessType: 'RESTRICTED', walkable: false, name: 'Hostel Dining Hall to MIT Road - 🚫 BLOCKED' },
  { id: 'e-hostel-block-7', from: 'node-ds-cauvery', to: 'node-radha-nagar-east', accessType: 'RESTRICTED', walkable: false, name: 'Cauvery Hostel Perimeter Road - 🚫 BLOCKED' },
  { id: 'e-hostel-block-8', from: 'node-radha-nagar-east', to: 'node-mit-12', accessType: 'RESTRICTED', walkable: false, name: 'Radha Nagar to MIT Road 12 - 🚫 BLOCKED' },
  { id: 'e-hostel-block-9', from: 'node-ds-health', to: 'node-ds-cauvery', accessType: 'RESTRICTED', walkable: false, name: 'Health Centre to Cauvery Hostel - 🚫 BLOCKED' },

  // ── 9. Direct Building Access to Road Network ──
  { id: 'e-bld-01', from: 'node-r-01', to: 'node-mit-1', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 01 Approach' },
  { id: 'e-bld-02', from: 'node-r-02', to: 'node-mit-1', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 02 Approach' },
  { id: 'e-bld-03', from: 'node-r-03', to: 'node-mit-1', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 03 Approach' },
  // Building 04 Driveway from MIT Road to south entrance porch
  { id: 'e-bld-04', from: 'node-r-04', to: 'node-mit-2', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 04 Administrative Block Driveway Approach' },
  { id: 'e-bld-05', from: 'node-r-05', to: 'node-mit-2', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 05 Approach' },
  { id: 'e-bld-06', from: 'node-r-06', to: 'node-south-road-west', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 06 Approach' },
  { id: 'e-bld-07', from: 'node-r-07', to: 'node-comp-07-east', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 07 Approach' },
  { id: 'e-bld-08', from: 'node-r-08', to: 'node-comp-08-south', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 08 Approach' },
  { id: 'e-bld-09', from: 'node-r-09', to: 'node-comp-north-path', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 09 Approach' },
  { id: 'e-bld-10', from: 'node-r-10', to: 'node-ds-10', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 10 Approach' },
  { id: 'e-bld-11', from: 'node-r-11', to: 'node-ds-11', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 11 Approach' },
  { id: 'e-bld-12', from: 'node-r-12', to: 'node-auto-north', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 12 Approach' },
  // Building 13 IT Dept Approach
  { id: 'e-bld-13', from: 'node-r-13', to: 'node-mit-3', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 13 IT Dept Approach' },
  { id: 'e-bld-14', from: 'node-r-14', to: 'node-mit-cross-2', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 14 Approach' },
  { id: 'e-bld-15', from: 'node-r-15', to: 'node-mit-5', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 15 Approach' },
  { id: 'e-bld-16', from: 'node-r-16', to: 'node-north-perimeter-1', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 16 Approach' },
  { id: 'e-bld-17', from: 'node-r-17', to: 'node-north-perimeter-2', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 17 Approach' },
  { id: 'e-bld-18', from: 'node-r-18', to: 'node-mit-4', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 18 Approach' },
  { id: 'e-bld-19', from: 'node-r-19', to: 'node-canteen-access', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 19 Canteen Approach' },
  { id: 'e-bld-20', from: 'node-r-20', to: 'node-mit-5', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 20 Approach' },
  // Building 21 Aerospace Engineering Approach
  { id: 'e-bld-21', from: 'node-r-21', to: 'node-war-planes-south', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 21 Aerospace Approach' },
  { id: 'e-bld-22', from: 'node-r-22', to: 'node-ds-rajam-hall', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 22 Rajam Hall Approach' },
  { id: 'e-bld-23', from: 'node-r-23', to: 'node-ds-nss', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 23 Approach' },
  { id: 'e-bld-24', from: 'node-r-24', to: 'node-ds-micsat', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 24 CASR Approach' },
  { id: 'e-bld-25', from: 'node-r-25', to: 'node-library-south', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 25 Approach' },
  // Building 26 MIT Library Approach
  { id: 'e-bld-26', from: 'node-r-26', to: 'node-library-north', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 26 Library Approach' },
  { id: 'e-bld-27', from: 'node-r-27', to: 'node-mit-cross-3', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 27 Approach' },
  { id: 'e-bld-28', from: 'node-r-28', to: 'node-mit-6', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 28 Approach' },
  { id: 'e-bld-29', from: 'node-r-29', to: 'node-north-perimeter-4', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 29 Approach' },
  { id: 'e-bld-30', from: 'node-r-30', to: 'node-mit-cross-3', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 30 Approach' },
  { id: 'e-bld-31', from: 'node-r-31', to: 'node-mit-8', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 31 Approach' },
  { id: 'e-bld-32', from: 'node-r-32', to: 'node-mit-8', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 32 Approach' },
  { id: 'e-bld-33', from: 'node-r-33', to: 'node-library-east', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 33 Approach' },
  { id: 'e-bld-34', from: 'node-r-34', to: 'node-pebbles-path', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 34 Approach' },
  { id: 'e-bld-35', from: 'node-r-35', to: 'node-mit-roundabout', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 35 Approach' },
  { id: 'e-bld-36', from: 'node-r-36', to: 'node-ds-36', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 36 Approach' },
  { id: 'e-bld-37', from: 'node-r-37', to: 'node-mit-11', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 37 Rajam Hostel Approach' },
  { id: 'e-bld-38-tm', from: 'node-r-38-tm', to: 'node-mit-11', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 38 Tamil Mandram Approach' },
  { id: 'e-bld-38-ho', from: 'node-r-38-ho', to: 'hostelFourWayJunction', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 38 Hostel Office Approach' },
  { id: 'e-bld-39', from: 'node-r-39', to: 'node-ds-health', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 39 Approach' },
  { id: 'e-bld-40', from: 'node-r-40', to: 'node-east-road-south', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 40 Health Centre Approach' },
  { id: 'e-bld-41', from: 'node-r-41', to: 'node-east-road-south', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 41 Approach' },
  { id: 'e-bld-42', from: 'node-r-42', to: 'node-east-road-south', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 42 Cauvery Hostel Approach' },
  { id: 'e-bld-44', from: 'node-r-44', to: 'hostelFourWayJunction', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 44 Dining Hall Public Entrance' },
  { id: 'e-bld-45', from: 'node-r-45', to: 'hostelFourWayJunction', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 45 Amenities Hall Approach' },
  { id: 'e-bld-46', from: 'node-r-46', to: 'hostelFourWayJunction', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 46 Amaravathi Hostel Approach' },
  { id: 'e-bld-47', from: 'node-r-47', to: 'node-mit-11', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 47 Birla Hostel Approach' },
  { id: 'e-bld-48', from: 'node-r-48', to: 'node-mit-11', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 48 Hostel Store Approach' },
  { id: 'e-bld-49', from: 'node-r-49', to: 'node-railway-top-road-1', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 49 Tamilabharani Approach' },
  { id: 'e-bld-50', from: 'node-r-50', to: 'node-railway-top-road-1', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 50 Gymnasium Approach' },
  { id: 'e-bld-51', from: 'node-r-51', to: 'node-back-gate-straight', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 51 Bhavani Hostel Approach' },
  { id: 'e-bld-52', from: 'node-r-52', to: 'node-back-gate-straight', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 52 Recreation Centre Approach' },
  { id: 'e-bld-53', from: 'node-r-53', to: 'node-north-perimeter-6', accessType: 'BUILDING_ACCESS', walkable: true, name: 'Building 53 Hanger-1 Store Approach' }
];

/**
 * Validates if an edge is allowed for public pedestrian routing.
 */
export function isValidPublicEdge(edge: CampusRoadEdge): boolean {
  if (!edge.walkable) return false;
  if (edge.accessType === 'RESTRICTED' || edge.accessType === 'RESTRICTED_ROAD' || edge.accessType === 'BLOCKED_ROAD' || edge.accessType === 'HOSTEL_ACCESS') {
    return false;
  }
  if (isRestrictedRoad(edge.id)) return false;
  return true;
}
