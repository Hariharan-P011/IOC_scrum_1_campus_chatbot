import api from './api'

export const sendQuestion = async (question) => {
  const { data } = await api.post('/api/chatbot/query', { question })
  return data
}
