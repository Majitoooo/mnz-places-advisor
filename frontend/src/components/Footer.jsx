import { APP_ENV, APP_VERSION } from '../config/environment'

/**
 * Pie de página minimalista. Muestra el ambiente y la versión desplegada.
 */
export default function Footer() {
  return (
    <footer className="mt-auto border-t border-coffee-100 bg-coffee-50 px-6 py-8 text-center">
      <p className="text-sm text-coffee-400">
        <span aria-hidden="true">☕</span>{' '}
        Gestor de Recomendaciones Turísticas — Manizales, Caldas
      </p>
      <p className="mt-1 text-xs text-coffee-300">
        Datos geográficos en PostgreSQL/PostGIS · Enriquecimiento con IA · DevOps Taller Final
      </p>
      <p className="mt-1 text-xs text-coffee-300">
        Ambiente: {APP_ENV.label} · versión {APP_VERSION}
      </p>
    </footer>
  )
}
