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
- **Clean** — no fake reviews, no deceptive content. Every page should genuinely help someone make a buying decision
- **SEO-first** — all traffic comes from Google organic search. No paid ads, no social media required

---

## Tech Stack
- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (auto-deploys on every git push)
- **Repo:** GitHub (HouseGearGuide/housegearguide)
- **Domain:** housegearguide.com (registered on Namecheap)

### Deploy Command
```
git add . && git commit -m "your message" && git push
```
Vercel rebuilds automatically in ~30 seconds after every push.

---

## Monetization

### Amazon Associates ✅ FULLY LIVE
- **Real Associates ID:** `housegearguid-20`
- **Status:** Approved, real tag live sitewide, payment and tax info submitted
- **Link format:** `https://www.amazon.com/dp/ASIN?tag=housegearguid-20`
- **Commission:** 3% on home/garden/tools products
- **Cookie window:** 24 hours — earns on anything bought on Amazon within 24hrs of a click
- **Requirement:** 3 qualifying sales within 180 days of approval or account closes
- **Safety net:** Ask 3 people you know to click a link and buy something already planned on Amazon

### Amazon Link Format — CRITICAL
Always use ASIN-based URLs. Never construct full Amazon product URLs.
✅ Correct: `https://www.amazon.com/dp/B08L5TNJHG?tag=housegearguid-20`
❌ Wrong: `https://www.amazon.com/product-name/dp/B08L5TNJHG/ref=...`

### Direct Brand Programs — Add Later
- EcoFlow — apply month 4+ (automated, dedicated page exists)
- Jackery — apply month 4+ (same as EcoFlow)
- Generac — wait until month 6+ (manual review, needs traffic)
- Lutron — wait until month 6+
- Ring / Arlo — month 4-5
- Mediavine display ads — month 10+ (needs 10,000 monthly sessions)

---

## Current Site Stats
- **Total pages:** 80 live
- **Products in data file:** 66+ products with ASIN-based affiliate links
- **Build status:** Clean — zero errors, 80 pages confirmed
- **Sitemap:** Updated to 80 URLs

---

## Domain & SSL Configuration ✅ FULLY RESOLVED
- `housegearguide.com` → Connected to Production (primary domain)
- `www.housegearguide.com` → 301 Permanent Redirect to housegearguide.com
- `housegearguide.vercel.app` → Production
- Namecheap A Record: @ → 216.198.79.1
- Namecheap CNAME: www → a615f190a9930fcf.vercel-dns-017.com
- URL Redirect Record removed from Namecheap (was causing redirect loop)
- www redirect handled by Vercel dashboard only (not vercel.json)

---

## Technical SEO ✅ ALL FIXED
- Canonical tags on every page via Layout.astro
- trailingSlash: 'always' in astro.config.mjs
- www → non-www 301 in Vercel dashboard
- Google Search Console issues resolved:
  - "Duplicate without user-selected canonical" ✅
  - "Page with redirect" ✅
  - "Discovered — currently not indexed" — 48 pages resolving over time (normal)

---

## Pages Built (70 total) ✅

### Smart Home
- Homepage, category page
- Best smart thermostat (no C-wire, multiple zones)
- Best smart lock for renters
- Google Home vs Alexa
- Best smart lighting for apartments
- Best smart home security camera for apartments
- Best outdoor smart plugs
- Best smart home devices (renters, renters under $200, renters under $300, elderly parents, large homes, beginners, beginners under $200, apartments, condos, under $100, energy saving)
- Best smart home hub
- Best smart doorbell camera
- Best smart home starter kit (under $200, under $500)
- Best outdoor security camera system
- Best smart smoke detector
- Best EV home chargers
- Best battery powered outdoor lights
- Best smart ceiling fans
- Ring vs Arlo comparison
- Best smart home gift ideas
- Best outdoor smart home devices
- Best smart home devices for kids rooms
- Best smart plugs for energy monitoring
- Best smart light switches
- How to set up a smart home on a budget

### Backup Power
- Category page
- Best portable power station (under $500, under $1,000, for van life, for emergencies)
- Best whole home generator (2,000 sq ft, for well pump)
- EcoFlow vs Jackery, Jackery vs Bluetti, Bluetti vs EcoFlow
- Best backup power for home office
- Best solar generator (home backup, under $500)
- Best battery backup (sump pump, medical equipment, gaming setup, UPS for home office)
- Best portable generator (camping, RV camping)
- Solar generator vs portable generator
- Best whole home battery backup system
- Best generator (power outages, tailgating)
- Best solar panels for home backup
- Best whole home generator brands compared
- Generac vs Kohler comparison
- Best outdoor generator storage solutions
- How to choose a whole home generator
- What size generator do I need
- Whole home generator installation guide

### Tools
- Backup power calculator (/backup-power/calculator)

---

