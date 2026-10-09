/**
 * Phase 2 stub: scan content/** only and emit docs-manifest.json grouped by stable id.
 * Does not index meta/ or _snippets/.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const contentRoot = path.join(root, 'content')

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, acc)
    else if (/\.mdx?$/.test(entry.name) && entry.name !== '_meta.js') acc.push(full)
  }
  return acc
}

const byId = new Map()
const locales = new Set()

for (const file of walk(contentRoot)) {
  const raw = fs.readFileSync(file, 'utf8')
  const { data } = matter(raw)
  if (!data.id || !data.locale) continue
  locales.add(data.locale)
  const rel = path.relative(root, file).split(path.sep).join('/')
  const doc = byId.get(data.id) ?? {
    id: data.id,
    locales: {},
    taxonomy: data.taxonomy ?? {},
    entity_tags: data.entity_tags ?? []
  }
  doc.locales[data.locale] = {
    path: rel,
    title: data.title ?? '',
    summary: data.summary ?? '',
    keywords: data.keywords ?? []
  }
  byId.set(data.id, doc)
}

const manifest = {
  generated_at: new Date().toISOString(),
  locales: [...locales].sort(),
  documents: [...byId.values()].sort((a, b) => a.id.localeCompare(b.id))
}

const out = path.join(root, 'docs-manifest.json')
fs.writeFileSync(out, JSON.stringify(manifest, null, 2))
console.log(`Wrote ${manifest.documents.length} documents → ${out}`)
