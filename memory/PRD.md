# LC Gardeners — PRD

## Original problem statement
Luxury, family-owned landscaping marketing site for **LC Gardeners** (Vancouver, WA · 98682).
Brand: Luxury + Trust + Professional + Local Family-Owned. NOT flashy.
Tagline: *Beautiful Landscapes. Reliable Service. Every Time.*

### Brand palette
- Primary: Deep Forest Green `#1E3A2A`
- Secondary: Rich Gold `#C8A44D`
- Accent: Warm White `#F8F6F2`
- Dark: Charcoal `#202020`

### Contact
- Phone: **(360) 513-4172**
- Email: **Hoango1965@yahoo.com**
- Service Area: Vancouver, WA · 98682 & surrounding

## Architecture
- Frontend: React 19 + Tailwind, single-page marketing site (no router needed, in-page anchors)
- Backend: FastAPI default (untouched — no forms, no integrations)
- Mongo: untouched
- No 3rd-party integrations

## User personas
1. **Local homeowner** (primary): wants reliable, premium landscaping; primary CTA is phone.
2. **Returning client**: looking to verify trust signals (reviews, owner story).

## Core requirements (static)
- Phone-first design — no contact/quote form
- Display 3 real reviews (Dan Tower, Jennifer Petersen, Scott Tiniakos) + 3 generic
- Floating call button on mobile
- Lots of whitespace, gold accents, deep green for premium dark sections
- Playfair Display headings + Manrope body

## What's been implemented — 2025-12-29
- Hero (full-screen luxury backyard, headline, dual CTAs, trust bar with stars + service area)
- Sticky Navbar (transparent → white on scroll, gold phone CTA)
- Social Proof (4 highlight cards w/ icons + customer quotes)
- Services (6 luxury cards w/ images: Lawn Maintenance, Yard Cleanups, Hedge & Shrub Trimming, Mulch Installation, Garden Maintenance, Property Beautification)
- Why Choose Us (dark green section, 5 benefit items)
- Before & After (3 project cards with gradient captions)
- Meet The Owner (Ervin photo + bio + call CTA)
- Reviews (6 cards, 5-star, Verified badges on 3 real ones, 5.0 rating counter)
- Final CTA (image-backed dark green, big call button)
- Footer (logo, tagline, full contact, sitemap, hours)
- Floating mobile call button (md:hidden)
- All CTAs route to `tel:+13605134172` / `mailto:Hoango1965@yahoo.com`
- 100% frontend test pass (iteration_1.json, 24/24)

## Prioritized backlog
### P1
- Replace stock images with real LC Gardeners job photos (hero, before/after, services)
- Add real owner portrait of Ervin
- Add Google Reviews live embed (need Google Place ID)

### P2
- Service Area map (Google Maps embed for 98682 + cities)
- Add Facebook / Instagram links to footer once provided
- SEO: structured data (LocalBusiness JSON-LD), Open Graph image
- Add a small "What to expect" timeline section (call → quote → service)
- Optional: lightweight quote form behind a "Prefer to text? Send a quick message" disclosure

### P3
- Bilingual (EN/ES) toggle
- Service-specific deeplinks (e.g., /mulch) for ad landing pages
- Seasonal banner (spring cleanup, fall leaf removal)
