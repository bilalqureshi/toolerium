# Project Handoff — Toolerium Micro-SaaS Factory
**Last updated:** 2026-06-26  
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
- **Ads:** Google AdSense (applied/pending) — client: `ca-pub-4727099105535137`
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
- **Cross-sells:** Cover Letter Gen ✅ | PDF Compressor ✅ | Interview Prep ✅
- **About page cross-sells:** ATS about page has "Also Try These Free Tools" section with Cover Letter, LinkedIn, PDF Compressor ✅
- **Programmatic SEO pages:** `/for/[role]/page.tsx` — TO BUILD ❌

### Product 2: AI Cover Letter Generator
- **URL:** https://cover-letter-gen-rho.vercel.app
- **Status:** LIVE ✅
- **Vercel project root:** `cover-letter-gen/`
- **Lemon Squeezy product ID:** `ac15c55f-61ad-41e1-ae46-6dbd7df825c8`
- **Price:** $9 one-time *(raised from $3-5 on 2026-06-25 — do not lower this)*
- **Payment flow:** user fills form → free preview shown → pay $9 → `?paid=true` redirect → full letter unlocked
- **localStorage keys:** `cl_data`, `paid`
- **API routes:** `/api/generate` (paid, plain text), `/api/checkout`
- **Cross-sells on homepage:** ATS Checker ✅ | LinkedIn Optimizer ✅ | Interview Prep ✅ | (2×2 grid)
- **About page cross-sells:** ATS Checker ✅ | LinkedIn Optimizer ✅ | PDF Compressor ✅
- **Programmatic SEO pages:** `/for/[role]/page.tsx` — TO BUILD ❌

### Product 3: PDF Compressor
- **URL:** https://pdf-compressor-ecru-two.vercel.app
- **Status:** LIVE ✅
- **Vercel project root:** `pdf-compressor/`
- **Price:** Free (AdSense monetization)
- **Tech:** Pure client-side — `pdfjs-dist` + `pdf-lib`, no API routes, no env vars needed
- **Pages:** Home + 8 programmatic SEO pages under `/compress/[useCase]/`
- **Schema:** SoftwareApplication + FAQPage + HowTo + Organization + BreadcrumbList
- **robots.ts:** Explicitly allows GPTBot, PerplexityBot, ClaudeBot, Google-Extended (AEO)
- **Cross-sells:** Links to ATS Checker and Cover Letter Gen on home and all use-case pages ✅
- **Google Search Console:** submitted ✅

### Product 4: LinkedIn Profile Optimizer
- **URL:** https://linkedin-optimizer-livid.vercel.app
- **Status:** LIVE ✅
- **Vercel project root:** `linkedin-optimizer/`
- **Lemon Squeezy product ID:** `08c6c473-3e26-471d-8b30-646ab8747be1`
- **Price:** $9 one-time
- **Payment flow:** user fills headline/about/targetRole/skills → free analysis (score, verdict, improvements, keywords) → pay $9 → optimized headline + about + skills unlocked
- **localStorage keys:** `li_result`, `li_paid`
- **API routes:** `/api/analyze` (free, JSON), `/api/optimize` (paid, JSON), `/api/checkout`
- **Cross-sells on result page:** Interview Prep ✅ | PDF Compressor ✅ | (2×2 grid with ATS, Cover Letter)
- **About page cross-sells:** ATS Checker ✅ | Cover Letter ✅ | PDF Compressor ✅

### Product 5: AI Interview Prep Tool
- **URL:** https://interview-prep-six-gules.vercel.app
- **Status:** LIVE ✅ — built and deployed 2026-06-26
- **Vercel project root:** `interview-prep/`
- **Lemon Squeezy product ID:** `05ae0e69-fe32-4f33-916f-4c4919c78300`
- **Price:** $19 one-time — DO NOT lower this
- **Payment flow:** user fills role + company + job description → 3 free sample questions → pay $19 → 15 questions + STAR answers + follow-up tips unlocked
- **localStorage keys:** `ip_result`, `ip_paid`
- **API routes:** `/api/analyze` (free, 3 questions), `/api/generate` (paid, 15 STAR Q&A), `/api/checkout`
- **Cross-sells:** ATS Checker ✅ | Cover Letter Gen ✅ | LinkedIn Optimizer ✅
- **About page cross-sells:** ATS ✅ | Cover Letter ✅ | LinkedIn ✅ | PDF Compressor ✅
- **SEO:** 15 programmatic role pages at `/for/[role]/` ✅ (software-engineer, product-manager, data-scientist, ux-designer, marketing-manager, financial-analyst, project-manager, sales-representative, devops-engineer, frontend-developer, backend-developer, machine-learning-engineer, business-analyst, data-analyst, cybersecurity-analyst)
- **Each role page has:** unique H1/meta/intro/tip, 10 sample questions, 4-question FAQ, BreadcrumbList + FAQPage + SoftwareApplication JSON-LD, hub links to all other role pages, cross-sells
- **robots.ts:** AEO — allows GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Amazonbot, anthropic-ai, cohere-ai
- **Google Search Console:** verification file added (`public/google2a4abc95d70e4f4a.html`) ✅ — click Verify in GSC to confirm
- **Sitemap:** includes all 15 `/for/[role]/` pages at priority 0.8 ✅
- **AdSense:** `ca-pub-4727099105535137` — plain `<script>` in `<head>` of layout.tsx ✅

