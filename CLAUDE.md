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
- **Repo:** GitHub (HouseGearGuide/housegearguide)
- **Domain:** housegearguide.com (registered on Namecheap)

### Deploy Command
```
git add . && git commit -m "your message" && git push
```
Vercel rebuilds automatically in ~30 seconds after every push.

---

## Monetization

### Amazon Associates ✅ LIVE
- **Real Associates ID:** `housegearguid-20`
- **Status:** Approved and live — real tag in place sitewide
- **Commission:** 3% on home/garden/tools products
- **Cookie window:** 24 hours — earns on anything bought on Amazon within 24hrs of a click
- **Requirement:** Must make 3 qualifying sales within 180 days of approval or account closes
- **Payment:** Bank account and tax information submitted ✅
- **Safety net:** Ask 3 people you know to click a link and buy something they were already planning to buy on Amazon

### Direct Brand Programs — Add Later
Via ShareASale, Impact, or CJ Affiliate:
- EcoFlow (backup power) — 3-5% on high ticket items
- Jackery (backup power)
- Generac (whole-home generators)
- Lutron (smart lighting)
- Ring / Arlo (smart security)
- Eero / Google Nest (smart home hubs)

### Future Display Ads (Month 10+)
Once site hits ~10,000 monthly sessions apply to **Mediavine** — adds $300-800/month on top of affiliate income with no extra work.

---

## Site Structure
```
src/
  layouts/Layout.astro              ← shared shell every page uses
  pages/
    index.astro                     ← homepage
    smart-home/index.astro          ← smart home category page
    backup-power/index.astro        ← backup power category page
    smart-home/best-smart-thermostat-no-c-wire.astro
    smart-home/best-smart-lock-for-renters.astro
    smart-home/google-home-vs-alexa.astro
    smart-home/best-smart-lighting-for-apartments.astro
    smart-home/best-smart-camera-for-apartments.astro
    smart-home/best-outdoor-smart-plugs.astro
    smart-home/best-smart-home-devices-for-renters.astro
    smart-home/best-smart-home-starter-kit-under-500.astro
    backup-power/best-portable-power-station-under-500.astro
    backup-power/best-portable-power-station-under-1000.astro
    backup-power/best-whole-home-generator-2000-sq-ft.astro
    backup-power/ecoflow-vs-jackery.astro
    backup-power/best-backup-power-home-office.astro
    backup-power/best-solar-generator-home-backup.astro
    backup-power/best-whole-home-generator-for-well-pump.astro
    backup-power/best-battery-backup-sump-pump.astro
  data/products.ts                  ← 28 products populated
  public/sitemap.xml                ← static sitemap (update when adding pages)
  styles/global.css                 ← Tailwind
```

---

## Content Strategy

### Pages Built (20 total) ✅
**Smart Home (8 pages)**
- Homepage
- Smart home category page
- Best smart thermostat for older homes without C-wire
- Best smart lock for renters
- Google Home vs Alexa — which ecosystem wins
- Best smart lighting for apartments
- Best smart home security camera for apartments
- Best outdoor smart plugs
- Best smart home devices for renters
- Best smart home starter kit under $500

**Backup Power (10 pages)**
- Backup power category page
- Best portable power station under $500
- Best portable power station under $1,000
- Best whole home generator for 2,000 sq ft
- EcoFlow vs Jackery full comparison
- Best backup power for home office
- Best solar generator for home backup
- Best whole home generator for well pump
- Best battery backup for sump pump

### Pages To Build Next (Tier 2 — Priority)
- Best smart thermostat for multiple zones
- Best smart home hub
- Best smart doorbell camera
- Best portable generator for camping
- Solar generator vs portable generator
- Best whole home battery backup system
- Best smart home starter kit under $200
- Best outdoor security camera system
- Best smart smoke detector
- Best smart home devices for elderly parents

### Pages To Build Later (Tier 3)
- Best EV home chargers
- Best smart home devices for large homes
- Best battery backup for medical equipment
- Best smart lighting for outdoor spaces
- Best smart home security system under $500

---

