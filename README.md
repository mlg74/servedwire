# Served Wire — servedwire.com

Newsletter + content site for process servers and legal professionals.

**Stack:** Astro · Tailwind CSS · MDX · Vercel

---

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build for production
npm run preview   # preview production build
```

## Adding Articles

Drop `.md` or `.mdx` files into `src/content/articles/` with this frontmatter:

```yaml
---
title: "Your Article Title"
description: "Short description for SEO and card previews."
pubDate: 2026-07-21
category: "Compliance"   # Compliance | AI Tools | Business | Skip Tracing | Software Reviews
author: "Pete Campbell"
featured: false
---
```

## Beehiiv Integration

After setting up Beehiiv, replace the `[Add Beehiiv embed code here]` placeholders in:
- `src/pages/index.astro`
- `src/pages/newsletter.astro`
- `src/components/NewsletterCTA.astro`

Get the embed code from: Beehiiv Dashboard → Grow → Newsletter Widget → Copy embed code.

## Google Analytics

Uncomment the GA4 script in `src/layouts/BaseLayout.astro` and replace `G-XXXXXXXXXX` with your Measurement ID.

## Amazon Affiliate Links

Replace all `AFFILIATE_LINK_PLACEHOLDER` values in `src/pages/resources.astro` and article files with your actual Amazon affiliate URLs using your `servedwire-20` tracking ID.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import repo in Vercel dashboard → Deploy
3. Add custom domain `servedwire.com` in Vercel → Domains
4. Point Cloudflare DNS to Vercel (Vercel will show exact records)
