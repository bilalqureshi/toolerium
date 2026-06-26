import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SITE_URL = "https://cover-letter-gen-rho.vercel.app";

type RoleData = {
  display: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  tip: string;
  keyElements: string[];
  faqs: { q: string; a: string }[];
};

const ROLES: Record<string, RoleData> = {
  "software-engineer": {
    display: "Software Engineer",
    metaTitle: "Cover Letter Generator for Software Engineers — AI-Tailored in Seconds",
    metaDesc: "Generate a tailored software engineer cover letter in seconds. Paste your resume + job description and get an ATS-friendly, keyword-rich cover letter. Free preview.",
    h1: "AI Cover Letter Generator for Software Engineers",
    intro: "Software engineer cover letters are often skipped or written as an afterthought — which is exactly why a well-written one stands out. Hiring managers at most companies spend 20-30 seconds on a cover letter before deciding whether to read the resume. Our AI reads your resume and the job description together, then writes a cover letter that mirrors the JD's language, highlights your most relevant technical experience, and opens with a hook that gets a hiring manager to keep reading.",
    tip: "The most effective software engineer cover letters do one thing: connect a specific past achievement to a specific requirement in the JD. Don't open with 'I am a software engineer with X years of experience.' Open with: 'At [Company], I redesigned the API layer that cut response times by 60% — the same kind of performance work that [Target Company]'s JD calls out as a priority.' Specificity beats polish every time.",
    keyElements: [
      "Hook tied to a specific JD requirement (not 'I'm excited about this role')",
      "One concrete technical achievement with a metric",
      "The specific tech stack you'll be working with — matched to the JD",
      "Why this company or product specifically — not a generic 'I love your mission'",
      "A clear close with a direct call to action",
    ],
    faqs: [
      { q: "Should software engineers even write a cover letter?", a: "Yes — when it's required or optional and you're not obviously the top 5% of candidates by credentials alone. A cover letter is the only place in your application where you can explain why your specific experience maps to this specific role. For competitive roles or career pivots, a great cover letter can be the deciding factor that gets you an interview over an equally credentialed candidate." },
      { q: "What should a software engineer cover letter focus on?", a: "Focus on one technical achievement that directly addresses a core requirement in the JD. If the JD emphasizes scaling, write about a time you solved a scaling problem. If it emphasizes developer tooling, write about infrastructure or DX improvements. The worst cover letters are generic; the best ones read like they were written specifically for one job posting — because they were." },
      { q: "How long should a software engineer cover letter be?", a: "3 paragraphs, 200-300 words. Opening: hook with a specific achievement tied to the JD. Middle: 2-3 sentences on why your experience specifically maps to what they need. Close: direct call to action. Anything longer gets skimmed or skipped. If you can't make your case in 300 words, the cover letter isn't focused enough." },
      { q: "What keywords should a software engineer include in a cover letter?", a: "Mirror the JD's exact terminology. If the JD says 'distributed systems', your cover letter should say 'distributed systems', not 'scalable architecture'. If it says 'TypeScript', use 'TypeScript' not 'typed JavaScript'. ATS systems scan cover letters with the same keyword matching they use on resumes. Our AI automatically mirrors the JD's language when generating your cover letter." },
    ],
  },
  "product-manager": {
    display: "Product Manager",
    metaTitle: "Cover Letter Generator for Product Managers — AI-Tailored in Seconds",
    metaDesc: "Generate a tailored product manager cover letter in seconds. Paste your resume + job description and get an ATS-friendly, impact-driven cover letter. Free preview.",
    h1: "AI Cover Letter Generator for Product Managers",
    intro: "Product manager cover letters are uniquely high-stakes — they're the first test of your ability to communicate clearly and persuasively, the core PM skill. A generic cover letter signals immediately that you don't understand the role or the company. Our AI reads your resume and the job description together, then writes a cover letter that speaks the company's product language, highlights your most relevant PM wins, and demonstrates the kind of structured thinking that gets PM candidates interviews.",
    tip: "The best PM cover letters open with a product observation, not a personal statement. 'I've been a daily user of [Product] for two years and I noticed X gap in the checkout flow that your new [feature] is clearly addressing — this is exactly the kind of nuanced product problem I've spent the last 3 years working on at [Company].' That opening takes 10 seconds to write and gets a hiring manager's full attention.",
    keyElements: [
      "A product observation or insight specific to the company's product",
      "One metric-driven PM win that directly maps to the JD's emphasis",
      "Explicit mention of the product domain (B2B/B2C/platform/growth/etc.)",
      "Why this company's product problem is interesting to you specifically",
      "A concise close that invites a conversation, not just a response",
    ],
    faqs: [
      { q: "What makes a product manager cover letter stand out?", a: "Specificity about the product and the problem. Any PM can write 'I'm passionate about building great products.' The ones who get interviews write about specific decisions the company has made, specific product challenges the role will face, or specific gaps in the product they've noticed as a user. Hiring managers for PM roles are evaluating your product thinking before you even get to the interview — your cover letter is the first test." },
      { q: "Should a PM cover letter be different for startup vs big tech roles?", a: "Yes, meaningfully. For startups, emphasize 0-to-1 work, ownership, and speed — 'I launched X in 6 weeks and owned everything from spec to launch to post-release iteration.' For big tech, emphasize cross-functional influence, scale, and structured decision-making — 'I aligned 4 teams across engineering, design, data, and legal on a compliance-driven product change that shipped to 50M users.' Match the tone and emphasis to the company's stage." },
      { q: "How do you write a PM cover letter for a career pivot?", a: "Name the pivot directly in the opening paragraph, then immediately pivot to the transferable experience. 'I'm transitioning from software engineering to product management — and I've spent the last year doing PM work without the title: defining requirements, running user research, and owning the roadmap for [specific feature].' Don't apologize for the pivot; reframe it as an asset. Our AI handles career pivot framing automatically when it reads your resume and JD together." },
      { q: "What length should a product manager cover letter be?", a: "3-4 paragraphs, 250-350 words. PM cover letters can be slightly longer than engineering cover letters because communication skill IS the thing being evaluated. But don't exceed 400 words — anything longer signals you don't know how to prioritize. Every sentence should earn its place by adding information that your resume doesn't already convey." },
    ],
  },
  "data-scientist": {
    display: "Data Scientist",
    metaTitle: "Cover Letter Generator for Data Scientists — AI-Tailored in Seconds",
    metaDesc: "Generate a tailored data scientist cover letter in seconds. Paste your resume + job description and get an ATS-friendly, impact-focused cover letter. Free preview.",
    h1: "AI Cover Letter Generator for Data Scientists",
    intro: "Data scientist cover letters need to demonstrate two things simultaneously: technical credibility and the ability to translate complex analysis into business decisions. Most data scientist cover letters fail by focusing entirely on methods and tools — the work any data scientist can do — instead of the decisions and outcomes those methods drove. Our AI reads your resume and JD together, then writes a cover letter that leads with your impact story and mirrors the specific analytical focus of the role.",
    tip: "Lead with the decision, not the method. Don't open with 'I have 5 years of experience building ML models.' Open with: 'A churn model I built at [Company] identified the exact customer segment we were about to lose — and the targeted intervention we ran based on it reduced churn by 18% in that cohort.' The model is the method; the 18% churn reduction is the story.",
    keyElements: [
      "One analysis-to-decision chain with a business outcome (not just a model accuracy metric)",
      "The specific type of data work the role emphasizes (ML, analytics, experimentation, etc.)",
      "Technical credibility signal — your primary language and key frameworks",
      "Why you're interested in this domain or this company's data specifically",
      "A concrete ask for a conversation to discuss a specific aspect of the role",
    ],
    faqs: [
      { q: "What should a data scientist cover letter focus on?", a: "Business impact, not methods. 'Built a random forest classifier with 94% AUC' says nothing about whether it mattered. 'Built a churn classifier that identified at-risk customers 30 days earlier than our previous model, enabling a retention campaign that recovered $1.2M in annual recurring revenue' says everything. Every technical claim in your cover letter should have a business outcome attached to it." },
      { q: "Should a data scientist cover letter mention tools and frameworks?", a: "Briefly, yes — but don't let it dominate. One sentence listing your primary tools (Python, PyTorch, SQL, Spark) establishes technical credibility. The rest of your cover letter should be about what you did with those tools, not the tools themselves. The exception: if the JD specifically calls out a tool or framework and you have deep experience with it, mention that explicitly." },
      { q: "How do you write a data science cover letter for a role that's half analytics, half ML?", a: "Address both explicitly. 'My work spans both exploratory analytics — I've built dashboards that became the source of truth for 3 executive teams — and production ML: I've deployed models that serve real-time predictions to 2M users.' If your experience is stronger in one area, be honest about that and frame the other as complementary. Hiring managers for hybrid roles expect hybrid cover letters." },
      { q: "What's the right length for a data scientist cover letter?", a: "3 paragraphs, 200-280 words. Data scientists who write long cover letters are often signaling poor communication skills — the same problem they'll have when presenting analysis to stakeholders. Opening: one impact story with a metric. Middle: why your experience maps to this specific role and domain. Close: direct ask. Keep it short and specific." },
    ],
  },
  "ux-designer": {
    display: "UX Designer",
    metaTitle: "Cover Letter Generator for UX Designers — AI-Tailored in Seconds",
    metaDesc: "Generate a tailored UX designer cover letter in seconds. Paste your resume + job description and get an ATS-friendly, process-driven cover letter. Free preview.",
    h1: "AI Cover Letter Generator for UX Designers",
    intro: "UX designer cover letters are an unusual challenge: you're a visual communicator being asked to sell yourself with words. But a well-written cover letter gives you something your portfolio can't — the ability to explain your design thinking, research approach, and why you're specifically interested in this company's design problems. Our AI reads your resume and the JD together, then writes a cover letter that speaks to the specific design challenges of the role and signals the cross-functional thinking that UX hiring managers look for.",
    tip: "Reference a specific design decision in your portfolio work — not just the final screen. 'In my case study for [Project], I had to choose between three navigation patterns based on card-sorting results from 24 users. I picked the one that scored lowest on aesthetics but highest on task success rate — and that trade-off is exactly the kind of decision I'd bring to [Company].' Design thinking in your cover letter proves you do what you claim.",
    keyElements: [
      "A specific design decision and the reasoning behind it (not just 'I love great UX')",
      "The research or testing method that informed that decision",
      "Explicit mention of your primary design tool (Figma, etc.) in context",
      "An observation about the company's product or design challenge",
      "Cross-functional language — how you work with engineers and PMs",
    ],
    faqs: [
      { q: "Do UX designers need a cover letter if they have a portfolio?", a: "Yes — for any role you actually want. Your portfolio shows the final product; your cover letter explains your thinking and why you're specifically interested in this company's design problems. Hiring managers for competitive UX roles receive dozens of portfolios — a cover letter that demonstrates product curiosity and design reasoning is the differentiator. It takes 20 minutes to write one; it can be the reason you get an interview over an equally talented candidate." },
      { q: "What should a UX designer write about in a cover letter?", a: "Write about one design decision you made that wasn't obvious — the trade-off, the research that informed it, and what you learned. Then connect it to why that experience is relevant to this specific company's design challenges. Avoid generic statements like 'I'm passionate about user-centered design' — every UX candidate says that. Specificity about your process and the company's specific problems is what stands out." },
      { q: "Should a UX designer mention research skills in a cover letter?", a: "Yes, especially if the JD emphasizes research. If the role is research-heavy, your cover letter should specifically mention the research methods you use (user interviews, usability testing, card sorting, diary studies) and give one concrete example of how research changed your design direction. Hiring managers for research-heavy roles are explicitly evaluating research methodology from the first touchpoint." },
      { q: "How long should a UX designer cover letter be?", a: "3 paragraphs, 200-280 words. Opening: one specific design story that demonstrates your thinking. Middle: why your experience maps to this company's specific design challenges. Close: a reference to your portfolio and a direct call to action. Keep it tight — a verbose cover letter signals poor communication skills, which is a red flag for a UX role where clear communication with non-designers is critical." },
    ],
  },
  "marketing-manager": {
    display: "Marketing Manager",
    metaTitle: "Cover Letter Generator for Marketing Managers — AI-Tailored in Seconds",
    metaDesc: "Generate a tailored marketing manager cover letter in seconds. Paste your resume + job description and get an ATS-friendly, results-driven cover letter. Free preview.",
    h1: "AI Cover Letter Generator for Marketing Managers",
    intro: "Marketing manager cover letters are simultaneously the most important and most poorly executed in the job search process — because marketers should know how to write, which means a bad cover letter is especially damaging. Hiring managers expect marketers to demonstrate their craft in the cover letter itself: clear message, compelling hook, results orientation. Our AI reads your resume and the JD together, then writes a cover letter that leads with your best marketing results, speaks the company's marketing language, and demonstrates the channel expertise the role requires.",
    tip: "Your cover letter opener should prove you're a marketer. Don't start with 'I am a marketing manager with 7 years of experience.' Start with: 'The campaign I'm most proud of started with a hypothesis that turned out to be wrong — we repositioned our messaging for mid-market CTOs instead of VPs, and CPL dropped 34%.' A story that demonstrates marketing judgment is the opening that gets a marketing hiring manager to keep reading.",
    keyElements: [
      "A campaign result with specific channel, spend, and outcome",
      "The specific marketing function the role emphasizes (demand gen, brand, content, product marketing)",
      "One insight about the company's market position or target audience",
      "Your primary channel expertise matched to the JD's requirements",
      "A metric-driven close that frames a future contribution",
    ],
    faqs: [
      { q: "What makes a marketing manager cover letter stand out?", a: "Metrics and specificity. Every other marketing manager will claim they're 'data-driven' and 'results-oriented.' The ones who get interviews write: 'I managed a $180k paid LinkedIn budget targeting Series B fintech CTOs, generated 62 MQLs at $2.9k CPL (vs our $4.5k benchmark), and 14 of those converted to closed business within 90 days.' Numbers are table stakes for marketing roles — if you don't include them, you're not demonstrating the skill they're hiring for." },
      { q: "Should a marketing cover letter focus on strategy or execution?", a: "Match the JD. For senior manager/director roles, lead with strategy — how you built a program, positioned a product, or shifted a market approach. For manager-level roles with execution responsibilities, balance both: one strategic win, one execution metric. If the JD emphasizes 'hands-on' and 'individual contributor', lead with execution results. Your cover letter should mirror the level of abstraction the role requires." },
      { q: "How do you write a marketing cover letter for a different industry?", a: "Address the industry switch directly but briefly, then spend most of the letter on transferable skills and results. 'While my experience is in B2B SaaS, the demand generation fundamentals I've built — paid acquisition, nurture automation, and sales-marketing alignment — translate directly to [target industry]. At [Company], those fundamentals generated [result].' Name the transferable skill, prove it with a metric, then connect it to the new context." },
      { q: "What length is right for a marketing manager cover letter?", a: "3-4 paragraphs, 250-350 words. Marketing managers are evaluated on their ability to communicate concisely and compellingly — your cover letter is the first live demonstration of that skill. Every sentence should be pulling weight: hook, result, relevance to this role, close. If your cover letter exceeds 400 words, cut it. The act of cutting forces clarity, which is the skill they're hiring for." },
    ],
  },
  "financial-analyst": {
    display: "Financial Analyst",
    metaTitle: "Cover Letter Generator for Financial Analysts — AI-Tailored in Seconds",
    metaDesc: "Generate a tailored financial analyst cover letter in seconds. Paste your resume + job description and get an ATS-friendly, numbers-driven cover letter. Free preview.",
    h1: "AI Cover Letter Generator for Financial Analysts",
    intro: "Financial analyst cover letters require a precise balance: you need to demonstrate technical finance credibility while also proving you can communicate complex analysis to non-finance stakeholders. Most candidates write letters that are either too technical (jargon-heavy, no business narrative) or too vague (generic statements about analytical skills). Our AI reads your resume and the specific financial role you're targeting, then writes a cover letter that leads with your most relevant analytical work and signals the technical depth the position requires.",
    tip: "Always include the scale of your analytical work. 'Built financial models' is meaningless. 'Built a three-statement model for a $240M revenue business that was used by the CFO to set annual budget targets' establishes scope immediately. Finance hiring managers calibrate expectations by deal size, company size, and model complexity — give them the numbers to calibrate against.",
    keyElements: [
      "One specific analytical work product with scale (dollar amounts, company size)",
      "The tools and methods used (Excel, Bloomberg, DCF, SQL — matched to the JD)",
      "Domain-specific language matched to the role (FP&A, IB, equity research, PE)",
      "Communication skill signal — how your analysis influenced a decision",
      "Technical credentials (CFA level, CPA, relevant coursework) if applicable",
    ],
    faqs: [
      { q: "What should a financial analyst cover letter include?", a: "Lead with one specific analytical achievement: the type of analysis, the tool, the business context, and the decision it supported. 'I built a 5-year DCF model in Excel for a $180M Series C target, sensitivity-tested across 12 revenue scenarios, and presented the findings to the investment committee — the analysis supported a $22M investment that has since returned 2.4x.' This establishes scope, technical skill, communication ability, and outcome in four sentences." },
      { q: "How do investment banking and FP&A cover letters differ?", a: "IB cover letters should emphasize: deal experience (types, sizes), technical modeling depth (LBO, M&A comps, DCF), and the ability to work under pressure with tight deadlines. FP&A cover letters should emphasize: business partnering (how you supported leadership decisions), forecasting accuracy, budget process ownership, and cross-functional communication. The vocabulary, tone, and examples you choose should reflect which function you're targeting." },
      { q: "Should a financial analyst mention the CFA in a cover letter?", a: "Yes — in the closing sentence or in the credentials paragraph. 'I am currently a CFA Level II candidate' is a relevant signal for most finance roles and should be mentioned if it's true. For IB and equity research roles, CFA candidacy is a near-mandatory mention. For FP&A roles, it's less critical but still worth including. Never bury it in a list — give it its own brief mention." },
      { q: "How long should a financial analyst cover letter be?", a: "3 paragraphs, 200-280 words. Finance hiring managers value precision and economy of language — a verbose cover letter signals the opposite of the analytical rigor they're looking for. Opening: one technical achievement with scale and context. Middle: how your specific experience maps to this role and firm. Close: credentials, availability for discussion, and a direct call to action." },
    ],
  },
  "project-manager": {
    display: "Project Manager",
    metaTitle: "Cover Letter Generator for Project Managers — AI-Tailored in Seconds",
    metaDesc: "Generate a tailored project manager cover letter in seconds. Paste your resume + job description and get an ATS-friendly, delivery-focused cover letter. Free preview.",
    h1: "AI Cover Letter Generator for Project Managers",
    intro: "Project manager cover letters are often the weakest part of PM job applications — partly because PMs are execution-focused, not writing-focused, and partly because PM cover letters tend to describe processes instead of outcomes. Hiring managers for PM roles don't want to read about your project management methodology; they want to hear about a project that was in trouble and how you rescued it, or a complex multi-team program you delivered under constraints. Our AI reads your resume and the JD together, then writes a cover letter that leads with your delivery story and signals the specific PM skills the role requires.",
    tip: "The most powerful PM cover letter opener is a constraint story: 'I inherited a $4M enterprise integration project that was 3 months behind schedule and $600k over budget. Within 6 weeks I had rebaselined the plan, replaced 2 underperforming vendors, and communicated a new timeline to the executive sponsor — we delivered 2 weeks late instead of 5 months late, and the client extended our contract.' Constraints + actions + outcomes = a PM cover letter that gets read.",
    keyElements: [
      "A project with named constraints: budget, timeline, team size, or complexity",
      "Your specific actions (not 'we' — what YOU specifically did)",
      "The outcome with a metric (delivered on time, % under budget, stakeholder outcome)",
      "Methodology signal matched to the JD (Agile/Scrum, PMP, Waterfall, hybrid)",
      "Stakeholder communication language — how you manage up and across",
    ],
    faqs: [
      { q: "What should a project manager cover letter focus on?", a: "Delivery stories with constraints. The best PM cover letter takes one project — ideally one that had significant complexity, risk, or adversity — and walks through what made it hard, what you specifically did, and what the outcome was. Avoid describing your PM process ('I create detailed project plans and manage stakeholder expectations') — anyone can write that. Show a specific situation where your PM skills made the difference between failure and delivery." },
      { q: "Should a PM cover letter mention PMP certification?", a: "Yes, and prominently — especially if the JD mentions it as required or preferred. 'As a PMP-certified project manager with 8 years...' in the opening is a strong credentialing signal. If you're a CSM or PMI-ACP, lead with that for Agile-focused roles. Certifications are also ATS signals — mention them in the cover letter even though they're on your resume, because the ATS scans both documents." },
      { q: "How do you write a PM cover letter for a new industry?", a: "Acknowledge the industry switch briefly, then immediately redirect to the universality of PM fundamentals: 'While my background is in healthcare IT, the core project management skills — stakeholder alignment, risk management, and delivery under constraint — apply directly to [target industry]. In my last role, I delivered [specific example].' Show the transferable pattern, prove it with an example, connect it to the new context. Don't dwell on the transition more than one sentence." },
      { q: "How long should a project manager cover letter be?", a: "3 paragraphs, 230-320 words. Opening: your best delivery story in 3-4 sentences with specific metrics. Middle: how your experience maps to the specific requirements of this role. Close: certifications, methodologies, and a direct call to action. PMs who can't be concise in a cover letter raise a concern: if you can't manage the scope of a 300-word letter, how do you manage project scope?" },
    ],
  },
  "sales-representative": {
    display: "Sales Representative",
    metaTitle: "Cover Letter Generator for Sales Reps — AI-Tailored in Seconds",
    metaDesc: "Generate a tailored sales representative cover letter in seconds. Paste your resume + job description and get a quota-driven, persuasive cover letter. Free preview.",
    h1: "AI Cover Letter Generator for Sales Representatives",
    intro: "Sales rep cover letters are a test before the test — hiring managers know that a great salesperson can write a persuasive, compelling cover letter, so they're evaluating your sales instincts from the first sentence. A generic 'I'm passionate about sales' opener is the equivalent of opening a discovery call by reading from a product brochure. Our AI reads your resume and the JD together, then writes a cover letter that leads with your quota story, mirrors the company's sales motion language, and closes with the urgency and confidence of a good sales close.",
    tip: "Open your cover letter like you'd open a great discovery call — with something specific to the prospect (the company) that shows you've done your homework. 'I noticed [Company] recently expanded into the mid-market segment — that's exactly the motion I've been running for the last 3 years, where I grew my territory from $420k to $1.1M ARR over 18 months.' That opener signals you're already thinking like one of their reps.",
    keyElements: [
      "Quota attainment percentage and dollar value, prominently in paragraph one",
      "The sales motion language matched to the JD (outbound, inbound, SMB, enterprise, etc.)",
      "One deal story: how you found it, managed it, and closed it",
      "Company-specific signal: why you want to sell THIS product to THESE buyers",
      "A confident close that asks for a meeting (not 'I hope to hear from you')",
    ],
    faqs: [
      { q: "What makes a sales rep cover letter stand out to hiring managers?", a: "Numbers and confidence. Hiring managers for sales roles read hundreds of cover letters — the one that opens with '118% of $1.2M quota last year, managing 65 SMB accounts through outbound prospecting' gets immediate attention. The ones that open with 'I'm a highly motivated and results-driven sales professional' go in the no pile. Lead with your number, explain how you got there, and close with confidence. That's the cover letter version of how a great salesperson sells." },
      { q: "How should a sales cover letter be written for different sales motions?", a: "Match the language to the motion the JD describes. For outbound/SDR roles: emphasize prospecting volume, sequence management, meetings booked, and SQLs generated. For AE roles: emphasize quota attainment, average deal size, sales cycle management, and closing. For enterprise sales: emphasize multi-stakeholder navigation, long cycle management, and contract size. For SMB: emphasize volume, velocity, and self-sufficiency. One sales resume doesn't translate to all motions." },
      { q: "Should a sales cover letter mention why you want to sell the specific product?", a: "Yes — and this is the most underused element. Hiring managers know that reps who believe in the product sell better. One sentence explaining why you're genuinely interested in selling this specific product to this specific buyer profile is a signal that separates top candidates from commodity candidates. 'I've been a user of your product for 18 months and understand exactly why CMOs choose it over [competitor]' is the kind of thing that gets you an interview." },
      { q: "How long should a sales rep cover letter be?", a: "3 paragraphs, 200-280 words. Short and punchy — like a good cold email. Opening: quota number and one-line context. Middle: one deal story that demonstrates your sales process. Close: why this company, this product, and a direct ask for 20 minutes. A sales candidate who can't write a tight, compelling short-form document raises the question: can they write tight, compelling prospecting emails?" },
    ],
  },
  "devops-engineer": {
    display: "DevOps Engineer",
    metaTitle: "Cover Letter Generator for DevOps Engineers — AI-Tailored in Seconds",
    metaDesc: "Generate a tailored DevOps engineer cover letter in seconds. Paste your resume + job description and get an ATS-friendly, infrastructure-focused cover letter. Free preview.",
    h1: "AI Cover Letter Generator for DevOps Engineers",
    intro: "DevOps engineer cover letters are often skipped entirely, which means a good one immediately differentiates you. The trap is writing a skills inventory instead of an impact story — listing Kubernetes, Terraform, and AWS says nothing about what you've built and what it enabled. Our AI reads your resume and the JD together, then writes a cover letter that leads with your infrastructure impact, mirrors the company's tooling language, and demonstrates the reliability mindset that DevOps hiring managers hire for.",
    tip: "Frame your DevOps achievements in terms of business outcomes, not just technical metrics. 'Reduced deployment time from 45 minutes to 8 minutes' is good. 'Reduced deployment time from 45 minutes to 8 minutes — enabling the team to ship 5x more frequently, which directly supported 3 major product launches in Q4' is better. The technical metric proves the engineering; the business context proves the impact.",
    keyElements: [
      "One infrastructure improvement with a before/after metric (MTTR, deployment frequency, cost)",
      "The specific toolchain matched to the JD (Kubernetes, Terraform, GitHub Actions, etc.)",
      "Reliability mindset language — how you think about uptime and incident response",
      "Developer experience angle — how your work made other engineers more productive",
      "Cloud platform experience matched to what the JD specifies (AWS/GCP/Azure)",
    ],
    faqs: [
      { q: "Should DevOps engineers write cover letters?", a: "Yes — especially for roles at companies where culture and approach to reliability matter, not just technical skills. A cover letter lets you explain your philosophy: how you think about incident response, why you prefer certain IaC approaches, how you balance velocity and reliability. These signals matter to engineering leaders who are hiring someone to build and maintain the infrastructure their whole team depends on." },
      { q: "What should a DevOps cover letter focus on?", a: "Infrastructure that enabled velocity. The best DevOps cover letters talk about what their infrastructure improvements made possible, not just the infrastructure itself. 'I built a Terraform-managed multi-region EKS infrastructure that reduced our deployment time from 40 minutes to 7 minutes — enabling the product team to ship 4x more frequently and directly supporting $3M in new product launches in Q3.' The deployment time is the technical win; the product launches are the business impact." },
      { q: "How do you write a DevOps cover letter for a cloud-native role?", a: "Lead with your cloud platform expertise and be specific about services. 'I've built and maintained production AWS infrastructure across EKS, RDS, S3, CloudFront, and Lambda for a 50M-user SaaS product — managing cost optimization that reduced our monthly bill from $180k to $110k while supporting 3x traffic growth.' Every service name is an ATS and credibility signal. Never write 'extensive AWS experience' without naming the specific services." },
      { q: "What length is right for a DevOps engineer cover letter?", a: "3 paragraphs, 200-280 words. Opening: one infrastructure achievement with before/after metrics and business impact. Middle: how your toolchain experience maps to the JD's stack and what specifically attracted you to this role. Close: a direct ask for a conversation. DevOps engineers are valued for precision and efficiency — a concise, specific cover letter demonstrates those qualities from the first impression." },
    ],
  },
  "frontend-developer": {
    display: "Frontend Developer",
    metaTitle: "Cover Letter Generator for Frontend Developers — AI-Tailored in Seconds",
    metaDesc: "Generate a tailored frontend developer cover letter in seconds. Paste your resume + job description and get an ATS-friendly, performance-focused cover letter. Free preview.",
    h1: "AI Cover Letter Generator for Frontend Developers",
    intro: "Frontend developer cover letters often undersell the craft behind frontend work — treating it as just 'making things look good' instead of the performance engineering, accessibility discipline, and cross-functional translation work it actually is. Our AI reads your resume and the JD together, then writes a cover letter that leads with your most impactful frontend work, mirrors the JD's framework and tooling language, and signals the product-thinking that separates senior frontend engineers from pure implementers.",
    tip: "Frame your frontend work in user and business terms, not just technical terms. 'Optimized bundle size' is forgettable. 'Reduced JS bundle from 2.1MB to 760KB using code splitting and lazy loading — LCP improved from 4.8s to 1.4s, reducing bounce rate by 14% and contributing to a $200k/month increase in checkout completions' is the kind of impact story that gets you an interview.",
    keyElements: [
      "One performance improvement or UX win with before/after metrics",
      "The specific framework and tooling matched to the JD (React, TypeScript, Next.js, etc.)",
      "Collaboration language — how you work with designers, PMs, and backend engineers",
      "Accessibility or responsive design signal if the JD mentions it",
      "Component architecture or design system experience for senior roles",
    ],
    faqs: [
      { q: "What should a frontend developer cover letter focus on?", a: "User-facing impact tied to specific technical decisions. Not 'I built React components' but 'I rebuilt the product search experience in React 18 with TypeScript — reducing time-to-first-result from 2.8s to 400ms and increasing search-to-purchase conversion by 9%. The technical decisions behind that improvement are the kind of frontend problem I find most interesting.' The metric is the hook; the curiosity statement is what keeps them reading." },
      { q: "How important is mentioning TypeScript in a frontend cover letter?", a: "Very — if the JD mentions it, which most now do. TypeScript is increasingly a requirement, not a preference, in frontend roles. Your cover letter should mention TypeScript explicitly if it's in the JD, and ideally in context: 'I've been writing React with TypeScript for 3 years, and the type safety has been the single biggest contributor to our ability to refactor without regressions.' Context is more credible than a list of tools." },
      { q: "Should a frontend developer mention performance optimization in a cover letter?", a: "Yes — for mid-to-senior roles, web performance is increasingly a core competency, not a bonus skill. If your experience includes Core Web Vitals optimization, bundle analysis, or rendering performance work, mention it with specific metrics. Hiring managers at product companies are acutely aware of how performance affects conversion and user experience — a candidate who can prove they've moved performance metrics is immediately more interesting than one who hasn't." },
      { q: "How long should a frontend developer cover letter be?", a: "3 paragraphs, 200-280 words. Opening: your best frontend impact story in 3-4 sentences. Middle: why your specific stack and experience maps to this role. Close: a direct call to action. For senior roles or roles at companies where writing is valued (startups, product-led companies), a slightly longer letter (300-320 words) with a more detailed technical example can work well — but never exceed 350 words." },
    ],
  },
  "backend-developer": {
    display: "Backend Developer",
    metaTitle: "Cover Letter Generator for Backend Developers — AI-Tailored in Seconds",
    metaDesc: "Generate a tailored backend developer cover letter in seconds. Paste your resume + job description and get an ATS-friendly, systems-focused cover letter. Free preview.",
    h1: "AI Cover Letter Generator for Backend Developers",
    intro: "Backend developer cover letters need to establish system-level thinking, not just list languages and frameworks. Hiring managers for backend roles want to know how you think about reliability, scale, and API design — and a generic cover letter doesn't demonstrate any of that. Our AI reads your resume and the JD together, then writes a cover letter that leads with your most impactful backend work, mirrors the company's stack, and signals the distributed systems and API design thinking that senior backend roles require.",
    tip: "Backend cover letters win by demonstrating scale judgment. 'Built an API that handled high traffic' is forgettable. 'Designed and built a REST API in Node.js (TypeScript) that scaled from 100 to 50k RPS over 18 months — added Redis caching, database read replicas, and circuit breakers for downstream services, achieving 99.97% uptime across the growth period' tells a backend engineering story that a hiring manager wants to hear more of.",
    keyElements: [
      "Scale signal: RPS, database size, user volume, or reliability SLA with a metric",
      "Language and framework matched precisely to the JD",
      "API design language: REST, GraphQL, gRPC — whichever the JD emphasizes",
      "Database experience: named databases and what you did with them",
      "Systems thinking: caching, queuing, microservices, or distributed systems experience",
    ],
    faqs: [
      { q: "What should a backend developer cover letter lead with?", a: "A scale or reliability story. 'I've designed and maintained the API layer for a product used by 12M monthly active users — including the migration from a monolith to a microservices architecture that reduced our average response time from 340ms to 85ms while handling 3x traffic growth.' This establishes scale, technical depth, and delivery capability in two sentences. Scale signals are the most credible opening for any backend developer cover letter." },
      { q: "Should a backend developer mention databases in a cover letter?", a: "Yes — specifically. Database experience is one of the most underspecified areas on both resumes and cover letters. 'I have extensive database experience' says nothing. 'I've designed PostgreSQL schemas for high-write workloads (25k writes/sec), optimized query performance using EXPLAIN ANALYZE, and implemented Redis caching layers that reduced database load by 60%' says everything. Name the database, describe the challenge, and give the impact." },
      { q: "How do you write a backend cover letter for a distributed systems role?", a: "Use distributed systems vocabulary naturally, not as a keyword drop. 'I've spent the last 2 years building event-driven microservices with Kafka — handling exactly-once delivery semantics, designing for idempotency, and building dead-letter queue processing for failed events. The distributed coordination challenges I've worked through at [Company] are directly relevant to the architecture described in your JD.' Demonstrate understanding of the specific challenges, not just tool familiarity." },
      { q: "What length is right for a backend developer cover letter?", a: "3 paragraphs, 200-280 words. Opening: your strongest scale or reliability story with specific metrics. Middle: how your stack and systems experience maps to the role's specific technical requirements. Close: a direct ask for a technical conversation. Be concise — backend engineers who pad their cover letters the same way they'd pad their code are signaling poor judgment about what belongs and what doesn't." },
    ],
  },
  "machine-learning-engineer": {
    display: "Machine Learning Engineer",
    metaTitle: "Cover Letter Generator for ML Engineers — AI-Tailored in Seconds",
    metaDesc: "Generate a tailored ML engineer cover letter in seconds. Paste your resume + job description and get an ATS-friendly, systems-focused cover letter. Free preview.",
    h1: "AI Cover Letter Generator for Machine Learning Engineers",
    intro: "ML engineer cover letters are uniquely demanding because the role itself spans a wide spectrum — from research-adjacent work building training pipelines, to production MLOps, to LLM infrastructure. The same cover letter template doesn't serve all three. Our AI reads your resume and the specific ML engineering role you're targeting, then writes a cover letter that speaks to the correct end of the ML spectrum, names the right frameworks, and demonstrates the production-systems thinking that differentiates ML engineers from data scientists.",
    tip: "The most impactful ML engineering cover letter leads with a production story, not a model accuracy story. 'I trained a model with 94% AUC' is less interesting than 'I took a model from research prototype to a production inference system serving 8M users in real-time — reducing latency from 200ms to 45ms with Triton serving, and building automated retraining pipelines that catch data drift before it degrades model quality.' Production = impact; accuracy = baseline.",
    keyElements: [
      "A production deployment story (not just model training) with scale and latency metrics",
      "MLOps tooling matched to the JD (MLflow, W&B, Kubeflow, SageMaker, Vertex AI)",
      "The ML domain the role focuses on (NLP, recommendation, CV, LLMs, etc.)",
      "Framework specificity: PyTorch, TensorFlow, JAX — whichever the JD names",
      "Data pipeline and infrastructure language — showing the full ML system view",
    ],
    faqs: [
      { q: "How do ML engineer cover letters differ from data scientist cover letters?", a: "ML engineer cover letters should emphasize production systems, deployment infrastructure, and reliability — not model accuracy or statistical methodology. If your strongest stories are about training pipelines, serving infrastructure, feature stores, or model monitoring, lead with those. Data scientist cover letters emphasize analysis and business impact; ML engineer cover letters emphasize systems and engineering impact. Know which end of the spectrum the role is on and write accordingly." },
      { q: "Should ML engineers mention LLMs in their cover letters?", a: "Yes — if the JD mentions LLMs, GenAI, or foundation models in any way, those keywords should appear in your cover letter. More importantly, be specific about what you've done: fine-tuning, RAG implementation, prompt engineering at scale, RLHF, or LLM inference optimization are all distinct and credible signals. 'I have experience with LLMs' means nothing. 'I fine-tuned a Llama 3 model on domain-specific data and deployed it as a retrieval-augmented generation system serving 500k queries/day' is specific and credible." },
      { q: "What MLOps tools should an ML engineer mention in a cover letter?", a: "Mention whatever appears in the JD first — then add any tools from your own experience that demonstrate the same capabilities. Common high-value tools: MLflow or W&B for experiment tracking, Kubeflow or Vertex AI for pipeline orchestration, Feast or Tecton for feature stores, Triton or TorchServe for model serving. Don't list every tool you've used — pick the 2-3 most relevant to the role and give them a sentence of context each." },
      { q: "How long should an ML engineer cover letter be?", a: "3 paragraphs, 220-300 words. Opening: one production ML story with scale and engineering metrics. Middle: how your specific ML domain experience and tooling maps to this role's requirements. Close: your particular interest in the company's ML problem and a direct call to action. ML engineering is a precision discipline — a cover letter that's tight, specific, and technically credible demonstrates the same discipline you'd bring to the role." },
    ],
  },
  "business-analyst": {
    display: "Business Analyst",
    metaTitle: "Cover Letter Generator for Business Analysts — AI-Tailored in Seconds",
    metaDesc: "Generate a tailored business analyst cover letter in seconds. Paste your resume + job description and get an ATS-friendly, requirements-focused cover letter. Free preview.",
    h1: "AI Cover Letter Generator for Business Analysts",
    intro: "Business analyst cover letters are often too process-heavy and impact-light — describing what BAs do in general rather than what you specifically achieved. Hiring managers for BA roles are looking for evidence that you can bridge the gap between business stakeholders and technical teams, translate ambiguous requirements into clear specifications, and drive measurable process improvements. Our AI reads your resume and the JD together, then writes a cover letter that leads with your translation and impact story, not a description of BA methodology.",
    tip: "The most effective BA cover letter opener proves translation skill. 'I spent 3 weeks interviewing 14 stakeholders across 4 departments to uncover a requirement that no one had articulated: the sales and finance teams were pulling numbers from two different source systems and neither team knew it. Resolving that single discrepancy eliminated $1.2M in reconciliation errors per quarter.' That's a BA story that demonstrates exactly what the role requires.",
    keyElements: [
      "A requirements discovery story — what you found that wasn't stated explicitly",
      "A stakeholder conflict or alignment challenge and how you resolved it",
      "Tool keywords matched to the JD: JIRA, Confluence, SQL, Visio, etc.",
      "Methodology matched to the JD: Agile user stories, use cases, BPMN process mapping",
      "Business impact of the analysis: cost saved, process improved, delivery accelerated",
    ],
    faqs: [
      { q: "What should a business analyst cover letter focus on?", a: "The gap between stated requirements and actual needs — and how you bridge it. BAs are most valuable when they find what stakeholders didn't know they needed to say. Your best cover letter story demonstrates this: a requirement that wasn't in the original scope but turned out to be critical, a stakeholder conflict you mediated, or an analysis that changed the direction of a project before it was built. Show the translation skill, not just the documentation process." },
      { q: "How should a BA mention technical skills in a cover letter?", a: "In the context of impact, not as a skills inventory. 'Proficient in SQL' is invisible. 'I wrote SQL queries to reconcile two source systems that stakeholders hadn't realized were out of sync — the discrepancy was responsible for 3 months of reporting errors that affected board-level decisions' is a story that demonstrates SQL skill and business impact simultaneously. Name the tool, describe what you found with it, and connect it to a business outcome." },
      { q: "How do IT BA and business-process BA cover letters differ?", a: "IT BA cover letters should emphasize: SDLC experience, requirements documentation for software delivery (user stories, acceptance criteria, functional specs), UAT ownership, and API or data integration context. Business-process BA cover letters should emphasize: process mapping (BPMN, swimlane diagrams), efficiency improvements (time saved, cost reduced, error rate decreased), and cross-departmental stakeholder management. Match your language and examples to the type of BA role in the JD." },
      { q: "How long should a business analyst cover letter be?", a: "3-4 paragraphs, 230-320 words. Opening: one requirements or analysis story with a clear business outcome. Middle: how your experience maps to the specific domain or industry of the role. Close: methodologies, tools, and a direct call to action. BAs are communication professionals — a cover letter that's clear, well-structured, and concise demonstrates the exact skill set they're being hired for." },
    ],
  },
  "data-analyst": {
    display: "Data Analyst",
    metaTitle: "Cover Letter Generator for Data Analysts — AI-Tailored in Seconds",
    metaDesc: "Generate a tailored data analyst cover letter in seconds. Paste your resume + job description and get an ATS-friendly, insight-driven cover letter. Free preview.",
    h1: "AI Cover Letter Generator for Data Analysts",
    intro: "Data analyst cover letters succeed when they follow the same logic as a great data story: clear hypothesis, evidence, insight, and decision. Most data analyst cover letters fail at the last step — they tell hiring managers what analysis was run, but not what decision it drove. Our AI reads your resume and the JD together, then writes a cover letter that leads with your best analysis-to-decision story, mirrors the company's data tooling language, and signals the stakeholder communication skills that differentiate senior analysts.",
    tip: "Never open a data analyst cover letter by describing your SQL skills or your years of experience. Open with the outcome of your best analysis: 'An analysis I ran in BigQuery in late 2023 revealed that our highest-value customer segment — the one we were most aggressively acquiring — also had the highest 90-day churn rate. That finding redirected $800k in acquisition budget and is now the basis of our onboarding strategy.' That story is what gets you an interview.",
    keyElements: [
      "One analysis-to-decision story: what you analyzed, what you found, what changed",
      "SQL depth signal — what kind of queries you write (window functions, CTEs, cohort analysis)",
      "BI tool matched to the JD: Tableau, Looker, Power BI, Metabase",
      "Stakeholder communication: how you've presented data findings to non-technical audiences",
      "The domain or function you want to analyze — matched to the company's business",
    ],
    faqs: [
      { q: "What should a data analyst cover letter lead with?", a: "A finding, not a skill. The most compelling opening for a data analyst is the moment an analysis changed something: a budget allocation, a product decision, a go/no-go call. 'The retention analysis I ran in Snowflake in Q2 showed that users who completed step 4 of onboarding had 3x the 6-month retention rate of those who skipped it — that finding led to a product redesign that improved overall D180 retention by 22%.' That's a data story. Lead with what your data found and what it changed." },
      { q: "Should a data analyst mention SQL complexity in a cover letter?", a: "Yes — if you write complex SQL, say so. 'I write complex SQL (window functions, CTEs, recursive queries) in Snowflake daily to calculate cohort metrics and user funnel analytics across 4M+ daily active users.' This is a stronger signal than 'SQL proficiency' because it tells the hiring manager the depth of your SQL work and the scale you operate at. SQL complexity is a meaningful differentiator for senior analyst roles." },
      { q: "How do you write a data analyst cover letter when applying to a company in a new industry?", a: "Focus on the transferable analytical fundamentals and connect them to the new industry's data problems. 'My background is in e-commerce analytics, but the core analytical work — retention modeling, funnel optimization, and A/B test analysis — translates directly to [target industry]. I've spent time studying [Company]'s product and I have specific hypotheses about where the most valuable data questions are.' Show curiosity about the company's specific data problems — it signals you're already thinking as one of their analysts." },
      { q: "How long should a data analyst cover letter be?", a: "3 paragraphs, 200-270 words. Opening: your best analysis story in 3-4 sentences. Middle: how your tooling and domain experience maps to this specific role. Close: why this company's data problems are interesting to you specifically, and a direct ask for a conversation. Data analysts who write verbose cover letters raise a question about their ability to communicate insights concisely — the skill they'll need daily." },
    ],
  },
  "cybersecurity-analyst": {
    display: "Cybersecurity Analyst",
    metaTitle: "Cover Letter Generator for Cybersecurity Analysts — AI-Tailored in Seconds",
    metaDesc: "Generate a tailored cybersecurity analyst cover letter in seconds. Paste your resume + job description and get an ATS-friendly, threat-focused cover letter. Free preview.",
    h1: "AI Cover Letter Generator for Cybersecurity Analysts",
    intro: "Cybersecurity analyst cover letters need to demonstrate two things: technical threat-detection credibility and the communication skills to brief non-technical stakeholders on risk. Most cybersecurity cover letters focus entirely on the technical side — listing certifications and tools — without showing the analyst's ability to assess and communicate business risk, which is the half of the job that separates good analysts from great ones. Our AI reads your resume and the JD together, then writes a cover letter that leads with your strongest security story and signals both the technical depth and the business awareness the role requires.",
    tip: "The most effective cybersecurity cover letter opener is an incident story. 'In Q3 last year, Splunk SIEM alerted on a lateral movement pattern in our network at 2am. I triaged, confirmed a compromised endpoint, and initiated containment within 22 minutes — 40 minutes before the attacker reached any sensitive systems. I briefed the CISO at 7am with a full timeline, root cause, and remediation steps.' That story demonstrates SIEM skill, incident response, speed, and executive communication in four sentences.",
    keyElements: [
      "One incident response story: detection, triage, containment, and communication",
      "SIEM tool named explicitly (Splunk, Microsoft Sentinel, QRadar, etc.)",
      "Certifications prominently placed (Security+, CISSP, CEH, OSCP — whichever you hold)",
      "Communication signal: how you brief executives or stakeholders on security risk",
      "Framework or compliance language matched to the JD (NIST, MITRE ATT&CK, SOC 2, etc.)",
    ],
    faqs: [
      { q: "What should a cybersecurity analyst cover letter focus on?", a: "An incident story with technical specificity and a communication outcome. The best cybersecurity cover letters walk through one real incident: how it was detected, what the analyst did, how quickly they contained it, and how they communicated the risk to stakeholders. This structure demonstrates SIEM tool proficiency, incident response process, and executive communication — the three core competencies hiring managers evaluate in the first interview." },
      { q: "How prominently should certifications appear in a cybersecurity cover letter?", a: "First paragraph, first or second sentence — for any role where they're required or preferred. 'As a CISSP-certified security analyst with 6 years of SOC experience...' opens with the credential that likely filters the applicant pool, then immediately signals experience level. For roles that require Security+ specifically, lead with that. Don't bury certifications in the closing paragraph — they're credentialing signals that ATS systems and hiring managers look for early." },
      { q: "How do SOC and GRC cover letters differ?", a: "SOC (Security Operations Center) cover letters should lead with: incident response experience, SIEM tool proficiency, threat detection stories, average MTTR, and alert triage volume. GRC (Governance, Risk, Compliance) cover letters should lead with: compliance framework experience (SOC 2, ISO 27001, NIST, PCI-DSS), risk assessment methodology, policy development, audit experience, and executive risk communication. Match the letter to the function — submitting a SOC-focused letter for a GRC role signals you haven't read the JD carefully." },
      { q: "How long should a cybersecurity analyst cover letter be?", a: "3 paragraphs, 220-300 words. Opening: your strongest incident or security story with specific technical details. Middle: how your certifications, tools, and experience map to the role's specific function and framework requirements. Close: why this company's security posture or compliance requirements are interesting to you specifically, and a direct ask for a conversation. Cybersecurity analysts are valued for clarity and precision under pressure — demonstrate those qualities in the cover letter itself." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(ROLES).map((role) => ({ role }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ role: string }>;
}): Promise<Metadata> {
  const { role } = await params;
  const data = ROLES[role];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDesc,
    alternates: { canonical: `${SITE_URL}/for/${role}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDesc,
      url: `${SITE_URL}/for/${role}`,
    },
  };
}

export default async function RolePage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;
  const data = ROLES[role];
  if (!data) notFound();

  const allRoles = Object.entries(ROLES).filter(([slug]) => slug !== role);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: `AI Cover Letter Generator — ${data.display}`,
      url: `${SITE_URL}/for/${role}`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      description: data.metaDesc,
      offers: [
        { "@type": "Offer", name: "Free Preview", price: "0", priceCurrency: "USD" },
        { "@type": "Offer", name: "Full Cover Letter Download", price: "9", priceCurrency: "USD" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Cover Letter Generator by Role", item: `${SITE_URL}/for/` },
        { "@type": "ListItem", position: 3, name: data.display, item: `${SITE_URL}/for/${role}` },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b px-6 py-3">
          <div className="max-w-3xl mx-auto text-sm text-gray-500">
            <a href="/" className="hover:text-gray-800">Home</a>
            <span className="mx-2">›</span>
            <a href="/" className="hover:text-gray-800">Cover Letter Generator</a>
            <span className="mx-2">›</span>
            <span className="text-gray-800">{data.display}</span>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-white border-b px-6 py-14 text-center">
          <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
            Free Preview — No Signup Required
          </span>
          <h1 className="text-4xl font-bold mt-4 mb-3 text-gray-900">{data.h1}</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{data.intro}</p>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-12 space-y-10">

          {/* CTA */}
          <div className="bg-black rounded-2xl p-8 text-center text-white">
            <p className="text-lg font-bold mb-2">
              Generate Your {data.display} Cover Letter
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Paste your resume + job description → get a free preview → download full cover letter for $9
            </p>
            <a
              href="/"
              className="inline-block bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Write My {data.display} Cover Letter →
            </a>
            <p className="text-gray-500 text-xs mt-3">No signup · Letter ready in ~15 seconds</p>
          </div>

          {/* Pro tip */}
          <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-6">
            <p className="text-sm font-bold text-yellow-800 mb-1">Cover Letter Tip</p>
            <p className="text-sm text-yellow-900">{data.tip}</p>
          </div>

          {/* Key elements */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              What Every {data.display} Cover Letter Needs
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              Our AI includes all of these elements automatically when it writes your cover letter — tailored to your resume and the specific job description you&#39;re targeting.
            </p>
            <div className="space-y-3">
              {data.keyElements.map((el, i) => (
                <div key={i} className="flex gap-3 bg-white border rounded-xl p-4">
                  <span className="text-green-500 font-bold shrink-0 mt-0.5">✓</span>
                  <p className="text-sm text-gray-700">{el}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-gray-50 border rounded-2xl p-5 text-center">
              <p className="text-sm text-gray-600 mb-3">
                Paste your resume and the job description to get a cover letter that includes all of these — written specifically for that role, not from a template.
              </p>
              <a
                href="/"
                className="inline-block bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition"
              >
                Generate My Cover Letter Free →
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {data.display} Cover Letter — Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Other roles */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Cover Letter Generator for Other Roles
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {allRoles.map(([slug, r]) => (
                <a
                  key={slug}
                  href={`/for/${slug}`}
                  className="block bg-white border rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition text-sm font-medium text-gray-800"
                >
                  {r.display} →
                </a>
              ))}
            </div>
          </div>

          {/* Cross-sell */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
              <p className="text-sm font-medium text-blue-700 mb-1">Check your resume passes ATS first →</p>
              <a href="https://ats-checker-lake.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline">Free ATS Resume Checker</a>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
              <p className="text-sm font-medium text-blue-700 mb-1">Prep for the interview next →</p>
              <a href="https://interview-prep-six-gules.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline">AI Interview Prep Tool</a>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
              <p className="text-sm font-medium text-blue-700 mb-1">Optimize your LinkedIn before they look →</p>
              <a href="https://linkedin-optimizer-livid.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline">Free LinkedIn Profile Optimizer</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
