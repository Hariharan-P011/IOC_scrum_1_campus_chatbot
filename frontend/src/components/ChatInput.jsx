import React, { useState } from 'react'

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim() || disabled) return
    onSend(value.trim())
    setValue('')
  }

  return (
    <div className="chat-input-container">
      <form className="chat-input-form" onSubmit={handleSubmit}>
        <div className="chat-input-wrapper">
          <input
            className="chat-input"
            type="text"
            placeholder="Type your question (e.g., 'documents for admission', 'CSE department location', 'today menu')..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={disabled}
            autoComplete="off"
            aria-label="Your campus query"
          />
        </div>
        <button
          className="send-btn"
          type="submit"
          disabled={disabled || !value.trim()}
          aria-label="Send query"
        >
          <span>Send</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
      <div className="input-hint">
        💡 Press <strong>Enter</strong> to submit your query • Live MIT knowledge base search
      </div>
    </div>
  )
}
