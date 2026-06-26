# Project Handoff — Toolerium Micro-SaaS Factory
**Last updated:** 2026-06-25  
**Repo:** `git@github.com:bilalqureshi/toolerium.git`  
**Working directory:** `/Users/bilalmuhammadqureshi/Projects/tools-projects/`

---

## Who Is Bilal

- Senior Software Engineer (~9 years), Safepay (fintech, Karachi, Pakistan)
- Stack: React, Next.js, TypeScript, Node.js, Kafka/event-driven systems
- **Critical constraint:** Pakistan is NOT a Stripe-supported country — all payment processing must use **Lemon Squeezy** (merchant of record, PayPal/wire payouts). Never suggest Stripe.
- Mental model: micro-SaaS factory — build in ≤48hrs, $0 upfront, kill underperformers, double down on traction.

---

## Tech Stack (All Products)

- **Framework:** Next.js 16.x App Router + TypeScript + Tailwind CSS v4
- **AI:** Groq (`llama-3.3-70b-versatile`) via `groq-sdk` npm package — **genuinely free, no credit card required**
- **Payments:** Lemon Squeezy (store: `mbq.lemonsqueezy.com`)
- **Hosting:** Vercel free tier — each product is its own Vercel project with its own Root Directory
- **SEO:** `sitemap.ts`, `robots.ts`, JSON-LD structured data, canonical URLs in metadata
- **Ads:** Google AdSense (applied/pending)
- **Environment variable for AI:** `GROQ_API_KEY` (get free key from console.groq.com)

---

## Products — Current State

### Product 1: ATS Resume Checker
- **URL:** https://ats-checker-lake.vercel.app
- **Status:** LIVE ✅
- **Vercel project root:** `ats-checker/`
- **Lemon Squeezy product ID:** `adecbd7b-6043-4bcd-bc54-6cc24dd13f42`
- **Price:** $9 one-time *(raised from $3-5 on 2026-06-25 — do not lower this)*
- **Payment flow:** user submits form → free score shown → pay $9 → `?paid=true` redirect → full rewrite unlocked
- **localStorage keys:** `ats_result`, `paid`
- **API routes:** `/api/score` (free, JSON), `/api/optimize` (paid, plain text), `/api/checkout`
- **Cross-sells:** links to Cover Letter Gen ✅ | PDF Compressor ❌ (not added yet) | Interview Prep ❌ (not built yet)
- **Programmatic SEO pages:** `/for/[role]/page.tsx` — 20 job title variants planned ❌ (not built yet)

### Product 2: AI Cover Letter Generator
- **URL:** https://cover-letter-gen-rho.vercel.app
- **Status:** LIVE ✅
- **Vercel project root:** `cover-letter-gen/`
- **Lemon Squeezy product ID:** `ac15c55f-61ad-41e1-ae46-6dbd7df825c8`
- **Price:** $9 one-time *(raised from $3-5 on 2026-06-25 — do not lower this)*
- **Payment flow:** user fills form → free preview shown → pay $9 → `?paid=true` redirect → full letter unlocked
- **localStorage keys:** `cl_data`, `paid`
- **API routes:** `/api/generate` (paid, plain text), `/api/checkout`
- **Cross-sells:** links to ATS Checker ✅ | PDF Compressor ❌ (not added yet) | Interview Prep ❌ (not built yet)
- **Programmatic SEO pages:** `/for/[role]/page.tsx` — 20 job title variants planned ❌ (not built yet)

### Product 3: PDF Compressor
- **URL:** https://pdf-compressor-ecru-two.vercel.app
- **Status:** BUILT & DEPLOYED ✅
- **Vercel project root:** `pdf-compressor/`
- **Price:** Free (AdSense monetization)
- **Tech:** Pure client-side — `pdfjs-dist` + `pdf-lib`, no API routes, no env vars needed
- **Pages:** Home + 8 programmatic SEO pages under `/compress/[useCase]/`
- **Schema:** SoftwareApplication + FAQPage + HowTo + Organization + BreadcrumbList
- **robots.ts:** Explicitly allows GPTBot, PerplexityBot, ClaudeBot, Google-Extended (AEO)
- **Cross-sells:** Links to ATS Checker and Cover Letter Gen on home and all use-case pages ✅
- **Still needed:** Add to Google Search Console + submit sitemap

