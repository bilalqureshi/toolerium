import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SITE_URL = "https://interview-prep-six-gules.vercel.app";

type RoleData = {
  display: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  tip: string;
  sampleQuestions: string[];
  faqs: { q: string; a: string }[];
};

const ROLES: Record<string, RoleData> = {
  "software-engineer": {
    display: "Software Engineer",
    metaTitle: "Software Engineer Interview Questions & STAR Answers — AI Prep",
    metaDesc: "Get 15 tailored software engineer interview questions with STAR method answers. Covers system design, behavioral, and coding philosophy questions specific to your job description.",
    h1: "Software Engineer Interview Questions — Tailored to Your Job Description",
    intro: "Software engineering interviews are multi-round and demanding — typically a recruiter screen, a technical deep-dive, system design, and 2-3 behavioral rounds. Our AI reads your exact job description and generates questions calibrated to the specific stack, scale, and responsibilities listed, not generic lists you've already read.",
    tip: "Software engineer behavioral questions almost always focus on past projects. Have 3-4 specific stories ready with concrete metrics: 'reduced latency by 40%', 'led a team of 5', 'shipped to 2M users'. Vague answers cost offers.",
    sampleQuestions: [
      "Tell me about a system you designed from scratch. What were the key architectural decisions and what would you do differently today?",
      "Describe a time you had to push back on a product requirement. How did you handle the conversation?",
      "Walk me through how you'd design a URL shortener like bit.ly at scale.",
      "Tell me about a production incident you were responsible for. What happened and what did you learn?",
      "How do you approach code reviews — both giving and receiving feedback?",
      "Describe a time you had to learn a new technology quickly under pressure. What was your process?",
      "How do you decide when to refactor versus ship something that works but isn't clean?",
      "Tell me about a time you disagreed with a technical decision made by your team. What did you do?",
      "How do you estimate work? Walk me through how you'd scope a feature you've never built before.",
      "Describe the most complex bug you've debugged. How did you approach isolating and fixing it?",
    ],
    faqs: [
      { q: "What types of questions come up most in software engineer interviews?", a: "Most software engineer interviews have 3-4 phases: a technical screen (algorithms or system design), a behavioral round (STAR method stories), a coding round, and a culture/team fit round. Behavioral questions focus heavily on past projects, handling conflict, and how you approach ambiguity. System design rounds at mid-senior levels are often the deciding factor." },
      { q: "How do I prepare for a system design interview?", a: "Practice designing 5-6 classic systems: URL shortener, rate limiter, news feed, distributed cache, search autocomplete, payment system. For each, practice thinking aloud: clarify requirements, estimate scale, design components, identify bottlenecks, discuss trade-offs. The interviewer cares more about your reasoning process than the perfect answer." },
      { q: "What STAR stories should a software engineer prepare?", a: "Prepare stories covering: a complex technical problem you solved, a time you handled a production incident, a time you disagreed with a technical decision, a project you led or co-led, a time you shipped under tight constraints, and a time you mentored someone or were mentored. Each story should have a specific measurable outcome." },
      { q: "How specific should my answers be in a software engineer interview?", a: "Extremely specific. 'We used a microservices architecture with Kafka for async events, reduced p99 latency from 800ms to 120ms' is far stronger than 'we improved performance.' Interviewers are evaluating your depth of understanding — specificity signals it. Before your interview, re-read your resume and refresh the specific numbers for every project listed." },
    ],
  },
  "product-manager": {
    display: "Product Manager",
    metaTitle: "Product Manager Interview Questions & STAR Answers — AI Prep",
    metaDesc: "Get 15 tailored PM interview questions with STAR method answers. Covers product sense, metrics, execution, and behavioral questions specific to your job description.",
    h1: "Product Manager Interview Questions — Tailored to Your Job Description",
    intro: "Product manager interviews test a wider range of skills than almost any other role: product sense, analytical thinking, cross-functional leadership, prioritization frameworks, and communication. Our AI reads your specific job description — whether it's B2B SaaS, consumer, platform, or growth — and generates questions calibrated to exactly what that hiring team cares about.",
    tip: "PM interviews often include a product design question ('design a product for X') and a metrics/data question ('our DAU dropped 20% — walk me through your investigation'). Practice thinking out loud — interviewers care as much about your process as your answer.",
    sampleQuestions: [
      "Tell me about a product you launched end-to-end. What was your process from discovery to launch?",
      "Our key metric dropped 15% last week. Walk me through how you'd investigate and respond.",
      "How do you prioritize when engineering capacity is limited and you have 10 competing requests?",
      "Design a notification system for a social app. What would you build and why?",
      "Tell me about a time you made a product decision based on data that contradicted your intuition. What happened?",
      "How do you build alignment with engineering and design when there are disagreements on direction?",
      "What product do you think is poorly designed? How would you improve it?",
      "Tell me about a product you killed or de-prioritized. How did you make that call?",
      "How do you decide what to measure for a new feature?",
      "Describe a time you had to ship something you didn't think was ready. How did you handle it?",
    ],
    faqs: [
      { q: "What types of questions come up most in PM interviews?", a: "PM interviews typically cover 5 areas: product sense (design and critique), analytical (metrics, SQL, A/B testing), execution (prioritization, roadmapping, trade-offs), behavioral (STAR stories), and leadership/cross-functional collaboration. Senior PM interviews add strategy and vision questions. Know which level and company type you're interviewing for — the balance shifts significantly." },
      { q: "How do I answer PM behavioral questions using STAR?", a: "PM behavioral questions want to see decision-making, influence without authority, and data-driven thinking. Use STAR but make sure the Result section includes business impact, not just task completion. 'We shipped the feature' is weak. 'We shipped, saw a 12% increase in D7 retention, and the feature became the top new user activation path' is what gets offers." },
      { q: "What's the best way to approach a PM product design question?", a: "Use a consistent framework: (1) clarify the goal and constraints, (2) identify and prioritize user segments, (3) define user needs per segment, (4) brainstorm solutions, (5) prioritize solutions using impact vs effort, (6) define success metrics. State your framework upfront — interviewers want to see structured thinking, not just creative ideas." },
      { q: "How do I prepare for PM metrics/analytical questions?", a: "Know your SQL basics and be fluent with metrics frameworks: AARRR (acquisition, activation, retention, referral, revenue), HEART (happiness, engagement, adoption, retention, task success), and north star metrics. For investigation questions, practice the structured approach: check if the data is correct first, then segment by platform/geography/user type, then form hypotheses." },
    ],
  },
  "data-scientist": {
    display: "Data Scientist",
    metaTitle: "Data Scientist Interview Questions & STAR Answers — AI Prep",
    metaDesc: "Get 15 tailored data scientist interview questions with STAR method answers. Covers statistics, ML, SQL, and behavioral questions specific to your job description.",
    h1: "Data Scientist Interview Questions — Tailored to Your Job Description",
    intro: "Data science interviews span statistics, machine learning, SQL, Python, product thinking, and business communication — making them among the most technically diverse interview processes. Our AI reads your specific job description and generates questions calibrated to whether the role is analytics-heavy, ML-focused, experimentation-driven, or product-facing.",
    tip: "Most data science behavioral questions probe how you've influenced decisions with data. Your best stories should follow this arc: unclear business problem → your analytical approach → insight uncovered → business decision changed → measurable outcome. 'I ran an analysis' is not a story. 'I found that the highest-value users were being acquired through a channel we were about to cut, and we changed strategy' is.",
    sampleQuestions: [
      "Tell me about a model you built that went into production. What was the problem, your approach, and the business outcome?",
      "Explain the bias-variance trade-off to a non-technical stakeholder.",
      "How would you design an A/B test for a new recommendation algorithm?",
      "Describe a time your analysis led to a business decision that changed direction. What was the impact?",
      "How do you handle missing data in a dataset you're modeling?",
      "Tell me about a time a model you built performed well in testing but poorly in production. What happened?",
      "How do you decide between model complexity and interpretability?",
      "Walk me through how you'd investigate if our recommendation click-through rate dropped 20%.",
      "Describe a time you had to explain a complex statistical finding to a non-technical audience. How did you approach it?",
      "What's your process for validating that a model is ready to deploy?",
    ],
    faqs: [
      { q: "What technical topics should I prepare for a data science interview?", a: "Prepare across 5 areas: statistics (probability, distributions, hypothesis testing, confidence intervals, p-values), machine learning (supervised vs unsupervised, model evaluation, regularization, common algorithms), SQL (joins, aggregations, window functions), Python/pandas (data manipulation, visualization), and experimentation (A/B testing design, statistical power, multiple testing). The balance depends heavily on the role — check the JD for emphasis." },
      { q: "How do I answer behavioral questions as a data scientist?", a: "Data science behavioral answers are strongest when they show the connection between analysis and business impact. Use STAR but make the Result concrete: not 'stakeholders were happy' but 'we reallocated $2M in ad spend and saw a 15% improvement in CAC.' Have 4-5 stories covering: model deployment, influencing a decision, handling uncertainty, communicating to non-technical stakeholders, and a project that failed or changed direction." },
      { q: "What statistics concepts come up most in data science interviews?", a: "The most commonly tested concepts are: p-values and confidence intervals (and their common misinterpretations), Type I vs Type II errors, statistical power and sample size calculation, Bayesian vs frequentist thinking, common probability distributions (normal, binomial, Poisson), central limit theorem, and hypothesis testing frameworks. Be able to explain these clearly to a non-statistician, not just define them." },
      { q: "How do I prepare for SQL rounds in data science interviews?", a: "Practice window functions (ROW_NUMBER, RANK, LAG/LEAD, running totals), self-joins, CTEs, and aggregation with GROUP BY and HAVING. Common question patterns: 'find the top N per category', 'calculate retention', 'find consecutive events', 'compute a rolling average'. Platforms like LeetCode, StrataScratch, and Mode Analytics SQL practice are the best preparation." },
    ],
  },
  "ux-designer": {
    display: "UX Designer",
    metaTitle: "UX Designer Interview Questions & STAR Answers — AI Prep",
    metaDesc: "Get 15 tailored UX designer interview questions with STAR method answers. Covers portfolio presentation, design process, research, and behavioral questions for your role.",
    h1: "UX Designer Interview Questions — Tailored to Your Job Description",
    intro: "UX design interviews are uniquely process-focused — interviewers want to understand how you think and work, not just see polished screens. Expect a portfolio walkthrough, design challenge, and behavioral questions about cross-functional collaboration, research methods, and handling constraints. Our AI generates questions calibrated to your specific job description's focus: research-heavy, product design, or end-to-end.",
    tip: "When presenting portfolio work, never just explain what you designed — explain why. The decision-making behind design choices (what you explored, what you ruled out, why) is what interviewers are evaluating. Prepare a structured narrative for your 2-3 strongest case studies using: problem → constraints → process → decisions → outcome → learnings.",
    sampleQuestions: [
      "Walk me through a project where you had to balance user needs against business constraints. What trade-offs did you make?",
      "Tell me about a design decision you made that you later changed. What prompted the change?",
      "How do you design for edge cases and error states? Walk me through an example.",
      "Describe a time you had a disagreement with an engineer about a design decision. How did you resolve it?",
      "How do you approach design when you don't have time for thorough user research?",
      "Walk me through your process for a design sprint from brief to handoff.",
      "Tell me about a time user research revealed something that completely changed your design direction.",
      "How do you make accessibility decisions in your design process?",
      "Describe a project where you had to redesign something that already existed. How did you approach it?",
      "Tell me about a time a design shipped and didn't perform as expected. What happened and what did you learn?",
    ],
    faqs: [
      { q: "What should I prepare for a UX designer portfolio interview?", a: "Select 2-3 case studies that show range: ideally one research-led project, one with significant constraints (time, technical, stakeholder), and one that shows end-to-end ownership. For each, prepare to discuss the problem, your process, key decisions and trade-offs, the outcome, and what you'd do differently. Be ready to explain why you made specific visual choices — not just what they are." },
      { q: "What behavioral questions do UX designers face?", a: "Common themes: handling feedback from stakeholders or users that contradicts your design direction, working with engineers on feasibility constraints, adapting when scope or timeline changes, advocating for users when business pressure pushes in a different direction, and owning a project where the outcome didn't match expectations. Prepare STAR stories for each." },
      { q: "How do I handle a design challenge in a UX interview?", a: "Design challenges test your process more than your output. Structure your thinking: clarify the goal and constraints, identify users and their needs, sketch multiple directions before committing, articulate your decision criteria, and explain trade-offs. Think out loud — interviewers need to see your reasoning. Ask clarifying questions before designing, not after." },
      { q: "How do I talk about UX metrics in an interview?", a: "Frame design success in terms of user outcomes and business impact. Task success rate, time-on-task, error rate, NPS/CSAT, and conversion rate are the most credible UX metrics. If you have data from past projects — even informal usability testing results — use them. 'Users completed the checkout 30% faster after the redesign' is far more powerful than 'users preferred the new design.'" },
    ],
  },
  "marketing-manager": {
    display: "Marketing Manager",
    metaTitle: "Marketing Manager Interview Questions & STAR Answers — AI Prep",
    metaDesc: "Get 15 tailored marketing manager interview questions with STAR method answers. Covers campaign strategy, metrics, cross-functional collaboration, and behavioral questions.",
    h1: "Marketing Manager Interview Questions — Tailored to Your Job Description",
    intro: "Marketing manager interviews test strategic thinking, campaign execution, data analysis, and leadership — often in the same conversation. Whether you're interviewing for a growth, content, product marketing, or brand role, the questions will probe how you think about audience, measurement, and cross-functional influence. Our AI reads your specific job description to generate questions calibrated to that marketing function.",
    tip: "Marketing behavioral questions reward specificity about channels, budgets, and results. 'We ran a campaign' means nothing. 'We launched a paid LinkedIn campaign targeting Series B+ CTOs, spent $18k over 6 weeks, and generated 45 qualified demo requests at a $400 CPL which beat our $600 target' is what wins offers.",
    sampleQuestions: [
      "Tell me about a campaign you owned end-to-end. What was the goal, what did you execute, and what were the results?",
      "How do you approach building a go-to-market strategy for a new product feature?",
      "Describe a time a campaign underperformed. How did you diagnose the problem and respond?",
      "How do you prioritize marketing channels when budget is limited?",
      "Tell me about a time you had to convince leadership to invest in a channel or strategy they were skeptical about.",
      "How do you measure the success of brand vs performance marketing initiatives?",
      "Describe your process for developing messaging for a new audience segment.",
      "Tell me about a time you worked closely with sales or product. How did you manage that collaboration?",
      "How do you approach building a content strategy from scratch?",
      "Describe a time you used data to change the direction of a marketing program mid-execution.",
    ],
    faqs: [
      { q: "What types of questions come up in marketing manager interviews?", a: "Marketing interviews typically cover: campaign strategy and execution (what you've built and measured), channel expertise (which channels you know deeply and why), cross-functional collaboration (sales, product, design alignment), data and measurement (how you define and track success), and leadership/team management for senior roles. The emphasis shifts significantly based on whether the role is performance, brand, content, or product marketing." },
      { q: "How do I answer marketing behavioral questions with STAR?", a: "Marketing STAR answers should always land on metrics. The Result part of every story should include: channel, spend or effort, and business outcome (leads, pipeline, revenue, awareness lift, retention). If you don't have exact numbers, give ranges or percentages. 'Approximately $25k investment generated roughly 200 MQLs at a CAC of $125, which was 40% below our target' is credible even without exact figures." },
      { q: "How do I prepare for a marketing strategy or case question?", a: "For strategy questions ('how would you market this product to X audience'), use a consistent framework: audience identification → insight (what does this audience care about?) → positioning → channel selection → messaging → measurement. State your framework before diving in. Interviewers want to see structured thinking, and they want to hear you ask clarifying questions about budget, timeline, and competitive context." },
      { q: "What metrics should marketing managers know cold?", a: "Know these fluently: CAC (customer acquisition cost), LTV (lifetime value), LTV:CAC ratio, MQL/SQL conversion rates, CPL (cost per lead), ROAS (return on ad spend), email open/click/conversion rates, organic traffic growth, and attribution models (first-touch, last-touch, multi-touch). Be able to explain how each metric informs decisions, not just define them." },
    ],
  },
  "financial-analyst": {
    display: "Financial Analyst",
    metaTitle: "Financial Analyst Interview Questions & STAR Answers — AI Prep",
    metaDesc: "Get 15 tailored financial analyst interview questions with STAR method answers. Covers financial modeling, valuation, Excel, and behavioral questions for your specific role.",
    h1: "Financial Analyst Interview Questions — Tailored to Your Job Description",
    intro: "Financial analyst interviews combine technical finance knowledge — modeling, valuation, accounting — with behavioral questions about attention to detail, communication of complex analysis, and handling ambiguity. Whether you're going into corporate finance, investment banking, FP&A, or equity research, our AI reads your exact job description and generates questions calibrated to that specific context.",
    tip: "Financial analyst interviewers test both technical accuracy and communication. When walking through a model or analysis, explain your assumptions explicitly — 'I assumed 8% revenue growth based on industry benchmarks and the company's 3-year CAGR' is far stronger than 'I used 8%.' Interviewers are hiring someone who will communicate numbers to non-finance stakeholders.",
    sampleQuestions: [
      "Walk me through a financial model you built. What were the key assumptions and how did you validate them?",
      "If a company's revenue grew 20% but net income declined, what are the possible explanations?",
      "Tell me about a time you found an error in a financial analysis. How did you catch it and what did you do?",
      "How do you explain complex financial analysis to a non-finance executive?",
      "Walk me through a DCF valuation. What are the biggest sources of uncertainty?",
      "Describe a time you had to complete an analysis under significant time pressure. How did you manage it?",
      "How do you prioritize when you have multiple competing deadlines from different stakeholders?",
      "Tell me about a time your financial analysis led to a business decision. What was the outcome?",
      "What's the difference between EBITDA and free cash flow, and when would you use each?",
      "How do you approach building a financial forecast when historical data is limited or unreliable?",
    ],
    faqs: [
      { q: "What technical topics should I prepare for a financial analyst interview?", a: "Core technical areas: the three financial statements and how they interconnect, DCF modeling (WACC, terminal value, sensitivity analysis), comparable company analysis and precedent transactions, LBO modeling basics for PE-adjacent roles, Excel/Google Sheets proficiency (VLOOKUP, INDEX-MATCH, pivot tables, data validation), and accounting fundamentals (revenue recognition, depreciation, working capital). Depth varies by role — investment banking goes deeper on valuation than FP&A." },
      { q: "What behavioral questions do financial analysts face?", a: "Common themes: attention to detail under pressure (catching errors, quality control), communicating numbers to non-finance stakeholders, managing multiple tight deadlines, handling ambiguity in assumptions, working with incomplete or unreliable data, and influencing business decisions through analysis. Prepare STAR stories for each, with specific numbers and business outcomes." },
      { q: "How do I answer financial analyst interview questions about modeling?", a: "When discussing a model, always cover: what business question it answered, the key assumptions and how you derived them, the output and how it was used, and any limitations or sensitivities. Avoid getting lost in mechanics — interviewers want to see that you understand what the model is for, not just that you can build one." },
      { q: "How should I prepare for accounting questions in a financial analyst interview?", a: "Know the three statements cold: how they connect, how common transactions (depreciation, capex, working capital changes) flow through each, and how to calculate free cash flow from the income statement and balance sheet. Practice explaining the impact of business decisions on all three statements — 'if inventory increases by $10M, what happens?' tests both technical knowledge and clear communication." },
    ],
  },
  "project-manager": {
    display: "Project Manager",
    metaTitle: "Project Manager Interview Questions & STAR Answers — AI Prep",
    metaDesc: "Get 15 tailored project manager interview questions with STAR method answers. Covers stakeholder management, risk, delivery, and behavioral questions for your specific role.",
    h1: "Project Manager Interview Questions — Tailored to Your Job Description",
    intro: "Project manager interviews are almost entirely behavioral — interviewers want to understand how you handle complexity, conflict, scope creep, timeline pressure, and stakeholder alignment in practice. Every answer should be a specific story with a concrete outcome. Our AI reads your exact job description and generates questions calibrated to the industry, methodology (Agile vs Waterfall), and scale of the role.",
    tip: "The biggest mistake in PM interviews is answering with processes instead of stories. 'I would create a stakeholder map' is wrong. 'I identified that the CTO and CMO had conflicting success metrics for this project, so I scheduled a working session to align on a single north star before sprint planning, which prevented the conflict that derailed our previous launch' is right. Always a story.",
    sampleQuestions: [
      "Tell me about a project that went significantly off-track. How did you respond and what was the outcome?",
      "Describe a time you had to manage conflicting priorities between two key stakeholders. How did you handle it?",
      "How do you handle scope creep in the middle of a project?",
      "Tell me about the most complex project you've managed. What made it complex and what did you do?",
      "Describe a time you had to deliver bad news to a stakeholder or executive. How did you approach it?",
      "How do you keep a cross-functional team aligned when team members report to different managers?",
      "Tell me about a time a project failed or didn't meet its original goals. What did you learn?",
      "How do you manage risk in a project with significant uncertainty?",
      "Describe a time you had to push back on an unrealistic timeline. How did you make the case?",
      "Tell me about a time you had to make a significant decision with incomplete information. What happened?",
    ],
    faqs: [
      { q: "What types of questions come up in project manager interviews?", a: "Project manager interviews are 80-90% behavioral. Expect heavy focus on: stakeholder management (conflict, alignment, communication), risk and issue management, scope and timeline control, team leadership without direct authority, and lessons from project failures. Technical PM roles add questions about specific methodologies (Agile, Scrum, Kanban, Waterfall) and tools (JIRA, Asana, MS Project). Always answer with specific stories, not frameworks." },
      { q: "How do I answer project manager behavioral questions with STAR?", a: "PM STAR answers need three things: a specific situation with real stakes, your specific actions (not 'we' — 'I'), and a measurable result. Results should include: delivery timeline, budget outcome, stakeholder satisfaction, business impact, or lessons that changed your approach. Weak: 'the project was completed successfully.' Strong: 'we delivered 2 weeks early, $30k under budget, and the client extended our contract for the next phase.'" },
      { q: "What methodology questions should I prepare for?", a: "Know the basics of Agile and Waterfall — when each is appropriate, how sprints and stand-ups work, what a retrospective is, and how you handle change in each approach. For Agile-heavy roles, understand velocity, backlog refinement, and how to manage stakeholder expectations in an iterative model. For traditional PM roles, know how to build a WBS, critical path, and change control process." },
      { q: "How do I answer 'tell me about a project failure' questions?", a: "This is a test of self-awareness and learning, not a trick question. Choose a real failure where your actions (or inactions) contributed to the problem. Structure your answer: what the project was, what went wrong, your role in it, what you did when you realized it, the outcome, and — most importantly — what specifically changed in how you work as a result. The learning is more important than the failure." },
    ],
  },
  "sales-representative": {
    display: "Sales Representative",
    metaTitle: "Sales Representative Interview Questions & STAR Answers — AI Prep",
    metaDesc: "Get 15 tailored sales rep interview questions with STAR method answers. Covers objection handling, pipeline management, closing, and behavioral questions for your specific role.",
    h1: "Sales Representative Interview Questions — Tailored to Your Job Description",
    intro: "Sales interviews are uniquely high-stakes because you're simultaneously being evaluated on your sales skills and your fit for the role — the interview itself is part of the audition. Interviewers want to see how you handle pressure, objections, and uncertainty. Our AI reads your specific job description to generate questions calibrated to the sales motion: inbound, outbound, enterprise, SMB, or SaaS.",
    tip: "Every sales interview answer should demonstrate your sales instincts, not just your past performance. When describing deals, show your thinking: how you qualified, how you handled objections, how you navigated the buying committee, and what you'd do differently. Saying 'I exceeded quota by 120%' is less interesting than explaining exactly how you did it.",
    sampleQuestions: [
      "Tell me about your most successful deal. Walk me through how you found it, managed it, and closed it.",
      "Describe a deal you lost. What happened and what did you learn?",
      "How do you handle a prospect who goes dark after initial interest?",
      "Walk me through how you build a territory plan from scratch.",
      "Tell me about a time you had to sell a solution to a skeptical executive. How did you approach it?",
      "How do you qualify an opportunity? Walk me through your process.",
      "Describe a time you had to push back on a customer's request or expectation. How did you handle it?",
      "How do you manage a pipeline with 30+ active opportunities at different stages?",
      "Tell me about a time you turned around a relationship with a customer who was about to churn or cancel.",
      "How do you handle an objection about price from a prospect you believe is a strong fit?",
    ],
    faqs: [
      { q: "What types of questions come up in sales representative interviews?", a: "Sales interviews cover: past performance (quota attainment, deal size, sales cycle), process (how you prospect, qualify, demo, and close), behavioral (how you handle rejection, long sales cycles, difficult stakeholders), and situational (how would you handle X scenario). Many companies also include a role-play exercise. Know your numbers cold: average deal size, sales cycle length, win rate, quota, and attainment for each year." },
      { q: "How do I answer sales behavioral questions with STAR?", a: "Sales STAR answers should always include your specific actions and the measurable result. For deal stories: deal size, timeline, how many stakeholders were involved, which objections you handled, and the outcome. For pipeline stories: number of opportunities, total value, how you prioritized. For relationship stories: what the relationship was worth, what changed, and what it led to. Numbers make sales stories credible." },
      { q: "How do I handle a role-play exercise in a sales interview?", a: "Treat the role-play as a real discovery call, not a performance. Start by asking questions — understand the prospect's situation, goals, and current approach before pitching anything. Listen actively, handle objections by acknowledging and pivoting, and close explicitly. The biggest mistake candidates make is pitching too early and not listening. Interviewers are evaluating how you sell, not just what you say." },
      { q: "What should I know about my past quota attainment before a sales interview?", a: "Know these numbers cold: quota in dollar or unit terms for each year in your current role, your attainment as a percentage (e.g., 118%), your ranking on your team if you know it (e.g., 2nd of 12 reps), average deal size, sales cycle length, and win rate against competed opportunities. If attainment was below 100%, be ready to explain what changed or what you learned — don't dodge it." },
    ],
  },
  "devops-engineer": {
    display: "DevOps Engineer",
    metaTitle: "DevOps Engineer Interview Questions & STAR Answers — AI Prep",
    metaDesc: "Get 15 tailored DevOps engineer interview questions with STAR method answers. Covers CI/CD, infrastructure, incident response, and behavioral questions for your specific role.",
    h1: "DevOps Engineer Interview Questions — Tailored to Your Job Description",
    intro: "DevOps interviews blend deep infrastructure and tooling knowledge with operational mindset questions about reliability, automation, and incident management. Expect questions on your CI/CD pipelines, cloud infrastructure, monitoring strategy, on-call experience, and how you've improved developer experience. Our AI reads your job description to generate questions calibrated to the specific stack and scale listed.",
    tip: "DevOps behavioral questions almost always involve incidents. Prepare a detailed story about a significant outage or infrastructure failure you were part of resolving: what broke, your specific role in the response, how long it took to resolve, and what you changed afterward (runbooks, alerts, architecture). Blameless post-mortems are the gold standard — show you think that way.",
    sampleQuestions: [
      "Walk me through how you'd design a CI/CD pipeline for a microservices application with 20+ services.",
      "Tell me about a production incident you were on-call for. What happened and what did you do?",
      "How do you approach infrastructure as code? What tools have you used and what tradeoffs have you made?",
      "Describe a time you significantly improved deployment frequency or reduced deployment risk.",
      "How do you design an alerting and monitoring strategy? What are the most common mistakes you see?",
      "Tell me about a time you automated a previously manual process. What was the impact?",
      "How do you handle database migrations in a zero-downtime deployment requirement?",
      "Describe your approach to secrets management across environments.",
      "Tell me about a time you had to reduce cloud spend significantly. What was your approach?",
      "How do you ensure security is part of your CI/CD pipeline, not an afterthought?",
    ],
    faqs: [
      { q: "What technical topics should I prepare for a DevOps engineer interview?", a: "Core areas: CI/CD tools (GitHub Actions, Jenkins, GitLab CI, CircleCI), container orchestration (Kubernetes, Docker), infrastructure as code (Terraform, Pulumi, CloudFormation), cloud platforms (AWS, GCP, Azure — know at least one deeply), monitoring and observability (Prometheus, Grafana, Datadog, PagerDuty), and scripting (Python, Bash, Go). The specific tools matter less than demonstrating deep understanding of the underlying concepts." },
      { q: "How do I answer DevOps behavioral questions with STAR?", a: "DevOps STAR answers should quantify operational impact: MTTR (mean time to recovery), deployment frequency, change failure rate, and infrastructure cost reduction. 'We improved our deployment process' is weak. 'We reduced deployment time from 45 minutes to 8 minutes, increased deployment frequency from weekly to daily, and reduced rollback incidents by 60% over 6 months' is strong. Track these numbers in your current role." },
      { q: "What incident response questions should I prepare for?", a: "Prepare to discuss: how you're alerted (what monitoring caught it), how you triaged and diagnosed (tools and process), how you communicated during the incident (stakeholders, timeline), how you resolved it, and what changed afterward (post-mortem, runbook updates, architecture changes, alert improvements). Interviewers want to see systematic thinking, calm under pressure, and a learning orientation." },
      { q: "How do I prepare for Kubernetes questions in a DevOps interview?", a: "Know the core concepts cold: pods, deployments, services, ingress, configmaps, secrets, namespaces, and resource limits. Be able to explain how you'd handle: rolling updates, rollbacks, horizontal pod autoscaling, persistent storage, and cluster access control. For senior roles, also prepare for multi-cluster management, network policies, and cost optimization strategies." },
    ],
  },
  "frontend-developer": {
    display: "Frontend Developer",
    metaTitle: "Frontend Developer Interview Questions & STAR Answers — AI Prep",
    metaDesc: "Get 15 tailored frontend developer interview questions with STAR method answers. Covers JavaScript, React, performance, accessibility, and behavioral questions for your role.",
    h1: "Frontend Developer Interview Questions — Tailored to Your Job Description",
    intro: "Frontend developer interviews test JavaScript fundamentals, framework knowledge (React, Vue, Angular), web performance, accessibility, and UI architecture — alongside behavioral questions about collaboration with designers and product teams. Our AI reads your specific job description to generate questions calibrated to the stack, scale, and type of frontend work listed.",
    tip: "Frontend behavioral questions often focus on cross-functional work — how you collaborate with designers, handle design-dev handoff friction, or advocate for performance improvements that aren't visible in the UX. Prepare stories that show you think about the full picture: user experience, accessibility, performance, and maintainability.",
    sampleQuestions: [
      "Explain the JavaScript event loop and how it affects async programming.",
      "How do you approach web performance optimization? Walk me through a specific improvement you made.",
      "Tell me about a time you had to balance design fidelity with technical constraints. How did you handle it?",
      "How do you think about component architecture in a large React application?",
      "Describe a time you significantly improved the accessibility of a web application. What did you change?",
      "How do you handle state management in a complex frontend application?",
      "Tell me about a browser compatibility issue you had to debug and fix. What was your approach?",
      "How do you approach testing in a frontend codebase?",
      "Describe a time you had to refactor a large frontend codebase. How did you approach it without breaking things?",
      "How do you keep up with the rapidly changing frontend ecosystem? What's on your radar right now?",
    ],
    faqs: [
      { q: "What technical topics should I prepare for a frontend developer interview?", a: "Core areas: JavaScript fundamentals (closures, prototypes, the event loop, promises/async-await, ES6+ features), your primary framework deeply (React hooks, component lifecycle, state management patterns), CSS (specificity, flexbox, grid, responsive design), web performance (Core Web Vitals, lazy loading, bundle optimization, caching), accessibility (WCAG, ARIA, semantic HTML), and browser APIs. Depth matters more than breadth — know your primary stack extremely well." },
      { q: "What behavioral questions do frontend developers face?", a: "Common themes: collaborating with designers on implementation details, advocating for performance or accessibility improvements that aren't visible in the UX, handling legacy code or technical debt, working with backend engineers on API contracts, and making architectural decisions in a growing codebase. Prepare STAR stories for each, with specific technical details and business or user outcomes." },
      { q: "What React-specific topics come up in frontend interviews?", a: "Know these React concepts well: useState and useEffect patterns and common pitfalls, useCallback/useMemo and when to use them, React context vs external state management, component composition vs inheritance, controlled vs uncontrolled components, and React rendering behavior (re-renders, reconciliation). For senior roles, also prepare for performance optimization patterns, code splitting, and architectural decisions in large applications." },
      { q: "How do I answer frontend performance questions in an interview?", a: "Frame performance answers around Core Web Vitals: LCP (loading), FID/INP (interactivity), CLS (visual stability). For past improvements, be specific: 'I reduced our bundle size from 1.8MB to 800KB by implementing code splitting and lazy loading, which improved LCP from 4.2s to 1.8s and reduced our bounce rate by 12%.' Always connect performance work to user experience and business impact, not just technical metrics." },
    ],
  },
  "backend-developer": {
    display: "Backend Developer",
    metaTitle: "Backend Developer Interview Questions & STAR Answers — AI Prep",
    metaDesc: "Get 15 tailored backend developer interview questions with STAR method answers. Covers APIs, databases, system design, scalability, and behavioral questions for your role.",
    h1: "Backend Developer Interview Questions — Tailored to Your Job Description",
    intro: "Backend developer interviews test API design, database knowledge, distributed systems, performance under load, and security — alongside behavioral questions about technical decision-making and cross-team collaboration. Our AI reads your specific job description to generate questions calibrated to the language, infrastructure, and scale of the role.",
    tip: "Backend behavioral questions often probe technical decision-making under constraints: how you chose between SQL and NoSQL, how you handled a scaling bottleneck, or how you designed an API that other teams needed to build against. Prepare stories that show both the decision and the reasoning — interviewers want to hire engineers who can explain why, not just what.",
    sampleQuestions: [
      "Tell me about an API you designed. What principles guided your design decisions?",
      "How do you approach database schema design for a new feature? Walk me through your process.",
      "Describe a time you had to optimize a slow database query or API endpoint. What was your approach?",
      "How do you think about data consistency in distributed systems?",
      "Tell me about a time you had to choose between SQL and NoSQL for a particular use case. What drove your decision?",
      "How do you design for failure in a backend service?",
      "Describe a time you improved the performance or scalability of a system under increasing load.",
      "How do you approach API versioning and backwards compatibility?",
      "Tell me about a time you had to debug a non-deterministic or hard-to-reproduce bug. What was your approach?",
      "How do you think about authentication and authorization in a multi-service backend architecture?",
    ],
    faqs: [
      { q: "What technical topics should I prepare for a backend developer interview?", a: "Core areas: REST API design (conventions, error handling, versioning, auth), database fundamentals (indexing, query optimization, transactions, normalization vs denormalization), system design (caching strategies, message queues, service decomposition), your primary language deeply (concurrency model, memory management, standard libraries), and distributed systems concepts (CAP theorem, eventual consistency, idempotency). The depth expected scales with seniority." },
      { q: "What behavioral questions do backend developers face?", a: "Common themes: making architectural decisions with incomplete information, handling scalability challenges as traffic grows, designing APIs that other teams or external developers depend on, debugging complex production issues, and managing technical debt. Prepare STAR stories showing your decision-making process, the trade-offs you considered, and the outcome. Specific technologies and metrics make these answers credible." },
      { q: "What database questions come up in backend developer interviews?", a: "Expect questions on: indexing strategies and when they help vs hurt, ACID properties and transactions, the difference between SQL and NoSQL and when to use each, N+1 query problems and how to fix them, database scaling strategies (read replicas, sharding, partitioning), and common query optimization techniques. For senior roles, also prepare for data modeling decisions and how you think about schema evolution over time." },
      { q: "How do I prepare for system design questions as a backend developer?", a: "Practice designing 5-6 common systems: rate limiter, URL shortener, distributed cache, job queue, notification service, and search system. For each, practice: clarifying requirements and scale, designing the data model, identifying bottlenecks, proposing scaling strategies, and discussing trade-offs. Think out loud — the interviewer wants to see your reasoning process, not just the final architecture." },
    ],
  },
  "machine-learning-engineer": {
    display: "Machine Learning Engineer",
    metaTitle: "ML Engineer Interview Questions & STAR Answers — AI Prep",
    metaDesc: "Get 15 tailored machine learning engineer interview questions with STAR method answers. Covers ML systems, model deployment, MLOps, and behavioral questions for your role.",
    h1: "Machine Learning Engineer Interview Questions — Tailored to Your Job Description",
    intro: "Machine learning engineer interviews span ML theory, software engineering, systems design, and MLOps — making them among the most technically demanding interviews in tech. Expect questions on model architecture, training pipeline design, feature engineering, production deployment, and monitoring. Our AI reads your specific job description to generate questions calibrated to the ML domain and infrastructure stack listed.",
    tip: "ML engineer behavioral questions often probe the gap between research and production. Your best stories are about taking a promising model and making it actually work in production at scale: what had to change, how you handled data drift, how you monitored model quality, and how you iterated. Pure model accuracy stories are less compelling than full system stories.",
    sampleQuestions: [
      "Tell me about an ML model you took from prototype to production. What were the engineering challenges?",
      "How do you approach feature engineering for a new ML problem?",
      "Describe how you'd design a training and inference pipeline for a model that needs to be updated weekly.",
      "How do you detect and handle data drift in a production ML system?",
      "Tell me about a time a model degraded in production. How did you diagnose and fix it?",
      "How do you approach model monitoring? What metrics do you track and what triggers retraining?",
      "Describe the trade-offs between model accuracy and inference latency in a production system.",
      "How do you handle class imbalance in a training dataset?",
      "Tell me about a time you had to explain a model's output to a non-technical stakeholder. How did you approach it?",
      "How do you approach A/B testing a new model against an existing production model?",
    ],
    faqs: [
      { q: "What technical topics should I prepare for an ML engineer interview?", a: "Core areas: ML fundamentals (supervised/unsupervised learning, model evaluation, regularization, common algorithms), deep learning basics (neural network architecture, backpropagation, common architectures for CV/NLP), software engineering (Python, APIs, distributed systems), MLOps (feature stores, model registries, CI/CD for ML, monitoring), and data engineering (ETL pipelines, data validation, feature pipelines). The balance depends heavily on whether the role is more research-engineering or production-MLOps focused." },
      { q: "What behavioral questions do ML engineers face?", a: "Common themes: taking research models into production, handling model degradation and data drift, building reliable training pipelines, balancing model accuracy with latency/cost constraints, communicating model outputs to non-technical stakeholders, and collaborating with data scientists vs software engineers. Prepare STAR stories showing end-to-end ownership of ML systems, not just model training." },
      { q: "What MLOps concepts should I prepare for in ML engineer interviews?", a: "Key MLOps concepts: feature stores (why they exist, when to use them), model versioning and experiment tracking (MLflow, Weights & Biases), CI/CD for ML (how to test models, how to gate deployments), monitoring for ML (data drift detection, model performance degradation, shadow mode deployments), and serving infrastructure (batch vs real-time inference, model serving frameworks). Know the trade-offs between different approaches." },
      { q: "How do I answer ML system design questions?", a: "Use a consistent framework: clarify the ML problem type and success metrics, define the data requirements (collection, labeling, volume), design the feature engineering pipeline, select and justify the model approach, design training and evaluation, plan the serving architecture (batch or real-time), and define the monitoring strategy. Always address how you'd handle the model degrading over time — this shows production ML thinking." },
    ],
  },
  "business-analyst": {
    display: "Business Analyst",
    metaTitle: "Business Analyst Interview Questions & STAR Answers — AI Prep",
    metaDesc: "Get 15 tailored business analyst interview questions with STAR method answers. Covers requirements gathering, stakeholder management, data analysis, and behavioral questions.",
    h1: "Business Analyst Interview Questions — Tailored to Your Job Description",
    intro: "Business analyst interviews test requirements elicitation, process analysis, stakeholder management, and data interpretation — alongside behavioral questions about translating business needs into actionable specifications. Whether the role is focused on IT systems, process improvement, or data analysis, our AI reads your specific job description to generate relevant, calibrated questions.",
    tip: "Business analyst behavioral answers should show you as a translator — between business stakeholders who know the problem and technical teams who build the solution. Your best stories demonstrate how you uncovered a hidden or unstated requirement, resolved a conflict between stakeholder needs, or turned ambiguous direction into a clear specification that the development team could act on.",
    sampleQuestions: [
      "Tell me about a requirements gathering process you led. How did you ensure you captured the real needs, not just the stated needs?",
      "Describe a time stakeholders had conflicting requirements. How did you resolve it?",
      "How do you approach documenting requirements for a complex system change?",
      "Tell me about a time your analysis led to a significant process improvement. What was the impact?",
      "How do you ensure the development team builds what the business actually needs?",
      "Describe a time you uncovered a requirement that no stakeholder had mentioned but turned out to be critical.",
      "How do you handle a stakeholder who keeps changing requirements mid-project?",
      "Tell me about a time you had to say no to a stakeholder request. How did you handle it?",
      "How do you approach data analysis to support a business recommendation?",
      "Describe a time a project went live and the business realized the delivered solution didn't meet their needs. What happened?",
    ],
    faqs: [
      { q: "What types of questions come up in business analyst interviews?", a: "BA interviews cover: requirements elicitation techniques (interviews, workshops, observation, surveys), documentation skills (user stories, use cases, process flows, data dictionaries), stakeholder management (handling conflict, managing expectations, influencing without authority), data analysis (SQL, Excel, visualization tools), and domain knowledge relevant to the industry. The technical depth varies significantly between IT-focused and business process-focused BA roles." },
      { q: "How do I answer business analyst behavioral questions with STAR?", a: "BA STAR answers should demonstrate the translation skill at the heart of the role. Strong Results section examples: 'the feature shipped with zero change requests after UAT', 'we reduced the defect rate in the delivered system by 40% by implementing structured requirements reviews', 'the process change saved the team 8 hours per week'. Show that your analysis led to better outcomes, not just better documentation." },
      { q: "What techniques should I know for a business analyst interview?", a: "Know these requirements techniques: user stories (with acceptance criteria), use cases and use case diagrams, process flow mapping (swim lane diagrams, BPMN basics), data flow diagrams, SWOT and gap analysis, MoSCoW prioritization, and prototyping/wireframing basics. For Agile BA roles, also know how backlog refinement works and how user stories relate to epics and acceptance criteria." },
      { q: "What data analysis skills should a business analyst prepare for?", a: "BA data analysis questions focus on: Excel (pivot tables, VLOOKUP/XLOOKUP, data cleaning), SQL basics (SELECT, JOIN, GROUP BY, HAVING, subqueries), data visualization (what chart type to use when, how to communicate insights clearly), and statistical basics (averages, distributions, trend analysis). You don't need to be a data scientist — but you need to be able to extract and communicate insights from data independently." },
    ],
  },
  "data-analyst": {
    display: "Data Analyst",
    metaTitle: "Data Analyst Interview Questions & STAR Answers — AI Prep",
    metaDesc: "Get 15 tailored data analyst interview questions with STAR method answers. Covers SQL, data visualization, statistics, business communication, and behavioral questions.",
    h1: "Data Analyst Interview Questions — Tailored to Your Job Description",
    intro: "Data analyst interviews test SQL proficiency, statistical reasoning, data visualization, and the ability to communicate insights to non-technical stakeholders — alongside behavioral questions about how you've driven decisions with data. Our AI reads your specific job description to generate questions calibrated to the tools, business domain, and analytical focus of the role.",
    tip: "Data analyst behavioral answers live or die on specificity. 'I ran an analysis' means nothing. 'I analyzed 6 months of cohort data in SQL, found that users who completed onboarding step 3 had 3× the 90-day retention rate, and this finding led the product team to prioritize that step, which increased overall retention by 18%' is a story that gets offers.",
    sampleQuestions: [
      "Tell me about an analysis you did that led to a meaningful business decision. What was the impact?",
      "How do you approach a dataset that has quality issues — missing values, duplicates, or inconsistencies?",
      "Walk me through a SQL query you're proud of. What problem did it solve?",
      "Describe a time you had to present data findings to a non-technical executive. How did you approach it?",
      "How do you decide what chart or visualization to use for a given insight?",
      "Tell me about a time your analysis revealed something unexpected. What did you do?",
      "How do you validate that your analysis is correct before presenting it to stakeholders?",
      "Describe a time you had to work with incomplete or unreliable data. How did you handle it?",
      "Tell me about a recurring report or dashboard you owned. How did you make sure it was actually used?",
      "How do you approach setting up a new analysis when the business question is ambiguous?",
    ],
    faqs: [
      { q: "What technical topics should I prepare for a data analyst interview?", a: "Core areas: SQL (window functions, CTEs, aggregations, joins — be able to write complex queries without reference), Excel/Google Sheets (pivot tables, VLOOKUP/XLOOKUP, basic statistics), data visualization (Tableau, Looker, Power BI, or equivalent), Python or R basics for data manipulation (pandas, basic statistics), and statistical concepts (averages, distributions, correlation vs causation, statistical significance basics). Know your toolstack from the job description." },
      { q: "What SQL questions come up in data analyst interviews?", a: "Practice these query types: calculating retention and cohort analysis, computing rolling averages and running totals with window functions, finding the top N per group, identifying consecutive events or streaks, joining multiple tables with aggregations, and handling NULL values correctly. Platforms like LeetCode (SQL section), StrataScratch, and Mode Analytics have excellent practice problems. Be able to explain your query logic step by step." },
      { q: "How do I answer data analyst behavioral questions with STAR?", a: "The strongest data analyst STAR answers show the chain: analysis approach → insight → stakeholder communication → business decision → measurable outcome. Avoid answers that end at 'the analysis was well-received.' End at the business change: 'the team changed the pricing strategy', 'we reallocated 30% of the marketing budget', 'the product team deprioritized that feature based on the retention data.' The impact is what makes the story." },
      { q: "How should I prepare for a data analyst take-home or case exercise?", a: "Take-home exercises test real-world analytical thinking. Show your work clearly: document assumptions, explain why you chose specific metrics, and prioritize insights by business impact (not just statistical significance). Structure your output as a story: context → approach → findings (ranked by importance) → recommendation → caveats. Clean, readable SQL and a concise executive summary are more impressive than elaborate analysis that's hard to follow." },
    ],
  },
  "cybersecurity-analyst": {
    display: "Cybersecurity Analyst",
    metaTitle: "Cybersecurity Analyst Interview Questions & STAR Answers — AI Prep",
    metaDesc: "Get 15 tailored cybersecurity analyst interview questions with STAR method answers. Covers threat detection, incident response, risk assessment, and behavioral questions.",
    h1: "Cybersecurity Analyst Interview Questions — Tailored to Your Job Description",
    intro: "Cybersecurity analyst interviews test threat detection knowledge, incident response experience, risk assessment skills, and security tooling familiarity — alongside behavioral questions about how you've handled real security events and communicated risk to non-technical stakeholders. Our AI reads your specific job description to generate questions calibrated to whether the role is SOC, threat intelligence, GRC, or application security focused.",
    tip: "Cybersecurity behavioral answers should demonstrate both technical depth and clear communication. The best stories show how you escalated or communicated a security finding to leadership — 'I identified the threat, investigated it, and wrote a clear executive summary of the risk and recommended mitigation steps that led to an immediate remediation decision.' Technical-only answers miss the communication half of the role.",
    sampleQuestions: [
      "Tell me about a security incident you investigated. Walk me through your analysis process and how you responded.",
      "How do you stay current with the evolving threat landscape? What sources do you use?",
      "Describe a time you identified a vulnerability that wasn't on anyone's radar. How did you handle it?",
      "How do you prioritize which vulnerabilities to remediate first when you have a long list?",
      "Tell me about a time you had to communicate a security risk to a non-technical executive or stakeholder.",
      "How do you approach threat modeling for a new application or system?",
      "Describe your experience with SIEM tools. How have you used them to detect and investigate threats?",
      "Tell me about a time you had to push back on a development or business decision because of security risk.",
      "How do you approach phishing investigation and response in an organization?",
      "Describe a security control you implemented that significantly reduced risk. What was the impact?",
    ],
    faqs: [
      { q: "What technical topics should I prepare for a cybersecurity analyst interview?", a: "Core areas depend on specialization: SOC analysts need SIEM/SOAR tooling, log analysis, malware basics, and network protocols. GRC analysts need compliance frameworks (SOC 2, ISO 27001, NIST, GDPR) and risk assessment methodologies. AppSec analysts need OWASP Top 10, secure code review, and pen testing basics. All cybersecurity roles benefit from: networking fundamentals (TCP/IP, DNS, HTTP), the incident response lifecycle, and threat intelligence concepts (IOCs, TTPs, MITRE ATT&CK)." },
      { q: "How do I answer cybersecurity behavioral questions with STAR?", a: "Cybersecurity STAR answers should show both technical rigor and business awareness. Strong Result sections include: risk reduced (in qualitative or quantitative terms), incident contained in X hours, compliance gap closed, or executive decision influenced by your findings. Avoid answers that end at the technical resolution — show how you communicated the finding and what organizational change resulted." },
      { q: "What incident response questions should I prepare for?", a: "Know the IR lifecycle: Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned. For each phase, be able to describe specific actions you'd take and tools you'd use. Prepare a story about a real incident you responded to that covers: how you identified it, your triage process, your containment approach, how you communicated during the incident, and what changed afterward. Interviewers are testing systematic thinking under pressure." },
      { q: "How do I prepare for risk assessment questions in a cybersecurity interview?", a: "Know common frameworks: NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover), FAIR (Factor Analysis of Information Risk) for quantitative risk, and basic compliance frameworks relevant to the role (SOC 2, PCI-DSS, HIPAA, GDPR). For risk prioritization questions, be able to articulate a scoring approach: likelihood × impact, with consideration of compensating controls and business context. Show you can speak the language of business risk, not just technical vulnerabilities." },
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
      name: `AI Interview Prep — ${data.display}`,
      url: `${SITE_URL}/for/${role}`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      description: data.metaDesc,
      offers: [
        { "@type": "Offer", name: "Free Sample Questions", price: "0", priceCurrency: "USD" },
        { "@type": "Offer", name: "Full Prep Pack", price: "19", priceCurrency: "USD" },
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
        { "@type": "ListItem", position: 2, name: "Interview Prep by Role", item: `${SITE_URL}/for/` },
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
            <a href="/" className="hover:text-gray-800">Interview Prep</a>
            <span className="mx-2">›</span>
            <span className="text-gray-800">{data.display}</span>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-white border-b px-6 py-14 text-center">
          <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
            Free Sample Questions — No Signup Required
          </span>
          <h1 className="text-4xl font-bold mt-4 mb-3 text-gray-900">{data.h1}</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{data.intro}</p>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-12 space-y-10">

          {/* CTA */}
          <div className="bg-black rounded-2xl p-8 text-center text-white">
            <p className="text-lg font-bold mb-2">
              Generate Your {data.display} Interview Questions
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Paste the job description → get 3 free questions → unlock 15 with full STAR answers for $19
            </p>
            <a
              href="/"
              className="inline-block bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Start Free — Prep for {data.display} →
            </a>
            <p className="text-gray-500 text-xs mt-3">No signup · Results in ~15 seconds</p>
          </div>

          {/* Pro tip */}
          <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-6">
            <p className="text-sm font-bold text-yellow-800 mb-1">Interview Tip</p>
            <p className="text-sm text-yellow-900">{data.tip}</p>
          </div>

          {/* Sample questions */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              10 {data.display} Interview Questions You Should Prepare For
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              These are the types of questions that come up most frequently in {data.display} interviews. Our AI generates a personalized set based on your specific job description.
            </p>
            <div className="space-y-3">
              {data.sampleQuestions.map((q, i) => (
                <div key={i} className="bg-white rounded-xl border p-5">
                  <div className="flex gap-3">
                    <span className="text-gray-400 font-bold text-sm shrink-0 mt-0.5">Q{i + 1}</span>
                    <p className="text-gray-800 text-sm leading-relaxed">{q}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gray-50 border rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-600 mb-3">
                These are example questions. Paste your actual job description to get 15 questions tailored to that specific role — with STAR method answers and follow-up tips.
              </p>
              <a
                href="/"
                className="inline-block bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition"
              >
                Generate My Personalized Questions →
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {data.display} Interview — Frequently Asked Questions
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
              Interview Prep for Other Roles
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
              <p className="text-sm font-medium text-blue-700 mb-1">Check your resume passes ATS →</p>
              <a href="https://ats-checker-lake.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline">Free ATS Resume Checker</a>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
              <p className="text-sm font-medium text-blue-700 mb-1">Write a cover letter for this role →</p>
              <a href="https://cover-letter-gen-rho.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline">Free AI Cover Letter Generator</a>
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
