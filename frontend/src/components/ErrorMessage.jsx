import React from 'react'

export default function ErrorMessage({ message }) {
  if (!message) return null
  return (
    <div className="error-banner" role="alert">
      <span>⚠️</span>
      <span>{message}</span>
    </div>
  )
}
