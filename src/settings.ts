/**
 * Layer 3/5 — settings card on the Plugins page bundle-config seat, plus the
 * state engine that turns config values into data-reskin-swiss-* attributes
 * (the stylesheet's control surface).
 *
 * State model: host Config (authoritative, editable in profile patch) is
 * fetched from /dsh-reskin-swiss/config; localStorage is the optimistic cache;
 * every change writes both. All values are mirrored to <html> attributes.
 */

type ToggleKey =
  | 'messageFade' | 'focusRing' | 'themeFlip' | 'buttonPress'
  | 'composerFocusLine' | 'sidebarActiveBar' | 'brandMark' | 'wordmark'
  | 'sessionStats' | 'mascot' | 'fullAccessBadge'

type SelectKey = 'animationMode' | 'contextMeter'

const ALL_TOGGLES: Array<{ key: ToggleKey; label: string; tab: string }> = [
  { key: 'messageFade', label: 'Message fade animation', tab: 'Motion' },
  { key: 'themeFlip', label: 'Theme flip transition', tab: 'Motion' },
  { key: 'buttonPress', label: 'Button press feedback', tab: 'Motion' },
  { key: 'composerFocusLine', label: 'Composer focus line', tab: 'Motion' },
  { key: 'sidebarActiveBar', label: 'Sidebar active bar slide', tab: 'Motion' },
  { key: 'focusRing', label: 'Focus ring', tab: 'Motion' },
  { key: 'brandMark', label: 'Swiss grid brand mark', tab: 'Brand' },
  { key: 'wordmark', label: 'Swiss Typographic wordmark', tab: 'Brand' },
  { key: 'sessionStats', label: 'Session statistics', tab: 'Interface' },
  { key: 'mascot', label: 'Pixel mark companion', tab: 'Interface' },
  { key: 'fullAccessBadge', label: 'Access badge restyle', tab: 'Interface' },
]

const SELECTS: Array<{ key: SelectKey; label: string; options: string[]; tab: string }> = [
  { key: 'animationMode', label: 'Animation mode', options: ['follow-system', 'reduced', 'always'], tab: 'Motion' },
  { key: 'contextMeter', label: 'Context meter style', options: ['ring', 'square', 'off'], tab: 'Interface' },
]

const STORAGE_PREFIX = 'dsh-reskin-swiss:'
type State = Record<string, any>
let currentState: State = {}

function readLocal(): State {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + 'state')
    return raw ? JSON.parse(raw) : {}
  } catch { return {} }
}

function writeLocal(state: State): void {
  try { localStorage.setItem(STORAGE_PREFIX + 'state', JSON.stringify(state)) } catch {}
}

function applyState(state: State): void {
  currentState = state
  const root = document.documentElement
  for (const { key } of ALL_TOGGLES) {
    const v = state[key]
    if (typeof v === 'boolean') root.setAttribute('data-reskin-swiss-' + key.toLowerCase(), v ? 'on' : 'off')
  }
  for (const { key } of SELECTS) {
    const v = state[key]
    if (typeof v === 'string') root.setAttribute('data-reskin-swiss-' + key.toLowerCase(), v)
  }
  // animationMode drives a master gate
  const mode = state.animationMode || 'follow-system'
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const motionOn = mode === 'always' || (mode === 'follow-system' && !reduced)
  root.setAttribute('data-reskin-swiss-motion', motionOn ? 'on' : 'off')
}

let pollTimer: number | undefined

function startPolling(): void {
  const pull = async () => {
    try {
      const res = await fetch('/dsh-reskin-swiss/config', { cache: 'no-store' })
      if (!res.ok) return
      const remote = await res.json()
      const local = readLocal()
      // merge: local wins for toggles the user changed this session (versioned by ts)
      applyState({ ...remote, ...local })
    } catch {}
  }
  pull()
  pollTimer = window.setInterval(() => {
    if (document.visibilityState === 'visible') pull()
  }, 4000)
}

function stopPolling(): void {
  if (pollTimer !== undefined) { window.clearInterval(pollTimer); pollTimer = undefined }
}

