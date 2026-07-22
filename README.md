# Vỹ Nguyễn — Portfolio

Dark-minimalist creative portfolio for Nguyễn Ngô Triều Vỹ, built with React + TypeScript + Tailwind CSS v4 + Framer Motion, recreated pixel-for-pixel from the design handoff in `design_handoff_vy_portfolio/`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/            UI sections (Navbar, Hero, AboutJourney, ServicesExpertise, ...)
  components/featured-work/   Project 01/02/03 (the big Featured Work section)
  context/ThemeLangContext.tsx  theme (dark/light) + lang (vi/en) + design tokens
  data/content.ts         all static copy/data arrays (VC, DOCS, CERTS, SPD, ...)
  data/imageAssets.ts      slot-id -> image URL map (see below)
  i18n/dict.ts             VI/EN copy dictionary
public/assets/            image files referenced by imageAssets.ts
```

## Filling in the empty image slots

Every image placeholder in the site (dashed box with gray label text) is wired to an expected file path in `src/data/imageAssets.ts`. **You do not need to touch any code** — just save your file with the exact name below into `public/assets/`, and it appears automatically the next time the page loads.

12 slots already have sample images (carried over from the design prototype) — replace them with your real assets whenever you're ready.

| File to add (in `public/assets/`) | Where it appears | Recommended shape |
|---|---|---|
| `portrait.webp` *(sample)* | Hero circular photo | Square, ≥800×800px, face centered |
| `p1v-0.webp` *(sample)*, `p1v-1.jpg`, `p1v-2.jpg`, `p1v-3.jpg` | Project 01 — vertical video thumbnails | Portrait 3:4 |
| `p1w-0.webp` *(sample)*, `p1w-1.webp` *(sample)*, `p1w-2.jpg`, `p1w-3.jpg` | Project 01 — 16:9 cinematic slider frames | Landscape 16:9 |
| `p2-cms.jpg` | Project 02 — CMS/website screenshot | Landscape, any (blurred behind status rows) |
| `p2-plan.jpg` | Project 02 — cropped Excel/content-calendar snippet | Landscape strip |
| `p2-email.webp` *(sample)* | Project 02 — full email design | Tall, any width (renders at natural aspect ratio, scrollable) |
| `mag-0.webp` … `mag-4.webp` *(all sample)* | Project 02 — 5 newsletter pages | Portrait ~424×600 (9:16-ish) |
| `p3-thumb-0.jpg` … `p3-thumb-4.jpg` | Project 03 — 5 document cover thumbnails | Portrait ~64:84 |
| `p3-show-0.jpg`, `p3-show-1.webp` *(sample)*, `p3-show-2.jpg`, `p3-show-3.jpg`, `p3-show-4.jpg` | Project 03 — document spread previews | Portrait A4 for single page, landscape for a 2-page spread — the frame auto-adapts to whatever ratio you provide |
| `sp0-hero/t0/t1/t2.jpg` | Selected Projects — Sarene case study gallery (4 images) | Landscape 16:10 |
| `sp1-hero/t0/t1/t2.jpg` | Selected Projects — THISO Retail case study gallery | Landscape 16:10 |
| `sp2-hero/t0/t1/t2.jpg` | Selected Projects — THỔ House case study gallery | Landscape 16:10 |
| `cert-0.webp` *(sample)*, `cert-1.jpg` … `cert-4.jpg` | Certificates marquee + modal | Landscape certificate scan/export |

If you'd rather use a different filename or extension, edit the path in `src/data/imageAssets.ts` (one line per slot).

## Contact form

The name/email/message fields are visual only — the "Gửi lời nhắn / Send message" button opens a `mailto:` link (same as the original design). Wire it to a real form backend (e.g. Formspree, Resend) later if you want in-page submission.

## Deploy

See the deployment walkthrough provided alongside this handoff (git → GitHub → Vercel).
