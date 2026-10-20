# AGENTS.md

Guidance for AI agents working in this directory.

## What This Is

**Personal website workspace** — a small static personal site positioned around the user's incoming job: process engineer (lithography, AI enablement) at SMIC South. Plain HTML/CSS/JS; no framework, no build system, no tests.

**Language: site copy is English** (user decision 2026-10-19 — targets an international audience); workspace documents and agent communication stay Chinese, with English for technical terms.

**Read `memory.md` at session start** — it holds durable context and open threads. Update it when something worth remembering happens.

## Directory Layout

| Path | Contents |
|---|---|
| `web/` | The site itself: `index.html`, `styles.css`, `script.js`. |
| `.github/` | GitHub Actions workflow — deploys `web/` to GitHub Pages on push to `main`. |
| `.设计师作品集（演示）.qoder.site` | Qoder demo project file (JSON), reference only — edit the files in `web/`, not this. |

## Working Rules

- No build step — edit `web/` files directly and open `index.html` in a browser (or any static server) to preview.
- Live at https://phdstone.github.io/ — pushing `main` auto-deploys `web/` to GitHub Pages via the existing workflow (~1 min).
- Keep asset/link paths relative; the site may be deployed under any subpath.
- Do not add build/test/deploy infrastructure beyond the existing Pages workflow unless explicitly requested.

---

*Created: 2026-10-19 — moved here from `MasterProject/` (unrelated to the thesis).*
