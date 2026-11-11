# Contributing

Thanks for considering a contribution to **Swiss Typographic**!

## Ground rules

- **Design discipline first.** This skin follows the philosophy in
  [assets/DESIGN-PHILOSOPHY.md](assets/DESIGN-PHILOSOPHY.md): one red, hairline
  rules, flat corners, motion as confirmation. A PR that adds a second accent
  color, rounded corners, or decorative gradients will be declined — not
  because change is unwelcome, but because the philosophy *is* the product.
- **Motion budget**: every transition must be ≤ 200 ms, must confirm an action
  (never decorate), and must collapse under `prefers-reduced-motion`.
- **No new dependencies** in the client bundle. The runtime stays CSS +
  two attribute-filtered observers.

## Development

```sh
git clone https://github.com/0xmrxp/dsh-reskin-swiss.git
cd dsh-reskin-swiss
npm install
npm run build          # esbuild → lib/client.js
```

Test against a pure-stock profile (no community plugins — this keeps the
verification honest):

```sh
dsh rescue --from-default-profile web
dsh plugin --profile rescue add .
dsh --profile rescue --port 3081 --no-open
```

## Design tokens

All colors flow through the official `--dsw-alias-*` semantic tokens of the
built-in frontend. Never hardcode a color in `patches` or JS — remap the
token. The one exception is the accent literal `#E30613` (light) /
`#FF2A1F` (dark), which the philosophy treats as a constant, not a token.

## Submitting

1. Fork, create a branch from `main`.
2. Keep commits Conventional (`feat:`, `fix:`, `docs:`...).
3. Include a before/after screenshot for anything visual.
4. Open the PR against `main`.

## Reporting issues

Include: Harness version (`dsh --version`), profile composition
(`dsh --dump-config --profile <name>`), a screenshot, and whether the issue
reproduces on a stock profile (see above). Issues that only reproduce with
community plugins installed will be triaged as upstream.
