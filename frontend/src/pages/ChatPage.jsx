import React from 'react'
import ChatWidget from '../components/ChatWidget'
import QRCodeDisplay from '../components/QRCodeDisplay'

const TOPICS = [
  {
    category: 'Departments',
    icon: '🏛️',
    title: 'Academic Departments',
    desc: 'Explore Aeronautical, Automobile, Computer Science, ECE, IT, Production, and other specialized engineering departments.',
  },
  {
    category: 'Admission',
    icon: '🎓',
    title: 'Admission & Cutoffs',
    desc: 'TNEA counseling procedures, eligibility requirements, cutoff score trends, and reservation category details.',
  },
  {
    category: 'Required Documents',
    icon: '📑',
    title: 'Required Documents',
    desc: 'Complete checklist of mandatory 10th/12th marksheets, Transfer Certificate, Community Certificate, and allotment copies.',
  },
  {
    category: 'Facilities',
    icon: '🏢',
    title: 'Campus Facilities & Offices',
    desc: 'Dean office, Controller of Examinations, research laboratories, library resources, and administrative locations.',
  },
  {
    category: 'Canteen',
    icon: '🍽️',
    title: 'Today\'s Canteen Menu',
    desc: 'Check live breakfast, lunch meals, snack offerings, and beverage prices at the campus canteen.',
  },
  {
    category: 'Campus Map',
    icon: '🗺️',
    title: 'Interactive Campus Map',
    desc: 'Official static campus layout with buildings 01–52, Front/Back Gates, live GPS location, and step-by-step walking routes.',
    isMap: true
  },
  {
    category: 'Hostel',
    icon: '🛏️',
    title: 'Hostels & Transport',
    desc: 'Hostel accommodation rules, mess facilities, Chromepet railway station proximity, and campus bus routes.',
  },
]

