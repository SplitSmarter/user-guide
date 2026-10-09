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

- Home: [http://localhost:3000](http://localhost:3000)
- English docs: [http://localhost:3000/docs/en](http://localhost:3000/docs/en)

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
- `hi`, `zh` — parallel trees; brand/protocol names stay Latin (see `meta/authoring/locale-and-proper-nouns.md`)

## Notes

- Docs are served under `/docs/*` via Nextra `contentDirBasePath`.
- A small `patch-package` patch makes `Layout`’s Zod `children` field optional (required by Nextra 4.6.1 + Zod 4). Applied on `npm install`.
