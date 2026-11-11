# dsh-reskin-swiss

[![license](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

**Swiss Typographic reskin for the built-in DeepSeek Harness Web GUI — official client-module mechanism only.**

No community plugin stack required. This package uses the official `dsh.client`
extension point (Client Modules) of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
to inject one stylesheet that remaps the built-in frontend's official
`--dsw-alias-*` semantic tokens.

## What it changes

One red (#E30613 light / #FF2A1F dark). Everything else is ink on paper:

- Pure white canvas (light) / print-shop black #111111 (dark)
- Strict gray ladder, hairline borders
- Radius ladder pressed flat: 0–2px
- Helvetica Neue → Inter → CJK fallback chain
- Send button and brand accents routed to Swiss red (including the
  `--dsw-alias-button-info-fill` path that flows through
  `--dsw-static-deepseek-500`)

## Install into a profile

```sh
git clone https://github.com/0xmrxp/dsh-reskin-swiss.git
cd dsh-reskin-swiss
dsh plugin --profile web add .
```

Or into a pure-stock profile:

```sh
dsh rescue --from-default-profile web   # fresh profile with only official bundles
cd dsh-reskin-swiss
dsh plugin --profile rescue add .
dsh --profile rescue --port 3081 --no-open
```

Reload the Web UI. Uninstall with `dsh plugin --profile <name> remove dsh-reskin-swiss`.

## What it includes (layered)

**Layer 1 — token reskin.** Full remap of the official `--dsw-alias-*` semantic
tokens (light + dark), radius ladder pressed flat, Helvetica-first type chain.

**Layer 2 — attribute stamping & restrained motion.** Two attribute-filtered
MutationObservers mirror official shell state onto the plugin's own
`data-reskin-swiss-theme` (light/dark) and `data-reskin-swiss-sidebar`
(open/collapsed) attributes — read-only against official attributes, no DOM
rewriting. Plus one orchestrated moment (160 ms message fade, honors
`prefers-reduced-motion`) and an unmistakable `focus-visible` red ring.

## How it works

```
package.json       # dsh.client: { platform: "web" } + exports["./client"]
cordis.patch.yml   # - insert: [id: ui-reskin-swiss, name: dsh-reskin-swiss]
lib/client.js      # window.__ModuleLoader__.load({ id, factory }) → injects <style>
```

The stylesheet scopes light values under `html[data-reskin-swiss] body`
(attribute stamped by the plugin at boot, 0-1-1 specificity, beating the
official `body` definitions at 0-0-1 regardless of load order) and dark
values under `html[data-reskin-swiss] body[data-ds-dark-theme]`.

Cleanup is automatic: the `<style>` element and the scope attribute are
removed when the plugin unloads (Cordis effect lifetime).

## Sibling project

- [dsh-skin-swiss-typographic](https://github.com/0xmrxp/dsh-skin-swiss-typographic) —
  the same design as a skin-center v2 skin (pure asset directory, for users of
  the community skin-center).

## License

[MIT](./LICENSE) © 0xmrxp
