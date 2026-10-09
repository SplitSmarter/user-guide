import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const root = path.resolve('content')

function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name)
    if (e.isDirectory()) walk(f, a)
    else if (e.name.endsWith('.mdx') && !f.includes(`${path.sep}_snippets${path.sep}`)) a.push(f)
  }
  return a
}

function toYaml(data) {
  const lines = ['---']
  const add = (k, v) => {
    if (v === undefined || v === null) return
    if (typeof v === 'string') lines.push(`${k}: ${JSON.stringify(v)}`)
    else if (typeof v === 'boolean' || typeof v === 'number') lines.push(`${k}: ${v}`)
    else lines.push(`${k}: ${JSON.stringify(v)}`)
  }
  add('title', data.title)
  add('description', data.description)
  if (data.asIndexPage) add('asIndexPage', true)
  add('id', data.id)
  add('locale', data.locale)
  add('available_locales', data.available_locales)
  add('summary', data.summary)
  add('taxonomy', data.taxonomy)
  add('entity_tags', data.entity_tags)
  add('keywords', data.keywords)
  add('related_docs', data.related_docs)
  add('version_introduced', data.version_introduced)
  add('last_updated', data.last_updated)
  lines.push('---', '')
  return lines.join('\n')
}

let count = 0
for (const file of walk(root)) {
  const raw = fs.readFileSync(file, 'utf8')
  const { data, content } = matter(raw)
  const title = data.title || path.basename(file, '.mdx')
  const summary = data.summary || data.description || title
  const next = {
    title,
    description: summary,
    asIndexPage: path.basename(file) === 'index.mdx',
    id: data.id,
    locale: data.locale,
    available_locales: data.available_locales,
    summary,
    taxonomy: data.taxonomy,
    entity_tags: data.entity_tags,
    keywords: data.keywords,
    related_docs: data.related_docs,
    version_introduced: data.version_introduced,
    last_updated: data.last_updated
  }
  const body = content.replace(/^\uFEFF/, '').replace(/^\s*\n/, '')
  fs.writeFileSync(file, toYaml(next) + body, 'utf8')
  count++
}
console.log('rewrote', count)