## Page Template Requirements
Every generated page must include:
- Clear headline targeting the exact search query
- Summary recommendation at the top (don't bury the answer)
- Comparison table with clickable affiliate links
- Individual product sections with real specs and honest pros/cons
- Multiple affiliate link placements (top, middle, bottom)
- FTC disclosure visible near the top: "This site earns commissions from purchases made through our links at no extra cost to you"
- Internal links to related pages
- Unique meta title and description per page

---

## SEO Status
- Fast page load — Astro static output ✅
- Unique meta titles and descriptions on every page ✅
- Google Search Console set up and verified ✅
- Sitemap submitted to Google Search Console ✅ (submitted April 20, 2026)
- Internal linking between related pages ✅
- Schema markup for product reviews — add in future session

---

## Legal Requirements
- FTC affiliate disclosure on every page ✅
- Amazon Associates disclosure visible ✅
- Standard language: "This site earns commissions from purchases made through our links at no extra cost to you"

---

## Free Tool To Build (HIGH PRIORITY — Next Session)
Build a **"What backup power system do I need?" calculator.**
- User inputs: home size, which appliances they want to run, how many hours
- Output: recommended wattage and product suggestions with affiliate links
- Purpose: attracts natural backlinks without outreach
- Build in a dedicated Claude Code session — this is the single highest value link magnet

---

## Sitemap Maintenance
- Static sitemap lives at `public/sitemap.xml`
- **Every time new pages are added**, tell Claude Code: *"Update public/sitemap.xml to include the new pages we just built"*
- Sitemap URL: https://housegearguide.com/sitemap.xml
- Submitted to Google Search Console as: https://housegearguide.com/sitemap.xml

---

## Income Timeline (Realistic)
- Months 1-5: $0 (Google sandbox period — this is normal)
- Month 6: First commissions ($50-200)
- Month 9: $200-600/month
- Month 12-18: $1,000-3,000/month
- Year 2: $4,000+/month target

---

## Session Log

### Session 1 — April 17, 2026 ✅
- Registered housegearguide.com on Namecheap
- Built Astro + Tailwind project structure
- Created homepage, smart-home, backup-power pages
- Set up GitHub repo (HouseGearGuide/housegearguide)
- Deployed to Vercel with auto-deploy pipeline
- Configured DNS records in Namecheap pointing to Vercel
- Site live at housegearguide.vercel.app
- Created CLAUDE.md project context file
- Verified Google Search Console for housegearguide.com

### Session 2 — April 17-20, 2026 ✅
- Designed and built homepage (hero, category cards, trust bar, footer)
- Built out smart-home and backup-power category pages
- Added 15 real products to products.ts
- Generated first 3 comparison pages
- Audited and fixed broken internal links
- Built 7 additional comparison pages to reach 20 total
- All 20 pages pushed live
- Placeholder Amazon tag in place sitewide
- Fixed Vercel build error (products.ts not staged — missing 7 products)
- Added @astrojs/sitemap integration
- Added static public/sitemap.xml as reliable fallback
- Submitted sitemap to Google Search Console — Success ✅
- Products.ts now has 28 products

### Session 3 — April 21, 2026 ✅
- Applied for and received Amazon Associates approval
- Real Associates ID: housegearguid-20
- Payment and tax information submitted to Amazon
- Replaced placeholder tag housegearguide-20 with real tag housegearguid-20 sitewide
- All affiliate links now live and tracking real commissions

### Session 4 — April 27, 2026 ✅
- Audited all Amazon affiliate links in products.ts — fixed 10 broken/stale ASINs
- Fixed Emerson Sensi product entry (was incorrectly described as battery-powered with HomeKit — replaced with accurate Sensi ST55 data: genuinely battery-powered, no HomeKit, basic LCD)
- Updated best-smart-thermostat-no-c-wire.astro to correct two inaccurate references to Sensi's ecosystem support
- Built /backup-power/calculator — 4-step interactive tool: home size → appliances → hours → results
- Calculator uses wattage + runtime to route users into 4 tiers: standby generator, large/solar, mid-range, compact
- Product cards in results include affiliate links pulled from products.ts at build time
- Added prominent green calculator banner to backup-power/index.astro
- Added amber calculator CTA button to homepage hero
- Updated public/sitemap.xml to include /backup-power/calculator/
- All changes pushed live via Vercel

### Session 5 — Next Goals
1. Add 10 Tier 2 comparison pages
2. Update sitemap.xml after adding new pages
3. Fix git identity warning (git config --global user.name / user.email)
4. Begin researching direct brand affiliate programs (EcoFlow, Jackery, Generac)

---

## Important Reminders
- Google sandbox period is real — expect no traffic for 4-6 months. Normal, not failure
- Content quality matters — thin pages get penalized
- Check Google Search Console every Sunday — 5 minutes, tells you what's working
- Update products.ts every 3-4 months — remove discontinued products, add new ones
- Update public/sitemap.xml every time new pages are added
- Always run `npm run build` locally before pushing to catch errors before Vercel
- Always commit products.ts together with any new pages that reference it
- Seasonality: backup power spikes hurricane season + winter. Smart home spikes Black Friday + holidays
- Once site hits 10,000 monthly sessions — apply to Mediavine display ad network
- Amazon 180 day clock is running — need 3 qualifying sales to keep account active
- Safety net: ask 3 people you know to click a link and buy something on Amazon

---

## Workflow Reference

### Starting Every Claude Code Session
```
cd ~/Desktop/Sites/housegearguide
claude
```
Claude Code reads CLAUDE.md automatically on launch.

### Previewing Site Locally
```
npm run dev
```
Open http://localhost:4321 in browser.

### Pushing Changes Live
```
git add . && git commit -m "description of what you built" && git push
```
Vercel rebuilds in ~30 seconds.

### Fix Git Identity Warning (do this once)
```
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Adding New Pages Checklist
1. Build pages in Claude Code
2. Make sure products.ts is updated with any new products
3. Tell Claude Code to update public/sitemap.xml
4. Run npm run build locally to confirm no errors
5. Push live with git
6. Check Vercel dashboard shows green deployment
