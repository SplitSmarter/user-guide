# How to write tutorials

Tutorials (`tut-*.mdx`) are learning-oriented. They walk a new user through a complete outcome.

## Rules

1. One learning path end-to-end (e.g. create account → join group → log expense).
2. Assume minimal prior knowledge; link concepts instead of explaining every model inline.
3. Prefer numbered steps with expected results after each major step.
4. Do not mix API payloads, error code tables, or exhaustive option lists — those belong in reference or how-to pages.
5. Keep product proper nouns in Latin script even in `hi` / `zh` (see `locale-and-proper-nouns.md`).

## Frontmatter checklist

- `taxonomy.doc_type: tutorial`
- Stable `id` shared with all locales
- `related_docs` pointing to the next how-to or concept pages

## Suggested outline

1. What you will achieve
2. Prerequisites
3. Steps
4. What good looks like
5. Next steps (`related_docs`)
