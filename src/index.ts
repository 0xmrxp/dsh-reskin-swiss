/**
 * Swiss Typographic — stock DSH reskin (client module, official extension point).
 *
 * Layer 1: one stylesheet remapping the official --dsw-alias-* semantic tokens.
 * Layer 2: attribute stamping (theme / sidebar state) so later CSS can key on
 *          real shell state without hash-class selectors, plus two restrained
 *          motion rules (message enter, turn activity) following the
 *          semantic-attrs contract discipline: read official attributes,
 *          never rewrite or remove DOM nodes.
 */
import type { Context } from '@deepseek-ai/cordis'
import { css } from './swiss.css.ts'
import { startObservers } from './observers.ts'

export const name = 'dsh-reskin-swiss'

export function apply(ctx: Context): void {
  ctx.effect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    root.setAttribute('data-reskin-swiss', '')

    const style = document.createElement('style')
    style.id = 'dsh-reskin-swiss'
    style.textContent = css
    document.head.appendChild(style)

    const stopObservers = startObservers(root)

    return () => {
      style.remove()
      root.removeAttribute('data-reskin-swiss')
      root.removeAttribute('data-reskin-swiss-theme')
      root.removeAttribute('data-reskin-swiss-sidebar')
      stopObservers()
    }
  }, 'dsh-reskin-swiss: stylesheet + observers')
}
