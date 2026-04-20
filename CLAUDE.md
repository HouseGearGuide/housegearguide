# HouseGearGuide.com — Project Context for Claude Code

## What This Project Is
A programmatic affiliate site covering two categories:
- **Smart home devices** (thermostats, locks, lighting, security cameras, hubs)
- **Home backup power equipment** (portable power stations, whole-home generators, solar generators, battery backup systems)

The site generates income through affiliate commissions. When visitors click product links and buy, we earn a percentage. No clients, no products to ship, no voice or personal brand required. Fully passive once built and ranked.

---

## Core Philosophy
- **Programmatic** — pages are generated from structured product data, not written manually one by one
- **Passive** — built to run with minimal ongoing maintenance
- **Clean** — no fake reviews, no deceptive content, no stock photos presented as real work. Every page should genuinely help someone make a buying decision
- **SEO-first** — all traffic comes from Google organic search. No paid ads, no social media required

---

## Tech Stack
- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (auto-deploys on every git push)
- **Repo:** GitHub
- **Domain:** housegearguide.com (registered on Namecheap)

### Deploy Command
```
git add . && git commit -m "your message" && git push
```
Vercel rebuilds automatically in ~30 seconds after every push.

---

## Monetization
- **Primary (start here):** Amazon Associates — 3% commission on lawn/garden/home products, 24-hour cookie window
- **Add later:** Direct brand affiliate programs via ShareASale, Impact, or CJ Affiliate
  - EcoFlow (backup power)
  - Jackery (backup power)
  - Generac (whole-home generators)
  - Lutron (smart lighting)
  - Ring / Arlo (smart security)
  - Eero / Google Nest (smart home hubs)

### Amazon Associates Important Note
Must make 3 qualifying sales within first 180 days or account gets closed. Apply once the site has at least 20-30 pages live.

---

## Site Structure (Built in Session 1)
```
src/
  layouts/Layout.astro        ← shared shell every page uses
  pages/
    index.astro               ← homepage
    smart-home/index.astro    ← smart home category landing page
    backup-power/index.astro  ← backup power category landing page
  data/products.ts            ← product data engine (populate this)
  styles/global.css           ← Tailwind
```

---

## Content Strategy
Pages are generated programmatically from the product data file. Target keywords with buying intent — people who are ready to purchase and just need help deciding.

### Page Types To Build (In This Order)
**Tier 1 — Build First (high intent, lower competition)**
- Best portable power station under $500
- Best portable power station under $1,000
- Best whole home generator for 2,000 sq ft
- Best smart thermostat for older homes without C-wire
- Best smart lock for renters
- Best smart home security camera for apartments
- EcoFlow vs Jackery — full comparison
- Google Home vs Alexa — which ecosystem wins
- Best backup power for home office
- Best smart lighting for apartments

**Tier 2 — Build After Tier 1**
- Best whole home generator for well pump
- Best solar generator for home backup
- Best smart home starter kit under $500
- Best smart thermostat for multiple zones
- Best outdoor smart plugs

**Tier 3 — Expansion (once site has authority)**
- Best EV home chargers
- Best smart home devices for renters
- Best battery backup for sump pump

---

## Page Template Requirements
Every generated page must include:
- Clear headline targeting the exact search query
- Summary recommendation at the top (don't bury the answer)
- Comparison table with clickable affiliate links
- Individual product sections with real specs and honest pros/cons
- Multiple affiliate link placements (top, middle, bottom — not just one at the end)
- FTC disclosure visible near the top: "This site earns commissions from purchases made through our links"
- Internal links to related pages

---

## SEO Requirements
- Fast page load — Astro static output handles this naturally
- Every page needs a unique meta title and description
- Use schema markup for product reviews where possible
- Google Search Console must be set up and verified (do this immediately after domain connects)
- Internal linking between related pages is critical — build this into templates

---

## Legal Requirements
- FTC affiliate disclosure must appear on every page with affiliate links
- Disclosure must be visible — not hidden in footer
- Standard language: "This site earns commissions from purchases made through our links at no extra cost to you"

---

## Free Tool To Build (Link Magnet)
Build a "What backup power system do I need?" calculator. User inputs home size, which appliances they want to run, and how many hours. Tool outputs recommended wattage and product suggestions with affiliate links. This attracts natural backlinks without outreach.

---

## Income Timeline (Realistic)
- Months 1-5: $0 (Google sandbox period)
- Month 6: First commissions ($50-200)
- Month 9: $200-600/month
- Month 12-18: $1,000-3,000/month
- Year 2: $4,000+/month target

---

## Future Monetization (Month 10+)
Once site hits ~10,000 monthly sessions apply to **Mediavine** — premium display ad network. Adds $300-800/month on top of affiliate income from the same traffic with no extra work.

---

## Session Log

### Session 1 — April 17, 2026 ✅
- Registered housegearguide.com on Namecheap
- Built Astro + Tailwind project
- Created homepage, smart-home category page, backup-power category page
- Set up GitHub repo
- Deployed to Vercel (auto-deploy pipeline live)
- Configured DNS records in Namecheap pointing to Vercel
- Site live at housegearguide.vercel.app
- Custom domain propagating (housegearguide.com)

### Session 2 — Next
Goals:
- Design and build out homepage properly (hero, category cards, footer)
- Build out smart-home and backup-power category pages
- Add first 10-15 products to products.ts data file
- Generate first comparison pages from data
- Set up Google Search Console once domain is confirmed live

---

## Important Reminders
- Google sandbox period is real — expect no traffic for 4-6 months. This is normal, not failure
- Content quality matters — thin pages get penalized. Every page must genuinely help someone decide
- Don't apply for Amazon Associates until 20+ pages are live
- Check Google Search Console weekly once set up — it tells you what's working
- Update products.ts every 3-4 months to remove discontinued products and add new ones
- Seasonality is real — backup power spikes around hurricane season and winter. Smart home spikes around Black Friday and holidays

### Session 2 — April 18, 2026 (Partial)
- Started homepage redesign in separate chat
- Homepage file exists, needs proper design filled in
- Category pages exist but are empty shells
- products.ts exists but has no data yet
- No comparison pages generated yet

### Session 2 Continued — Goals
- Properly design homepage in place (edit index.astro, don't recreate)
- Fill category pages with real content
- Add first 15 products to products.ts
- Generate first 3 comparison pages