### Product 6: Salary Negotiation Script Generator (PLANNED)
- **Status:** NOT BUILT ❌
- **Vercel project root:** `salary-negotiation/` (to be created)
- **Price:** $15 one-time
- **Audience:** Anyone who just received a job offer
- **Payment flow:** inputs (current offer, target salary, job title, company, competing offers) → pay $15 → email script + talking points + rebuttals to common pushback
- **Cross-sell:** Interview Prep result page → "Got the offer? Now negotiate it →"
- **Build time:** ~48 hours

---

## Revenue Strategy (decided 2026-06-25)

### Pricing Rationale
- Previous prices ($3-5) were below the psychological trust threshold and killed conversion
- Job seekers spend $200/hr on human career coaches — $9-19 for a tool is trivially cheap
- Comparable tools: Resumeworded $19/mo, Jobscan $49/mo, Teal $29/mo
- **Never go below $9 for ATS/Cover Letter/LinkedIn, $19 for Interview Prep, $15 for Salary Negotiation**

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
- Timeline: realistically month 3-4 once SEO + Reddit + all 6 products are live

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
- Interview Prep `/for/[role]/` pages — 15 roles DONE ✅
- ATS Checker `/for/[role]/page.tsx` — TO BUILD ❌
- Cover Letter Gen `/for/[role]/page.tsx` — TO BUILD ❌
- Target: "ATS resume checker for software engineers", "cover letter for nurses" — 5k-50k monthly volume, low competition
- Build time: ~4 hours per product

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

## Critical Next.js Rules (Learned the Hard Way)

1. **`postcss.config.mjs` is REQUIRED for Tailwind v4** — without it, page renders with no CSS (black background, raw HTML). Every product must have it:
   ```js
   const config = { plugins: { "@tailwindcss/postcss": {} } };
   export default config;
   ```

2. **`next.config.ts` must use `turbopack: {}`** — webpack config breaks the build in Next.js 16.x:
   ```ts
   const nextConfig: NextConfig = { turbopack: {} };
   ```

3. **AdSense: use plain `<script>` in `<head>` of `layout.tsx`** — NOT Next.js `<Script>` component, which injects via JS and AdSense crawler can't see it.

4. **`.gitignore` must be the FIRST file created in any new product directory** — before `package.json`, before `npm install`. If node_modules gets committed, recovery requires `git reset --soft origin/master`.

5. **Groq client: never initialize at module level** — always lazy-init inside the exported function, or Vercel build breaks.

---

## SEO Setup

- `layout.tsx`: contains `SITE_URL` constant (no trailing slash), AdSense `<script>` tag directly in `<head>`
- `sitemap.ts`: exports array of URLs, uses `SITE_URL` without trailing slash
- `robots.ts`: disallows `/result` and `/api/`; explicitly allows AEO bots (GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Amazonbot, anthropic-ai, cohere-ai)
- Schema markup: `SoftwareApplication` (not `WebApplication`), `FAQPage`, `HowTo`, `Organization`, `BreadcrumbList`
- Programmatic SEO: `generateStaticParams()` + `generateMetadata()` in `/for/[role]/page.tsx`
- Google Search Console: use URL prefix verification (meta tag method), NOT domain/DNS verification
- Sitemap submission: enter only `sitemap.xml` (relative), not full URL

---

## Mistakes Made (Don't Repeat)

1. **AdSense verification failed** — was using Next.js `<Script strategy="afterInteractive">`. Fix: use plain `<script>` tag directly in `<head>` in `layout.tsx`.

2. **Cover Letter Gen payment never redirected to `?paid=true`** — checkout route returned bare Lemon Squeezy URL with no redirect param. Fix: append `?redirect=encodeURIComponent(resultUrl + "?paid=true")` to the LS checkout URL.

3. **LinkedIn Optimizer double slashes in sitemap/robots URLs** — `SITE_URL` had trailing `/`, template literals added another `/`. Fix: remove trailing slash from `SITE_URL`.

