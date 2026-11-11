window.__ModuleLoader__.load({
  id: "dsh-reskin-swiss",
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(src_exports);

// src/swiss.css.ts
var css = `/* Applied by dsh-reskin-swiss client module. html[data-reskin-swiss] is stamped on boot. */
/**
 * Swiss Typographic \u2014 stock DSH reskin stylesheet.
 * Remaps the official --dsw-alias-* semantic tokens of the built-in web frontend.
 * Scoped: light values on html[data-reskin-swiss] body, dark on html[data-reskin-swiss] body[data-ds-dark-theme].
 */

/* ---- Type ------------------------------------------------------------------
 * Helvetica Neue is the canonical Swiss face; it ships on macOS. Inter is the
 * self-contained modern stand-in with near-identical neutrality. No serif,
 * no decorative face anywhere: typography does the hierarchy, never ornament.
 * -------------------------------------------------------------------------- */
html[data-reskin-swiss] body {
  --st-sans: 'Helvetica Neue', 'Inter', 'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', Arial, sans-serif;
  --st-mono: 'SF Mono', 'JetBrains Mono', 'Noto Sans Mono CJK SC', ui-monospace, Menlo, Consolas, monospace;
  --st-red: #E30613;
  --st-red-press: #B80510;
  --st-ink: #111111;
}

/* ============================================================================
 * LIGHT \u2014 paper
 * ========================================================================== */
html[data-reskin-swiss] body {
  /* surfaces: pure canvas, then a strict gray ladder */
  --dsw-alias-bg-base: #ffffff;
  --dsw-alias-bg-layer-1: #fafafa;
  --dsw-alias-bg-layer-2: #f2f2f2;
  --dsw-alias-bg-layer-3: #e8e8e8;
  --dsw-alias-bg-layer-4: #dcdcdc;
  --dsw-alias-bg-module-platform: #fafafa;
  --dsw-alias-bg-skeleton: #1111110a;

  /* masks: ink, scaled */
  --dsw-alias-bg-mask-1: #1111111f;
  --dsw-alias-bg-mask-2: #11111133;
  --dsw-alias-bg-mask-3: #11111166;

  /* borders: the grid. hairlines, never shadows-that-look-like-borders */
  --dsw-alias-border-l1: #e6e6e6;
  --dsw-alias-border-l2: #d9d9d9;
  --dsw-alias-border-l2-darkmode-thin: #d9d9d9;
  --dsw-alias-border-l3: #bfbfbf;
  --dsw-alias-border-l4: #999999;

  /* labels: near-black ink, quiet grays */
  --dsw-alias-label-primary: #111111;
  --dsw-alias-label-primary-bluish: #111111;
  --dsw-alias-label-primary-dimmed: #3d3d3d;
  --dsw-alias-label-primary-foreground: #111111;
  --dsw-alias-label-primary-inverted: #ffffff;
  --dsw-alias-label-secondary: #555555;
  --dsw-alias-label-tertiary: #808080;
  --dsw-alias-label-caption: #8c8c8c;
  --dsw-alias-label-dimmed: #a6a6a6;

  /* brand: the one red */
  --dsw-alias-brand-primary: #E30613;
  --dsw-alias-brand-text: #111111;

  /* buttons: flat rectangles, red or ink */
  --dsw-alias-button-primary-fill: #E30613;
  --dsw-alias-button-primary-hover: #B80510;
  --dsw-alias-button-contrast-fill: #111111;
  --dsw-alias-button-ghost-active-fill: #e8e8e8;
  --dsw-alias-button-ghost-active-hover: #dcdcdc;
  --dsw-alias-button-ghost-active-border: #1111114d;

  /* interactive */
  --dsw-alias-interactive-bg-hover: #1111110a;
  --dsw-alias-interactive-bg-active: #11111114;
  --dsw-alias-interactive-bg-hover-accent: #E3061314;
  --dsw-alias-interactive-bg-hover-danger: #E306131f;

  /* markdown: quiet grays, no tinted code blocks */
  --dsw-alias-markdown-code-block: #f7f7f7;
  --dsw-alias-markdown-code-block-banner: #f2f2f2;
  --dsw-alias-markdown-inline-code: #f2f2f2;
  --dsw-alias-markdown-tag: #f2f2f2;

  /* state colors: functional, desaturated where possible; red belongs to brand */
  --dsw-alias-state-error-primary: #C41E25;
  --dsw-alias-state-warn-primary: #B8860B;
  --dsw-alias-state-success-primary: #2E7D32;
  --dsw-alias-state-business-primary: #E30613;

  /* shell anchors */
  --dsw-specific-sidebar-fill: #fafafa;
  --dsw-specific-sidebar-nav-item-hover: #1111110a;
  --dsw-specific-sidebar-nav-item-active: #e8e8e8;
  --dsw-specific-sidebar-nav-item-active-accent: #E30613;
  --dsw-specific-input-major: #ffffff;
  --dsw-specific-menu: #ffffff;
  --dsw-specific-bubble: #ffffff;
  --dsw-specific-selector: #f2f2f2;
  --dsw-specific-tip: #e8e8e8;

  /* overlays */
  --dsw-alias-tooltip-bg: #111111;
  --dsw-alias-tooltip-key-bg: #11111133;
  --dsw-alias-toast-bg: #111111;
  --dsw-hovercard-bg: #ffffff;
  --dsw-menu-surface-fill: #ffffff;

  /* focus: the red ring is the accessibility voice of the accent */
  --dsw-focus-ring-color: #E30613;
  --dsw-focus-ring-width: 2px;

  /* elevation: hairline + barely-there shadow; flatness is the style */
  --dsw-elevation-stroke-color: #e6e6e6;
  --dsw-shadow-lv1: 0 0 0 0.5px #e6e6e6;
  --dsw-shadow-lv2: 0 1px 2px #1111110d;
  --dsw-shadow-lv3: 0 4px 16px #1111111a;
  --dsw-mask-blur: blur(0px);

  /* radius ladder: pressed flat. 0 for chips/tags, 2px max anywhere */
  --dsw-radius-xs: 0px;
  --dsw-radius-sm: 0px;
  --dsw-radius-md: 2px;
  --dsw-radius-lg: 2px;
  --dsw-radius-xl: 2px;
  --dsw-radius-panel: 0px;

  /* typography */
  --dsw-font-family: var(--st-sans);
  --dsw-font-markdown-base: var(--st-sans);
  --dsw-font-markdown-base-strong: var(--st-sans);
  --dsw-font-markdown-code: var(--st-mono);
  --dsw-font-markdown-code-block: var(--st-mono);
  --dsw-font-markdown-code-font-family: var(--st-mono);
  --dsw-font-markdown-h1: var(--st-sans);
  --dsw-font-markdown-h2: var(--st-sans);
  --dsw-font-markdown-h3: var(--st-sans);
  --dsw-alias-link: #111111;

  /* scrollbars: hairline ink */
  --dsw-alias-scrollbar-bg-l2: #1111111f;
  --dsw-alias-scrollbar-hover-l2: #1111113d;
}

/* ============================================================================
 * DARK \u2014 print-shop black. Same red, same grid, ink inverted.
 * ========================================================================== */
/* official info-fill buttons (send arrow etc.) route through --dsw-static-deepseek-500;
   remap the alias instead so the red takes over */
html[data-reskin-swiss] body {
  --dsw-alias-button-info-fill: #E30613;
  --dsw-alias-state-business-tertiary: #E3061314;
  --dsw-alias-state-idle-primary: #808080;
}

html[data-reskin-swiss] body[data-ds-dark-theme] {
  /* surfaces */
  --dsw-alias-bg-base: #111111;
  --dsw-alias-bg-layer-1: #171717;
  --dsw-alias-bg-layer-2: #1f1f1f;
  --dsw-alias-bg-layer-3: #292929;
  --dsw-alias-bg-layer-4: #333333;
  --dsw-alias-bg-module-platform: #171717;
  --dsw-alias-bg-skeleton: #ffffff0a;

  --dsw-alias-bg-mask-1: #00000040;
  --dsw-alias-bg-mask-2: #00000066;
  --dsw-alias-bg-mask-3: #000000a6;

  /* borders: the grid in reverse, gray on black */
  --dsw-alias-border-l1: #262626;
  --dsw-alias-border-l2: #333333;
  --dsw-alias-border-l2-darkmode-thin: #333333;
  --dsw-alias-border-l3: #4d4d4d;
  --dsw-alias-border-l4: #737373;

  /* labels */
  --dsw-alias-label-primary: #f5f5f5;
  --dsw-alias-label-primary-bluish: #f5f5f5;
  --dsw-alias-label-primary-dimmed: #d4d4d4;
  --dsw-alias-label-primary-foreground: #111111;
  --dsw-alias-label-primary-inverted: #111111;
  --dsw-alias-label-secondary: #a3a3a3;
  --dsw-alias-label-tertiary: #737373;
  --dsw-alias-label-caption: #666666;
  --dsw-alias-label-dimmed: #4d4d4d;

  /* brand: same red, lifted one step for contrast on black */
  --dsw-alias-brand-primary: #FF2A1F;
  --dsw-alias-brand-text: #f5f5f5;

  /* buttons */
  --dsw-alias-button-primary-fill: #FF2A1F;
  --dsw-alias-button-primary-hover: #E30613;
  --dsw-alias-button-contrast-fill: #f5f5f5;
  --dsw-alias-button-ghost-active-fill: #292929;
  --dsw-alias-button-ghost-active-hover: #333333;
  --dsw-alias-button-ghost-active-border: #ffffff4d;

  /* interactive */
  --dsw-alias-interactive-bg-hover: #ffffff0d;
  --dsw-alias-interactive-bg-active: #ffffff17;
  --dsw-alias-interactive-bg-hover-accent: #FF2A1F1f;
  --dsw-alias-interactive-bg-hover-danger: #FF2A1F2e;

  /* markdown */
  --dsw-alias-markdown-code-block: #1a1a1a;
  --dsw-alias-markdown-code-block-banner: #1f1f1f;
  --dsw-alias-markdown-inline-code: #1f1f1f;
  --dsw-alias-markdown-tag: #1f1f1f;

  /* state */
  --dsw-alias-state-error-primary: #FF4A42;
  --dsw-alias-state-warn-primary: #E0A63F;
  --dsw-alias-state-success-primary: #4CAF6D;
  --dsw-alias-state-business-primary: #FF2A1F;

  /* shell anchors */
  --dsw-specific-sidebar-fill: #171717;
  --dsw-specific-sidebar-nav-item-hover: #ffffff0d;
  --dsw-specific-sidebar-nav-item-active: #292929;
  --dsw-specific-sidebar-nav-item-active-accent: #FF2A1F;
  --dsw-specific-input-major: #1a1a1a;
  --dsw-specific-menu: #1a1a1a;
  --dsw-specific-bubble: #171717;
  --dsw-specific-selector: #1f1f1f;
  --dsw-specific-tip: #292929;

  /* overlays */
  --dsw-alias-tooltip-bg: #f5f5f5;
  --dsw-alias-tooltip-fg: #111111;
  --dsw-alias-tooltip-key-bg: #ffffff33;
  --dsw-alias-toast-bg: #f5f5f5;
  --dsw-alias-toast-label: #111111;
  --dsw-hovercard-bg: #1a1a1a;
  --dsw-menu-surface-fill: #1a1a1a;

  --dsw-focus-ring-color: #FF2A1F;

  --dsw-elevation-stroke-color: #262626;
  --dsw-shadow-lv1: 0 0 0 0.5px #262626;
  --dsw-shadow-lv2: 0 1px 2px #00000059;
  --dsw-shadow-lv3: 0 4px 16px #00000080;

  --dsw-alias-scrollbar-bg-l2: #ffffff1f;
  --dsw-alias-scrollbar-hover-l2: #ffffff3d;
}


/* ============================================================================
 * Layer 2 \u2014 restrained motion & state (frontend-design guidance: one
 * orchestrated moment, motion that answers an action, nothing scattered).
 * ========================================================================== */

/* Message enter: a single quiet fade \u2014 no slide-up cascade, no stagger.
   Applies once per inserted message row; the animation is 160ms, the Swiss
   grid does the rest. Uses the semantic part from the contract. */
@keyframes reskin-swiss-message-enter {
  from { opacity: 0; }
  to   { opacity: 1; }
}
html[data-reskin-swiss] body [data-dsh-surface="conversation"] [data-dsh-part="message-row"] {
  animation: reskin-swiss-message-enter 160ms ease-in;
}
@media (prefers-reduced-motion: reduce) {
  html[data-reskin-swiss] body [data-dsh-surface="conversation"] [data-dsh-part="message-row"] {
    animation: none;
  }
}

/* Turn activity: a small red square (the Swiss mark) breathing beside the
   session title while a turn runs. Reads only the official ongoing state. */
html[data-reskin-swiss-theme="dark"] {
  color-scheme: dark;
}

/* Focus visibility: the red ring is the skin's accessibility voice \u2014 make
   keyboard focus unmistakable without touching layout. */
html[data-reskin-swiss] body :focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary, #E30613);
  outline-offset: 1px;
}

/* Layer 3 \u2014 settings-driven states (attributes flipped by the settings card) */
html[data-reskin-swiss-fade="off"] body [data-dsh-surface="conversation"] [data-dsh-part="message-row"] {
  animation: none;
}
html[data-reskin-swiss-focus="off"] body :focus-visible {
  outline: none;
}


/* ============================================================================
 * Brand replacement \u2014 the whale/fish SVGs are hidden and our marks are painted
 * through background-image on the same footprint. Assets served by this
 * plugin's host face at /dsh-reskin-swiss/assets/. The original nodes are
 * never removed (React discipline); only their paint is replaced.
 * ========================================================================== */

/* Technique: the slot div is display:contents (paints nothing), so the swap
   happens on the svg box itself \u2014 its paths are made transparent and our SVG
   is painted as the svg element's background, same footprint. */
html[data-reskin-swiss] body [data-slot="sidebar.brand.mark"] svg :is(path, rect, circle, ellipse, polygon, polyline, g),
html[data-reskin-swiss] body [data-slot="sidebar.brand.name"] svg :is(path, rect, circle, ellipse, polygon, polyline, g),
html[data-reskin-swiss] body [data-slot="conversation.hero.brand.mark"] svg :is(path, rect, circle, ellipse, polygon, polyline, g) {
  fill: transparent;
  stroke: transparent;
}
html[data-reskin-swiss] body [data-slot="sidebar.brand.mark"] svg {
  background-image: url('/dsh-reskin-swiss/assets/brand-mark.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
html[data-reskin-swiss] body[data-ds-dark-theme] [data-slot="sidebar.brand.mark"] svg {
  background-image: url('/dsh-reskin-swiss/assets/brand-mark-dark.svg');
}
html[data-reskin-swiss] body [data-slot="sidebar.brand.name"] svg {
  background-image: url('/dsh-reskin-swiss/assets/brand-word.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
html[data-reskin-swiss] body[data-ds-dark-theme] [data-slot="sidebar.brand.name"] svg {
  background-image: url('/dsh-reskin-swiss/assets/brand-word-dark.png');
}
html[data-reskin-swiss] body [data-slot="conversation.hero.brand.mark"] svg {
  background-image: url('/dsh-reskin-swiss/assets/hero-mark.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
html[data-reskin-swiss] body[data-ds-dark-theme] [data-slot="conversation.hero.brand.mark"] svg {
  background-image: url('/dsh-reskin-swiss/assets/hero-mark-dark.svg');
}


/* ============================================================================
 * Layer 4 \u2014 the Swiss motion system. Philosophy IV: motion is a handshake,
 * never a dance. Every transition \u2264 200ms, every one confirms an action the
 * reader took. The whole set collapses under prefers-reduced-motion.
 * ========================================================================== */

/* 1. Theme flip: paper changes like a page turn \u2014 backgrounds and inks
   transition together so a theme swap reads as one event, not a flicker. */
html[data-reskin-swiss] body,
html[data-reskin-swiss] body * {
  transition-property: background-color, border-color, color;
  transition-duration: 160ms;
  transition-timing-function: ease;
}
html[data-reskin-swiss] body [data-dsh-part="scrollport"] * {
  /* scroll containers must not animate \u2014 performance */
  transition-property: none;
}

/* 2. Buttons: press reads as physical \u2014 a 2% contraction on :active. */
html[data-reskin-swiss] body button {
  transition-property: background-color, border-color, color, transform, opacity;
  transition-duration: 100ms;
  transition-timing-function: ease;
}
html[data-reskin-swiss] body button:active:not(:disabled) {
  transform: scale(0.98);
}

/* 3. Composer focus: the input's hairline darkens to ink \u2014 the grid line you
   are typing on becomes the loudest line on the page. */
html[data-reskin-swiss] body [data-dsh-surface="composer"] [data-dsh-part="composer-input"] {
  transition: border-color 80ms ease;
}
html[data-reskin-swiss] body [data-dsh-surface="composer"] [data-dsh-part="composer-input"]:focus-within {
  border-color: var(--dsw-alias-border-l4, #999999);
}

/* 4. Message enter (refined): 160ms fade + 4px rise \u2014 arrive, settle, stop. */
@keyframes reskin-swiss-message-enter {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* 5. Sidebar active row: the red left bar slides in \u2014 the one place motion
   carries meaning (a new decision was made). */
@keyframes reskin-swiss-active-in {
  from { transform: scaleY(0); }
  to   { transform: scaleY(1); }
}
html[data-reskin-swiss] body [data-dsh-surface="sidebar"] [data-dsh-part="sidebar-entry"][aria-current] {
  animation: reskin-swiss-active-in 120ms ease;
  transform-origin: top;
}

/* The whole set collapses for reduced motion \u2014 stillness is the default. */
@media (prefers-reduced-motion: reduce) {
  html[data-reskin-swiss] body,
  html[data-reskin-swiss] body *,
  html[data-reskin-swiss] body button {
    transition: none !important;
    animation: none !important;
  }
}


/* ============================================================================
 * Context meter \u2014 Swiss restyle of the official token meter. Square geometry,
 * 2px ink stroke, red when usage is high. Activates via the stamped attribute
 * (data-reskin-swiss-meter), set by our observer when the meter mounts.
 * ========================================================================== */
html[data-reskin-swiss] body [data-reskin-swiss-meter] svg,
html[data-reskin-swiss] body [data-reskin-swiss-meter] [class*="ring"],
html[data-reskin-swiss] body [data-reskin-swiss-meter] [class*="Ring"] {
  border-radius: 0;
}
html[data-reskin-swiss] body [data-reskin-swiss-meter] svg circle {
  stroke-width: 2;
}

/* Context meter off (config): hide the meter block entirely */
html[data-reskin-swiss-contextmeter="off"] body [data-reskin-swiss-meter] {
  display: none;
}

/* Mascot off (config): hide the pixel companion layer */
html[data-reskin-swiss-mascot="off"] body [class*="mascot"],
html[data-reskin-swiss-mascot="off"] body [class*="Mascot"],
html[data-reskin-swiss-mascot="off"] body [class*="pet"] {
  display: none;
}

/* Brand mark off: restore the official whale/wordmark */
html[data-reskin-swiss-brandmark="off"] body [data-slot="sidebar.brand.mark"] svg path,
html[data-reskin-swiss-brandmark="off"] body [data-slot="conversation.hero.brand.mark"] svg :is(path, rect, circle) {
  fill: initial;
  stroke: initial;
}
html[data-reskin-swiss-brandmark="off"] body [data-slot="sidebar.brand.mark"] svg,
html[data-reskin-swiss] body [data-slot="sidebar.brand.mark"] svg {
  /* keep footprint; brand off removes only our background */
}
html[data-reskin-swiss-brandmark="off"] body [data-slot="sidebar.brand.mark"] svg {
  background-image: none;
}
html[data-reskin-swiss-wordmark="off"] body [data-slot="sidebar.brand.name"] svg {
  background-image: none;
}
html[data-reskin-swiss-wordmark="off"] body [data-slot="sidebar.brand.name"] svg path {
  fill: initial;
}


/* ============================================================================
 * Context meter + session stats \u2014 Swiss restyle of the official components
 * (structure verified live: button.JObwrW_trigger > svg > circle.track + circle.fill,
 * popover card CY-8Ka_card).
 * ========================================================================== */

/* The gauge: precision instrument look \u2014 2px strokes, squared caps, ink track,
   brand-red fill. Percent label in mono. */
html[data-reskin-swiss] body .JObwrW_trigger svg circle.JObwrW_track {
  stroke-width: 2;
  stroke: var(--dsw-alias-border-l3, #bfbfbf);
}
html[data-reskin-swiss] body .JObwrW_trigger svg circle.JObwrW_fill {
  stroke-width: 2;
  stroke: var(--dsw-alias-brand-primary, #E30613);
}
html[data-reskin-swiss] body .JObwrW_trigger > span {
  font-variant-numeric: tabular-nums;
  color: var(--dsw-alias-label-primary, #111);
}

/* Session stats popover: flat card, hairline borders, tabular numbers,
   red only for the cost figure. */
html[data-reskin-swiss] body [class*="card"]:has(> [class*="subCalls"]) {
  border-radius: 0;
  border: 1px solid var(--dsw-alias-border-l2, #d9d9d9);
  box-shadow: none;
}
html[data-reskin-swiss] body [class*="subCalls"] {
  font-variant-numeric: tabular-nums;
}

/* Meter off (config): hide the trigger */
html[data-reskin-swiss-contextmeter="off"] body .JObwrW_trigger {
  display: none;
}


/* ============================================================================
 * Composer header controls \u2014 model picker, access mode, session tabs.
 * Swiss: square corners, mono labels, hairlines, red reserved for state.
 * ========================================================================== */

/* Model picker + access mode triggers: flat hairline buttons */
html[data-reskin-swiss] body ._7KE1Ra_trigger,
html[data-reskin-swiss] body .iWlSmW_trigger {
  border-radius: 0;
  border: 1px solid var(--dsw-alias-border-l1, #e6e6e6);
  font-variant-numeric: tabular-nums;
}
html[data-reskin-swiss] body ._7KE1Ra_trigger:hover,
html[data-reskin-swiss] body .iWlSmW_trigger:hover {
  border-color: var(--dsw-alias-border-l3, #bfbfbf);
  background: var(--dsw-alias-interactive-bg-hover, transparent);
}

/* Access badge: the shield icon picks up the red \u2014 full access reads as armed */
html[data-reskin-swiss] body .iWlSmW_trigger[aria-label*="Full access"] svg {
  stroke: var(--dsw-alias-brand-primary, #E30613);
}

/* Session tabs (Chat / Trajectory): square cells, active = red underline bar */
html[data-reskin-swiss] body .wSkVaW_tab {
  border-radius: 0;
  border-bottom: 2px solid transparent;
  padding-bottom: 6px;
}
html[data-reskin-swiss] body .wSkVaW_tabActive {
  border-bottom-color: var(--dsw-alias-brand-primary, #E30613);
  color: var(--dsw-alias-label-primary, #111);
}

/* Model picker menu: flat panel, hairline rows */
html[data-reskin-swiss] body [class*="menu"] [class*="modelRow"],
html[data-reskin-swiss] body [role="menu"] {
  border-radius: 0;
}
`;

// src/observers.ts
function startObservers(root) {
  const syncTheme = () => {
    if (document.body.hasAttribute("data-ds-dark-theme")) {
      root.setAttribute("data-reskin-swiss-theme", "dark");
    } else {
      root.setAttribute("data-reskin-swiss-theme", "light");
    }
  };
  const syncSidebar = () => {
    if (document.querySelector("[data-sidebar-collapsed]")) {
      root.setAttribute("data-reskin-swiss-sidebar", "collapsed");
    } else {
      root.setAttribute("data-reskin-swiss-sidebar", "open");
    }
  };
  const syncMeter = () => {
    const composerEl = document.querySelector('[class*="composer"], [class*="inputRow"]');
    if (!composerEl) return;
    const meter = composerEl.querySelector('[class*="meter"], [class*="Meter"], [class*="token"]');
    if (meter) meter.setAttribute("data-reskin-swiss-meter", "ring");
  };
  const syncAll = () => {
    syncTheme();
    syncSidebar();
    syncMeter();
  };
  syncAll();
  const observer = new MutationObserver(syncAll);
  observer.observe(document.body, { attributes: true, attributeFilter: ["data-ds-dark-theme"] });
  const frameObserver = new MutationObserver(syncSidebar);
  const target = document.querySelector("[data-dsh-frame]") ?? document.body;
  frameObserver.observe(target, { attributes: true, attributeFilter: ["data-sidebar-collapsed"] });
  return () => {
    observer.disconnect();
    frameObserver.disconnect();
  };
}

// src/settings.ts
var ALL_TOGGLES = [
  { key: "messageFade", label: "Message fade animation", tab: "Motion" },
  { key: "themeFlip", label: "Theme flip transition", tab: "Motion" },
  { key: "buttonPress", label: "Button press feedback", tab: "Motion" },
  { key: "composerFocusLine", label: "Composer focus line", tab: "Motion" },
  { key: "sidebarActiveBar", label: "Sidebar active bar slide", tab: "Motion" },
  { key: "focusRing", label: "Focus ring", tab: "Motion" },
  { key: "brandMark", label: "Swiss grid brand mark", tab: "Brand" },
  { key: "wordmark", label: "Swiss Typographic wordmark", tab: "Brand" },
  { key: "sessionStats", label: "Session statistics", tab: "Interface" },
  { key: "mascot", label: "Pixel mark companion", tab: "Interface" },
  { key: "fullAccessBadge", label: "Access badge restyle", tab: "Interface" }
];
var SELECTS = [
  { key: "animationMode", label: "Animation mode", options: ["follow-system", "reduced", "always"], tab: "Motion" },
  { key: "contextMeter", label: "Context meter style", options: ["ring", "square", "off"], tab: "Interface" }
];
var STORAGE_PREFIX = "dsh-reskin-swiss:";
var currentState = {};
function readLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + "state");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function writeLocal(state) {
  try {
    localStorage.setItem(STORAGE_PREFIX + "state", JSON.stringify(state));
  } catch {
  }
}
function applyState(state) {
  currentState = state;
  const root = document.documentElement;
  for (const { key } of ALL_TOGGLES) {
    const v = state[key];
    if (typeof v === "boolean") root.setAttribute("data-reskin-swiss-" + key.toLowerCase(), v ? "on" : "off");
  }
  for (const { key } of SELECTS) {
    const v = state[key];
    if (typeof v === "string") root.setAttribute("data-reskin-swiss-" + key.toLowerCase(), v);
  }
  const mode = state.animationMode || "follow-system";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motionOn = mode === "always" || mode === "follow-system" && !reduced;
  root.setAttribute("data-reskin-swiss-motion", motionOn ? "on" : "off");
}
var pollTimer;
function startPolling() {
  const pull = async () => {
    try {
      const res = await fetch("/dsh-reskin-swiss/config", { cache: "no-store" });
      if (!res.ok) return;
      const remote = await res.json();
      const local = readLocal();
      applyState({ ...remote, ...local });
    } catch {
    }
  };
  pull();
  pollTimer = window.setInterval(() => {
    if (document.visibilityState === "visible") pull();
  }, 4e3);
}
function stopPolling() {
  if (pollTimer !== void 0) {
    window.clearInterval(pollTimer);
    pollTimer = void 0;
  }
}
function applySettings(ctx) {
  try {
    let Card = function() {
      const [tab, setTab] = react.useState("General");
      const [state, setState] = react.useState(readLocal());
      const [tick, setTick] = react.useState(0);
      const set = (key, value) => {
        const next = { ...state, [key]: value };
        setState(next);
        writeLocal(next);
        applyState(next);
        setTick(tick + 1);
      };
      const TABS = ["General", "Motion", "Brand", "Interface"];
      const toggleRow = (key, label) => {
        const on = state[key] !== false;
        return react.createElement(
          "div",
          { style: rowStyle, key },
          react.createElement("span", { style: labelStyle }, label),
          react.createElement("input", {
            type: "checkbox",
            checked: on,
            style: boxStyle,
            onChange: (e) => set(key, e.target.checked)
          })
        );
      };
      const selectRow = (key, label, options) => {
        const cur = state[key] || options[0];
        return react.createElement(
          "div",
          { style: { ...rowStyle, flexDirection: "column", alignItems: "stretch" }, key },
          react.createElement("span", { style: labelStyle }, label),
          react.createElement(
            "div",
            { style: { display: "flex", gap: 6, marginTop: 6 } },
            options.map((o) => react.createElement("button", {
              key: o,
              onClick: () => set(key, o),
              style: {
                padding: "4px 12px",
                fontSize: 12,
                cursor: "pointer",
                border: "1px solid " + (cur === o ? "var(--dsw-alias-brand-primary, #E30613)" : "var(--dsw-alias-border-l2, #d9d9d9)"),
                background: cur === o ? "var(--dsw-alias-interactive-bg-hover-accent, transparent)" : "transparent",
                color: cur === o ? "var(--dsw-alias-brand-primary, #E30613)" : "var(--dsw-alias-label-secondary, #555)",
                borderRadius: 0
              }
            }, o))
          )
        );
      };
      const rowStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "10px 0",
        borderBottom: "1px solid var(--dsw-alias-border-l1, #e6e6e6)",
        fontSize: 13,
        color: "var(--dsw-alias-label-primary, #111)"
      };
      const labelStyle = { color: "var(--dsw-alias-label-primary, #111)" };
      const boxStyle = { accentColor: "var(--dsw-alias-brand-primary, #E30613)", width: 16, height: 16 };
      const tabBtn = (t) => ({
        padding: "6px 14px",
        fontSize: 12,
        cursor: "pointer",
        border: "none",
        background: tab === t ? "var(--dsw-alias-button-contrast-fill, #111)" : "transparent",
        color: tab === t ? "var(--dsw-alias-label-primary-inverted, #fff)" : "var(--dsw-alias-label-secondary, #555)",
        borderRadius: 0
      });
      const motionToggles = ALL_TOGGLES.filter((t) => t.tab === "Motion");
      const brandToggles = ALL_TOGGLES.filter((t) => t.tab === "Brand");
      const interfaceToggles = ALL_TOGGLES.filter((t) => t.tab === "Interface");
      const motionSelects = SELECTS.filter((s) => s.tab === "Motion");
      const interfaceSelects = SELECTS.filter((s) => s.tab === "Interface");
      let body;
      if (tab === "General") {
        body = [react.createElement(
          "p",
          { key: "p", style: { fontSize: 12, color: "var(--dsw-alias-label-secondary, #555)", margin: "8px 0" } },
          "Swiss Typographic \u2014 one red. Everything else is ink on paper. Configure per tab; changes apply instantly."
        )];
      } else if (tab === "Motion") {
        body = [
          ...motionSelects.map((s) => selectRow(s.key, s.label, s.options)),
          ...motionToggles.map((t) => toggleRow(t.key, t.label))
        ];
      } else if (tab === "Brand") {
        body = brandToggles.map((t) => toggleRow(t.key, t.label));
      } else {
        body = [
          ...interfaceSelects.map((s) => selectRow(s.key, s.label, s.options)),
          ...interfaceToggles.map((t) => toggleRow(t.key, t.label))
        ];
      }
      return react.createElement(
        "div",
        { style: { paddingTop: 8 } },
        react.createElement(
          "div",
          { style: { display: "flex", gap: 2, marginBottom: 8 } },
          TABS.map((t) => react.createElement("button", { key: t, style: tabBtn(t), onClick: () => setTab(t) }, t))
        ),
        ...body
      );
    }, TabCard = function() {
      return react.createElement(
        "div",
        { style: { maxWidth: 860, margin: "0 auto", padding: "24px 16px" } },
        react.createElement(
          "h2",
          { style: { fontSize: 24, fontWeight: 700, margin: "0 0 4px", color: "var(--dsw-alias-label-primary, #111)" } },
          "Swiss Typographic"
        ),
        react.createElement(
          "p",
          { style: { fontSize: 13, color: "var(--dsw-alias-label-secondary, #555)", margin: "0 0 16px" } },
          "One red. Everything else is ink on paper."
        ),
        react.createElement(Card, null)
      );
    };
    applyState(readLocal());
    startPolling();
    const react = require("react");
    ctx.slots.inject("plugins.bundle.config", () => {
      ctx.slots.register(
        { name: "plugins.bundle.config", key: "dsh-reskin-swiss", order: 200 },
        Card
      );
    });
  } catch (err) {
    console.warn("[dsh-reskin-swiss] settings card unavailable:", err);
  }
  return () => stopPolling();
}

// src/index.ts
var name = "dsh-reskin-swiss";
var inject = ["slots"];
function apply(ctx) {
  ctx.effect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-reskin-swiss", "");
    const style = document.createElement("style");
    style.id = "dsh-reskin-swiss";
    style.textContent = css;
    document.head.appendChild(style);
    const stopObservers = startObservers(root);
    try {
      applySettings(ctx);
    } catch (err) {
      console.warn("[dsh-reskin-swiss] settings init failed:", err);
    }
    return () => {
      style.remove();
      root.removeAttribute("data-reskin-swiss");
      root.removeAttribute("data-reskin-swiss-theme");
      root.removeAttribute("data-reskin-swiss-sidebar");
      root.removeAttribute("data-reskin-swiss-fade");
      root.removeAttribute("data-reskin-swiss-focus");
      stopObservers();
    };
  }, "dsh-reskin-swiss: stylesheet + observers");
}

    return module.exports
  },
});
