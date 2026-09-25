import api from './api'

export const getCategories = async () => {
  const { data } = await api.get('/api/categories')
  return data.categories
}

export const getCategoryEntries = async (category) => {
  const { data } = await api.get(`/api/categories/${encodeURIComponent(category)}`)
  return data
}
