# Split Smart User Guide

End-user help center for **Split Smart**, published with [Nextra](https://nextra.site).

Repo: [github.com/SplitSmarter/user-guide](https://github.com/SplitSmarter/user-guide)  
Local path: `D:\Projects\split smarter\user-guide`

| Path | Role |
|------|------|
| `content/` | Published MDX (Nextra + future agents/embeds) |
| `snippets/` | Body-only MDX partials (not routes) |
| `meta/` | Authoring guides & IA plans (never published) |
| `scripts/` | Manifest / export stubs for agents and embeds |
| `patches/` | `patch-package` fix for `nextra-theme-docs` Layout Zod validation |

Design reference: `split-smart/backend/design.md` (backup: `design.md.bak`).

## Develop

```bash
npm install
npm run dev
```

- Site redirects `/` to a locale (cookie or browser preference), e.g. [http://localhost:3000/en](http://localhost:3000/en)
- Switch language with the **language menu** in the sidebar (not via sidebar folders)

## Build

```bash
npm run build
npm start
```

## Later phases

```bash
npm run manifest        # docs-manifest.json for agents (scans content/ only)
npm run export:content  # export/pages.json for Vite / React Native embeds
```

## Locales

- `en` — canonical
- `hi`, `zh` — parallel trees under `content/{locale}/`
- Brand/protocol names stay Latin (see `meta/authoring/locale-and-proper-nouns.md`)
- Human UI: Nextra `LocaleSwitch` (sidebar language menu). URLs: `/en/...`, `/hi/...`, `/zh/...`

## Notes

- `middleware.js` (from `nextra/locales`) redirects unprefixed paths to a locale.
- A small `patch-package` patch makes `Layout`’s Zod `children` field optional (Nextra 4.6.1 + Zod 4). Applied on `npm install`.