### Product 4: LinkedIn Profile Optimizer
- **URL:** https://linkedin-optimizer-livid.vercel.app *(verify this is still correct after deploy)*
- **Status:** BUILT, needs deploy verification ✅/⚠️
- **Vercel project root:** `linkedin-optimizer/`
- **Lemon Squeezy product ID:** `08c6c473-3e26-471d-8b30-646ab8747be1`
- **Price:** $9 one-time
- **Payment flow:** user fills headline/about/targetRole/skills → free analysis (score, verdict, improvements, keywords) → pay $9 → optimized headline + about + skills unlocked
- **localStorage keys:** `li_result`, `li_paid`
- **API routes:** `/api/analyze` (free, JSON), `/api/optimize` (paid, JSON), `/api/checkout`
- **Cross-sells:** links to ATS Checker and Cover Letter Gen in `/about` page ✅
- **IMPORTANT:** After deploy, verify the actual Vercel URL matches `linkedin-optimizer-livid.vercel.app` across these files:
  - `linkedin-optimizer/app/layout.tsx` (SITE_URL constant)
  - `linkedin-optimizer/app/sitemap.ts`
  - `linkedin-optimizer/app/robots.ts`
  - `linkedin-optimizer/app/api/checkout/route.ts` (redirect URL)

### Product 5: AI Interview Prep Tool (PLANNED — build next)
- **Status:** NOT BUILT ❌
- **Vercel project root:** `interview-prep/` (to be created)
- **Price:** $19 one-time — DO NOT undercharge this, do not launch at less than $19
- **Audience:** Software engineers, PMs, data scientists — anyone with a first-round interview
- **Why $19:** Pre-interview anxiety drives high willingness to pay. Human interview coaches charge $200/hr. $19 is an easy yes.
- **Payment flow:** user fills role + company + job description → free 3 sample questions shown → pay $19 → full 15 questions + STAR answers + follow-up tips unlocked
- **API routes to build:**
  - `/api/analyze` (free): returns 3 sample questions so user sees value
  - `/api/generate` (paid): returns 15 questions + STAR-method answers + follow-up tips as JSON
  - `/api/checkout`: Lemon Squeezy checkout, same pattern as other tools
- **Base:** Copy LinkedIn Optimizer codebase — same form → analyze → pay → unlock pattern
- **Cross-sells:** Add links from ATS Checker result page ("Interview coming up? →") and Cover Letter Gen result page
- **SEO opportunity:** "software engineer interview questions Google", "PM behavioral interview questions", "STAR method answers data scientist" — 10k-100k monthly volume keywords with weak tool competition
- **Build time:** 48 hours

### Product 6: Salary Negotiation Script Generator (PLANNED — build after Interview Prep)
- **Status:** NOT BUILT ❌
- **Vercel project root:** `salary-negotiation/` (to be created)
- **Price:** $15 one-time
- **Audience:** Anyone who just received a job offer
- **Payment flow:** inputs (current offer, target salary, job title, company, competing offers) → pay $15 → email script + talking points + rebuttals to common pushback
- **Cross-sell:** Interview Prep result page → "Got the offer? Now negotiate it →"
- **Build time:** 48 hours

---

## Revenue Strategy (decided 2026-06-25)

### Pricing Rationale
- Previous prices ($3-5) were below the psychological trust threshold and killed conversion
- Job seekers spend $200/hr on human career coaches — $9-19 for a tool is trivially cheap
- Comparable tools: Resumeworded $19/mo, Jobscan $49/mo, Teal $29/mo
- **Never go below $9 for ATS/Cover Letter, $19 for Interview Prep, $15 for Salary Negotiation**

