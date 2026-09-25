import React, { useState, useEffect } from 'react'
import { login, logout, getEntries, createEntry, updateEntry, deleteEntry } from '../services/adminService'

const EMPTY_FORM = { category: '', question: '', keywords: '', answer: '', metadata_json: '' }
const CATEGORIES = [
  'Departments',
  'Required Documents',
  'Facilities',
  'Offices',
  'Canteen',
  'Admission',
  'Hostel',
  'Transport',
  'Contact',
  'General',
  'Fees',
]

export default function AdminPage() {
  const [token, setToken] = useState(localStorage.getItem('admin_token'))
  const [creds, setCreds] = useState({ username: '', password: '' })
  const [entries, setEntries] = useState([])
  const [form, setForm] = useState(EMPTY_FORM)
  const [editId, setEditId] = useState(null)
  const [filterCat, setFilterCat] = useState('')
  const [msg, setMsg] = useState(null)
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (token) loadEntries()
  }, [token])

  const loadEntries = async () => {
    try {
      const data = await getEntries()
      setEntries(data)
    } catch {
      setErr('Failed to load knowledge base entries.')
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setErr(null)
    try {
      await login(creds.username, creds.password)
      setToken(localStorage.getItem('admin_token'))
    } catch {
      setErr('Invalid credentials. Please check your username and password.')
    }
  }

  const handleLogout = () => {
    logout()
    setToken(null)
    setEntries([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErr(null)
    setLoading(true)
    try {
      const payload = Object.fromEntries(Object.entries(form).filter(([, v]) => v && v.trim()))
      if (editId) {
        await updateEntry(editId, payload)
        setMsg('Entry updated successfully.')
      } else {
        await createEntry(payload)
        setMsg('Entry created successfully.')
      }
      setForm(EMPTY_FORM)
      setEditId(null)
      await loadEntries()
    } catch (e) {
      setErr(e.response?.data?.detail || 'Failed to save entry.')
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (entry) => {
    setEditId(entry.id)
    setForm({
      category: entry.category || '',
      question: entry.question || '',
      keywords: entry.keywords || '',
      answer: entry.answer || '',
      metadata_json: entry.metadata_json || '',
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this knowledge base entry?')) return
    try {
      await deleteEntry(id)
      setMsg('Entry deleted successfully.')
      await loadEntries()
    } catch {
      setErr('Failed to delete entry.')
    }
  }

  const filtered = filterCat ? entries.filter((e) => e.category === filterCat) : entries

  if (!token) {
    return (
      <div className="admin-login-page">
        <div className="admin-login-card">
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>🎓</div>
          <h2>Admin Portal</h2>
          <p>MIT Anna University Campus Assistant Administration</p>

          {err && <div className="admin-error">{err}</div>}

          <form onSubmit={handleLogin}>
            <input
              placeholder="Username"
              value={creds.username}
              onChange={(e) => setCreds({ ...creds, username: e.target.value })}
              required
              autoComplete="username"
            />
            <input
              type="password"
              placeholder="Password"
              value={creds.password}
              onChange={(e) => setCreds({ ...creds, password: e.target.value })}
              required
              autoComplete="current-password"
            />
            <button type="submit">Sign In to Dashboard</button>
          </form>

          <div style={{ marginTop: '20px' }}>
            <a
              href="/"
              style={{
                color: '#13294b',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              ← Return to Campus Assistant
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div>
          <h1>
            <span>🎓</span>
            <span>MIT Assistant Administration</span>
          </h1>
          <div style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>
            Madras Institute of Technology • Knowledge Base Management
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="/"
            style={{
              color: '#13294b',
              fontSize: '13.5px',
              fontWeight: 600,
              textDecoration: 'none',
              padding: '8px 14px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              backgroundColor: '#ffffff',
            }}
          >
            ← View Campus Site
          </a>
          <button className="admin-logout-btn" onClick={handleLogout} type="button">
            Sign Out
          </button>
        </div>
      </div>

      {msg && (
        <div className="admin-success" onClick={() => setMsg(null)} role="status">
          <span>✓ {msg}</span>
          <span style={{ fontWeight: 700 }}>✕</span>
        </div>
      )}

      {err && (
        <div className="admin-error" onClick={() => setErr(null)} role="alert">
          <span>⚠️ {err}</span>
          <span style={{ fontWeight: 700 }}>✕</span>
        </div>
      )}

      {/* ── Form Section ── */}
      <section className="admin-form-section">
        <h2>{editId ? `Edit Entry (ID: #${editId})` : 'Create New Knowledge Base Entry'}</h2>
        <form className="admin-form" onSubmit={handleSubmit}>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          >
            <option value="">Select Category *</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <input
            placeholder="Question * (e.g., 'What are the required certificates for admission?')"
            value={form.question}
            onChange={(e) => setForm({ ...form, question: e.target.value })}
            required
          />

          <input
            placeholder="Keywords (comma separated, e.g., 'certificates, tc, documents, admission')"
            value={form.keywords}
            onChange={(e) => setForm({ ...form, keywords: e.target.value })}
          />

          <textarea
            placeholder="Verified Answer * (provide complete and clear campus details)"
            rows={5}
            value={form.answer}
            onChange={(e) => setForm({ ...form, answer: e.target.value })}
            required
          />

          <div className="admin-form-actions">
            <button type="submit" disabled={loading}>
              {editId ? 'Save Changes' : 'Publish Entry'}
            </button>
            {editId && (
              <button
                type="button"
                onClick={() => {
                  setEditId(null)
                  setForm(EMPTY_FORM)
                }}
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </section>

      {/* ── Table Section ── */}
      <section className="admin-list-section">
        <div className="admin-list-header">
          <h2>
            Active Knowledge Base (
            <span style={{ color: '#13294b' }}>{filtered.length} entries</span>
            )
          </h2>
          <select value={filterCat} onChange={(e) => setFilterCat(e.target.value)}>
            <option value="">All Categories ({entries.length})</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c} ({entries.filter((item) => item.category === c).length})
              </option>
            ))}
          </select>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: '48px' }}>ID</th>
                <th style={{ width: '130px' }}>Category</th>
                <th>Question</th>
                <th>Verified Answer</th>
                <th style={{ width: '140px', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((entry) => (
                <tr key={entry.id}>
                  <td>#{entry.id}</td>
                  <td>
                    <span className="cat-badge">{entry.category}</span>
                  </td>
                  <td className="td-question">{entry.question}</td>
                  <td className="td-answer">
                    {entry.answer.slice(0, 110)}
                    {entry.answer.length > 110 ? '…' : ''}
                  </td>
                  <td style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(entry)}
                      type="button"
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(entry.id)}
                      type="button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: '2.5rem', color: '#64748b' }}>
                    No knowledge base entries found in this category.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
