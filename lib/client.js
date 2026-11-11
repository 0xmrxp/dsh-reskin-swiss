/**
 * Swiss Typographic — stock DSH reskin for the DeepSeek Harness web GUI.
 * GENERATED FILE — built from src/ with esbuild (CJS), served via the official
 * client-module loader (window.__ModuleLoader__).
 */
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
  name: () => name
});
module.exports = __toCommonJS(src_exports);

// src/swiss.css.ts
var css = "/* Applied by dsh-reskin-swiss client module. html[data-reskin-swiss] is stamped on boot. */\n/**\n * Swiss Typographic \u2014 stock DSH reskin stylesheet.\n * Remaps the official --dsw-alias-* semantic tokens of the built-in web frontend.\n * Scoped: light values on html[data-reskin-swiss] body, dark on html[data-reskin-swiss] body[data-ds-dark-theme].\n */\n\n/* ---- Type ------------------------------------------------------------------\n * Helvetica Neue is the canonical Swiss face; it ships on macOS. Inter is the\n * self-contained modern stand-in with near-identical neutrality. No serif,\n * no decorative face anywhere: typography does the hierarchy, never ornament.\n * -------------------------------------------------------------------------- */\nhtml[data-reskin-swiss] body {\n  --st-sans: 'Helvetica Neue', 'Inter', 'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', Arial, sans-serif;\n  --st-mono: 'SF Mono', 'JetBrains Mono', 'Noto Sans Mono CJK SC', ui-monospace, Menlo, Consolas, monospace;\n  --st-red: #E30613;\n  --st-red-press: #B80510;\n  --st-ink: #111111;\n}\n\n/* ============================================================================\n * LIGHT \u2014 paper\n * ========================================================================== */\nhtml[data-reskin-swiss] body {\n  /* surfaces: pure canvas, then a strict gray ladder */\n  --dsw-alias-bg-base: #ffffff;\n  --dsw-alias-bg-layer-1: #fafafa;\n  --dsw-alias-bg-layer-2: #f2f2f2;\n  --dsw-alias-bg-layer-3: #e8e8e8;\n  --dsw-alias-bg-layer-4: #dcdcdc;\n  --dsw-alias-bg-module-platform: #fafafa;\n  --dsw-alias-bg-skeleton: #1111110a;\n\n  /* masks: ink, scaled */\n  --dsw-alias-bg-mask-1: #1111111f;\n  --dsw-alias-bg-mask-2: #11111133;\n  --dsw-alias-bg-mask-3: #11111166;\n\n  /* borders: the grid. hairlines, never shadows-that-look-like-borders */\n  --dsw-alias-border-l1: #e6e6e6;\n  --dsw-alias-border-l2: #d9d9d9;\n  --dsw-alias-border-l2-darkmode-thin: #d9d9d9;\n  --dsw-alias-border-l3: #bfbfbf;\n  --dsw-alias-border-l4: #999999;\n\n  /* labels: near-black ink, quiet grays */\n  --dsw-alias-label-primary: #111111;\n  --dsw-alias-label-primary-bluish: #111111;\n  --dsw-alias-label-primary-dimmed: #3d3d3d;\n  --dsw-alias-label-primary-foreground: #111111;\n  --dsw-alias-label-primary-inverted: #ffffff;\n  --dsw-alias-label-secondary: #555555;\n  --dsw-alias-label-tertiary: #808080;\n  --dsw-alias-label-caption: #8c8c8c;\n  --dsw-alias-label-dimmed: #a6a6a6;\n\n  /* brand: the one red */\n  --dsw-alias-brand-primary: #E30613;\n  --dsw-alias-brand-text: #111111;\n\n  /* buttons: flat rectangles, red or ink */\n  --dsw-alias-button-primary-fill: #E30613;\n  --dsw-alias-button-primary-hover: #B80510;\n  --dsw-alias-button-contrast-fill: #111111;\n  --dsw-alias-button-ghost-active-fill: #e8e8e8;\n  --dsw-alias-button-ghost-active-hover: #dcdcdc;\n  --dsw-alias-button-ghost-active-border: #1111114d;\n\n  /* interactive */\n  --dsw-alias-interactive-bg-hover: #1111110a;\n  --dsw-alias-interactive-bg-active: #11111114;\n  --dsw-alias-interactive-bg-hover-accent: #E3061314;\n  --dsw-alias-interactive-bg-hover-danger: #E306131f;\n\n  /* markdown: quiet grays, no tinted code blocks */\n  --dsw-alias-markdown-code-block: #f7f7f7;\n  --dsw-alias-markdown-code-block-banner: #f2f2f2;\n  --dsw-alias-markdown-inline-code: #f2f2f2;\n  --dsw-alias-markdown-tag: #f2f2f2;\n\n  /* state colors: functional, desaturated where possible; red belongs to brand */\n  --dsw-alias-state-error-primary: #C41E25;\n  --dsw-alias-state-warn-primary: #B8860B;\n  --dsw-alias-state-success-primary: #2E7D32;\n  --dsw-alias-state-business-primary: #E30613;\n\n  /* shell anchors */\n  --dsw-specific-sidebar-fill: #fafafa;\n  --dsw-specific-sidebar-nav-item-hover: #1111110a;\n  --dsw-specific-sidebar-nav-item-active: #e8e8e8;\n  --dsw-specific-sidebar-nav-item-active-accent: #E30613;\n  --dsw-specific-input-major: #ffffff;\n  --dsw-specific-menu: #ffffff;\n  --dsw-specific-bubble: #ffffff;\n  --dsw-specific-selector: #f2f2f2;\n  --dsw-specific-tip: #e8e8e8;\n\n  /* overlays */\n  --dsw-alias-tooltip-bg: #111111;\n  --dsw-alias-tooltip-key-bg: #11111133;\n  --dsw-alias-toast-bg: #111111;\n  --dsw-hovercard-bg: #ffffff;\n  --dsw-menu-surface-fill: #ffffff;\n\n  /* focus: the red ring is the accessibility voice of the accent */\n  --dsw-focus-ring-color: #E30613;\n  --dsw-focus-ring-width: 2px;\n\n  /* elevation: hairline + barely-there shadow; flatness is the style */\n  --dsw-elevation-stroke-color: #e6e6e6;\n  --dsw-shadow-lv1: 0 0 0 0.5px #e6e6e6;\n  --dsw-shadow-lv2: 0 1px 2px #1111110d;\n  --dsw-shadow-lv3: 0 4px 16px #1111111a;\n  --dsw-mask-blur: blur(0px);\n\n  /* radius ladder: pressed flat. 0 for chips/tags, 2px max anywhere */\n  --dsw-radius-xs: 0px;\n  --dsw-radius-sm: 0px;\n  --dsw-radius-md: 2px;\n  --dsw-radius-lg: 2px;\n  --dsw-radius-xl: 2px;\n  --dsw-radius-panel: 0px;\n\n  /* typography */\n  --dsw-font-family: var(--st-sans);\n  --dsw-font-markdown-base: var(--st-sans);\n  --dsw-font-markdown-base-strong: var(--st-sans);\n  --dsw-font-markdown-code: var(--st-mono);\n  --dsw-font-markdown-code-block: var(--st-mono);\n  --dsw-font-markdown-code-font-family: var(--st-mono);\n  --dsw-font-markdown-h1: var(--st-sans);\n  --dsw-font-markdown-h2: var(--st-sans);\n  --dsw-font-markdown-h3: var(--st-sans);\n  --dsw-alias-link: #111111;\n\n  /* scrollbars: hairline ink */\n  --dsw-alias-scrollbar-bg-l2: #1111111f;\n  --dsw-alias-scrollbar-hover-l2: #1111113d;\n}\n\n/* ============================================================================\n * DARK \u2014 print-shop black. Same red, same grid, ink inverted.\n * ========================================================================== */\n/* official info-fill buttons (send arrow etc.) route through --dsw-static-deepseek-500;\n   remap the alias instead so the red takes over */\nhtml[data-reskin-swiss] body {\n  --dsw-alias-button-info-fill: #E30613;\n  --dsw-alias-state-business-tertiary: #E3061314;\n  --dsw-alias-state-idle-primary: #808080;\n}\n\nhtml[data-reskin-swiss] body[data-ds-dark-theme] {\n  /* surfaces */\n  --dsw-alias-bg-base: #111111;\n  --dsw-alias-bg-layer-1: #171717;\n  --dsw-alias-bg-layer-2: #1f1f1f;\n  --dsw-alias-bg-layer-3: #292929;\n  --dsw-alias-bg-layer-4: #333333;\n  --dsw-alias-bg-module-platform: #171717;\n  --dsw-alias-bg-skeleton: #ffffff0a;\n\n  --dsw-alias-bg-mask-1: #00000040;\n  --dsw-alias-bg-mask-2: #00000066;\n  --dsw-alias-bg-mask-3: #000000a6;\n\n  /* borders: the grid in reverse, gray on black */\n  --dsw-alias-border-l1: #262626;\n  --dsw-alias-border-l2: #333333;\n  --dsw-alias-border-l2-darkmode-thin: #333333;\n  --dsw-alias-border-l3: #4d4d4d;\n  --dsw-alias-border-l4: #737373;\n\n  /* labels */\n  --dsw-alias-label-primary: #f5f5f5;\n  --dsw-alias-label-primary-bluish: #f5f5f5;\n  --dsw-alias-label-primary-dimmed: #d4d4d4;\n  --dsw-alias-label-primary-foreground: #111111;\n  --dsw-alias-label-primary-inverted: #111111;\n  --dsw-alias-label-secondary: #a3a3a3;\n  --dsw-alias-label-tertiary: #737373;\n  --dsw-alias-label-caption: #666666;\n  --dsw-alias-label-dimmed: #4d4d4d;\n\n  /* brand: same red, lifted one step for contrast on black */\n  --dsw-alias-brand-primary: #FF2A1F;\n  --dsw-alias-brand-text: #f5f5f5;\n\n  /* buttons */\n  --dsw-alias-button-primary-fill: #FF2A1F;\n  --dsw-alias-button-primary-hover: #E30613;\n  --dsw-alias-button-contrast-fill: #f5f5f5;\n  --dsw-alias-button-ghost-active-fill: #292929;\n  --dsw-alias-button-ghost-active-hover: #333333;\n  --dsw-alias-button-ghost-active-border: #ffffff4d;\n\n  /* interactive */\n  --dsw-alias-interactive-bg-hover: #ffffff0d;\n  --dsw-alias-interactive-bg-active: #ffffff17;\n  --dsw-alias-interactive-bg-hover-accent: #FF2A1F1f;\n  --dsw-alias-interactive-bg-hover-danger: #FF2A1F2e;\n\n  /* markdown */\n  --dsw-alias-markdown-code-block: #1a1a1a;\n  --dsw-alias-markdown-code-block-banner: #1f1f1f;\n  --dsw-alias-markdown-inline-code: #1f1f1f;\n  --dsw-alias-markdown-tag: #1f1f1f;\n\n  /* state */\n  --dsw-alias-state-error-primary: #FF4A42;\n  --dsw-alias-state-warn-primary: #E0A63F;\n  --dsw-alias-state-success-primary: #4CAF6D;\n  --dsw-alias-state-business-primary: #FF2A1F;\n\n  /* shell anchors */\n  --dsw-specific-sidebar-fill: #171717;\n  --dsw-specific-sidebar-nav-item-hover: #ffffff0d;\n  --dsw-specific-sidebar-nav-item-active: #292929;\n  --dsw-specific-sidebar-nav-item-active-accent: #FF2A1F;\n  --dsw-specific-input-major: #1a1a1a;\n  --dsw-specific-menu: #1a1a1a;\n  --dsw-specific-bubble: #171717;\n  --dsw-specific-selector: #1f1f1f;\n  --dsw-specific-tip: #292929;\n\n  /* overlays */\n  --dsw-alias-tooltip-bg: #f5f5f5;\n  --dsw-alias-tooltip-fg: #111111;\n  --dsw-alias-tooltip-key-bg: #ffffff33;\n  --dsw-alias-toast-bg: #f5f5f5;\n  --dsw-alias-toast-label: #111111;\n  --dsw-hovercard-bg: #1a1a1a;\n  --dsw-menu-surface-fill: #1a1a1a;\n\n  --dsw-focus-ring-color: #FF2A1F;\n\n  --dsw-elevation-stroke-color: #262626;\n  --dsw-shadow-lv1: 0 0 0 0.5px #262626;\n  --dsw-shadow-lv2: 0 1px 2px #00000059;\n  --dsw-shadow-lv3: 0 4px 16px #00000080;\n\n  --dsw-alias-scrollbar-bg-l2: #ffffff1f;\n  --dsw-alias-scrollbar-hover-l2: #ffffff3d;\n}\n";

// src/index.ts
var name = "dsh-reskin-swiss";
function apply(ctx) {
  ctx.effect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-reskin-swiss", "");
    const style = document.createElement("style");
    style.id = "dsh-reskin-swiss";
    style.textContent = css;
    document.head.appendChild(style);
    return () => {
      style.remove();
      document.documentElement.removeAttribute("data-reskin-swiss");
    };
  }, "dsh-reskin-swiss: inject swiss stylesheet");
}

    return module.exports
  },
});
