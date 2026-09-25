export interface StartingLocation {
  id: 'front-gate' | 'back-gate' | 'live-location';
  name: string;
  type: 'gate' | 'live';
  shortLabel: string;
  icon: string;
  // Marker visual position on the map
  mapPosition: {
    x: number;
    y: number;
  };
  x: number; // backward compatibility
  y: number; // backward compatibility
  accessNode: string; // Road node where route begins
  nodeId: string;     // alias for accessNode
  description: string;
}

export const STARTING_LOCATIONS: StartingLocation[] = [
  {
    id: 'front-gate',
    name: 'Front Gate',
    type: 'gate',
    shortLabel: 'Front Gate (Main Entrance)',
    icon: '🟢',
    // Exact position at the MAIN ENTRANCE line on Madambakkam Main Road
    mapPosition: {
      x: 55,
      y: 238
    },
    x: 55,
    y: 238,
    accessNode: 'node-front-gate-road',
    nodeId: 'node-front-gate-road',
    description: 'Official Main Entrance on Madambakkam Main Road side, indicated by "MAIN ENTRANCE" on map.'
  },
  {
    id: 'back-gate',
    name: 'Back Gate',
    type: 'gate',
    shortLabel: 'Back Gate (Chromepet Railway Station Side)',
    icon: '🟢',
    // Exact position at the campus boundary on the Chromepet Railway Station side
    // Road runs along eastern perimeter at x=962, clear of all hostel buildings
    mapPosition: {
      x: 962,
      y: 55
    },
    x: 962,
    y: 55,
    accessNode: 'node-back-gate-access',
    nodeId: 'node-back-gate-access',
    description: 'Secondary Rear Campus Entry on the Chromepet Railway Station side, connecting directly to the north-south public roadway.'
  },
  {
    id: 'live-location',
    name: 'Live Location',
    type: 'live',
    shortLabel: '📡 Live Location (GPS)',
    icon: '📡',
    mapPosition: {
      x: 55,
      y: 238
    },
    x: 55,
    y: 238,
    accessNode: 'node-front-gate-road',
    nodeId: 'node-front-gate-road',
    description: 'Real-time GPS device location mapped to MIT campus coordinates.'
  }
];

// Reference GPS bounding box for Anna University - MIT Chromepet Campus
export const MIT_GPS_BOUNDS = {
  minLat: 12.9460,
  maxLat: 12.9515,
  minLng: 80.1380,
  maxLng: 80.1470,
  imgMinX: 40,
  imgMaxX: 970,
  imgMinY: 70,
  imgMaxY: 370
};

/**
 * Converts real GPS (lat, lng) to map image coordinates (1024x512).
 * Returns null if outside campus bounds.
 */
export function mapGpsToCampus(lat: number, lng: number): { x: number; y: number } | null {
  if (
    lat < MIT_GPS_BOUNDS.minLat ||
    lat > MIT_GPS_BOUNDS.maxLat ||
    lng < MIT_GPS_BOUNDS.minLng ||
    lng > MIT_GPS_BOUNDS.maxLng
  ) {
    return null;
  }

  const normX = (lng - MIT_GPS_BOUNDS.minLng) / (MIT_GPS_BOUNDS.maxLng - MIT_GPS_BOUNDS.minLng);
  const normY = (MIT_GPS_BOUNDS.maxLat - lat) / (MIT_GPS_BOUNDS.maxLat - MIT_GPS_BOUNDS.minLat);

  const x = Math.round(MIT_GPS_BOUNDS.imgMinX + normX * (MIT_GPS_BOUNDS.imgMaxX - MIT_GPS_BOUNDS.imgMinX));
  const y = Math.round(MIT_GPS_BOUNDS.imgMinY + normY * (MIT_GPS_BOUNDS.imgMaxY - MIT_GPS_BOUNDS.imgMinY));

  return { x, y };
}
