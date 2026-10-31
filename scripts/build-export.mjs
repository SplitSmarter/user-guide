import { spawnSync } from 'node:child_process'
import { createRequire } from 'node:module'
import { existsSync, readFileSync, renameSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

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

if (result.status !== 0) {
  process.exit(result.status === null ? 1 : result.status)
}

const require = createRequire(import.meta.url)
const pagefindPkgPath = require.resolve('pagefind/package.json')
const pagefindPkg = JSON.parse(readFileSync(pagefindPkgPath, 'utf8'))
const pagefindBin = pagefindPkg.bin?.pagefind ?? pagefindPkg.bin
const pagefindEntry = path.join(path.dirname(pagefindPkgPath), pagefindBin)
const outDir = fileURLToPath(new URL('../out', import.meta.url))

const indexed = spawnSync(
  process.execPath,
  [pagefindEntry, '--site', outDir, '--output-subdir', '_pagefind'],
  { stdio: 'inherit' }
)

if (indexed.error) {
  console.error(indexed.error)
  process.exit(1)
}

if (!existsSync(path.join(outDir, '_pagefind', 'pagefind.js'))) {
  console.error('pagefind did not write out/_pagefind/pagefind.js')
  process.exit(1)
}

process.exit(indexed.status === null ? 1 : indexed.status)