4. **Dead `robot.ts` files** — ATS Checker and Cover Letter Gen had `robot.ts` (wrong filename, ignored by Next.js) alongside the correct `robots.ts`. The dead files were deleted.

5. **Switching AI providers twice** — Anthropic (paid) → Gemini (still paid) → Groq (actually free). The correct provider is Groq. Don't revisit this.

6. **localStorage collision risk** — Different products must use namespaced keys. ATS: `ats_result`/`paid`. Cover Letter: `cl_data`/`paid`. LinkedIn: `li_result`/`li_paid`. Interview Prep: `ip_result`/`ip_paid`.

7. **SSR guard on localStorage** — wrap all localStorage access in `typeof window !== "undefined"` to avoid Next.js SSR errors.

8. **Underpricing** — Launched ATS Checker and Cover Letter Gen at $3-5. This is below the trust threshold for job seekers and destroys revenue. $9 minimum for these tools, $19 for Interview Prep. Do not go lower.

9. **node_modules committed to git** — ran `npm install` before creating `.gitignore`. Recovery: `git reset --soft origin/master`, then selectively re-stage only source files. Prevention: `.gitignore` FIRST, always.

10. **Unstyled page after deploy** — missing `postcss.config.mjs`. Every new product needs this file. Copy from `linkedin-optimizer/postcss.config.mjs`.

---

## Master Step-by-Step Execution List

### Phase 0 — Fix Before Adding Anything New ✅ (mostly done)
- [ ] 1. Raise ATS Checker price to $9 on Lemon Squeezy dashboard + update any `$3`/`$5` text in UI
- [ ] 2. Raise Cover Letter Gen price to $9 on Lemon Squeezy dashboard + update UI copy
- [x] 3. Scaffold + build PDF Compressor ✅
- [x] 4. Add PDF Compressor cross-sell links across all products ✅
- [ ] 5. Verify LinkedIn Optimizer Vercel URL matches across `layout.tsx`, `sitemap.ts`, `robots.ts`, `checkout/route.ts`
- [ ] 6. Add `GROQ_API_KEY` to all 5 Vercel projects and redeploy each

### Phase 1 — Distribution for Existing Products
- [ ] 7. Post in r/resumes — genuine helpful answer, mention free ATS score at end
- [ ] 8. Post in r/cscareerquestions — same playbook
- [ ] 9. Post in r/recruitinghell — same playbook
- [ ] 10. Post in r/jobs — same
- [ ] 11. Write first LinkedIn "build in public" post with screenshot — post 8-10am PKT
- [x] 12. Submit PDF Compressor to Google Search Console + submit sitemap ✅
- [x] 13. Resubmit Cover Letter Gen sitemap in Search Console ✅
- [x] 14. Add LinkedIn Optimizer to Google Search Console ✅
- [ ] 15. Verify Interview Prep in Google Search Console (GSC verification file deployed — click Verify) ✅ file ready
- [ ] 16. Submit interview-prep sitemap.xml in GSC (includes 15 /for/[role]/ pages)

### Phase 2 — SEO Expansion
- [x] 17. Interview Prep `/for/[role]/` — 15 role pages DONE ✅
- [ ] 18. Add `/for/[role]/page.tsx` to ATS Checker — same 15 roles, unique content per page
- [ ] 19. Add `/for/[role]/page.tsx` to Cover Letter Gen — same 15 roles

### Phase 3 — Build Interview Prep Tool ✅ DONE
- [x] 20. Scaffold `interview-prep/` ✅
- [x] 21. Build form: target role, company name, job description ✅
- [x] 22. Build `/api/analyze` (free, 3 questions) ✅
- [x] 23. Build `/api/generate` (paid, 15 STAR Q&A) ✅
- [x] 24. Build `/api/checkout` at $19 ✅
- [x] 25. Add cross-sell links from all other products ✅
- [x] 26. Deploy to Vercel ✅ — https://interview-prep-six-gules.vercel.app
- [x] 27. Expert SEO: 15 programmatic role pages, AEO robots, schema markup ✅

### Phase 4 — Launch Burst (Week 2)
- [ ] 28. Line up 25 upvoters for ProductHunt launch day
- [ ] 29. Find a ProductHunt hunter with 1k+ followers (post in r/producthunt)
- [ ] 30. Launch ATS Checker on ProductHunt — Tuesday-Thursday, 9am EST
- [ ] 31. Post "Show HN: I built an ATS resume checker that shows why your resume got rejected"
- [ ] 32. Share launch post on LinkedIn same day

