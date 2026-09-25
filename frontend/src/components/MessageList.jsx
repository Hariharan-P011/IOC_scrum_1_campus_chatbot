import React, { useEffect, useRef } from 'react'
import MessageBubble from './MessageBubble'
import LoadingIndicator from './LoadingIndicator'

export default function MessageList({ messages, loading }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  return (
    <div className="message-list">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      {loading && <LoadingIndicator />}
      <div ref={bottomRef} />
    </div>
  )
}
