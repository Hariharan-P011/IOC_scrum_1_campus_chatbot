export const CATEGORIES = [
  'Departments',
  'Required Documents',
  'Facilities',
  'Offices',
  'Canteen',
  'Admission',
  'Hostel',
  'Transport',
  'Contact',
  'General',
]

export const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'bot',
  text: 'Welcome to MIT Anna University Campus Assistant 👋\n\nI can help you with information about departments, admission, required documents, facilities, canteen, hostel, transport, and more.\n\nHow can I help you today?',
  timestamp: new Date().toISOString(),
}

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
export const CHATBOT_PUBLIC_URL = import.meta.env.VITE_CHATBOT_PUBLIC_URL || 'http://localhost:5173'
