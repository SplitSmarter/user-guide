/**
 * Phase 3 stub: export content/** pages as JSON for Vite / React Native embeds.
 * Host apps render body with their own chrome. Skips meta/ and _snippets/.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const contentRoot = path.join(root, 'content')
const outDir = path.join(root, 'export')

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, acc)
    else if (/\.mdx?$/.test(entry.name) && !entry.name.startsWith('_')) acc.push(full)
  }
  return acc
}

fs.mkdirSync(outDir, { recursive: true })
const pages = []

for (const file of walk(contentRoot)) {
  const raw = fs.readFileSync(file, 'utf8')
  const { data, content } = matter(raw)
  if (!data.id) continue
  pages.push({
    id: data.id,
    locale: data.locale,
    title: data.title,
    summary: data.summary,
    taxonomy: data.taxonomy,
    related_docs: data.related_docs ?? [],
    body: content.trim(),
    source_path: path.relative(root, file).split(path.sep).join('/')
  })
}

const out = path.join(outDir, 'pages.json')
fs.writeFileSync(out, JSON.stringify({ generated_at: new Date().toISOString(), pages }, null, 2))
console.log(`Exported ${pages.length} pages → ${out}`)
