import React, { useState, useEffect } from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import QuickReplies from './QuickReplies'
import ChatInput from './ChatInput'
import ErrorMessage from './ErrorMessage'
import { useChat } from '../hooks/useChat'

export default function ChatWidget({ defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const { messages, loading, error, sendMessage, selectCategory, resetChat } = useChat()

  useEffect(() => {
    const handleOpenEvent = (e) => {
      setOpen(true)
      if (e.detail?.fullScreen) {
        setIsFullScreen(true)
      }
      if (e.detail?.category) {
        selectCategory(e.detail.category)
      }
    }

    window.addEventListener('open-mit-chatbot', handleOpenEvent)
    return () => window.removeEventListener('open-mit-chatbot', handleOpenEvent)
  }, [selectCategory])

  return (
    <>
      {!open && (
        <button
          className="chat-launcher"
          onClick={() => setOpen(true)}
          aria-label="Open MIT Campus Assistant"
        >
          <span className="chat-launcher-icon">💬</span>
          <span className="chat-launcher-label">Ask MIT Assistant</span>
          <span className="chat-launcher-badge" title="Online" />
        </button>
      )}

      {open && (
        <div
          className={`chat-window ${isFullScreen ? 'full-screen' : ''}`}
          role="dialog"
          aria-label="MIT Anna University Campus Assistant"
          aria-modal="true"
        >
          <ChatHeader
            onClose={() => setOpen(false)}
            onReset={resetChat}
            isFullScreen={isFullScreen}
            onToggleFullScreen={() => setIsFullScreen((prev) => !prev)}
          />

          <div className="chat-body">
            <MessageList messages={messages} loading={loading} />
            <QuickReplies onSelect={selectCategory} disabled={loading} />
          </div>

          <ErrorMessage message={error} />
          <ChatInput onSend={sendMessage} disabled={loading} />
        </div>
      )}
    </>
  )
}
