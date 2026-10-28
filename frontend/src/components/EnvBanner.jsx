import { APP_ENV, APP_VERSION } from '../config/environment'

const STYLES = {
  dev: 'bg-amber-400 text-amber-950',
  qa: 'bg-sky-500 text-white',
  local: 'bg-zinc-700 text-white',
}

/**
 * Franja superior que identifica el ambiente (DEV, QA o LOCAL).
 * En PDN no se muestra: los usuarios finales no necesitan verla.
 */
export default function EnvBanner() {
  if (!APP_ENV.showBanner) return null

  return (
    <div
      role="status"
      className={`w-full px-4 py-1.5 text-center text-xs font-semibold tracking-wide ${STYLES[APP_ENV.key] ?? STYLES.local}`}
    >
      Ambiente {APP_ENV.label} · versión {APP_VERSION}
    </div>
  )
}
