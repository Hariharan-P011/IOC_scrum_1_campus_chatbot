import { useState, useCallback } from 'react'
import { sendQuestion } from '../services/chatService'
import { getCategoryEntries } from '../services/categoryService'
import { WELCOME_MESSAGE } from '../utils/constants'

const makeId = () => `msg_${Date.now()}_${Math.random().toString(36).slice(2)}`

const makeMessage = (role, text, extra = {}) => ({
  id: makeId(),
  role,
  text,
  timestamp: new Date().toISOString(),
  ...extra,
})

export function useChat() {
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const appendMessage = useCallback((msg) => {
    setMessages((prev) => [...prev, msg])
  }, [])

  const sendMessage = useCallback(async (question) => {
    if (!question.trim() || loading) return
    setError(null)
    appendMessage(makeMessage('user', question))
    setLoading(true)
    try {
      const data = await sendQuestion(question)
      appendMessage(makeMessage('bot', data.answer, {
        confidence: data.confidence,
        matched: data.matched,
        category: data.category,
        source: data.source,
      }))
    } catch {
      setError('Failed to get a response. Please try again.')
      appendMessage(makeMessage('bot', 'Sorry, I encountered an error. Please try again.', { isError: true }))
    } finally {
      setLoading(false)
    }
  }, [loading, appendMessage])

  const selectCategory = useCallback(async (category) => {
    if (loading) return
    setError(null)
    appendMessage(makeMessage('user', `Show me information about: ${category}`))
    setLoading(true)
    try {
      const data = await getCategoryEntries(category)
      const lines = [`Here is information about **${data.category}**:\n`]
      data.entries.forEach((e) => {
        lines.push(`❓ ${e.question}\n💬 ${e.answer}\n`)
      })
      appendMessage(makeMessage('bot', lines.join('\n'), { category, source: 'knowledge_base' }))
    } catch (err) {
      if (err.response?.status === 404) {
        appendMessage(makeMessage('bot', `No information found for category: ${category}`, { isError: true }))
      } else {
        setError('Failed to load category. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }, [loading, appendMessage])

  const resetChat = useCallback(() => {
    setMessages([WELCOME_MESSAGE])
    setError(null)
  }, [])

  return { messages, loading, error, sendMessage, selectCategory, resetChat }
}
