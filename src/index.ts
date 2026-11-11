/**
 * Swiss Typographic — stock DSH reskin (client module, official extension point).
 *
 * Injects one stylesheet that remaps the official --dsw-alias-* semantic
 * tokens of the built-in web frontend. Uses only the official dsh.client
 * client-module machinery — no community plugin stack required.
 */
import type { Context } from '@deepseek-ai/cordis'
import { css } from './swiss.css.ts'

export const name = 'dsh-reskin-swiss'

export function apply(ctx: Context): void {
  ctx.effect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.setAttribute('data-reskin-swiss', '')
    const style = document.createElement('style')
    style.id = 'dsh-reskin-swiss'
    style.textContent = css
    document.head.appendChild(style)
    return () => {
      style.remove()
      document.documentElement.removeAttribute('data-reskin-swiss')
    }
  }, 'dsh-reskin-swiss: inject swiss stylesheet')
}
