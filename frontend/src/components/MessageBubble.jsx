import React from 'react'

function formatText(text) {
  if (!text) return null

  // Split by line breaks
  const lines = text.split('\n')

  return lines.map((line, lineIdx) => {
    // Process **bold** text in the line
    const parts = []
    let remaining = line
    let keyIdx = 0

    const regex = /\*\*(.*?)\*\*/g
    let match
    let lastIndex = 0

    while ((match = regex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          <span key={`${lineIdx}-${keyIdx++}`}>
            {line.substring(lastIndex, match.index)}
          </span>
        )
      }
      parts.push(
        <strong key={`${lineIdx}-${keyIdx++}`} style={{ fontWeight: 700, color: '#0f172a' }}>
          {match[1]}
        </strong>
      )
      lastIndex = regex.lastIndex
    }

    if (lastIndex < line.length) {
      parts.push(
        <span key={`${lineIdx}-${keyIdx++}`}>
          {line.substring(lastIndex)}
        </span>
      )
    }

    // Check if line looks like a bullet or numbered list
    const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-')

    return (
      <div
        key={lineIdx}
        style={{
          paddingLeft: isBullet ? '8px' : '0px',
          marginBottom: line.trim() === '' ? '6px' : '2px',
        }}
      >
        {parts.length > 0 ? parts : <span>&nbsp;</span>}
      </div>
    )
  })
}

function formatTime(iso) {
  try {
    return new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  } catch {
    return ''
  }
}

export default function MessageBubble({ message }) {
  const isBot = message.role === 'bot'

  return (
    <div className={`message-row ${isBot ? 'bot-row' : 'user-row'}`}>
      {isBot ? (
        <div className="bot-icon" title="MIT Assistant">
          🎓
        </div>
      ) : (
        <div className="user-icon" title="You">
          👤
        </div>
      )}

      <div
        className={`message-bubble ${
          isBot ? 'bot-bubble' : 'user-bubble'
        } ${message.isError ? 'error-bubble' : ''}`}
      >
        <div className="message-text">{formatText(message.text)}</div>

        <div className="message-meta">
          {isBot && message.category && (
            <span className="message-badge">
              {message.category}
            </span>
          )}
          {message.timestamp && (
            <span className="message-time">{formatTime(message.timestamp)}</span>
          )}
        </div>

        {isBot && message.matched === false && !message.isError && (
          <div className="no-match-hint">
            <span>💡</span>
            <span>Try browsing the quick categories above or asking about specific departments, cutoffs, or documents.</span>
          </div>
        )}
      </div>
    </div>
  )
}
