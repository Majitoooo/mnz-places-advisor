/**
 * Identificación del ambiente en el que corre el frontend.
 *
 * Amplify inyecta VITE_APP_ENV con el nombre de la rama (develop, qa, main)
 * y VITE_APP_VERSION con el commit compilado (ver amplify.yml).
 */
const ENVIRONMENTS = {
  develop: { key: 'dev', label: 'DEV', showBanner: true },
  dev: { key: 'dev', label: 'DEV', showBanner: true },
  qa: { key: 'qa', label: 'QA', showBanner: true },
  main: { key: 'prod', label: 'PDN', showBanner: false },
  prod: { key: 'prod', label: 'PDN', showBanner: false },
  production: { key: 'prod', label: 'PDN', showBanner: false },
}

const LOCAL = { key: 'local', label: 'LOCAL', showBanner: true }

export function resolveEnvironment(raw) {
  const name = String(raw ?? '').trim().toLowerCase()
  return ENVIRONMENTS[name] ?? LOCAL
}

export const APP_ENV = resolveEnvironment(import.meta.env.VITE_APP_ENV)
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || 'local'
