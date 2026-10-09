# Locale and proper-noun policy

Apply to `hi` and `zh` (and any future locales).

## Translate

- Instructions, explanations, UI-adjacent descriptions of what the user does
- Summaries and localized `keywords` for search

## Keep in Latin / standardized form

Use the allowlist in `meta/taxonomy.schema.json` `proper_nouns_allowlist`, including:

- `Split Smart`
- `Smart Ledger`
- `Debt Sync`
- `UPI`
- `QR Code`
- `Google Pay`
- `VPA`

Do not invent awkward native-script “translations” of these names. A short parenthetical gloss on first mention is fine, e.g. explaining what UPI is while keeping the token `UPI`.

## Snippet locales

Import the snippet whose folder matches the page `locale` (`_snippets/hi/...` from Hindi pages).