## Pages To Build Next (Session 13+)
- Best inverter generator for home backup
- Best smart home devices for home office
- Best battery backup for sump pump (upgrade)
- Best solar generator under $1,000
- Best portable power station for van life camping (extended)
- Best smart home devices for senior living
- Best whole home generator for cold climates
- Best smart home devices for home security on a budget
- Best solar generator for RV
- Best portable power station comparison (brand vs brand)

---

## Page Template Requirements
Every generated page must include:
- Clear headline targeting the exact search query
- Summary recommendation at the top
- Comparison table with clickable ASIN-based affiliate links
- Individual product sections with real specs and honest pros/cons
- Multiple affiliate link placements (top, middle, bottom)
- FTC disclosure visible near the top
- Internal links to related pages
- Unique meta title and description

---

## Sitemap Maintenance
- Static sitemap lives at `public/sitemap.xml`
- Every time new pages are added tell Claude Code: "Update public/sitemap.xml to include the new pages we just built"
- Submitted URL: https://housegearguide.com/sitemap.xml

---

## Link Audit Schedule
- Each session: spot check ASINs for high ticket new products
- Monthly: random spot check of 10-15 links across the site
- Quick fix: "Fix this broken Amazon link — [product name] is returning a 404. Find the correct current ASIN and update it."

---

## Income Timeline (Realistic)
- Months 1-5: $0 (Google sandbox — normal, not failure)
- Month 6: First commissions ($50-200)
- Month 9: $200-600/month
- Month 12-18: $1,000-3,000/month
- Year 2: $4,000+/month target

---

## Session Log

### Sessions 1-9 — April 17 to May 19, 2026 ✅
- Built and deployed full site infrastructure
- 60+ pages live, Amazon Associates approved and live
- All technical SEO issues resolved
- Domain SSL fully fixed and operational
- See previous CLAUDE.md versions for detailed session notes

### Session 10 — May 19, 2026 ✅
- Built 10 new pages (60 → 70 total)
- 3 new generator storage products added to products.ts (66+ total)
- Sitemap updated to 70 URLs
- Clean build, zero errors, deployed to Vercel

### Sessions 11–12 — June 2026 ✅
- Built 20 new pages across two sessions (60 → 80 total)
- Pages include: RV camping, condos, energy saving, emergencies, Bluetti vs EcoFlow,
  generator storage, beginners under $200, renters under $300, Black Friday guide,
  apartment balcony generators, smart home security for renters, battery backup for
  home network, saving money on utilities, solar generator for tailgating, large home
  generators, renters under $500, generator brands compared, road trip power stations
- Sitemap updated to 80 URLs, conflict resolved during merge
- Clean build (80 pages confirmed), deployed to Vercel

### Session 13 — Next Goals
1. Build 10 more pages toward 90 total
2. Spot check ASINs on high-ticket new products
3. Check Google Search Console Performance tab for early ranking signals
4. Consider applying to EcoFlow and Jackery direct affiliate programs (month 4+ threshold)

---

## Session 11 Starting Prompt
```
I'm continuing work on HouseGearGuide.com. The site has 70 pages 
and 66+ products live. I want to build 10 more pages toward 80 total.

Build these 10 pages:
1. Best smart home devices Black Friday guide — smart-home
2. Best generator for apartment balcony — backup-power
3. Best smart home security system for renters — smart-home
4. Best battery backup for home network — backup-power
5. Best smart home devices for saving money on utilities — smart-home
6. Best solar generator for tailgating — backup-power
7. Best whole home generator for large homes — backup-power
8. Best smart home devices for renters under $500 — smart-home
9. Best generator brands compared — backup-power
10. Best portable power station for road trips — backup-power

For every page: unique meta title and description, FTC disclosure,
comparison table with ASIN-based affiliate links
(format: https://www.amazon.com/dp/ASIN?tag=housegearguid-20),
honest pros and cons, internal links to related pages.

Add any new products needed to products.ts with real ASINs.

When done: update public/sitemap.xml, run npm run build locally
to confirm zero errors, push live with git.
```

---

## Important Reminders
- Google sandbox = no traffic for 4-6 months. Normal, not failure
- Check Google Search Console every Sunday — 5 minutes
- Always update sitemap when adding pages
- Always run npm run build locally before pushing
- Always commit products.ts with any pages that reference it
- Amazon 180 day clock running — need 3 qualifying sales
- Ask 3 people you know to click through and buy on Amazon
- Backup power spikes hurricane season + winter
- Smart home spikes Black Friday + holidays
- At 10,000 monthly sessions — apply to Mediavine

---

## Workflow Reference

### Starting Every Claude Code Session
```
cd ~/Desktop/Sites/housegearguide
claude
```

### Preview Locally
```
npm run dev
```
Open http://localhost:4321

### Push Live
```
git add . && git commit -m "description" && git push
```

### New Computer Setup
1. /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
2. brew install node
3. brew install gh
4. gh auth login
5. npm install -g @anthropic-ai/claude-code
6. cd to project folder
7. npm install
8. npm run dev to verify
9. Test push to confirm git works
