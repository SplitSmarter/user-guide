# Diátaxis checklist

Before merging a page, confirm the type and that the page does one job.

| Type | Question the page answers | Avoid |
|------|---------------------------|-------|
| Tutorial | “Guide me through my first success” | Option dumps, edge cases |
| How-to | “How do I achieve X?” | Long conceptual essays |
| Concept | “Why does this work this way?” | Click-by-click UI recipes |
| Reference | “What are the exact values / terms?” | Narrative onboarding |

## Filename prefixes

- `tut-` tutorial
- `howto-` how-to
- `concept-` concept
- `ref-` reference

## Navigation

Every published page must appear in the locale `_meta.js` (or be intentionally hidden with Nextra meta display rules). Authoring files under `meta/` never appear in the sidebar.
