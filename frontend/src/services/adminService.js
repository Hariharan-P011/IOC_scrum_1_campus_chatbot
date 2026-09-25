import api from './api'

export const login = async (username, password) => {
  const { data } = await api.post('/api/admin/login', { username, password })
  localStorage.setItem('admin_token', data.access_token)
  return data
}

export const logout = () => localStorage.removeItem('admin_token')

export const getEntries = async () => {
  const { data } = await api.get('/api/admin/knowledge-base')
  return data
}

export const getEntry = async (id) => {
  const { data } = await api.get(`/api/admin/knowledge-base/${id}`)
  return data
}

export const createEntry = async (payload) => {
  const { data } = await api.post('/api/admin/knowledge-base', payload)
  return data
}

export const updateEntry = async (id, payload) => {
  const { data } = await api.put(`/api/admin/knowledge-base/${id}`, payload)
  return data
}

export const deleteEntry = async (id) => {
  const { data } = await api.delete(`/api/admin/knowledge-base/${id}`)
  return data
}
