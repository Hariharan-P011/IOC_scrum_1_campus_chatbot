import React, { useState, useEffect } from 'react'
import ChatPage from './pages/ChatPage'
import AdminPage from './pages/AdminPage'
import CampusMapPage from './pages/CampusMapPage'

import './styles/chat.css'
import './styles/responsive.css'
import './styles/admin.css'

export default function App() {
  const getInitialRoute = () => {
    const path = window.location.pathname.toLowerCase()
    const hash = window.location.hash.toLowerCase()

    if (path.startsWith('/admin') || hash.startsWith('#admin')) {
      return 'admin'
    }
    if (path.startsWith('/map') || hash.startsWith('#map')) {
      return 'map'
    }
    // Default homepage is Chatbot
    return 'home'
  }

  const [route, setRoute] = useState(getInitialRoute)

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getInitialRoute())
    }

    const handleCustomNavigate = (e) => {
      if (e.detail?.route) {
        navigateTo(e.detail.route)
      }
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('hashchange', handlePopState)
    window.addEventListener('mit-navigate', handleCustomNavigate)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('hashchange', handlePopState)
      window.removeEventListener('mit-navigate', handleCustomNavigate)
    }
  }, [])

  const navigateTo = (newRoute) => {
    setRoute(newRoute)
    if (newRoute === 'map') {
      window.history.pushState(null, '', '/map')
    } else if (newRoute === 'admin') {
      window.history.pushState(null, '', '/admin')
    } else {
      window.history.pushState(null, '', '/')
    }
  }

  if (route === 'admin') {
    return <AdminPage />
  }

  if (route === 'map') {
    return <CampusMapPage onNavigateHome={() => navigateTo('home')} />
  }

  // Default: Homepage opens first!
  return <ChatPage onNavigateToMap={() => navigateTo('map')} />
}
