# Ariyan Jahangir — Portfolio

A single-page Next.js portfolio, styled as a boarding pass / departure board
(fitting, given the airline-API work). Fully static, fast, SEO-ready.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

## Adding / editing content

Every section reads from a JSON file in `/data`. You never need to touch
component code to update content — just edit the JSON and the page reflects
it automatically.

| File | Powers |
|---|---|
| `data/profile.json` | Name, title, summary, contact info, social links, resume file path |
| `data/experience.json` | The "Career Log" departure-board list. Add a new job by adding a new object (same shape) to the array — newest first. Set `"end": null` and `"status": "current"` for your active role. |
| `data/skills.json` | Skill chips, grouped by category. Add a category by adding `{ "category": "...", "items": [...] }`. |
| `data/education.json` | Degrees. |
| `data/awards.json` | Awards / honors. |
| `data/publications.json` | Papers. Add `"url"` to make the title a link. |
| `data/references.json` | Reference names/titles. Contact details are intentionally **not** published on the public site (see note below) — shown as "available on request" instead. |

No build step is needed to see JSON changes — `npm run dev` hot-reloads them.

## Adding your photo

The "Photo placeholder" box in the hero (the boarding-pass stub) is a plain
styled `<div>` so there's zero broken-image risk until you add a real photo.

1. Drop your image at `public/images/profile.jpg`
2. In `components/Hero.js`, replace the placeholder `<div className="pass__photo">...</div>`
   with:
   ```jsx
   import Image from "next/image";
   // ...
   <Image src="/images/profile.jpg" alt={profile.name} width={400} height={533} style={{ borderRadius: 10, objectFit: "cover" }} />
   ```

## Things to double-check before you publish

- **Domain**: `https://ariyanjahangir.dev` is a placeholder used in
  `app/layout.js`, `app/sitemap.js`, and `app/robots.js` for canonical URLs,
  Open Graph tags, and the JSON-LD schema. Replace it everywhere with your
  real domain once you have one.
- **Social links**: `data/profile.json` has best-guess LinkedIn/GitHub URLs
  inferred from the icon row on your resume (no explicit URLs were given on
  the PDF). Double-check `linkedin.com/in/ariyan-jahangir` and
  `github.com/Ariyan-2007` actually resolve to your profiles, and fix if not.
- **References' contact info**: your resume lists your references' personal
  emails/phones. I left those off the public site by default — publishing a
  third party's personal contact info on an indexed, public web page isn't
  something they necessarily consented to. If you'd rather include it, add
  `"email"` / `"phone"` fields to `data/references.json` and render them in
  `components/Contact.js`.
- **Resume PDF**: your uploaded PDF was copied to
  `public/Ariyan_Jahangir_Resume.pdf` and is wired to the "Download resume"
  button. Swap the file (keep the same name, or update `resumeFile` in
  `data/profile.json`) whenever you update your resume.

## Build & deploy

This is configured for fully static export (`output: 'export'` in
`next.config.js`) — no Node server required at runtime, which keeps it fast
and lets you host it anywhere static (Vercel, Netlify, GitHub Pages,
Cloudflare Pages, S3, etc.).

```bash
npm run build
# static site is generated into /out
```

Deploy the contents of `/out` to your host of choice. On Vercel/Netlify you
can also just point them at the repo — they detect Next.js automatically and
will run `next build` for you.

## What's already handled

- **SEO**: per-page metadata, Open Graph + Twitter cards, canonical URL,
  `sitemap.xml` and `robots.txt` (auto-generated from `app/sitemap.js` /
  `app/robots.js`), and a JSON-LD `Person` schema in `app/layout.js` for rich
  results.
- **Performance**: fully static HTML/CSS/JS, self-hosted fonts (no
  render-blocking request to Google Fonts), no UI framework/library weight —
  total page payload is roughly 1.4 MB including fonts, and there's no
  client-side data fetching.
- **Responsive**: every section has a mobile layout (the departure-board
  table collapses into stacked cards under 880px; the boarding pass stacks
  vertically under 720px).
- **Accessibility**: visible focus states, `prefers-reduced-motion` respected
  (the "boarding now" pulse dot turns static), semantic heading structure.

## A note on dependencies

`npm audit` will flag a moderate-severity PostCSS issue — it's a transitive
dev-dependency of Next.js itself (not something this project can patch
directly), relates to stringifying untrusted CSS, and doesn't apply to a
static site like this with no user-supplied CSS. Worth re-checking after
your next `npm install` in case Next.js has bumped it upstream.
