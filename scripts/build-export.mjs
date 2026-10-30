import { spawnSync } from 'node:child_process'
import { createRequire } from 'node:module'
import { existsSync, renameSync } from 'node:fs'

const nextBin = createRequire(import.meta.url).resolve('next/dist/bin/next')
const middleware = new URL('../middleware.js', import.meta.url)
const hidden = new URL('../middleware.export-disabled.js', import.meta.url)

let moved = false
function restoreMiddleware() {
  if (!moved) return
  if (existsSync(hidden) && !existsSync(middleware)) {
    renameSync(hidden, middleware)
  }
  moved = false
}

if (!existsSync(middleware) && existsSync(hidden)) {
  renameSync(hidden, middleware)
}
if (existsSync(middleware)) {
  renameSync(middleware, hidden)
  moved = true
}

process.on('exit', restoreMiddleware)
process.on('SIGINT', () => {
  restoreMiddleware()
  process.exit(1)
})
process.on('SIGTERM', () => {
  restoreMiddleware()
  process.exit(1)
})

const result = spawnSync(process.execPath, [nextBin, 'build'], {
  stdio: 'inherit',
  env: { ...process.env, GUIDE_BASE_PATH: '/guide' }
})

restoreMiddleware()

if (result.error) {
  console.error(result.error)
  process.exit(1)
}

process.exit(result.status === null ? 1 : result.status)
