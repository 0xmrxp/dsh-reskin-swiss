/**
 * Swiss Typographic reskin — host face.
 *
 * Declares the plugin's Config schema (two volatile booleans) so the official
 * Plugins page renders its bundle-configuration card, and serves the current
 * values at GET /dsh-reskin-swiss/config for the browser half to poll.
 */
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname as pathDirname } from 'node:path'
import { join, dirname } from 'node:path'
const __filename2 = fileURLToPath(import.meta.url)
const __dirname2 = pathDirname(__filename2)
import Schema from '@deepseek-ai/schemastery'

export const name = 'dsh-reskin-swiss'

export const Config = Schema.object({
  messageFade: Schema.boolean().default(true).volatile(),
  focusRing: Schema.boolean().default(true).volatile(),
})

export const inject = ['webServer']

export function apply(ctx, config) {
  // Persist current values where the browser half (and users) can read them.
  ctx.effect(() => {
    const statePath = join(process.env.DSH_HOME || join(process.env.HOME || '', '.dsh'), 'dsh-reskin-swiss', 'config.json')
    const write = () => {
      try {
        mkdirSync(dirname(statePath), { recursive: true })
        writeFileSync(statePath, JSON.stringify({
          messageFade: config.messageFade.get(),
          focusRing: config.focusRing.get(),
        }, null, 2))
      } catch (err) {
        ctx.logger?.warn?.('dsh-reskin-swiss: cannot persist state:', err)
      }
    }
    write()
    const off = ctx.on('loader/volatile-update', () => write())
    return () => { try { off?.() } catch {} }
  }, 'dsh-reskin-swiss: persist config state')

  // Serve GET /dsh-reskin-swiss/config (official webserver route registration)
  ctx.effect(() => {
    const server = ctx.webServer ?? ctx
    const statePath = join(process.env.DSH_HOME || join(process.env.HOME || '', '.dsh'), 'dsh-reskin-swiss', 'config.json')
    try {
      const dispose = server.register({
        kind: 'exact',
        path: '/dsh-reskin-swiss/config',
        handler: (req, res) => {
          if (req.method !== 'GET' && req.method !== 'HEAD') {
            res.statusCode = 405
            res.end()
            return
          }
          let body = '{"messageFade":true,"focusRing":true}'
          try {
            body = readFileSync(statePath, 'utf8')
            body = readFileSync(statePath, 'utf8')
          } catch {}
          res.setHeader('content-type', 'application/json; charset=utf-8')
          res.setHeader('cache-control', 'no-cache')
          res.end(req.method === 'HEAD' ? undefined : body)
        },
      })
      return () => { try { dispose?.() } catch {} }
    } catch (err) {
      ctx.logger?.warn?.('dsh-reskin-swiss: config route unavailable:', err)
    }
  }, 'dsh-reskin-swiss: config route')

  // Serve the brand replacement assets (SVGs) for the CSS mask/background swap
  ctx.effect(() => {
    const server = ctx.webServer ?? ctx
    const assetsDir = join(__dirname2, 'assets')
    try {
      const dispose = server.register({
        kind: 'prefix',
        path: '/dsh-reskin-swiss/assets',
        handler: (req, res) => {
          if (req.method !== 'GET' && req.method !== 'HEAD') {
            res.statusCode = 405
            res.end()
            return
          }
          const url = new URL(req.url ?? '/', 'http://x').pathname
          const rel = url.slice('/dsh-reskin-swiss/assets/'.length)
          // conservative allowlist: name.svg / name.png, no traversal
          if (!/^[a-z0-9-]+\.(svg|png)$/.test(rel)) {
            res.statusCode = 404
            res.end()
            return
          }
          try {
            const body = readFileSync(join(assetsDir, rel))
            const mime = rel.endsWith('.svg') ? 'image/svg+xml' : 'image/png'
            res.setHeader('content-type', mime + '; charset=utf-8')
            res.setHeader('cache-control', 'no-cache')
            res.end(req.method === 'HEAD' ? undefined : body)
          } catch {
            res.statusCode = 404
            res.end()
          }
        },
      })
      return () => { try { dispose?.() } catch {} }
    } catch (err) {
      ctx.logger?.warn?.('dsh-reskin-swiss: assets route unavailable:', err)
    }
  }, 'dsh-reskin-swiss: assets route')
}
