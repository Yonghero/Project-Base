const CONTEXT_PROD = `${window.location.protocol}//${window.location.host}/api`
const CONTEXT_DEV = 'http://localhost:8761/api'

export const CONTEXT_PATH = process.env.NODE_ENV === 'development'
  ? CONTEXT_DEV
  : CONTEXT_PROD
