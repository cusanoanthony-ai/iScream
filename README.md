# I Scream Yogurt Website

Production-ready public website for **I Scream Yogurt**, Sacramento's mobile frozen yogurt and dessert truck.

## Project Overview

This site establishes a professional online presence for the food truck, helps customers find the truck, promotes catering bookings, drives Instagram engagement, and begins telling the story of a future brick-and-mortar location.

## Technology Stack

- **Next.js 16** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS v4**
- **Zod** — form validation
- **Resend** — production email delivery
- **Lucide React** — icons
- **Vercel Analytics & Speed Insights**
- **Vitest** — lightweight tests

## Local Setup

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Available npm Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript check |
| `npm run test` | Run Vitest tests |

## Folder Structure

```
src/
  app/              # Routes, layouts, API handlers
  components/       # Reusable UI components
  data/             # Business info, menu, images, navigation
  lib/              # Validation, email, metadata, utilities
public/
  images/           # Real business photos (see ASSET_CHECKLIST.md)
```

## How to Change Business Details

Edit **`src/data/business.ts`** for:

- Business name, descriptions, tagline
- Phone, email, location, service area
- Instagram, Facebook, StreetFoodFinder, Square URLs

## How to Update Menu Items

Edit **`src/data/menu.ts`** for categories, items, and product preview cards.

## How to Add Real Images

1. Review **`ASSET_CHECKLIST.md`** for required photos and dimensions.
2. Place approved images in the matching paths under **`public/images/`**.
3. Image paths are centralized in **`src/data/images.ts`** — update alt text and labels there if needed.
4. The `BrandImage` component automatically displays real photos when files exist, or branded placeholders when they do not.

## How to Update Social Links

Update URLs in **`src/data/business.ts`**. Navigation labels are in **`src/data/navigation.ts`**.

## How to Change Contact Email

1. Update **`src/data/business.ts`**
2. Update **`.env.local`**:
   - `CONTACT_TO_EMAIL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`

## How to Configure Forms (Resend)

1. Create a [Resend](https://resend.com) account and verify your sending domain.
2. Add to **`.env.local`**:

```
RESEND_API_KEY=re_xxxxxxxx
RESEND_FROM_EMAIL=hello@yourdomain.com
CONTACT_TO_EMAIL=iscreamyogurt@gmail.com
```

3. Without these variables, forms return a friendly **503** message directing customers to call or DM on Instagram — they do **not** pretend to succeed.

### Newsletter Limitation

Until a formal email marketing platform (e.g. Mailchimp, Klaviyo) is connected, newsletter signups email the owner with the subscriber address. See the API handler at `src/app/api/newsletter/route.ts`.

## How to Connect GitHub to Vercel

1. Push this repository to GitHub (`cusanoanthony-ai/iScream`).
2. Log in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import the GitHub repository.
4. Framework preset: **Next.js** (auto-detected).
5. Add environment variables from `.env.example`.
6. Deploy.

## Required Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for form emails |
| `RESEND_FROM_EMAIL` | Verified sender address in Resend |
| `CONTACT_TO_EMAIL` | Inbox for form submissions |
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://iscreamyogurt.com`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact email shown on site |

## How to Add a Custom Domain

1. In Vercel project **Settings → Domains**, add your domain.
2. Update DNS records as instructed by Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain.
4. Update Resend domain verification if using a custom from-address.

## How to Enable Vercel Analytics

`@vercel/analytics` and `@vercel/speed-insights` are already included in the root layout. Analytics activate automatically when deployed on Vercel.

## How to Replace Temporary Branding

| Asset | Location |
|-------|----------|
| Official logo | `public/images/brand/logo.png` |
| Favicon | Replace `src/app/icon.svg` or add `src/app/favicon.ico` |
| Open Graph image | Replace `src/app/opengraph-image.tsx` or add a static image |
| Text wordmark | Automatically replaced when logo.png exists |

## Pre-Launch Checklist

See **`CONTENT_TODO.md`** and **`ASSET_CHECKLIST.md`** for owner verification items before going live.

- [ ] Confirm final domain and set `NEXT_PUBLIC_SITE_URL`
- [ ] Verify public email address
- [ ] Configure Resend with verified domain
- [ ] Add all real photography
- [ ] Add official logo
- [ ] Owner reviews story page and privacy policy
- [ ] Test all forms in production
- [ ] Test mobile navigation and external links
- [ ] Run `npm run build` successfully

## License

Private — © I Scream Yogurt
