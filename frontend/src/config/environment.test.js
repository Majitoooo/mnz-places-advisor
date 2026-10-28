import { describe, expect, it } from 'vitest'
import { resolveEnvironment } from './environment.js'

describe('resolveEnvironment', () => {
  it('reconoce las ramas de cada ambiente', () => {
    expect(resolveEnvironment('develop').label).toBe('DEV')
    expect(resolveEnvironment('qa').label).toBe('QA')
    expect(resolveEnvironment('main').label).toBe('PDN')
  })

  it('muestra la franja en DEV y QA, pero no en PDN', () => {
    expect(resolveEnvironment('develop').showBanner).toBe(true)
    expect(resolveEnvironment('qa').showBanner).toBe(true)
    expect(resolveEnvironment('main').showBanner).toBe(false)
  })

  it('usa LOCAL si la variable no existe o es desconocida', () => {
    expect(resolveEnvironment(undefined).label).toBe('LOCAL')
    expect(resolveEnvironment('feature-x').label).toBe('LOCAL')
  })
})