### Phase 5 — Build Salary Negotiation Tool
- [ ] 33. Create `.gitignore` FIRST in `salary-negotiation/`, then scaffold
- [ ] 34. Copy `interview-prep/` as base (same form → pay → unlock pattern)
- [ ] 35. Form inputs: current offer, target salary, job title, company, competing offers
- [ ] 36. Output: email script + talking points + rebuttals
- [ ] 37. Set Lemon Squeezy price to $15
- [ ] 38. Add cross-sell from Interview Prep result page: "Got the offer? Now negotiate it →"
- [ ] 39. Deploy + Search Console + sitemap

### Phase 6 — Email Capture (Week 3)
- [ ] 40. Add "Email me my results" capture to every free result page across all tools
- [ ] 41. Set up Resend or Brevo free tier
- [ ] 42. Write follow-up email: sent 24hrs after capture, result summary + cross-sell link

### Phase 7 — Ongoing (Weekly)
- [ ] 43. Post 3x/week on Reddit across job seeker subs
- [ ] 44. Post 2x/week on LinkedIn — metrics, learnings, screenshots
- [ ] 45. Check Search Console weekly — find which programmatic pages get impressions, double down
- [ ] 46. Launch Cover Letter Gen on ProductHunt (4-6 weeks after ATS Checker launch)
- [ ] 47. Launch Interview Prep on ProductHunt (4-6 weeks after Cover Letter Gen launch)

---

## File Structure (Key Files)

```
tools-projects/
├── ats-checker/
│   ├── app/
│   │   ├── layout.tsx          # SITE_URL, AdSense <script> in <head>
│   │   ├── page.tsx            # Resume + JD input form, cross-sell grid (3 cols)
│   │   ├── result/page.tsx     # Free score + paid rewrite + cross-sell grid (3 cols)
│   │   ├── about/page.tsx      # "Also Try These Free Tools" section ✅
│   │   ├── for/[role]/page.tsx # Programmatic SEO — TO BUILD ❌
│   │   ├── api/
│   │   │   ├── score/route.ts
│   │   │   ├── optimize/route.ts
│   │   │   └── checkout/route.ts
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   └── lib/claude.ts
│
├── cover-letter-gen/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx            # cross-sell grid (2×2: ATS, LinkedIn, Interview Prep, PDF)
│   │   ├── result/page.tsx
│   │   ├── about/page.tsx      # "Also Try These Free Tools" ✅
│   │   ├── for/[role]/page.tsx # Programmatic SEO — TO BUILD ❌
│   │   ├── api/
│   │   │   ├── generate/route.ts
│   │   │   └── checkout/route.ts
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   └── lib/claude.ts
│
├── linkedin-optimizer/
│   ├── app/
│   │   ├── layout.tsx          # SITE_URL = "https://linkedin-optimizer-livid.vercel.app"
│   │   ├── page.tsx
│   │   ├── result/page.tsx     # cross-sell grid (2×2: ATS, Cover Letter, Interview Prep, PDF)
│   │   ├── about/page.tsx      # "Also Try These Free Tools" ✅
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── api/
│   │   │   ├── analyze/route.ts
│   │   │   ├── optimize/route.ts
│   │   │   └── checkout/route.ts
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   └── lib/claude.ts
│
├── pdf-compressor/             # LIVE ✅ — free, pdfjs-dist + pdf-lib, 8 pSEO pages
│
├── interview-prep/             # LIVE ✅ — built 2026-06-26
│   ├── app/
│   │   ├── layout.tsx          # SITE_URL = "https://interview-prep-six-gules.vercel.app"
│   │   ├── page.tsx            # form + role hub grid (15 roles) + cross-sells
│   │   ├── result/page.tsx     # 3 sample questions free, 15 STAR Q&A paid
│   │   ├── about/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── for/[role]/page.tsx # 15 role pages ✅ (pSEO)
│   │   ├── api/
│   │   │   ├── analyze/route.ts    # free, 3 questions
│   │   │   ├── generate/route.ts   # paid, 15 STAR Q&A
│   │   │   └── checkout/route.ts   # LS product 05ae0e69-fe32-4f33-916f-4c4919c78300
│   │   ├── sitemap.ts          # includes all 15 /for/[role]/ URLs
│   │   └── robots.ts           # AEO bots allowed
│   ├── lib/claude.ts
│   ├── postcss.config.mjs      # REQUIRED — Tailwind v4
│   └── public/
│       └── google2a4abc95d70e4f4a.html  # GSC verification ✅
│
└── salary-negotiation/         # TO BUILD next
    └── (copy interview-prep as base)
```

---

## How to Start a New Session

Paste this at the start:

> "I'm building a micro-SaaS factory (job seeker tools) with Next.js + Groq AI + Lemon Squeezy + Vercel. Read HANDOFF.md in the project root for full context — it has current product status, prices, the step-by-step execution list with checkboxes, and what to build next. Working directory: `/Users/bilalmuhammadqureshi/Projects/tools-projects/`"
