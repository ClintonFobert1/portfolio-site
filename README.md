# Clinton Fobert — Portfolio

A duotone halftone engraving portfolio (see `DESIGN.md`): one electric-blue ink on black & white paper, engraved serif type, radiant sunburst emblems, and print-grain texture throughout.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (scroll-linked + in-view animations)
- Lenis (smooth scrolling)
- React Router 7
- Lucide icons

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploy with AWS Amplify

The repository includes `amplify.yml`, which uses Node 20, installs locked dependencies with `npm ci`, builds the Vite app, and publishes `dist/`.

1. In the AWS Amplify console, choose **Create new app** → **GitHub**.
2. Authorize GitHub and select `ClintonFobert1/portfolio-site`.
3. Connect `main` as the production branch. Amplify will detect `amplify.yml` automatically.
4. Add this rewrite under **Hosting** → **Rewrites and redirects** so React Router routes load directly:

| Source address | Target address | Type |
|---|---|---|
| `/<*>` | `/index.html` | `200 (Rewrite)` |

5. Connect `dev` separately if you want an Amplify preview environment for development changes.

Use `dev` for active work and merge tested changes into `main` for production deployment.

## Editing content

All copy lives in three data files — no component changes needed:

- `src/data/site.js` — name, role, tagline, email, socials, skills, stats, nav
- `src/data/products.js` — the product "plates" (title, summary, description, highlights, stack)
- `src/data/journal.js` — field-note articles

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, ticker, featured plates, about, method, notes, CTA |
| `/products` | Product catalogue |
| `/products/:slug` | Product plate detail (×6) |
| `/process` | The five-movement method |
| `/journal` | Field notes index |
| `/journal/:slug` | Field note article (×4) |
| `/about` | Portrait, capabilities, timeline |
| `/contact` | Contact form (mailto) + links |
| `*` | Engraved 404 |

## Design rules (from DESIGN.md)

- One ink color (`#0000F2` / `#1400FF`) plus black `#000814` and paper white — nothing else
- Shading comes from halftone dot/line density (`.tx-dots`, `.tx-lines`, `.tx-crosshatch`), never gradients
- Radiating sunburst/halo devices frame key figures (`Sunburst.jsx`)
- Display type is engraved all-caps serif (Cinzel); annotations are mono (IBM Plex Mono)
- A global grain overlay keeps everything feeling printed, not rendered
