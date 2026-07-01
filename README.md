# Srilalitha Portfolio

A React + Vite + Tailwind CSS v4 portfolio, extracted from a Replit monorepo and
converted into a standalone project ready to deploy on Vercel.

## What was fixed

1. **`catalog:` versions replaced** — every dependency that pointed to Replit's
   internal `catalog:` version alias in `package.json` now has a real, pinned
   npm semver range (e.g. `react`: `^18.3.1`, `vite`: `^6.0.7`, `tailwindcss`: `^4.0.0`).
2. **`workspace:*` dependency removed** — `@workspace/api-client-react` was
   declared as a dependency but never actually imported anywhere in the code,
   so it was safely removed.
3. **Replit plugins removed from `vite.config.ts`** — `@replit/vite-plugin-cartographer`,
   `@replit/vite-plugin-dev-banner`, and `@replit/vite-plugin-runtime-error-modal`
   (and their imports/usage) are gone. The hard requirement for `PORT` and
   `BASE_PATH` environment variables (which would have crashed a Vercel build)
   was also removed in favor of sane defaults.
4. **Imports fixed** — the `@assets` alias used to point two directories
   above the project root (`../../attached_assets`), which doesn't exist
   outside the original monorepo. It now points to `src/assets` inside this
   project, and `Hero.tsx` / `Resume.tsx` were updated accordingly.
5. **`tsconfig.json` made self-contained** — it used to `extend` a
   `tsconfig.base.json` and reference a workspace package that live outside
   this exported folder. It's now a standalone, complete config.
6. **`vercel.json` added** — SPA rewrite rule so client-side routing/anchors
   work correctly on Vercel, plus explicit build/output settings.

## Assets

Your real profile photo and resume are included at:

- `src/assets/photo_1.png` — used in `src/components/Hero.tsx`
- `src/assets/srilalitha_resume.pdf` — used in `src/components/Resume.tsx`

To update either one later, replace the file in `src/assets/` (keeping the
same filename) or edit the import path in the corresponding component.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
vercel        # first deploy, follow prompts
vercel --prod # production deploy
```

**Option B — Vercel Dashboard**
1. Push this folder to a GitHub repo.
2. Import the repo in [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
   (Already pre-configured in `vercel.json`, so defaults will work.)
4. Deploy.

No environment variables are required.
