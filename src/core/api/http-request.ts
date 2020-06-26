import { generateUrl } from '../utils'

type Method = 'GET' | 'POST'

const customFetch = (endpoint: string, { method, ...customConfig } = {}) => {
  const headers = { 'content-type': 'application/json; charset=utf-8' }

  const config = {
    method,
    mode: 'cors',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  // Using Mock Backend
  const url = generateUrl('http://localhost', 3000, endpoint)

  return fetch(url)
    .then(async (response) => {
      const data = await response.json()

      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
    .catch((error) => {
      throw error
    })
}

export const api = {
  get: (endpoint: string) => customFetch(endpoint, { method: 'GET' }),
  post: (endpoint: string, options) => customFetch(endpoint, { method: 'POST', ...options }),
}
