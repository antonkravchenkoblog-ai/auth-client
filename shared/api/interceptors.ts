import type { AxiosError, AxiosInstance } from 'axios'
import { isAxiosError } from 'axios'

const DEFAULT_WINDOW_MS = 5 * 60 * 1000 // 5 minutes
const DEFAULT_MAX_UNAUTHORIZED = 3
const SKIP_HEADER = 'x-skip-unauthorized-handling'

export interface UnauthorizedInterceptorOptions {
  maxUnauthorized?: number
  windowMs?: number
  logoutRedirectPath?: string
  onForceLogout?: () => Promise<void> | void
}

export function setupUnauthorizedInterceptor(
  api: AxiosInstance,
  options: UnauthorizedInterceptorOptions = {},
) {
  const maxUnauthorized = options.maxUnauthorized ?? DEFAULT_MAX_UNAUTHORIZED
  const windowMs = options.windowMs ?? DEFAULT_WINDOW_MS
  const logoutRedirectPath = options.logoutRedirectPath ?? '/auth/login'

  let unauthorizedCount = 0
  let firstUnauthorizedAt = 0

  const shouldSkip = (error: AxiosError) =>
    !!error.config?.headers?.[SKIP_HEADER]

  const reset = () => {
    unauthorizedCount = 0
    firstUnauthorizedAt = 0
  }

  api.interceptors.response.use(
    (response) => {
      reset()
      return response
    },
    async (error) => {
      if (isAxiosError(error) && error.response && !shouldSkip(error)) {
        const status = error.response.status
        if (status === 401 || status === 419 || status === 440) {
          const now = Date.now()

          if (!firstUnauthorizedAt || now - firstUnauthorizedAt > windowMs) {
            firstUnauthorizedAt = now
            unauthorizedCount = 0
          }

          unauthorizedCount += 1

          if (unauthorizedCount >= maxUnauthorized) {
            try {
              await options.onForceLogout?.()
            } catch (logoutError) {
              console.error('force logout failed', logoutError)
            } finally {
              reset()
              if (typeof window !== 'undefined') {
                window.location.href = logoutRedirectPath
              }
            }
          }
        }
      }

      return Promise.reject(error)
    },
  )
}

export const SKIP_UNAUTHORIZED_HEADER = SKIP_HEADER

