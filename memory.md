# memory.md

Durable context for the personal-web workspace. Short, factual, dated entries — newest first.

## 2026-10-20

- 网站部署上线：https://phdstone.github.io/（仓库 `PhDStone.github.io`，公开；本 workspace 即仓库）。推送 `main` 后由 Actions 工作流 `.github/workflows/deploy-pages.yml` 将 `web/` 发布到 GitHub Pages（Pages 模式已从 legacy 切换为 workflow）。日常更新：改 `web/` 文件 → commit → push，约 1 分钟上线。
- 远程旧版网站（Vite/React，旧「材料研发工程师」定位）历史已合并保留：旧版 `index.html`/`assets/`/`photo.png`/`杨欣磊-简历.pdf` 均未删，旧源码在 `source` 分支；本地留有备份分支 `pre-merge-backup`（已无用途，可删）。
- gh CLI 已安装并登录 GitHub（PhDStone 账号，含 `workflow` 权限）；Qoder GitHub 连接器写工作流文件报内部错误，本仓库操作统一走 gh/git。
- 初始化本地 Git 仓库（无远程）：基线提交 `2047762`，`.gitignore` 忽略 `.DS_Store`；仓库级身份设为 杨欣磊 <xinlei2001@foxmail.com>。网站文件未改动。

## 2026-10-19

- Workspace moved from `MasterProject/personal-web/` to `AICowork/personal-web/` — unrelated to the master's thesis; now the third top-level workspace.
- Current state: static engineer portfolio (title "杨欣磊 — 工程师作品集"), exported from Qoder; site files in `web/`; no deployment yet.

## 2026-10-19

- Site redesigned and repositioned around the incoming SMSC role (user-approved decisions): full English copy; cooler blue/graphite palette; sections = Hero (bridge-positioning headline) / Selected Work (EchemPro, RuNi–M 工作二, Ru/NiMo 工作一, capstone QA assistant tagged "In progress") / 5-phase pre-onboarding roadmap (all statuses "Planned" — user flips as progress happens) / Career / Skills (split "using every week" vs "learning now") / Contact (email + RedBook only; demo form removed in favor of mailto).
- Fake designer-portfolio demo content fully replaced; every project on the page is real.
