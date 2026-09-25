import React from 'react'

export default function LoadingIndicator() {
  return (
    <div className="message-row bot-row" aria-live="polite" aria-label="Assistant is searching">
      <div className="bot-icon">🎓</div>
      <div className="message-bubble bot-bubble loading-bubble">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="loading-label">Searching MIT knowledge base...</span>
      </div>
    </div>
  )
}
