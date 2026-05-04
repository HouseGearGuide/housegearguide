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

### Direct Brand Programs — Add Later (Month 3-6)
Via ShareASale, Impact, or CJ Affiliate:
- EcoFlow — 3-5% on high ticket items
- Jackery
- Generac (whole-home generators)
- Lutron (smart lighting)
- Ring / Arlo (smart security)
- Eero / Google Nest

### Future Display Ads (Month 10+)
Once site hits ~10,000 monthly sessions apply to **Mediavine** — adds $300-800/month on top of affiliate income with no extra work.

---

## Current Site Stats
- **Total pages:** 40 live (39 comparison/category pages + 1 calculator tool)
- **Products in data file:** 57 products with ASIN-based affiliate links
- **Build status:** Clean — zero errors
- **Sitemap:** Updated and submitted to Google Search Console

---

## Site Structure
```
src/
  layouts/Layout.astro
  pages/
    index.astro                                              ← homepage
    smart-home/index.astro                                   ← category page
    backup-power/index.astro                                 ← category page
    backup-power/calculator/index.astro                      ← CALCULATOR TOOL ✅
    smart-home/best-smart-thermostat-no-c-wire.astro
    smart-home/best-smart-thermostat-multiple-zones.astro
    smart-home/best-smart-lock-for-renters.astro
    smart-home/google-home-vs-alexa.astro
    smart-home/best-smart-lighting-for-apartments.astro
    smart-home/best-smart-camera-for-apartments.astro
    smart-home/best-outdoor-smart-plugs.astro
    smart-home/best-smart-home-devices-for-renters.astro
    smart-home/best-smart-home-starter-kit-under-500.astro
    smart-home/best-smart-home-hub.astro
    smart-home/best-smart-doorbell-camera.astro
    smart-home/best-smart-home-starter-kit-under-200.astro
    smart-home/best-outdoor-security-camera-system.astro
    smart-home/best-smart-smoke-detector.astro
    smart-home/best-smart-home-devices-for-elderly-parents.astro
    smart-home/best-ev-home-chargers.astro                   ← NEW Session 6
    smart-home/best-smart-home-devices-for-large-homes.astro ← NEW Session 6
    smart-home/best-smart-lighting-outdoor-spaces.astro      ← NEW Session 6
    smart-home/best-smart-home-security-system-under-500.astro ← NEW Session 6
    smart-home/best-smart-home-devices-under-100.astro       ← NEW Session 6
    backup-power/best-portable-power-station-under-500.astro
    backup-power/best-portable-power-station-under-1000.astro
    backup-power/best-whole-home-generator-2000-sq-ft.astro
    backup-power/ecoflow-vs-jackery.astro
    backup-power/best-backup-power-home-office.astro
    backup-power/best-solar-generator-home-backup.astro
    backup-power/best-whole-home-generator-for-well-pump.astro
    backup-power/best-battery-backup-sump-pump.astro
    backup-power/best-portable-generator-for-camping.astro
    backup-power/solar-generator-vs-portable-generator.astro
    backup-power/best-whole-home-battery-backup-system.astro
    backup-power/best-battery-backup-medical-equipment.astro ← NEW Session 6
    backup-power/best-generator-for-power-outages.astro      ← NEW Session 6
    backup-power/best-solar-panels-home-backup.astro         ← NEW Session 6
    backup-power/jackery-vs-bluetti.astro                    ← NEW Session 6
    backup-power/best-whole-home-generator-brands-compared.astro ← NEW Session 6
  data/products.ts                  ← 57 products with real ASIN-based links
  public/sitemap.xml                ← updated with all 40 pages
  styles/global.css
```

---

## Content Strategy

### Pages Built (40 total) ✅

**Smart Home (22 pages)**
- Homepage
- Smart home category page
- Best smart thermostat for older homes without C-wire
- Best smart thermostat for multiple zones
- Best smart lock for renters
- Google Home vs Alexa
- Best smart lighting for apartments
- Best smart home security camera for apartments
- Best outdoor smart plugs
- Best smart home devices for renters
- Best smart home starter kit under $500
- Best smart home hub
- Best smart doorbell camera
- Best smart home starter kit under $200
- Best outdoor security camera system
- Best smart smoke detector
- Best smart home devices for elderly parents
- Best EV home chargers ✅ Session 6
- Best smart home devices for large homes ✅ Session 6
- Best smart lighting for outdoor spaces ✅ Session 6
- Best smart home security system under $500 ✅ Session 6
- Best smart home devices under $100 ✅ Session 6

**Backup Power (17 pages)**
- Backup power category page
- Best portable power station under $500
- Best portable power station under $1,000
- Best whole home generator for 2,000 sq ft
- EcoFlow vs Jackery full comparison
- Best backup power for home office
- Best solar generator for home backup
- Best whole home generator for well pump
- Best battery backup for sump pump
- Best portable generator for camping
- Solar generator vs portable generator
- Best whole home battery backup system
- Best battery backup for medical equipment ✅ Session 6
- Best generator for power outages ✅ Session 6
- Best solar panels for home backup ✅ Session 6
- Jackery vs Bluetti comparison ✅ Session 6
- Best whole home generator brands compared ✅ Session 6

