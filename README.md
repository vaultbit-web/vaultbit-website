# Vaultbit — public website

Production marketing site for [vaultbit.es](https://vaultbit.es): a Spanish advisory firm for Bitcoin custody, crypto inheritance planning and Web3 project delivery. Landing, service pages, a long-form "story" section, a newsletter archive and two lead-generation funnels.

> **About this repository.** This is a **sanitized public snapshot** of a private monorepo, published as part of a developer/security-auditor portfolio. It is intentionally re-cut with fresh history through an allowlist-based publishing pipeline (path allowlist → redaction transforms → a secret/PII scanner + [gitleaks](https://github.com/gitleaks/gitleaks) as a hard gate). It is source-available for review, not an installable product: **all rights reserved**.

## Stack

- **Astro 5** (static output), TypeScript islands, MDX content collections
- GSAP for scroll motion, `@fontsource-variable/inter`
- Docker multi-stage: `node:20-alpine` build → static runtime with `serve`
- Deployed with **Dokploy** (auto-deploy on push in the private repo)

## Architecture notes

- `src/data/` drives the service pages (data-first pages, one template per family).
- `src/content/` holds the newsletter as an Astro content collection with RSS.
- `public/diagnostico/` is a standalone, dependency-free HTML funnel (self-contained quiz that writes leads to Supabase under anon RLS).
- AI-SEO surface: `public/llms.txt`, `public/AGENTS.md`, `public/pricing.md` are first-class build artifacts, not an afterthought.

## Security decisions

- **No secrets in the repo.** The Supabase client is env-driven (`PUBLIC_SUPABASE_URL` / `PUBLIC_SUPABASE_ANON_KEY`); the anon key is public-by-design and every table the forms touch is protected by strict Postgres **RLS** (`return=minimal` inserts, no reads).
- Meta Pixel loads **only after cookie consent**.
- Security headers and CSP are enforced at the edge (see `public/serve.json` and the Dockerfile comment about why `serve -s` is deliberately avoided).
- In May 2026 an early version of this codebase leaked a Meta API token. The response (rotation, `.gitignore` hardening, and eventually the snapshot-publishing pipeline that produced this repo) is the origin story of the publishing gate described above: history is never published, only audited snapshots are.

## How it was built

Solo founder + Claude Code, with a docs-as-code workflow: research → verified copy (every claim fact-checked) → data-driven pages → deploy. The same pipeline publishes social/newsletter assets on a schedule.

## Environment

See [`.env.example`](.env.example). Nothing in this repo runs against production infrastructure: all identifiers are placeholders.

## Live

**https://vaultbit.es**
