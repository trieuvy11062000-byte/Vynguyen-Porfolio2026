# Vỹ Nguyễn — Portfolio

Dark-minimalist creative portfolio for Nguyễn Ngô Triều Vỹ, built with React + TypeScript + Tailwind CSS v4 + Framer Motion, recreated pixel-for-pixel from the design handoff in `design_handoff_vy_portfolio/`.

**Muốn tự sửa nội dung/hình ảnh mà không cần biết code?** Xem [NOI-DUNG.md](NOI-DUNG.md) (hướng dẫn tiếng Việt, không cần kiến thức lập trình).

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
  components/ImageSlot.tsx    photo/video/PDF slot component (see below)
  context/ThemeLangContext.tsx  theme (dark/light) + lang (vi/en) + design tokens
  data/content.ts         all static copy/data arrays (VC, DOCS, CERTS, SPD, ...)
  data/mediaAssets.ts      slot-id -> candidate file list (see below)
  i18n/dict.ts             VI/EN copy dictionary
public/assets/            media files referenced by mediaAssets.ts
```

## Filling in the empty media slots

Every placeholder in the site (dashed box with gray label text) is wired to a slot id in `src/data/mediaAssets.ts`. **You do not need to touch any code** — just save your file with the exact name below into `public/assets/`, and it appears automatically the next time the page loads. `<ImageSlot>` verifies each candidate file actually exists (via a `HEAD` request, checking content-type — not just HTTP status, since some hosts return `200` for missing files) before rendering it, so an unfilled slot always shows a clean placeholder instead of a broken-image icon.

12 slots already have sample images (carried over from the design prototype) — replace them with your real assets whenever you're ready.

**Supported file types per slot:**
- Most slots: `.webp`, `.jpg`, `.jpeg`, `.png` (first match wins, in that order)
- Project 01 clip slots (`p1v-*`, `p1w-*`): also accept `.mp4`, `.webm`, `.mov` (tried before photos) — drop a real video clip and the play button becomes interactive; drop a photo and it stays a static thumbnail
- Project 03 showcase slots (`p3-show-*`): also accept `.pdf` (tried before photos) — rendered inline with an "open in new tab" link
- CV download: `cv.pdf` — the Hero "Tải CV / Download CV" button only appears once this file exists

| File to add (in `public/assets/`) | Where it appears | Recommended shape |
|---|---|---|
| `portrait.*` *(sample)* | Hero circular photo | Square, ≥960×960px, face centered |
| `p1v-0.*` *(sample)*, `p1v-1.*`, `p1v-2.*`, `p1v-3.*` | Project 01 — vertical clip carousel | Portrait 3:4, video or photo |
| `p1w-0.*` *(sample)*, `p1w-1.*` *(sample)*, `p1w-2.*`, `p1w-3.*` | Project 01 — 16:9 cinematic slider | Landscape 16:9, video or photo |
| `p2-cms.*` | Project 02 — CMS/website screenshot | Landscape, ≥1200px wide |
| `p2-plan.*` | Project 02 — cropped Excel/content-calendar snippet | Landscape strip |
| `p2-email.*` *(sample)* | Project 02 — full email design | Tall, ≥900px wide (renders at natural aspect ratio, scrollable) |
| `mag-0.*` … `mag-4.*` *(all sample)* | Project 02 — 5 newsletter pages | Portrait, any ratio (frame is letterboxed, never cropped) |
| `p3-thumb-0.*` … `p3-thumb-4.*` | Project 03 — 5 document cover thumbnails | Portrait ~64:84, ≥400px tall |
| `p3-show-0.*`, `p3-show-1.*` *(sample)*, `p3-show-2.*`, `p3-show-3.*`, `p3-show-4.*` | Project 03 — document spread previews | PDF, or portrait A4 image for a single page / landscape for a 2-page spread |
| `sp0-hero/t0/t1/t2.*` | Selected Projects — Sarene case study gallery (4 images) | Landscape 16:10, ≥1400px wide |
| `sp1-hero/t0/t1/t2.*` | Selected Projects — THISO Retail case study gallery | Landscape 16:10, ≥1400px wide |
| `sp2-hero/t0/t1/t2.*` | Selected Projects — THỔ House case study gallery | Landscape 16:10, ≥1400px wide |
| `cert-0.*` *(sample)*, `cert-1.*` … `cert-4.*` | Certificates marquee + modal | Landscape certificate scan/export |
| `cv.pdf` | Hero "Download CV" button target | Your CV/resume as a PDF |

If you'd rather use a different filename/extension or add more fallback formats, edit the corresponding entry in `src/data/mediaAssets.ts`.

### Why do some sample images look soft/blurry?

The 12 sample files were pulled from the low-resolution preview images inside the original design file, not full-resolution exports — several are quite small (one is only 248px wide). Several elements (parallax cards, the magazine viewer) render images at `scale(1.14)`, matching the source design spec, so the source file needs to be a bit larger than its on-screen size to stay crisp. Once you drop in your own photos/videos at the recommended sizes above, this resolves itself — no code change needed.

## Contact form

The name/email/message fields are visual only — the "Gửi lời nhắn / Send message" button opens a `mailto:` link (same as the original design). Wire it to a real form backend (e.g. Formspree, Resend) later if you want in-page submission.

## Deploy

See the deployment walkthrough provided alongside this handoff (git → GitHub → Vercel).
