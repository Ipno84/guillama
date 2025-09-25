import { sleep } from './sleep'

export const withRetry = async <T>(fn: () => Promise<T>, times = 2, baseMs = 200): Promise<T> => {
  let lastErr: unknown
  for (let i = 0; i <= times; i++) {
    try {
      return await fn()
    } catch (e) {
      lastErr = e
      await sleep(baseMs * 2 ** i)
    }
  }
  throw lastErr
}
