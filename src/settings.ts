/**
 * Layer 3 — settings card on the official Plugins page bundle-config seat.
 *
 * 'plugins.bundle.config' is declared by the Plugins page owner, so the
 * contribution goes through ctx.slots.inject(key, callback): the callback runs
 * for each declaration lifetime (i.e. while a Plugins page is mounted), its
 * effects are removed when the owner collapses, and it re-runs when the page
 * mounts again. Two toggles persist to localStorage and flip
 * data-reskin-swiss-* attributes on <html>; the stylesheet keys off those
 * attributes, so no page reload is needed. Failures degrade to the default
 * look — never a failed boot.
 */

type ToggleKey = 'messageFade' | 'focusRing'

function store() {
  return {
    get(key: ToggleKey, fallback: boolean): boolean {
      try {
        const v = localStorage.getItem('dsh-reskin-swiss:' + key)
        return v === null ? fallback : v === '1'
      } catch {
        return fallback
      }
    },
    set(key: ToggleKey, value: boolean) {
      try {
        localStorage.setItem('dsh-reskin-swiss:' + key, value ? '1' : '0')
      } catch {}
      sync()
    },
  }
}

let pollTimer: number | undefined

async function pullRemote(): Promise<void> {
  try {
    const res = await fetch('/dsh-reskin-swiss/config', { cache: 'no-store' })
    if (!res.ok) return
    const state = await res.json()
    const root = document.documentElement
    root.setAttribute('data-reskin-swiss-fade', state.messageFade ? 'on' : 'off')
    root.setAttribute('data-reskin-swiss-focus', state.focusRing ? 'on' : 'off')
  } catch {}
}

function startPolling(): void {
  if (pollTimer !== undefined) return
  pullRemote()
  pollTimer = window.setInterval(() => {
    if (document.visibilityState === 'visible') pullRemote()
  }, 4000)
}

function stopPolling(): void {
  if (pollTimer !== undefined) {
    window.clearInterval(pollTimer)
    pollTimer = undefined
  }
}

function sync(): void {
  const root = document.documentElement
  const s = store()
  root.setAttribute('data-reskin-swiss-fade', s.get('messageFade', true) ? 'on' : 'off')
  root.setAttribute('data-reskin-swiss-focus', s.get('focusRing', true) ? 'on' : 'off')
}

function Card(): HTMLDivElement {
  const s = store()
  const rows: Array<{ label: string; key: ToggleKey }> = [
    { label: 'Message fade animation', key: 'messageFade' },
    { label: 'Focus ring', key: 'focusRing' },
  ]

  const el = document.createElement('div')
  el.style.cssText =
    'display:flex;flex-direction:column;gap:8px;padding:12px 0;border-top:1px solid var(--dsw-alias-border-l1,#e6e6e6)'
  for (const r of rows) {
    const line = document.createElement('label')
    line.style.cssText =
      'display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;font-size:13px;color:var(--dsw-alias-label-primary,#111)'
    const span = document.createElement('span')
    span.textContent = r.label
    const box = document.createElement('input')
    box.type = 'checkbox'
    box.checked = s.get(r.key, true)
    box.style.accentColor = 'var(--dsw-alias-brand-primary,#E30613)'
    box.addEventListener('change', () => s.set(r.key, box.checked))
    line.append(span, box)
    el.append(line)
  }
  return el
}

export function applySettings(ctx: any): () => void {
  // Authoritative values live in the host Config (editable on the Plugins page);
  // the host serves them at /dsh-reskin-swiss/config. localStorage stays as the
  // instant-apply cache for the in-page toggles.
  startPolling()
  return () => stopPolling()
}
