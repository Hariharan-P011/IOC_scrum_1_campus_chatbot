import React from 'react'

export default function ChatHeader({ onClose, onReset, isFullScreen, onToggleFullScreen }) {
  return (
    <div className="chat-header">
      <div className="chat-header-info">
        <div className="chat-avatar-wrapper">
          <span>🎓</span>
          <span className="chat-status-dot" title="Campus Knowledge Base Active" />
        </div>
        <div>
          <div className="chat-header-title">
            <span>MIT Campus Assistant</span>
          </div>
          <div className="chat-header-subtitle">
            Madras Institute of Technology • Anna University
          </div>
        </div>
      </div>
      <div className="chat-header-actions">
        {onToggleFullScreen && (
          <button
            className="icon-btn"
            onClick={onToggleFullScreen}
            title={isFullScreen ? 'Exit full screen' : 'Expand to full screen'}
            aria-label={isFullScreen ? 'Exit full screen' : 'Expand to full screen'}
          >
            {isFullScreen ? '🗗' : '🗖'}
          </button>
        )}
        <button
          className="icon-btn"
          onClick={onReset}
          title="Reset conversation"
          aria-label="Reset conversation"
        >
          ↺
        </button>
        <button
          className="icon-btn"
          onClick={onClose}
          title="Close chat"
          aria-label="Close chat"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