### The Job Seeker OS Funnel
The full suite walks one user through their entire job search:

```
ATS Checker ($9) → Cover Letter Gen ($9) → Interview Prep ($19) → Salary Negotiation ($15)
                                         ↑
                              LinkedIn Optimizer ($9)
                              PDF Compressor (free/AdSense)
```

A user who buys the full stack = $61 average order value. Focus on cross-sells between every product.

### $500/Day Math
- Need ~1,000 quality visitors/day across all products
- Average conversion 3%, average price ~$15 = $450/day
- Add email follow-up funnel converting 1-2% of free users → closes the gap to $500
- Timeline: realistically month 3-4 once SEO + Reddit + all 5 products are live

---

## Distribution Strategy (decided 2026-06-25)

### Reddit (highest ROI, start immediately)
- **Subreddits:** r/resumes (850k), r/cscareerquestions (900k), r/recruitinghell (680k), r/jobs, r/jobsearchhacks
- **Rule:** Answer first, link second. Write a genuine 200-300 word answer to someone's problem. Mention the tool casually at the end.
- **Cadence:** 3-5 posts/week across these subs, rotate products
- **Do NOT:** post promotional "I built a tool" posts — gets flagged and banned

### LinkedIn
- Post 2x/week "build in public" style: metrics, learnings, screenshots
- What works: "I noticed X% of resumes fail on this one thing" (insight posts) and "I built this in 48 hours on $0" (process posts)
- Post between 8-10am PKT on weekdays

### Hacker News
- "Show HN: I built an ATS resume checker that shows exactly why your resume got rejected"
- Post Tuesday-Thursday 9am-12pm EST
- First comment from Bilal explains tech stack + what was learned
- Space products 2-3 months apart — don't launch everything at once
- One well-executed Show HN can send 500-2,000 visitors in 24 hours

### ProductHunt
- Line up 25 upvoters BEFORE launch day (LinkedIn connections, friends, WhatsApp)
- Find a hunter with 1k+ followers (ask in r/producthunt)
- Launch Tuesday-Thursday
- Space launches 4-6 weeks apart per product

### SEO — Programmatic Pages
- Add `/for/[role]/page.tsx` to ATS Checker and Cover Letter Gen
- 20 job title variants: software engineer, product manager, data scientist, nurse, teacher, marketing manager, UX designer, financial analyst, project manager, sales rep, etc.
- Each page: unique H1 + meta description + JSON-LD, same tool underneath
- Target: "ATS resume checker for software engineers", "cover letter generator for nurses" — 5k-50k monthly volume, low competition
- Build time: 4 hours per product

### Email Capture (Phase 6)
- Add "Email me my results" before showing free score on every tool
- Use Resend or Brevo free tier to store emails and send
- Follow-up email 24hrs later: "Your result + what to do next" with cross-sell link

---

## AI Migration History (IMPORTANT)

The tools went through 3 AI providers. **Do not switch back.**

| Stage | Provider | Why abandoned |
|---|---|---|
| Original | Anthropic Claude (`claude-opus-4-8`) | Requires paid API — separate from Claude.ai subscription. console.anthropic.com, per-token billing. Not free. |
| Attempt 2 | Google Gemini (`gemini-2.0-flash`) via `@google/generative-ai` | Also requires billing setup — not truly free. App threw errors. |
| **Current ✅** | **Groq (`llama-3.3-70b-versatile`)** | Genuinely free. No credit card. 14,400 req/day free tier. Sign up at console.groq.com. |

**Key fact:** Claude.ai subscription (Pro/Teams) does NOT give you an Anthropic API key. They are completely separate products with separate billing.

---

## AI Client Pattern (All Tools)

All tools use the same pattern in `lib/claude.ts`:

