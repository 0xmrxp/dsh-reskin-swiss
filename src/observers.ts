/**
 * Layer-2 observers: mirror official shell state onto our own attributes.
 *
 * Discipline: we only READ official attributes ([data-ds-dark-theme],
 * [data-sidebar-collapsed]) and stamp our own data-reskin-swiss-* mirrors.
 * We never write official attributes, never remove nodes, never touch
 * React reconciliation. One observer on the <body> attribute list is enough
 * for both signals; attribute-filtered so the cost is a few matches per
 * mutation batch, not per node.
 */
export function startObservers(root: HTMLElement): () => void {
  const syncTheme = () => {
    if (document.body.hasAttribute('data-ds-dark-theme')) {
      root.setAttribute('data-reskin-swiss-theme', 'dark')
    } else {
      root.setAttribute('data-reskin-swiss-theme', 'light')
    }
  }

  const syncSidebar = () => {
    if (document.querySelector('[data-sidebar-collapsed]')) {
      root.setAttribute('data-reskin-swiss-sidebar', 'collapsed')
    } else {
      root.setAttribute('data-reskin-swiss-sidebar', 'open')
    }
  }

  const syncMeter = () => {
    // stamp the token-meter container when it exists (official chat UI renders it
    // inside the composer on active conversations); keyed to our namespace so CSS
    // can restyle the official meter without hash selectors
    const composerEl = document.querySelector('[class*="composer"], [class*="inputRow"]')
    if (!composerEl) return
    const meter = composerEl.querySelector('[class*="meter"], [class*="Meter"], [class*="token"]')
    if (meter) meter.setAttribute('data-reskin-swiss-meter', 'ring')
  }

  const syncAll = () => {
    syncTheme()
    syncSidebar()
    syncMeter()
  }

  syncAll()

  const observer = new MutationObserver(syncAll)
  observer.observe(document.body, { attributes: true, attributeFilter: ['data-ds-dark-theme'] })
  // sidebar collapse lands on [data-dsh-frame] inside the app root
  const frameObserver = new MutationObserver(syncSidebar)
  const target = document.querySelector('[data-dsh-frame]') ?? document.body
  frameObserver.observe(target, { attributes: true, attributeFilter: ['data-sidebar-collapsed'] })

  return () => {
    observer.disconnect()
    frameObserver.disconnect()
  }
}
