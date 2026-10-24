# User guide information architecture

Source of truth for sidebar structure. Keep in sync with `content/{locale}/_meta.js` and `split-smart/backend/design.md`.

## Tree

- Getting started — one dinner: account, group, first expense (paid-by vs sharers), settle
- Groups — inside a group, roles and visibility, invites
- People — relationship and relation, add a person, what a connection allows, custom contacts
- Expenses (Smart Ledger) — paid-by vs sharers, split, items, recurring, receipts
- Settlements (Debt Sync) — record a transfer (person or merchant); the expense switch pays a merchant; a transfer alone does not clear debt
- Budgets — create a cap (just me, shared, or a group); soft warns and hard can refuse a new expense; a group budget shows on the group’s Budgets tab
- Memories — what a Memory is; components (identity, date window, scope, active memory, photos, expense links, lifecycle); guides (create a trip memory, activate or switch, attach to an expense, complete a memory)
- Places — save a place; location on an expense; merchant branch on a transfer
- Account & privacy — log in with Google, reset a password, a hidden profile cannot be discovered
- Reference — glossary, statuses, FAQ

## Audiences

Primary: end users. Agents and embeds consume the same `content/` later; developer API docs are not in v1 primary nav.