```typescript
import Groq from "groq-sdk";

let groq: Groq | null = null;

export function getAIClient() {
  if (!groq) {
    groq = new Groq({ apiKey: process.env.GROQ_API_KEY! });
  }
  return groq;
}

export const AI_MODEL = "llama-3.3-70b-versatile";
```

Usage in route files:
```typescript
const completion = await getAIClient().chat.completions.create({
  model: AI_MODEL,
  max_tokens: 1000,
  response_format: { type: "json_object" }, // only for JSON responses
  messages: [{ role: "user", content: prompt }],
});
const text = completion.choices[0].message.content ?? "";
```

**NEVER initialize the client at module level** — it breaks Vercel builds. Always lazy-init inside the exported function.

---

## Environment Variables

Each Vercel project needs ONE env var:

| Variable | Value | Where to get |
|---|---|---|
| `GROQ_API_KEY` | `gsk_...` | console.groq.com → API Keys (free, no credit card) |

**SECURITY RULE (non-negotiable):** Never create `.env` or `.env.local` files containing API keys. Bilal creates those manually. Only tell him the variable name, never create the file.

---

## Lemon Squeezy Setup

- **Store:** mbq.lemonsqueezy.com
- **Checkout pattern:** Each `/api/checkout/route.ts` creates a checkout URL and appends `?redirect=<encoded-result-page-url-with-?paid=true>`
- **Redirect after payment:** `<product-url>/result?paid=true`
- **Free tier behavior:** result page shows partial data without `?paid=true`
- **Paid tier unlock:** result page checks `searchParams.get("paid") === "true"` AND `localStorage` key

---

## SEO Setup

