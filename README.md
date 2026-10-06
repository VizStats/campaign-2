# opoli-youth-jobs

**Youth commitment — Jobs, not guns** — one of nine topic sites in the campaign network of Rev. Hon. Amb. Mrs Aneni Opoli Inyamoyio
(Democratic Leadership Alliance, Rivers West Senatorial District, Senate election 16 January 2027).

Each network site is a two-screen page with its own topic, design and copy, and links back to the
main campaign site. Built with Next.js 16, Tailwind CSS v4 and Motion.

## Run locally

```bash
npm install
npm run dev
```

## Deploy (Vercel)

1. Push this folder to its own GitHub repo (or a folder in a monorepo).
2. Import it in Vercel. Naming the project `opoli-youth-jobs` gives the default URL
   `https://opoli-youth-jobs.vercel.app`, which is what `src/content/network.ts` expects.
3. Set these environment variables, then redeploy:

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | This site's final URL (only if it differs from the default above) |
| `NEXT_PUBLIC_ALLOW_INDEXING` | `true` when you are ready for Google to index the site. **Until then the site sends noindex.** |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | The code from Google Search Console's HTML-tag verification |

## What to edit

| File | Purpose |
| --- | --- |
| `src/content/site.ts` | This site's SEO title, description, keywords and share-image line |
| `src/app/page.tsx` (+ `src/components/`) | The two screens |
| `src/content/facts.ts`, `network.ts`, `indexing.ts` | **Shared — don't edit here.** Edit them in the main site and run `node scripts/sync-network.mjs` there |

SEO built in: per-site title/description/keywords, canonical URL, Open Graph + Twitter card with a
generated share image (`src/app/opengraph-image.tsx`), `sitemap.xml`, `robots.txt`, web manifest,
and JSON-LD linking this site to the same Person and party entities as the rest of the network.
