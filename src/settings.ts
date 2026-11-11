/**
 * Layer 3 — settings card on the Plugins page row-config seat.
 *
 * Seat: 'plugins.bundle.config' (keyed by bundle#rowId — the key the Plugins page
 * computes via rowConfigKey). Registered through ctx.slots.inject so the
 * contribution follows the page's declaration lifetime. Component is React
 * (the page renders it inside its tree); state lives in localStorage with
 * instant attribute flip, authoritative values come from the host config
 * endpoint.
 */

type ToggleKey = 'messageFade' | 'focusRing'

const STORAGE_PREFIX = 'dsh-reskin-swiss:'

function readSetting(key: ToggleKey, fallback: boolean): boolean {
  try {
    const v = localStorage.getItem(STORAGE_PREFIX + key)
    return v === null ? fallback : v === '1'
  } catch {
    return fallback
  }
}

function writeSetting(key: ToggleKey, value: boolean): void {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, value ? '1' : '0')
  } catch {}
}

function applyState(state: Record<ToggleKey, boolean>): void {
  const root = document.documentElement
  root.setAttribute('data-reskin-swiss-fade', state.messageFade ? 'on' : 'off')
  root.setAttribute('data-reskin-swiss-focus', state.focusRing ? 'on' : 'off')
}

export function applySettings(ctx: any): () => void {
  try {
    (window).__RESKIN_SETTINGS_CTX__ = ctx
    const react = require('react') as typeof import('react')

    const RowConfigCard = (props: any) => {
      const [messageFade, setMessageFade] = (react as any).useState(readSetting('messageFade', true))
      const [focusRing, setFocusRing] = (react as any).useState(readSetting('focusRing', true))

      const state = { messageFade, focusRing }

      const rowStyle: any = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '10px 0',
        borderBottom: '1px solid var(--dsw-alias-border-l1, #e6e6e6)',
        fontSize: 13,
        color: 'var(--dsw-alias-label-primary, #111)',
      }
      const boxStyle: any = {
        accentColor: 'var(--dsw-alias-brand-primary, #E30613)',
        width: 16,
        height: 16,
      }

      return react.createElement(
        'div',
        { style: { display: 'flex', flexDirection: 'column' } },
        react.createElement('div', { style: rowStyle, key: 'fade' },
          react.createElement('span', null, 'Message fade animation'),
          react.createElement('input', {
            type: 'checkbox',
            checked: messageFade,
            style: boxStyle,
            onChange: (e: any) => { const next = e.target.checked; setMessageFade(next); writeSetting('messageFade', next); applyState({ messageFade: next, focusRing } as any) },
          }),
        ),
        react.createElement('div', { style: rowStyle, key: 'focus' },
          react.createElement('span', null, 'Focus ring'),
          react.createElement('input', {
            type: 'checkbox',
            checked: focusRing,
            style: boxStyle,
            onChange: (e: any) => { const next = e.target.checked; setFocusRing(next); writeSetting('focusRing', next); applyState({ messageFade, focusRing: next } as any) },
          }),
        ),
      )
    }

    ctx.slots.inject('plugins.bundle.config', () => {
      try { window.__RESKIN_INJECT_RAN__ = (window.__RESKIN_INJECT_RAN__ || 0) + 1 } catch {}
      ctx.slots.register(
        {
          name: 'plugins.bundle.config',
          key: 'dsh-reskin-swiss',
          order: 200,
        },
        RowConfigCard as any,
      )
    })

    // authoritative values from the host, applied at boot
    ctx.effect(() => {
      fetch('/dsh-reskin-swiss/config', { cache: 'no-store' })
        .then((r) => (r.ok ? r.json() : null))
        .then((c) => { if (c) applyState(c) })
        .catch(() => {})
      return () => {}
    }, 'dsh-reskin-swiss: pull host config')
  } catch (err) {
    console.warn('[dsh-reskin-swiss] settings card unavailable:', err)
  }
  return () => {}
}
