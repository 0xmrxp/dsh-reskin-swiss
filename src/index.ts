/**
 * Swiss Typographic — stock DSH reskin (client module, official extension point).
 *
 * Layer 1: one stylesheet remapping the official --dsw-alias-* semantic tokens.
 * Layer 2: attribute stamping (theme / sidebar state).
 * Layer 3: settings card on the official 'plugins.bundle.config' keyed slot;
 *          the slots service is declared via the module's static inject export.
 */
import { css } from './swiss.css.ts'
import { startObservers } from './observers.ts'
import { applySettings } from './settings.ts'

export const name = 'dsh-reskin-swiss'

// Service declarations for the loader's inject gate (same shape as
// dsh-client-modules: exports.inject = [...]). Without it, fiber.ctx.slots
// throws "cannot get property without inject".
export const inject = ['slots']

export function apply(ctx: any): void {
  ctx.effect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    root.setAttribute('data-reskin-swiss', '')

    const style = document.createElement('style')
    style.id = 'dsh-reskin-swiss'
    style.textContent = css
    document.head.appendChild(style)

    const stopObservers = startObservers(root)
    try { applySettings(ctx) } catch (err) { console.warn('[dsh-reskin-swiss] settings init failed:', err) }

    return () => {
      style.remove()
      root.removeAttribute('data-reskin-swiss')
      root.removeAttribute('data-reskin-swiss-theme')
      root.removeAttribute('data-reskin-swiss-sidebar')
      root.removeAttribute('data-reskin-swiss-fade')
      root.removeAttribute('data-reskin-swiss-focus')
      stopObservers()
    }
  }, 'dsh-reskin-swiss: stylesheet + observers')
}