- `layout.tsx`: contains `SITE_URL` constant (no trailing slash), AdSense `<script>` tag directly in `<head>` (plain HTML `<script>`, NOT Next.js `<Script>` component — the Next.js component injects via JS and AdSense crawler can't see it)
- `sitemap.ts`: exports array of URLs, uses `SITE_URL` without trailing slash
- `robots.ts`: disallows `/result` and `/api/`
- Google Search Console: use URL prefix verification (meta tag method), NOT domain/DNS verification
- Sitemap submission: enter only `sitemap.xml` (relative), not full URL

---

## Mistakes Made (Don't Repeat)

1. **AdSense verification failed** — was using Next.js `<Script strategy="afterInteractive">`. Fix: use plain `<script>` tag directly in `<head>` in `layout.tsx`.

2. **Cover Letter Gen payment never redirected to `?paid=true`** — checkout route returned bare Lemon Squeezy URL with no redirect param. Fix: append `?redirect=encodeURIComponent(resultUrl + "?paid=true")` to the LS checkout URL.

3. **LinkedIn Optimizer double slashes in sitemap/robots URLs** — `SITE_URL` had trailing `/`, template literals added another `/`. Fix: remove trailing slash from `SITE_URL`.

4. **Dead `robot.ts` files** — ATS Checker and Cover Letter Gen had `robot.ts` (wrong filename, ignored by Next.js) alongside the correct `robots.ts`. The dead files were deleted.

5. **Switching AI providers twice** — Anthropic (paid) → Gemini (still paid) → Groq (actually free). The correct provider is Groq. Don't revisit this.

6. **localStorage collision risk** — Different products must use namespaced keys. ATS: `ats_result`/`paid`. Cover Letter: `cl_data`/`paid`. LinkedIn: `li_result`/`li_paid`. They run on different domains so collision isn't a real risk, but the namespacing is already in place.

7. **SSR guard on localStorage** — LinkedIn Optimizer's `isPaid` check wraps localStorage access in `typeof window !== "undefined"` to avoid Next.js SSR errors. Don't remove this.

8. **Underpricing** — Launched ATS Checker and Cover Letter Gen at $3-5. This is below the trust threshold for job seekers and destroys revenue. $9 minimum for these tools, $19 for Interview Prep. Do not go lower.

---

## Master Step-by-Step Execution List

Track progress here — check off steps as completed.

### Phase 0 — Fix Before Adding Anything New (Day 1, ~2 hours)
- [ ] 1. Raise ATS Checker price to $9 on Lemon Squeezy + update any `$3`/`$5` text in the UI
- [ ] 2. Raise Cover Letter Gen price to $9 on Lemon Squeezy + update UI copy
- [ ] 3. Scaffold + build PDF Compressor (not coded yet — use `pdf-lib`, pure client-side, no API routes)
- [ ] 4. Add PDF Compressor cross-sell links in ATS Checker and Cover Letter Gen about pages after it's built
- [ ] 5. Verify LinkedIn Optimizer Vercel URL matches across `layout.tsx`, `sitemap.ts`, `robots.ts`, `checkout/route.ts`
- [ ] 6. Add `GROQ_API_KEY` to all 4 Vercel projects and redeploy each

### Phase 1 — Distribution for Existing Products (Days 1-7)
- [ ] 7. Post in r/resumes — genuine helpful answer, mention free ATS score at end
- [ ] 8. Post in r/cscareerquestions — same playbook
- [ ] 9. Post in r/recruitinghell — same playbook
- [ ] 10. Post in r/jobs — same
- [ ] 11. Write first LinkedIn "build in public" post with screenshot — post 8-10am PKT
- [ ] 12. Submit PDF Compressor to Google Search Console + submit sitemap
- [ ] 13. Resubmit Cover Letter Gen sitemap in Search Console (was showing "Couldn't fetch")
- [ ] 14. Add LinkedIn Optimizer to Google Search Console

### Phase 2 — SEO Expansion (Days 3-10)
- [ ] 15. Add `/for/[role]/page.tsx` to ATS Checker — 20 job title variants with unique meta per page
- [ ] 16. Add `/for/[role]/page.tsx` to Cover Letter Gen — same 20 job titles
- [ ] 17. Update metadata + JSON-LD on each programmatic page with role-specific title/description

### Phase 3 — Build Interview Prep Tool (Days 5-10)
- [ ] 18. Scaffold `interview-prep/` by copying LinkedIn Optimizer codebase
- [ ] 19. Build form: inputs are target role, company name, job description (paste)
- [ ] 20. Build `/api/analyze` (free): returns 3 sample questions
- [ ] 21. Build `/api/generate` (paid): returns 15 questions + STAR answers + follow-up tips as JSON
- [ ] 22. Build `/api/checkout`: Lemon Squeezy at $19 — same pattern as other tools
- [ ] 23. Set Lemon Squeezy price to $19 — do not change this
- [ ] 24. Add cross-sell links from ATS Checker and Cover Letter Gen result pages to Interview Prep
- [ ] 25. Deploy to Vercel, add to Search Console, submit sitemap

### Phase 4 — Launch Burst (Week 2)
- [ ] 26. Line up 25 upvoters for ProductHunt launch day (LinkedIn connections, WhatsApp contacts)
- [ ] 27. Find a ProductHunt hunter with 1k+ followers (post in r/producthunt)
- [ ] 28. Launch ATS Checker on ProductHunt — Tuesday-Thursday, 9am EST
- [ ] 29. Post "Show HN: I built an ATS resume checker that shows why your resume got rejected" on Hacker News
- [ ] 30. Share launch post on LinkedIn same day

### Phase 5 — Build Salary Negotiation Tool (Days 14-18)
- [ ] 31. Scaffold `salary-negotiation/` — copy Interview Prep base
- [ ] 32. Form inputs: current offer, target salary, job title, company, competing offers (optional)
- [ ] 33. Output: email script + talking points + rebuttals to common pushback
- [ ] 34. Set Lemon Squeezy price to $15
- [ ] 35. Add cross-sell from Interview Prep result page: "Got the offer? Now negotiate it →"
- [ ] 36. Deploy + Search Console + sitemap

### Phase 6 — Email Capture (Week 3)
- [ ] 37. Add "Email me my results" capture to every free result page across all tools
- [ ] 38. Set up Resend or Brevo free tier to store emails and send
- [ ] 39. Write follow-up email: sent 24hrs after capture, includes result summary + cross-sell link

### Phase 7 — Ongoing (Weekly)
- [ ] 40. Post 3x/week on Reddit across job seeker subs — rotate products, always answer first
- [ ] 41. Post 2x/week on LinkedIn — metrics, learnings, screenshots
- [ ] 42. Check Search Console weekly — find which programmatic pages get impressions, double down on those roles
- [ ] 43. Launch Cover Letter Gen on ProductHunt (4-6 weeks after ATS Checker launch)
- [ ] 44. Launch Interview Prep on ProductHunt (4-6 weeks after Cover Letter Gen launch)

---

## File Structure (Key Files)

```
tools-projects/
├── ats-checker/
│   ├── app/
│   │   ├── layout.tsx          # SITE_URL, AdSense <script> in <head>
│   │   ├── page.tsx            # Resume + JD input form
│   │   ├── result/page.tsx     # Free score + paid rewrite display
│   │   ├── about/page.tsx      # Cross-sells to Cover Letter Gen
│   │   ├── for/[role]/page.tsx # Programmatic SEO — 20 job titles (TO BUILD)
│   │   ├── api/
│   │   │   ├── score/route.ts      # POST — free, returns JSON {score, missing_keywords, suggestions}
│   │   │   ├── optimize/route.ts   # POST — paid, returns {result: string}
│   │   │   └── checkout/route.ts   # POST — creates LS checkout URL
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   └── lib/claude.ts           # Groq client (getAIClient, AI_MODEL)
│
├── cover-letter-gen/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Resume + job details form
│   │   ├── result/page.tsx     # Free preview + paid full letter
│   │   ├── about/page.tsx      # Cross-sells to ATS Checker
│   │   ├── for/[role]/page.tsx # Programmatic SEO — 20 job titles (TO BUILD)
│   │   ├── api/
│   │   │   ├── generate/route.ts   # POST — returns {result: string}
│   │   │   └── checkout/route.ts
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   └── lib/claude.ts           # Groq client (getAIClient, AI_MODEL)
│
├── linkedin-optimizer/
│   ├── app/
│   │   ├── layout.tsx          # SITE_URL = "https://linkedin-optimizer-livid.vercel.app"
│   │   ├── page.tsx            # headline/about/targetRole/skills form
│   │   ├── result/page.tsx     # Free analysis + paid optimized profile
│   │   ├── about/page.tsx      # Cross-sells to ATS + Cover Letter
│   │   ├── privacy/page.tsx    # Contact: bqtools92@gmail.com, noindex
│   │   ├── terms/page.tsx      # One-time $5, all sales final, not affiliated with LinkedIn
│   │   ├── api/
│   │   │   ├── analyze/route.ts    # POST — free, returns {score, verdict, improvements, missing_keywords}
│   │   │   ├── optimize/route.ts   # POST — paid, returns {headline, about, recommended_skills}
│   │   │   └── checkout/route.ts
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   └── lib/claude.ts           # Groq client (getAIClient, AI_MODEL)
│
├── pdf-compressor/             # BUILT ✅ — pure client-side, pdfjs-dist + pdf-lib, 8 pSEO pages
│
├── interview-prep/             # TO BUILD — copy linkedin-optimizer as base
│   └── (same structure as above)
│
└── salary-negotiation/         # TO BUILD after interview-prep
    └── (same structure as above)
```

---

## How to Start a New Session

Paste this at the start:

> "I'm building a micro-SaaS factory (job seeker tools) with Next.js + Groq AI + Lemon Squeezy + Vercel. Read HANDOFF.md in the project root for full context — it has current product status, prices, the step-by-step execution list with checkboxes, and what to build next. Working directory: `/Users/bilalmuhammadqureshi/Projects/tools-projects/`"
