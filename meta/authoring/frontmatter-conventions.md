# Frontmatter conventions

Required on every `content/**/*.mdx` page:

```yaml
id: doc-exp-split-expense          # stable across locales
locale: en
available_locales: [en, hi, zh]
title: Split an expense
summary: One or two sentences for search and cards.
taxonomy:
  domain: expenses
  module: smart-ledger
  feature: split                   # optional
  doc_type: how-to
  audience: [end-user]
entity_tags: [split, sharers]
keywords: [split bill, paid by]
related_docs: [doc-exp-paid-by-vs-sharers]
last_updated: YYYY-MM-DD
```

## Stable `id`

- Same `id` on `en`, `hi`, and `zh` files for one document.
- Pattern: `doc-<short-domain>-<slug>` (see `meta/taxonomy.schema.json`).
- Agents map translations via `id` only — do not add `canonical_id`.

## Snippets

Files under `_snippets/` must **not** use this page frontmatter. They are body-only MDX imported relatively from content pages.