export function applySettings(ctx: any): () => void {
  try {
    applyState(readLocal())
    startPolling()

    const react = require('react') as any

    function Card(): any {
      const [tab, setTab] = (react as any).useState('General')
      const [state, setState] = (react as any).useState(readLocal())
      const [tick, setTick] = (react as any).useState(0)

      const set = (key: string, value: any) => {
        const next = { ...state, [key]: value }
        setState(next)
        writeLocal(next)
        applyState(next)
        setTick(tick + 1)
      }

      const TABS = ['General', 'Motion', 'Brand', 'Interface']
      const toggleRow = (key: ToggleKey, label: string) => {
        const on = state[key] !== false
        return react.createElement('div', { style: rowStyle, key },
          react.createElement('span', { style: labelStyle }, label),
          react.createElement('input', {
            type: 'checkbox', checked: on, style: boxStyle,
            onChange: (e: any) => set(key, e.target.checked),
          }))
      }
      const selectRow = (key: SelectKey, label: string, options: string[]) => {
        const cur = state[key] || options[0]
        return react.createElement('div', { style: { ...rowStyle, flexDirection: 'column', alignItems: 'stretch' }, key },
          react.createElement('span', { style: labelStyle }, label),
          react.createElement('div', { style: { display: 'flex', gap: 6, marginTop: 6 } },
            options.map(o => react.createElement('button', {
              key: o,
              onClick: () => set(key, o),
              style: {
                padding: '4px 12px', fontSize: 12, cursor: 'pointer',
                border: '1px solid ' + (cur === o ? 'var(--dsw-alias-brand-primary, #E30613)' : 'var(--dsw-alias-border-l2, #d9d9d9)'),
                background: cur === o ? 'var(--dsw-alias-interactive-bg-hover-accent, transparent)' : 'transparent',
                color: cur === o ? 'var(--dsw-alias-brand-primary, #E30613)' : 'var(--dsw-alias-label-secondary, #555)',
                borderRadius: 0,
              },
            }, o))))
      }

      const rowStyle: any = {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 16, padding: '10px 0',
        borderBottom: '1px solid var(--dsw-alias-border-l1, #e6e6e6)',
        fontSize: 13, color: 'var(--dsw-alias-label-primary, #111)',
      }
      const labelStyle: any = { color: 'var(--dsw-alias-label-primary, #111)' }
      const boxStyle: any = { accentColor: 'var(--dsw-alias-brand-primary, #E30613)', width: 16, height: 16 }
      const tabBtn = (t: string): any => ({
        padding: '6px 14px', fontSize: 12, cursor: 'pointer', border: 'none',
        background: tab === t ? 'var(--dsw-alias-button-contrast-fill, #111)' : 'transparent',
        color: tab === t ? 'var(--dsw-alias-label-primary-inverted, #fff)' : 'var(--dsw-alias-label-secondary, #555)',
        borderRadius: 0,
      })

      const motionToggles = ALL_TOGGLES.filter(t => t.tab === 'Motion')
      const brandToggles = ALL_TOGGLES.filter(t => t.tab === 'Brand')
      const interfaceToggles = ALL_TOGGLES.filter(t => t.tab === 'Interface')
      const motionSelects = SELECTS.filter(s => s.tab === 'Motion')
      const interfaceSelects = SELECTS.filter(s => s.tab === 'Interface')

      let body: any[]
      if (tab === 'General') {
        body = [react.createElement('p', { key: 'p', style: { fontSize: 12, color: 'var(--dsw-alias-label-secondary, #555)', margin: '8px 0' } },
          'Swiss Typographic — one red. Everything else is ink on paper. Configure per tab; changes apply instantly.')]
      } else if (tab === 'Motion') {
        body = [
          ...motionSelects.map(s => selectRow(s.key, s.label, s.options)),
          ...motionToggles.map(t => toggleRow(t.key, t.label)),
        ]
      } else if (tab === 'Brand') {
        body = brandToggles.map(t => toggleRow(t.key, t.label))
      } else {
        body = [
          ...interfaceSelects.map(s => selectRow(s.key, s.label, s.options)),
          ...interfaceToggles.map(t => toggleRow(t.key, t.label)),
        ]
      }

      return react.createElement('div', { style: { paddingTop: 8 } },
        react.createElement('div', { style: { display: 'flex', gap: 2, marginBottom: 8 } },
          TABS.map(t => react.createElement('button', { key: t, style: tabBtn(t), onClick: () => setTab(t) }, t))),
        ...body)
    }

    // Tab panel component for the Plugins page 'Swiss Typographic' tab
    function TabCard(): any {
      return react.createElement('div', { style: { maxWidth: 860, margin: '0 auto', padding: '24px 16px' } },
        react.createElement('h2', { style: { fontSize: 24, fontWeight: 700, margin: '0 0 4px', color: 'var(--dsw-alias-label-primary, #111)' } },
          'Swiss Typographic'),
        react.createElement('p', { style: { fontSize: 13, color: 'var(--dsw-alias-label-secondary, #555)', margin: '0 0 16px' } },
          'One red. Everything else is ink on paper.'),
        react.createElement(Card, null),
      )
    }

    ctx.slots.inject('plugins.bundle.config', () => {
      ctx.slots.register(
        { name: 'plugins.bundle.config', key: 'dsh-reskin-swiss', order: 200 },
        Card as any,
      )
    })
  } catch (err) {
    console.warn('[dsh-reskin-swiss] settings card unavailable:', err)
  }
  return () => stopPolling()
}
