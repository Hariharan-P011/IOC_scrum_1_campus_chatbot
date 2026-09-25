import React from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { CHATBOT_PUBLIC_URL } from '../utils/constants'

export default function QRCodeDisplay() {
  const url = CHATBOT_PUBLIC_URL

  const handleDownload = () => {
    const svg = document.getElementById('chatbot-qr')
    if (!svg) return
    const svgData = new XMLSerializer().serializeToString(svg)
    const blob = new Blob([svgData], { type: 'image/svg+xml' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'mit-chatbot-qr.svg'
    link.click()
  }

  return (
    <div className="qr-panel">
      <div className="qr-panel-info">
        <span className="qr-badge">Mobile Campus Companion</span>
        <h2 className="qr-title">Scan to Access on Mobile</h2>
        <p className="qr-subtitle">
          Visiting MIT Anna University campus? Scan this QR code with your smartphone camera to keep the campus guide, office directory, and admission assistant in your pocket.
        </p>
        <div className="qr-url">{url}</div>
        <button className="qr-download-btn" onClick={handleDownload} type="button">
          <span>⬇</span>
          <span>Download QR Code (SVG)</span>
        </button>
      </div>
      <div className="qr-code-wrapper">
        <QRCodeSVG
          id="chatbot-qr"
          value={url}
          size={160}
          bgColor="#ffffff"
          fgColor="#13294b"
          level="H"
          includeMargin={true}
        />
      </div>
    </div>
  )
}
