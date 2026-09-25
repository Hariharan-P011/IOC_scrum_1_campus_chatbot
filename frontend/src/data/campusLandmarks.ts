export interface CampusLandmark {
  id: string;
  name: string;
  category: 'Landmark' | 'Entrance' | 'Monument' | 'Utility' | 'Parking';
  icon: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  description: string;
}

export const CAMPUS_LANDMARKS: CampusLandmark[] = [
  {
    id: 'lm-main-entrance',
    name: 'Main Entrance (Front Gate)',
    category: 'Entrance',
    icon: '🚪',
    x: 68,
    y: 236,
    width: 32,
    height: 32,
    description: 'Main Campus Entrance Gate, Security checkpoint and visitor vehicle registration.'
  },
  {
    id: 'lm-back-gate',
    name: 'Radha Nagar Gate (Back Gate)',
    category: 'Entrance',
    icon: '🚪',
    x: 968,
    y: 310,
    width: 30,
    height: 30,
    description: 'East campus gate connecting towards Radha Nagar and Chromepet neighborhoods.'
  },
  {
    id: 'lm-war-planes',
    name: 'War Planes Monument',
    category: 'Monument',
    icon: '✈️',
    x: 480,
    y: 212,
    width: 34,
    height: 34,
    description: 'Iconic twin fighter aircraft monument stationed at central campus quadrangle.'
  },
  {
    id: 'lm-transformer',
    name: 'Main Campus Transformer Yard',
    category: 'Utility',
    icon: '⚡',
    x: 465,
    y: 338,
    width: 28,
    height: 30,
    description: 'Campus high-voltage electrical substation and generator backup utility yard.'
  },
  {
    id: 'lm-parking-front',
    name: 'Visitor & Staff Parking Slots',
    category: 'Parking',
    icon: '🅿️',
    x: 96,
    y: 202,
    width: 30,
    height: 30,
    description: 'Designated parking for faculty four-wheelers, student two-wheelers, and campus buses.'
  },
  {
    id: 'lm-indian-bank',
    name: 'Indian Bank MIT Branch & ATM',
    category: 'Utility',
    icon: '🏦',
    x: 270,
    y: 154,
    width: 24,
    height: 24,
    description: 'On-campus Indian Bank branch with 24/7 ATM facility near Administrative Block.'
  },
  {
    id: 'lm-mit-flyover',
    name: 'MIT Flyover & Madambakkam Main Road',
    category: 'Landmark',
    icon: '🌉',
    x: 48,
    y: 72,
    description: 'Major arterial flyover connecting Chromepet GST road with Madambakkam.'
  },
  {
    id: 'lm-railway-station',
    name: 'Towards Chromepet Railway Station',
    category: 'Landmark',
    icon: '🚆',
    x: 920,
    y: 56,
    description: 'Suburban railway connection to Chennai Central, Chennai Beach, and Tambaram.'
  },
  {
    id: 'lm-play-area',
    name: 'Hostel Sports Ground & Play Area',
    category: 'Landmark',
    icon: '⚽',
    x: 808,
    y: 150,
    width: 34,
    height: 24,
    description: 'Volleyball, basketball and football playing grounds next to student hostels.'
  }
];
