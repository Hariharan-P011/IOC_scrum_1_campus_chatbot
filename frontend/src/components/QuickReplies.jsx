import React from 'react'
import { CATEGORIES } from '../utils/constants'

const CATEGORY_ICONS = {
  'Departments': '🏛️',
  'Required Documents': '📑',
  'Facilities': '🏢',
  'Offices': '📍',
  'Canteen': '🍽️',
  'Admission': '🎓',
  'Hostel': '🛏️',
  'Transport': '🚌',
  'Contact': '📞',
  'General': 'ℹ️',
  'Fees': '💳',
}

export default function QuickReplies({ onSelect, disabled }) {
  return (
    <div className="quick-replies">
      <div className="quick-replies-header">
        <div className="quick-replies-label">
          <span>⚡</span>
          <span>Quick Topic Shortcuts</span>
        </div>
      </div>
      <div className="quick-replies-buttons">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className="quick-reply-btn"
            onClick={() => onSelect(cat)}
            disabled={disabled}
            type="button"
          >
            <span style={{ fontSize: '13px' }}>{CATEGORY_ICONS[cat] || '•'}</span>
            <span>{cat}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
