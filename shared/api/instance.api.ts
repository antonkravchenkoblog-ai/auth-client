import axios from 'axios'
import { setupUnauthorizedInterceptor } from './interceptors'

const baseURL = process.env.SERVER_URL || 'http://localhost:4000'

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

setupUnauthorizedInterceptor(api, {
  maxUnauthorized: 5,
  windowMs: 10 * 60 * 1000,
  logoutRedirectPath: '/auth/login',
  onForceLogout: async () => {
    // Best-effort logout request without triggering interceptor loop
    try {
      await api.post('auth/logout', undefined, {
        headers: { 'x-skip-unauthorized-handling': 'true' },
      })
    } catch (error) {
      console.warn('Logout after unauthorized sequence failed', error)
    }
  },
})
