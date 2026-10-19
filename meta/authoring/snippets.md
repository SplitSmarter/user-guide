# Snippets

Reusable MDX fragments live in `snippets/{locale}/` at the **repo root** (not under `content/`).

## Rules

1. Body-only — no page YAML frontmatter (`id`, `taxonomy`, …).
2. Not routes — never listed in `_meta.js`.
3. Import relatively from content:

```mdx
import ExampleNote from '../../../snippets/en/example-note.mdx'
```

4. Match locale of the importing page.
5. Manifest and export scripts must ignore `snippets/`.