export default function ChatPage({ onNavigateToMap }) {
  const handleOpenMap = () => {
    if (onNavigateToMap) {
      onNavigateToMap()
    } else {
      window.dispatchEvent(new CustomEvent('mit-navigate', { detail: { route: 'map' } }))
    }
  }

  const openChatWithCategory = (category) => {
    const event = new CustomEvent('open-mit-chatbot', {
      detail: { category, fullScreen: false }
    })
    window.dispatchEvent(event)
  }

  const openFullScreenChat = () => {
    const event = new CustomEvent('open-mit-chatbot', {
      detail: { fullScreen: true }
    })
    window.dispatchEvent(event)
  }

  const openNormalChat = () => {
    const event = new CustomEvent('open-mit-chatbot', {
      detail: { fullScreen: false }
    })
    window.dispatchEvent(event)
  }

  return (
    <div className="chat-page">
      {/* ── Top Notice Strip ── */}
      <aside className="top-notice-bar" aria-label="Official announcement">
        <div className="top-notice-inner">
          <div className="top-notice-left">
            <span className="top-notice-badge">OFFICIAL</span>
            <span>Madras Institute of Technology Campus • Anna University, Chennai</span>
          </div>
          <div className="top-notice-links">
            <a
              href="/map"
              className="top-notice-link"
              onClick={(e) => {
                e.preventDefault()
                handleOpenMap()
              }}
            >
              🗺 Campus Map
            </a>
            <a href="#topics" className="top-notice-link">Directory</a>
            <a href="#mobile-qr" className="top-notice-link">Mobile QR</a>
            <a href="/admin" className="top-notice-link">Admin Portal</a>
          </div>
        </div>
      </aside>

      {/* ── Main Site Header ── */}
      <header className="site-header">
        <div className="site-header-inner">
          <div className="brand-section">
            <div className="brand-crest" aria-hidden="true">🎓</div>
            <div className="brand-text">
              <span className="brand-title">Madras Institute of Technology</span>
              <span className="brand-subtitle">Anna University, Chromepet, Chennai</span>
            </div>
          </div>

          <nav className="header-nav" aria-label="Main Navigation">
            <button
              type="button"
              className="nav-link"
              style={{
                background: 'rgba(2, 132, 199, 0.15)',
                color: '#0284c7',
                fontWeight: '700',
                border: '1px solid rgba(2, 132, 199, 0.3)',
                borderRadius: '8px',
                padding: '6px 12px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onClick={handleOpenMap}
            >
              <span>🗺️</span>
              <span>Campus Map</span>
            </button>
            <a href="#topics" className="nav-link">Topics</a>
            <a href="#how-it-works" className="nav-link">Guide</a>
            <a href="#mobile-qr" className="nav-link">Mobile QR</a>
            <a href="/admin" className="nav-link">Admin</a>
            <button className="nav-cta-btn" onClick={openNormalChat} type="button">
              <span>💬</span>
              <span>Open Assistant</span>
            </button>
          </nav>
        </div>
      </header>

      {/* ── Main Page Content ── */}
      <main className="site-main">
        {/* ── Hero Section ── */}
        <section className="hero">
          <div className="hero-tag">Official Campus Knowledge Desk</div>
          <h1>MIT Campus &amp; Admission Assistant</h1>
          <p>
            Welcome to the digital campus assistant for Madras Institute of Technology (MIT), Anna University.
            Get instant, verified guidance on undergraduate admissions, TNEA counseling cutoffs, required verification
            documents, department locations, hostel facilities, and live canteen menus.
          </p>
          <div className="hero-actions">
            <button
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                boxShadow: '0 4px 14px rgba(2, 132, 199, 0.35)'
              }}
              onClick={handleOpenMap}
              type="button"
            >
              <span>🗺️</span>
              <span>Open Interactive Campus Map</span>
            </button>
            <button className="btn-secondary" onClick={openFullScreenChat} type="button">
              <span>💬</span>
              <span>Launch Full-Screen Assistant</span>
            </button>
            <a href="#topics" className="btn-secondary">
              <span>Explore Topics ↓</span>
            </a>
          </div>
        </section>

        {/* ── Campus Topics Section ── */}
        <section id="topics" className="topics-section">
          <div className="section-header">
            <div className="section-eyebrow">Instant Campus Information</div>
            <h2 className="section-title">Frequently Requested Campus Topics</h2>
            <p className="section-desc">
              Select any topic below to directly ask the assistant for detailed answers.
            </p>
          </div>

          <div className="topics-grid">
            {TOPICS.map((item) => {
              const handleCardClick = () => {
                if (item.isMap) {
                  handleOpenMap()
                } else {
                  openChatWithCategory(item.category)
                }
              }

              return (
                <div
                  key={item.category}
                  className={`topic-card ${item.isMap ? 'topic-card-map-highlight' : ''}`}
                  onClick={handleCardClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleCardClick()
                    }
                  }}
                >
                  <div>
                    <span className="topic-icon" aria-hidden="true">{item.icon}</span>
                    <h3 className="topic-title">{item.title}</h3>
                    <p className="topic-snippet">{item.desc}</p>
                  </div>
                  <div className="topic-action">
                    <span>{item.isMap ? 'Launch Campus Map' : `Ask about ${item.category}`}</span>
                    <span>→</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── How It Works / Guidance Section ── */}
        <section id="how-it-works" className="guide-section">
          <div className="section-header">
            <div className="section-eyebrow">Virtual Help Desk</div>
            <h2 className="section-title">How the Campus Assistant Works</h2>
            <p className="section-desc">
              Designed to reduce walk-in queues and provide fast answers for students, parents, and visitors.
            </p>
          </div>

          <div className="guide-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Ask in Natural English</h3>
              <p className="step-desc">
                Type queries naturally such as <em>"Where is Aeronautical Engineering?"</em> or <em>"What certificates do I need for admission?"</em>
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Click One-Tap Shortcuts</h3>
              <p className="step-desc">
                Browse consolidated information by tapping quick category tags for Departments, Admission, Hostels, Transport, and Offices.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Check Today's Canteen</h3>
              <p className="step-desc">
                Get today's fresh breakfast, lunch, and snack menu with pricing directly from the smart canteen integration.
              </p>
            </div>
          </div>
        </section>

        {/* ── Secondary QR Code Section (Lower on the page) ── */}
        <section id="mobile-qr" className="qr-section">
          <QRCodeDisplay />
        </section>
      </main>

      {/* ── Institutional Footer ── */}
      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-col">
            <h3>Madras Institute of Technology</h3>
            <p>
              A premier constituent campus of Anna University, established in 1949.<br />
              Chromepet, Chennai – 600 044, Tamil Nadu, India.<br />
              Phone: +91 44 2251 6002 | Email: admission@mitindia.edu
            </p>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#topics">Campus Directory</a></li>
              <li><a href="#mobile-qr">Mobile QR Code</a></li>
              <li><a href="/admin">Administrator Portal</a></li>
              <li><a href="https://www.annauniv.edu" target="_blank" rel="noreferrer">Anna University Official</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Campus Information Desk</h3>
            <p>
              Administrative Office Hours:<br />
              Monday to Friday: 9:00 AM – 5:00 PM<br />
              Saturday: 9:00 AM – 1:00 PM (Working Saturdays)
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Madras Institute of Technology, Anna University. All rights reserved.</span>
          <span>MIT Campus &amp; Admission Assistant • Version 1.0</span>
        </div>
      </footer>

      {/* ── Chatbot Widget ── */}
      <ChatWidget />
    </div>
  )
}