**Tools (1)**
- Backup power calculator ✅

### Pages To Build Next (Tier 4 — Session 7+)
- Best smart home devices under $50
- Best smart home gift ideas
- Best smart home for HomeKit (Apple-only households)
- Best mesh Wi-Fi systems for smart homes
- Best smart home devices for garage
- Best solar battery storage systems
- Best propane generators for home backup
- Best EV charging stations (commercial/workplace)
- Best battery backup for gaming setup
- Best generator transfer switch options

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

## SEO Status
- Fast page load — Astro static output ✅
- Unique meta titles and descriptions ✅
- Google Search Console verified ✅
- Sitemap submitted and updated ✅
- Internal linking built into templates ✅
- All Amazon links audited and working ✅
- Schema markup for product reviews — add in future session

---

## Sitemap Maintenance
- Static sitemap lives at `public/sitemap.xml`
- **Every time new pages are added** tell Claude Code: *"Update public/sitemap.xml to include the new pages we just built"*
- Submitted URL: https://housegearguide.com/sitemap.xml

---

## Calculator Tool
- Lives at: housegearguide.com/backup-power/calculator
- Linked from: backup power category page and homepage
- How it works: user selects home size → appliances → hours needed → outputs wattage + product recommendations with affiliate links
- Purpose: link magnet for natural backlinks

---

## Income Timeline (Realistic)
- Months 1-5: $0 (Google sandbox — normal, not failure)
- Month 6: First commissions ($50-200)
- Month 9: $200-600/month
- Month 12-18: $1,000-3,000/month
- Year 2: $4,000+/month target

---

## Session Log

### Session 1 — April 17, 2026 ✅
- Registered housegearguide.com
- Built Astro + Tailwind project
- Set up GitHub repo and Vercel deployment
- Configured DNS records
- Verified Google Search Console
- Created CLAUDE.md

### Session 2 — April 17-20, 2026 ✅
- Built homepage, category pages, first 3 comparison pages
- Added 15 products to products.ts
- Audited and fixed broken internal links
- Reached 20 total live pages
- Fixed Vercel build error (uncommitted products.ts)
- Added sitemap integration and static sitemap fallback
- Submitted sitemap to Google Search Console

### Session 3 — April 21, 2026 ✅
- Amazon Associates approved
- Real tag housegearguid-20 live sitewide
- Payment and tax information submitted

### Session 4 — April 21-27, 2026 ✅
- Built backup power calculator tool at /backup-power/calculator
- Fixed all broken Amazon links — converted to ASIN-based URLs
- All 28 products have working affiliate links
- Calculator linked from homepage and category page
- Sitemap updated

### Session 5 — April 27, 2026 ✅
- Built 9 new Tier 2 comparison pages (10th already existed)
- 14 new products added to products.ts (42 total)
- Sitemap updated with all new URLs
- Clean build — 30 pages, zero errors
- Note: 14 new ASINs need audit to verify correct listings

### Session 6 — May 4, 2026 ✅
1. ASIN audit — verified and fixed 12 incorrect ASINs across all 14 Session 5 products
2. Replaced discontinued First Alert Onelink with Kidde Smart Hardwired (B0C44LLXQH, $90)
3. Replaced discontinued Kidde WiFi battery detector with Kidde 10-Year sealed battery (B086S4XM3W, $38)
4. Added 25 new products (57 total): EV chargers, outdoor lighting, security systems, solar panels
5. Built 10 Tier 3 comparison pages (40 total pages, clean build)
6. Updated sitemap with all 10 new URLs
7. Pushed live — Vercel deployed successfully

---

## Session 7 Starting Prompt
```
I'm continuing work on HouseGearGuide.com. The site is at 40 pages and 57 products.
Session 6 is fully complete — ASIN audit done, 10 Tier 3 pages built and live.

Next priorities:
1. Audit any products added in Session 6 (25 new ASINs) for correct listings
2. Build Tier 4 pages from CLAUDE.md
3. Research and apply to direct brand affiliate programs (EcoFlow, Jackery, ChargePoint)
4. Fix git identity warning if still present
```

---

## Adding New Pages — Checklist
1. Build pages in Claude Code
2. Update products.ts with any new products needed (real ASINs only)
3. Tell Claude Code to update public/sitemap.xml
4. Run `npm run build` locally to confirm clean build
5. Push live with git
6. Confirm green deployment in Vercel dashboard

---

## Important Reminders
- Google sandbox = no traffic for 4-6 months. Normal, not failure
- Check Google Search Console every Sunday — 5 minutes
- Update products.ts every 3-4 months
- Always update sitemap when adding pages
- Always run npm run build locally before pushing
- Always commit products.ts with any pages that reference it
- Amazon 180 day clock running — need 3 qualifying sales
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

### Fix Git Identity (one time)
```
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```
