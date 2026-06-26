import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SITE_URL = "https://ats-checker-lake.vercel.app";

type RoleData = {
  display: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  tip: string;
  topKeywords: string[];
  faqs: { q: string; a: string }[];
};

const ROLES: Record<string, RoleData> = {
  "software-engineer": {
    display: "Software Engineer",
    metaTitle: "ATS Resume Checker for Software Engineers — Score & Optimize Free",
    metaDesc: "Check if your software engineer resume passes ATS filters. See missing keywords, get your ATS score, and unlock an AI-optimized resume. Free to try.",
    h1: "ATS Resume Checker for Software Engineers",
    intro: "Software engineering is one of the most competitive job markets in tech — and ATS filters are ruthless about keyword matching before a human ever sees your resume. Systems scan for specific technologies, methodologies, and role-level signals. A resume that mentions 'built web apps' instead of 'React, Node.js, REST APIs' will fail ATS before any recruiter reads it. Our checker reads your resume against the exact job description and shows you every gap.",
    tip: "The biggest ATS mistake software engineers make is listing a technology without the context ATS systems look for. Don't just write 'React' — write 'React (3 years), TypeScript, Redux'. ATS scores keyword density and recency. If a job description mentions 'microservices' six times and your resume says it once, you're likely below threshold.",
    topKeywords: [
      "React / Next.js", "TypeScript / JavaScript", "Node.js / Python",
      "REST API / GraphQL", "Microservices", "CI/CD pipelines",
      "Docker / Kubernetes", "AWS / GCP / Azure", "Agile / Scrum",
      "System design", "SQL / PostgreSQL", "Git / GitHub",
    ],
    faqs: [
      { q: "What ATS keywords matter most for software engineer resumes?", a: "ATS systems for software engineering roles scan for: specific programming languages (the exact ones listed in the JD), frameworks and libraries, infrastructure tools, and methodology keywords like Agile, Scrum, or CI/CD. The most impactful optimization is matching your technology list to the exact terms in the job description — if the JD says 'TypeScript' don't write 'JavaScript/TypeScript', write both separately." },
      { q: "Why do software engineer resumes fail ATS?", a: "The three most common reasons: (1) using abbreviations or shorthand that doesn't match the JD — 'K8s' when the JD says 'Kubernetes', (2) burying key skills in a paragraph instead of a skills section that ATS can parse, and (3) missing the soft-skill keywords like 'cross-functional', 'code review', 'mentorship' that senior roles increasingly require. Our checker flags all three." },
      { q: "Should a software engineer use a skills section or weave keywords into experience?", a: "Both — and this is critical for ATS. Most ATS systems give weight to keywords that appear in both a dedicated skills section AND in the experience bullets. A skills section signals the technology, experience bullets prove you've used it at scale. Single mention only in the skills section scores lower than repeated, contextualized mentions throughout." },
      { q: "How should I tailor my software engineer resume for each application?", a: "Don't rewrite your resume — reorder and re-emphasize. Read the JD and identify the 5-8 technologies and methodologies it emphasizes most. Make sure those appear in your skills section AND at least one experience bullet each, with a metric where possible. This takes 10-15 minutes per application and can move your ATS score from 40% to 80%+." },
    ],
  },
  "product-manager": {
    display: "Product Manager",
    metaTitle: "ATS Resume Checker for Product Managers — Score & Optimize Free",
    metaDesc: "Check if your product manager resume passes ATS filters. See missing keywords, get your ATS score, and unlock an AI-optimized resume. Free to try.",
    h1: "ATS Resume Checker for Product Managers",
    intro: "Product manager resumes are deceptively hard to optimize for ATS — the role requires broad skills across strategy, data, and cross-functional leadership, but ATS systems are looking for specific terminology. A resume that says 'managed the product' scores lower than one that says 'owned the product roadmap, drove OKR alignment, and launched 3 features that improved D30 retention by 18%'. Our checker maps your resume to the specific signals the job description requires.",
    tip: "PM resumes get filtered out for two reasons: missing domain keywords (B2B, SaaS, consumer, platform) and missing methodology keywords (Agile, OKRs, JTBD, RICE prioritization). The job description tells you which domain and framework that company uses. Match those terms exactly — not synonyms — in your resume.",
    topKeywords: [
      "Product roadmap", "OKRs / KPIs", "Agile / Scrum",
      "Go-to-market", "Stakeholder management", "A/B testing",
      "User research", "Product discovery", "Cross-functional",
      "Data-driven", "Product strategy", "North star metric",
    ],
    faqs: [
      { q: "What ATS keywords matter most for product manager resumes?", a: "PM ATS scans look for: product methodology terms (Agile, OKRs, RICE, JTBD), domain keywords (B2B, SaaS, marketplace, platform, mobile), analytical keywords (A/B testing, metrics, data-driven, funnel analysis), and seniority signals (led, owned, defined, drove). The specific weighting depends on whether the role is growth, platform, consumer, or enterprise PM — match the JD's vocabulary exactly." },
      { q: "How do I quantify achievements on a PM resume for ATS?", a: "ATS systems increasingly parse for impact signals alongside keywords. Bullets with metrics ('increased DAU by 22%', 'reduced churn by 12%', 'launched feature used by 500k users') score higher than keyword-only bullets. Every bullet should follow: action verb + what you built/changed + business outcome with number. If you don't have a metric, use a comparison: 'shipped 6 weeks ahead of schedule.'" },
      { q: "Should a PM resume include technical skills for ATS?", a: "Yes, but calibrated to the role. For technical PM roles, include: SQL, Python, Mixpanel/Amplitude, Tableau, API basics. For non-technical PM roles, focus on: Jira, Confluence, Figma, Excel/Google Sheets, and data tools. ATS for senior PM roles also looks for 'roadmap tools', 'product analytics', and 'experimentation platform' — even if you just mean you use Amplitude or Optimizely." },
      { q: "How do PM resumes differ for startup vs enterprise ATS?", a: "Startup PM JDs typically emphasize: 0-to-1 building, wearing multiple hats, moving fast, and shipping. ATS keywords: 'zero-to-one', 'early-stage', 'MVP', 'growth'. Enterprise PM JDs emphasize: stakeholder alignment, compliance, platform thinking, and scale. ATS keywords: 'enterprise', 'compliance', 'platform strategy', 'executive alignment'. Read the JD carefully — using startup language on an enterprise JD is a common ATS failure mode." },
    ],
  },
  "data-scientist": {
    display: "Data Scientist",
    metaTitle: "ATS Resume Checker for Data Scientists — Score & Optimize Free",
    metaDesc: "Check if your data scientist resume passes ATS filters. See missing keywords, get your ATS score, and unlock an AI-optimized resume. Free to try.",
    h1: "ATS Resume Checker for Data Scientists",
    intro: "Data science resumes face a double challenge: they need to satisfy ATS keyword filters that scan for specific tools and methods, while also telling a clear story of business impact to the human reader. ATS systems for data science roles scan for exact tool names (PyTorch vs TensorFlow vs scikit-learn), statistical methods, and domain signals. Our checker compares your resume to the job description and shows you every gap between what you wrote and what the ATS expects to see.",
    tip: "Data science ATS systems are extremely literal about tool names. 'Machine learning frameworks' scores zero; 'scikit-learn, XGBoost, LightGBM' scores three separate keywords. List every tool individually, not as a category. And if the JD mentions a tool you know but haven't listed — add it.",
    topKeywords: [
      "Python / R", "SQL", "Machine learning / ML",
      "PyTorch / TensorFlow / scikit-learn", "Statistical modeling",
      "A/B testing", "Data visualization", "Feature engineering",
      "Pandas / NumPy", "Spark / Databricks", "Predictive modeling",
      "Deep learning",
    ],
    faqs: [
      { q: "What ATS keywords matter most for data scientist resumes?", a: "Data science ATS scans prioritize: programming languages (Python, R, SQL), ML frameworks (PyTorch, TensorFlow, scikit-learn, XGBoost), statistical methods (regression, classification, clustering, hypothesis testing), data infrastructure tools (Spark, Databricks, Airflow, dbt), and visualization tools (Tableau, Looker, matplotlib, Seaborn). The specific balance depends on whether the role is analytics-focused, ML-engineering-focused, or research-focused." },
      { q: "How do I write data science experience bullets that pass ATS?", a: "Combine keywords with impact metrics in every bullet. Instead of 'built a recommendation model', write 'built a collaborative filtering recommendation model in Python (scikit-learn, pandas) that increased click-through rate by 14% across 2M users.' ATS picks up 'Python', 'scikit-learn', 'recommendation model' and 'collaborative filtering' as separate keyword hits, and the metric signals business impact to the human reader after ATS passes it." },
      { q: "Should data scientists include all their tools in a skills section?", a: "Yes — a structured skills section is the highest-density ATS keyword placement on your resume. Organize it by category: Languages (Python, R, SQL), ML Frameworks (PyTorch, scikit-learn), Data Tools (Spark, Airflow, dbt), Visualization (Tableau, matplotlib), and Cloud (AWS S3/SageMaker, GCP BigQuery). Keep every tool as its own keyword, never grouped as 'various ML frameworks'." },
      { q: "How do ATS systems differ between analytics vs ML-focused data science roles?", a: "Analytics-heavy roles (often titled 'data analyst' or 'analytics engineer') weight SQL, Tableau/Looker, dbt, and business intelligence keywords heavily. ML-heavy roles weight PyTorch, model training, feature pipelines, and MLOps keywords. If you apply to both, you need two tailored resume versions — ATS scores keyword-to-JD match, and a single resume rarely wins both." },
    ],
  },
  "ux-designer": {
    display: "UX Designer",
    metaTitle: "ATS Resume Checker for UX Designers — Score & Optimize Free",
    metaDesc: "Check if your UX designer resume passes ATS filters. See missing keywords, get your ATS score, and unlock an AI-optimized resume. Free to try.",
    h1: "ATS Resume Checker for UX Designers",
    intro: "UX designer resumes are uniquely vulnerable to ATS rejection because designers naturally write in narrative and visual terms — and ATS systems speak the language of specific tool names and methodology keywords. A resume that says 'created intuitive interfaces' scores far lower than one that says 'led user research, wireframed in Figma, conducted usability testing, and shipped a design system that reduced design-to-dev handoff time by 40%'. Our checker flags every ATS keyword your resume is missing compared to the job description.",
    tip: "Figma is mentioned in over 85% of UX job descriptions — if it's in the JD, it must be in your resume exactly as 'Figma', not 'design tool' or 'prototyping software'. The same applies to research methods: 'conducted user interviews' scores lower than 'conducted semi-structured user interviews and synthesized insights using affinity mapping'.",
    topKeywords: [
      "Figma", "User research", "Wireframing / prototyping",
      "Usability testing", "Design systems", "Information architecture",
      "Interaction design", "Accessibility / WCAG", "User flows",
      "Cross-functional collaboration", "Design thinking", "Sketch / Adobe XD",
    ],
    faqs: [
      { q: "What ATS keywords matter most for UX designer resumes?", a: "UX ATS scans look for: tool names (Figma, Sketch, InVision, Principle, Adobe XD), research methods (user interviews, usability testing, card sorting, A/B testing), deliverable types (wireframes, prototypes, journey maps, design systems, personas), and process keywords (design thinking, double diamond, lean UX). The most common miss: candidates list 'Figma' but not 'design systems' — and senior roles need both." },
      { q: "How should UX designers write bullets to pass ATS?", a: "Lead every bullet with the design method or deliverable: 'Conducted 12 user interviews to identify pain points in onboarding → redesigned flow in Figma → usability test scores improved from 62 to 89 (SUS scale).' This hits 'user interviews', 'Figma', 'redesign', and 'usability testing' as keyword signals in one bullet. The numeric outcome ('62 to 89') adds credibility for the human reader after ATS passes it." },
      { q: "Do ATS systems filter UX designer resumes differently from developer resumes?", a: "Yes. UX ATS scans are more keyword-sparse than engineering scans — they prioritize tool names and method terms, but rarely weight every tool equally. The highest-impact keywords are the ones that appear most in the JD. If the JD mentions 'design systems' four times, make sure 'design systems' appears at least twice in your resume — in context, not just a skills list." },
      { q: "Should UX designers include research skills separately from design tools in their resume?", a: "Yes — separate skills sections are important. Have one for tools (Figma, Sketch, Maze, Hotjar) and one for methods (user interviews, usability testing, A/B testing, card sorting, competitive analysis). ATS scans both sections with equal weight, and recruiters scanning manually appreciate the separation. Don't bury 'user research' inside a paragraph — make it scannable." },
    ],
  },
  "marketing-manager": {
    display: "Marketing Manager",
    metaTitle: "ATS Resume Checker for Marketing Managers — Score & Optimize Free",
    metaDesc: "Check if your marketing manager resume passes ATS filters. See missing keywords, get your ATS score, and unlock an AI-optimized resume. Free to try.",
    h1: "ATS Resume Checker for Marketing Managers",
    intro: "Marketing manager resumes need to speak two languages simultaneously: the metrics-driven language of performance marketing and the strategy language of brand and go-to-market. ATS systems for marketing roles scan for specific channel expertise (SEO, paid, email, content), tools (HubSpot, Marketo, Google Analytics), and impact metrics. A resume that says 'managed marketing campaigns' tells ATS nothing — our checker shows you exactly what's missing compared to what the job description requires.",
    tip: "Marketing ATS systems are highly sensitive to channel-specific keywords. 'Digital marketing experience' fails ATS; 'SEO, SEM, paid social, email automation, content marketing' each score separately. Always list channels individually in a skills section, and make sure every channel you claim appears in at least one experience bullet with a result.",
    topKeywords: [
      "SEO / SEM", "Content marketing", "Email marketing / automation",
      "Google Analytics / GA4", "HubSpot / Marketo", "Paid social / Meta Ads",
      "Lead generation", "Campaign management", "Marketing automation",
      "Conversion rate optimization", "Brand strategy", "Go-to-market",
    ],
    faqs: [
      { q: "What ATS keywords matter most for marketing manager resumes?", a: "Marketing ATS scans prioritize: channel keywords (SEO, SEM, email marketing, content, paid social, affiliate), tool names (HubSpot, Marketo, Salesforce, Google Analytics, Tableau), metric keywords (CAC, LTV, ROAS, MQL, conversion rate, open rate), and strategy keywords (go-to-market, brand positioning, demand generation, product marketing). Different marketing roles weight these differently — match the JD's emphasis exactly." },
      { q: "How do marketing managers write metrics-driven bullets that pass ATS?", a: "ATS parses marketing bullets for both keywords and impact signals. Instead of 'ran email campaigns', write 'managed automated email program (HubSpot) across 180k subscribers — achieved 28% open rate and 4.2% CTR, generating $420k in attributed pipeline.' This hits 'HubSpot', 'email', 'automated', 'open rate', and 'CTR' as keyword signals and the revenue figure adds weight for human readers." },
      { q: "How do B2B and B2C marketing resumes differ for ATS?", a: "B2B marketing ATS scans look for: demand generation, ABM (account-based marketing), MQL/SQL conversion, sales alignment, Salesforce/HubSpot integration, and webinar/event marketing. B2C ATS scans look for: brand marketing, paid social, influencer, CRM, LTV, retention, and e-commerce keywords. If you've done both, you'll need tailored versions — ATS scores keyword match rate, not breadth." },
      { q: "Should marketing managers list tools or certifications for ATS?", a: "Both. Tool keywords (HubSpot, Google Analytics, Tableau, Asana) score as individual keyword hits. Certifications ('Google Analytics Certified', 'HubSpot Inbound Marketing', 'Meta Blueprint Certified') appear in JDs less often but can be differentiators for human reviewers. List tools in a dedicated skills section. List certifications in a separate certifications section — ATS parses sections individually." },
    ],
  },
  "financial-analyst": {
    display: "Financial Analyst",
    metaTitle: "ATS Resume Checker for Financial Analysts — Score & Optimize Free",
    metaDesc: "Check if your financial analyst resume passes ATS filters. See missing keywords, get your ATS score, and unlock an AI-optimized resume. Free to try.",
    h1: "ATS Resume Checker for Financial Analysts",
    intro: "Financial analyst resumes operate in a highly structured ATS environment — firms use keyword filters to screen for specific modeling skills, software proficiency, and domain experience before any human reviews your application. A resume that says 'strong analytical skills' tells ATS nothing; one that says 'DCF modeling, LBO analysis, Excel (VLOOKUP, INDEX-MATCH, Pivot Tables), Bloomberg Terminal, GAAP' hits multiple high-value signals. Our checker maps your resume to what the JD's ATS filter actually expects.",
    tip: "The most common ATS failure for financial analysts is writing about finance without naming tools. 'Analyzed financial data' scores zero. 'Built a three-statement financial model in Excel with DCF and sensitivity analysis' scores four separate keywords. Name the output, name the tool, name the method — every time.",
    topKeywords: [
      "Financial modeling", "DCF analysis", "Excel (advanced)",
      "Bloomberg / FactSet", "Variance analysis", "Budget forecasting",
      "P&L management", "GAAP / IFRS", "SQL / Python",
      "Valuation", "Cash flow analysis", "PowerPoint / pitch decks",
    ],
    faqs: [
      { q: "What ATS keywords matter most for financial analyst resumes?", a: "Financial analyst ATS scans look for: modeling keywords (DCF, LBO, three-statement model, sensitivity analysis), software (Excel, Bloomberg, FactSet, Tableau, SQL), accounting standards (GAAP, IFRS), and function-specific terms. For FP&A: variance analysis, budget forecasting, P&L. For IB: deal execution, pitch book, M&A. For equity research: sector coverage, financial modeling, investment thesis. Match the specific function in the JD." },
      { q: "How should financial analyst experience bullets be written for ATS?", a: "Lead with the financial tool or method, then the scope, then the outcome. Instead of 'supported budget planning process', write 'built annual budget model in Excel (pivot tables, macros) for $80M revenue business, flagging $2.3M variance from Q2 actuals that led to a reforecast.' ATS picks up 'Excel', 'budget', 'model', 'variance' — and the dollar figures tell the human reader the scale." },
      { q: "Do certifications like CFA or CPA improve ATS scores?", a: "Significantly, for the roles where they're expected. For investment banking and equity research, 'CFA' or 'CFA candidate, Level II' is a near-mandatory ATS keyword. For accounting-adjacent roles, 'CPA' or 'CPA candidate' is weighted heavily. For FP&A, 'CPA' helps but isn't always required. List certifications with their exact abbreviation in a dedicated section — ATS matches 'CFA' as a standalone keyword." },
      { q: "How do financial analyst resumes differ between buy-side and sell-side for ATS?", a: "Sell-side (investment banking, equity research) ATS scans weight: pitch book, deal execution, comparable company analysis, precedent transactions, roadshow, client-facing. Buy-side (private equity, hedge funds, asset management) ATS scans weight: investment thesis, portfolio company, due diligence, returns modeling, LBO, sourcing. These keyword sets overlap but have distinct cores — tailor your resume to which side you're applying to." },
    ],
  },
  "project-manager": {
    display: "Project Manager",
    metaTitle: "ATS Resume Checker for Project Managers — Score & Optimize Free",
    metaDesc: "Check if your project manager resume passes ATS filters. See missing keywords, get your ATS score, and unlock an AI-optimized resume. Free to try.",
    h1: "ATS Resume Checker for Project Managers",
    intro: "Project manager resumes are heavily screened by ATS for certification keywords, methodology terms, and tool names before a human ever reads them. Companies hiring PMs expect to see PMP, Agile, Scrum, or Waterfall depending on the team's operating model — and ATS filters for these terms rigorously. A PM resume that doesn't explicitly name the methodology and tools it's been used in will be rejected before a recruiter can appreciate your experience. Our checker shows you every gap.",
    tip: "ATS systems for PM roles match exact certification strings. 'Certified in project management' fails. 'PMP-certified' hits. 'CSM (Certified Scrum Master)' hits. 'PMI-ACP' hits. Write certifications using both the abbreviation and the full name — 'PMP (Project Management Professional)' — because ATS systems scan for both forms.",
    topKeywords: [
      "PMP / Project Management Professional", "Agile / Scrum",
      "JIRA / Confluence", "Stakeholder management", "Risk management",
      "Budget management", "Resource allocation", "Cross-functional",
      "Waterfall", "MS Project / Asana / Monday.com",
      "Change management", "Scope management",
    ],
    faqs: [
      { q: "What ATS keywords matter most for project manager resumes?", a: "PM ATS scans look for: certification keywords (PMP, CSM, PMI-ACP, PRINCE2), methodology terms (Agile, Scrum, Kanban, Waterfall, hybrid), tool names (JIRA, Confluence, Asana, MS Project, Monday.com, Smartsheet), and function keywords (stakeholder management, risk management, budget management, resource allocation, change management). The methodology and tools expected vary significantly by industry and company size." },
      { q: "How do I write PM resume bullets that pass ATS?", a: "Every PM bullet should contain: the action (led, managed, coordinated), the scope (number of stakeholders, budget size, team size), the method/tool (Agile, JIRA, MS Project), and the outcome (delivered on time, X% under budget, achieved Y result). 'Managed cross-functional Agile team of 12 using JIRA, delivering $2.4M enterprise software project 3 weeks ahead of schedule' hits every ATS signal and tells a complete story." },
      { q: "Does PMP certification significantly improve ATS pass rates for PM resumes?", a: "Yes — for roles that list it, PMP is often a hard filter. If the JD says 'PMP required' or 'PMP preferred', and you don't have it listed, ATS rejects the application automatically. If you're pursuing PMP, note 'PMP candidate, exam scheduled [month/year]' — some ATS systems score this partially. For entry-level PM roles that don't require PMP, CSM or PMI-ACP can serve a similar signaling function." },
      { q: "How do Agile PM resumes differ from traditional PM resumes for ATS?", a: "Agile PM ATS scans weight: Scrum ceremonies (sprint planning, retrospectives, daily standups), Agile artifacts (backlog refinement, sprint velocity, user stories, epics), and tools (JIRA, Confluence, Azure DevOps). Traditional PM ATS scans weight: work breakdown structure (WBS), critical path method (CPM), Gantt charts, formal change control, earned value management (EVM). Know which the role requires and use that vocabulary exclusively." },
    ],
  },
  "sales-representative": {
    display: "Sales Representative",
    metaTitle: "ATS Resume Checker for Sales Reps — Score & Optimize Free",
    metaDesc: "Check if your sales representative resume passes ATS filters. See missing keywords, get your ATS score, and unlock an AI-optimized resume. Free to try.",
    h1: "ATS Resume Checker for Sales Representatives",
    intro: "Sales rep resumes are filtered by ATS for quota attainment signals, CRM tool keywords, and sales motion terminology — before any hiring manager ever reads them. A resume that says 'exceeded sales targets' tells ATS nothing specific. One that says 'exceeded 120% of $1.2M annual quota, managing 60-account SMB territory in Salesforce CRM via outbound prospecting and inbound qualification' hits every ATS signal that matters. Our checker shows you exactly what's missing.",
    tip: "Quota attainment numbers are the highest-signal keywords on a sales resume — both for ATS and for human readers. Always write quota attainment as a percentage of target, plus the absolute dollar value: '118% of $850k quota'. Never just say 'exceeded targets' without the number. ATS systems increasingly parse for dollar figures in sales context.",
    topKeywords: [
      "Quota attainment", "Salesforce / CRM", "Pipeline management",
      "B2B / SaaS sales", "Outbound prospecting", "Account management",
      "Discovery calls", "Cold outreach / SDR", "Contract negotiation",
      "Revenue growth", "Sales cycle", "HubSpot / Outreach / Salesloft",
    ],
    faqs: [
      { q: "What ATS keywords matter most for sales representative resumes?", a: "Sales ATS scans prioritize: performance keywords (quota attainment, revenue generated, deal size, sales cycle), CRM and sales tool names (Salesforce, HubSpot, Outreach, Salesloft, ZoomInfo, LinkedIn Sales Navigator), sales motion keywords (outbound, inbound, SDR, AE, account management, territory), and market keywords (B2B, SaaS, enterprise, SMB, mid-market). The most impactful single addition: explicit quota attainment percentage with dollar figure." },
      { q: "How do I write sales resume bullets that pass ATS?", a: "Sales bullets should always follow: role + motion + market + result. 'Exceeded 118% of $1.1M annual quota as mid-market AE selling SaaS to HR leaders, managing 65-account territory through outbound cold outreach and inbound qualification via Salesforce.' This hits: AE, SaaS, outbound, quota (118%), Salesforce, and mid-market as separate ATS keyword signals." },
      { q: "How do SDR and AE resumes differ for ATS?", a: "SDR ATS scans weight: outbound prospecting, cold calling, cold email, sequences (Outreach/Salesloft), meetings booked, SQLs generated, and pipeline sourced. AE ATS scans weight: quota attainment, average deal size, sales cycle length, negotiation, closing, renewal/expansion, and territory management. If you're transitioning from SDR to AE, your resume needs to shift keyword emphasis — and our checker will show you exactly what's missing for the AE roles you're targeting." },
      { q: "Should sales reps list sales tools in a skills section for ATS?", a: "Yes — a skills section with explicit tool names is high-value for sales ATS. List: CRM (Salesforce, HubSpot), sales engagement (Outreach, Salesloft, Apollo), prospecting (ZoomInfo, LinkedIn Sales Navigator, Lusha), and productivity (Gong, Chorus, Google Workspace). Each tool name scores as a separate keyword hit. Don't write 'proficient in CRM tools' — list each CRM individually." },
    ],
  },
  "devops-engineer": {
    display: "DevOps Engineer",
    metaTitle: "ATS Resume Checker for DevOps Engineers — Score & Optimize Free",
    metaDesc: "Check if your DevOps engineer resume passes ATS filters. See missing keywords, get your ATS score, and unlock an AI-optimized resume. Free to try.",
    h1: "ATS Resume Checker for DevOps Engineers",
    intro: "DevOps engineer resumes face some of the most tool-specific ATS filtering in the industry. Hiring systems scan for exact tool names across CI/CD, container orchestration, IaC, cloud platforms, and monitoring — and a single missing keyword can drop your ATS score below threshold. Our checker reads your resume against the exact job description and flags every tool, methodology, or infrastructure keyword you're missing.",
    tip: "DevOps ATS systems are extremely literal. 'Kubernetes' and 'K8s' are scored as separate keywords by most systems — use both forms. Same with 'Terraform' vs 'IaC': use both the tool name and the category term. List your cloud certifications using both the abbreviation (AWS CCP, CKA) and the full name when space allows.",
    topKeywords: [
      "Kubernetes / K8s", "Docker / containers", "Terraform / IaC",
      "AWS / GCP / Azure", "CI/CD pipelines", "Jenkins / GitHub Actions",
      "Prometheus / Grafana", "Linux / Bash scripting",
      "Helm", "Ansible", "Monitoring / observability", "GitOps",
    ],
    faqs: [
      { q: "What ATS keywords matter most for DevOps engineer resumes?", a: "DevOps ATS scans look for: container tech (Docker, Kubernetes, Helm, containerd), CI/CD tools (Jenkins, GitHub Actions, GitLab CI, CircleCI, ArgoCD), IaC tools (Terraform, Pulumi, CloudFormation, Ansible), cloud platforms (AWS, GCP, Azure — with specific service names like EC2, EKS, GKE), monitoring stack (Prometheus, Grafana, Datadog, PagerDuty), and scripting (Python, Bash, Go). The more specific, the better — ATS scores tool names, not categories." },
      { q: "How do I write DevOps resume bullets that pass ATS?", a: "Lead with the tool, quantify the impact. 'Built Terraform-managed EKS cluster infrastructure across 3 AWS regions, reducing deployment time from 45 minutes to 8 minutes and supporting 99.97% uptime SLA across 200+ microservices.' This hits: Terraform, EKS, AWS, deployment, uptime, microservices as keyword signals — and the metrics make it credible to the human reader." },
      { q: "Do cloud certifications significantly improve ATS scores for DevOps roles?", a: "Yes — AWS, GCP, and Azure certifications are frequently listed as required or preferred in JDs and are hard ATS filters at many companies. AWS Solutions Architect (SAA-C03), AWS DevOps Engineer Professional, CKA (Certified Kubernetes Administrator), and CKAD are the highest-value certifications for DevOps roles. List them with both abbreviation and full name in a dedicated certifications section." },
      { q: "How should a DevOps engineer list open-source contributions for ATS?", a: "Include them in an 'Open Source' or 'Projects' section with specific tool names and outcomes. 'Contributed 12 merged PRs to Kubernetes sig-network, adding IPv6 dual-stack support for 3 network plugins' hits 'Kubernetes' as a keyword plus demonstrates depth. ATS doesn't weight open source contributions as highly as employment history, but the keyword density adds up across your whole document." },
    ],
  },
  "frontend-developer": {
    display: "Frontend Developer",
    metaTitle: "ATS Resume Checker for Frontend Developers — Score & Optimize Free",
    metaDesc: "Check if your frontend developer resume passes ATS filters. See missing keywords, get your ATS score, and unlock an AI-optimized resume. Free to try.",
    h1: "ATS Resume Checker for Frontend Developers",
    intro: "Frontend developer resumes are filtered by ATS for specific framework names, JavaScript ecosystem tools, and performance or accessibility keywords — before any hiring manager evaluates your portfolio. ATS systems don't appreciate design sensibility or clean code; they count keyword matches. 'Built user interfaces' scores nothing. 'Built React component library with TypeScript, achieving 90+ Lighthouse performance score and WCAG 2.1 AA compliance' scores five separate keywords. Our checker shows you every gap.",
    tip: "React is mentioned in over 70% of frontend JDs. If the JD says React and your resume says 'JavaScript framework' — you fail ATS. Always use the exact framework name. Same rule applies to state management: 'Redux Toolkit', 'Zustand', 'React Context' each score differently from 'state management library'.",
    topKeywords: [
      "React / Next.js", "TypeScript / JavaScript", "CSS / Tailwind CSS",
      "Redux / Zustand", "REST API / GraphQL", "Webpack / Vite",
      "Jest / Cypress / testing", "Performance optimization",
      "Accessibility / WCAG", "Git / GitHub", "Responsive design",
      "Node.js (basic)",
    ],
    faqs: [
      { q: "What ATS keywords matter most for frontend developer resumes?", a: "Frontend ATS scans look for: framework names (React, Vue, Angular, Next.js, Svelte — the exact one in the JD), TypeScript (often required now, not just JavaScript), styling (CSS, Tailwind, styled-components, Sass), state management (Redux, Zustand, Jotai, Context API), build tools (Webpack, Vite, esbuild), and testing (Jest, Cypress, Playwright, React Testing Library). Core Web Vitals, performance, and accessibility are increasingly appearing in senior-level JDs." },
      { q: "How should I write frontend developer bullets to pass ATS?", a: "Combine framework keywords with business impact. 'Rebuilt checkout flow in React 18 with TypeScript, reducing bundle size from 1.8MB to 820KB using code splitting and lazy loading — improved LCP from 4.1s to 1.6s and reduced cart abandonment by 11%.' This hits: React, TypeScript, code splitting, lazy loading, LCP, bundle size as ATS signals and tells a clear performance story." },
      { q: "Does including TypeScript vs JavaScript in a resume affect ATS?", a: "Significantly. TypeScript and JavaScript are treated as separate keywords by ATS. Most frontend roles now specify TypeScript in the JD — if they do, and your resume only says 'JavaScript', you likely fail ATS regardless of your actual TypeScript experience. List both separately, and if TypeScript is your primary language, put it first. Never write 'JS/TS' as a single entry." },
      { q: "Should frontend developers include backend or full-stack experience for ATS?", a: "Yes, but only if it's in the JD. If the JD says 'experience with Node.js a plus' or 'familiarity with REST APIs', those keywords should appear on your resume even if you're primarily a frontend developer. ATS matches against the JD, so every mentioned technology is potentially scored. Add a 'familiar with' or 'exposure to' qualifier if your experience is limited, rather than omitting the keyword entirely." },
    ],
  },
  "backend-developer": {
    display: "Backend Developer",
    metaTitle: "ATS Resume Checker for Backend Developers — Score & Optimize Free",
    metaDesc: "Check if your backend developer resume passes ATS filters. See missing keywords, get your ATS score, and unlock an AI-optimized resume. Free to try.",
    h1: "ATS Resume Checker for Backend Developers",
    intro: "Backend developer resumes must satisfy ATS keyword filters for specific languages, frameworks, database technologies, and infrastructure tools before a hiring manager evaluates your system design skills. ATS can't read your architecture diagrams — it reads text. 'Designed scalable backend systems' scores zero. 'Designed REST APIs in Node.js with PostgreSQL and Redis caching, handling 50k RPS with 99.9% uptime' scores five keyword matches. Our checker maps your resume to exactly what the JD's ATS filter is looking for.",
    tip: "Database keywords are consistently underpowered on backend resumes. Don't just write 'database experience' — list every database you've worked with: 'PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch'. ATS for backend roles frequently filters on specific databases, especially when the company's stack is in the JD.",
    topKeywords: [
      "Node.js / Python / Go / Java", "REST API / GraphQL",
      "PostgreSQL / MySQL / MongoDB", "Redis / Elasticsearch",
      "Docker / Kubernetes", "Microservices", "Message queues (Kafka / RabbitMQ)",
      "AWS / GCP / Azure", "Authentication / OAuth", "SQL / query optimization",
      "System design", "CI/CD",
    ],
    faqs: [
      { q: "What ATS keywords matter most for backend developer resumes?", a: "Backend ATS scans look for: language (Node.js, Python, Go, Java, Ruby — match the JD exactly), API design (REST, GraphQL, gRPC), databases (PostgreSQL, MySQL, MongoDB, Cassandra, Redis, Elasticsearch — list each individually), infrastructure (Docker, Kubernetes, AWS/GCP/Azure), messaging (Kafka, RabbitMQ, SQS), and concepts (microservices, event-driven architecture, caching, load balancing). Specificity wins over category terms every time." },
      { q: "How do I write backend API experience bullets that pass ATS?", a: "Describe the API with specific tech and scale. 'Designed and shipped GraphQL API in Node.js (TypeScript) serving 12M daily requests, with Redis caching layer reducing database load by 60% and Datadog monitoring for p99 latency.' This hits: GraphQL, Node.js, TypeScript, Redis, caching, Datadog, latency as keyword signals — plus the scale metric (12M daily requests) signals senior-level scope." },
      { q: "Should backend developers list frontend skills on their resume for ATS?", a: "Only if the JD mentions them. Full-stack roles will list specific frontend frameworks as required or preferred — if React or Vue appears in the JD, it needs to appear on your resume. For purely backend roles, listing frontend skills can dilute your keyword concentration and signal unclear positioning. Read the JD first: if it's a backend-only role, optimize exclusively for backend keywords." },
      { q: "How important is cloud experience for backend developer ATS in 2025?", a: "Very — cloud keywords (AWS, GCP, Azure) appear in over 60% of backend JDs and are increasingly hard filters. Specific service names score higher than platform names: 'AWS (EC2, RDS, S3, Lambda, SQS)' scores five keyword hits versus 'AWS experience' scoring one. If you've used any cloud services, list every service individually. Even basic familiarity (S3 for storage, RDS for PostgreSQL) is worth listing if it's in the JD." },
    ],
  },
  "machine-learning-engineer": {
    display: "Machine Learning Engineer",
    metaTitle: "ATS Resume Checker for ML Engineers — Score & Optimize Free",
    metaDesc: "Check if your ML engineer resume passes ATS filters. See missing keywords, get your ATS score, and unlock an AI-optimized resume. Free to try.",
    h1: "ATS Resume Checker for Machine Learning Engineers",
    intro: "Machine learning engineer resumes face some of the most specialized ATS filtering in tech — systems scan for exact framework names, MLOps tooling, and deployment infrastructure keywords before a human reads your work. The same candidate who built and deployed a production recommendation model serving 10M users can fail ATS if they write 'built machine learning models' instead of naming PyTorch, scikit-learn, feature store, model registry, and the serving infrastructure specifically. Our checker shows you every keyword gap.",
    tip: "MLOps keywords are increasingly differentiating for ML engineer roles — and frequently missing from resumes. If you've used MLflow, Weights & Biases, Kubeflow, Vertex AI, SageMaker, or any model registry or feature store, those names need to be explicitly in your resume. ATS for senior ML roles now filters on MLOps tooling as aggressively as it filters on PyTorch.",
    topKeywords: [
      "PyTorch / TensorFlow / JAX", "Python", "scikit-learn / XGBoost",
      "MLflow / Weights & Biases", "Feature engineering", "Model deployment",
      "Kubernetes / Docker", "Apache Spark / Ray", "SQL / data pipelines",
      "A/B testing / experimentation", "Deep learning", "LLMs / transformers",
    ],
    faqs: [
      { q: "What ATS keywords matter most for ML engineer resumes?", a: "ML engineer ATS scans look for: framework names (PyTorch, TensorFlow, JAX, scikit-learn, XGBoost, LightGBM), MLOps tools (MLflow, W&B, Kubeflow, Vertex AI, SageMaker, BentoML), infrastructure (Kubernetes, Docker, Spark, Ray, Dask), and domain keywords (NLP, computer vision, recommendation systems, LLMs, transformers, RLHF, fine-tuning). The specific focus depends on whether the role is research-adjacent, production-MLOps, or LLM-focused." },
      { q: "How should ML engineers write experience bullets for ATS?", a: "Name the model type, the framework, the scale, and the outcome. 'Trained and deployed a two-tower recommendation model (PyTorch, served via Triton) on 500M user-item interactions, improving CTR by 18% in A/B test across 8M users — reduced inference latency from 120ms to 32ms.' This hits: PyTorch, recommendation, Triton, A/B test, CTR, inference, latency as separate keyword signals." },
      { q: "How do ML engineer resumes differ from data scientist resumes for ATS?", a: "ML engineer ATS scans weight production-system keywords more heavily: model serving (TorchServe, Triton, BentoML), pipeline orchestration (Airflow, Kubeflow, Prefect), feature stores (Feast, Tecton), model monitoring (Arize, Evidently), and infrastructure (Kubernetes, Docker). Data scientist ATS scans weight analysis and experimentation more: statistical methods, A/B testing, Jupyter, notebooks, SQL. If you're targeting ML engineering roles, shift your keyword emphasis toward production systems." },
      { q: "Should ML engineers include LLM or GenAI keywords in 2025?", a: "Yes — if the JD mentions them. LLM-related keywords (fine-tuning, RAG, RLHF, transformer, embeddings, vector database, LangChain, llamaindex, prompt engineering) are now appearing in a growing share of ML engineer JDs. If any appear in the JD you're applying to, they must appear on your resume. Even if your LLM experience is a side project, list it explicitly — ATS scores keyword presence, not experience level." },
    ],
  },
  "business-analyst": {
    display: "Business Analyst",
    metaTitle: "ATS Resume Checker for Business Analysts — Score & Optimize Free",
    metaDesc: "Check if your business analyst resume passes ATS filters. See missing keywords, get your ATS score, and unlock an AI-optimized resume. Free to try.",
    h1: "ATS Resume Checker for Business Analysts",
    intro: "Business analyst resumes need to navigate ATS systems that scan for requirements methodology, tool proficiency, and domain-specific keywords — all while telling a story of business impact to the human reader. The challenge is that BA work is inherently verbal and process-oriented, making it easy to describe in vague terms that score poorly on ATS. Our checker flags every specific keyword your resume is missing compared to what the JD requires.",
    tip: "Requirements methodology keywords are frequently missing from BA resumes. 'Gathered requirements' scores one keyword. 'Facilitated requirements elicitation workshops with 12 business stakeholders using user story mapping, produced acceptance criteria in JIRA, and translated requirements into 45-page functional specification document' scores eight. Be specific about every method you use.",
    topKeywords: [
      "Requirements elicitation", "User stories / acceptance criteria",
      "JIRA / Confluence", "Process mapping / BPMN",
      "Stakeholder management", "SQL / data analysis",
      "Agile / Scrum", "Business process improvement",
      "Functional specification", "UAT (user acceptance testing)",
      "Tableau / Power BI", "MoSCoW prioritization",
    ],
    faqs: [
      { q: "What ATS keywords matter most for business analyst resumes?", a: "BA ATS scans look for: requirements keywords (elicitation, user stories, acceptance criteria, use cases, functional specifications), methodology (Agile, Scrum, Waterfall, BPM), tool names (JIRA, Confluence, Visio, Balsamiq, SQL, Tableau, Power BI), and technique keywords (gap analysis, process mapping, BPMN, MoSCoW, stakeholder analysis). Technical BA roles add: SQL, API documentation, data modeling, and integration testing keywords." },
      { q: "How do business analyst resume bullets need to be structured for ATS?", a: "Lead with the BA activity, name the tool or technique, quantify the scope, and state the outcome. 'Facilitated requirements workshops with 8 cross-functional stakeholders, documented 60+ user stories with acceptance criteria in Confluence, resulting in zero scope creep during 6-month JIRA-tracked Agile development cycle.' This hits: workshops, user stories, acceptance criteria, Confluence, JIRA, Agile as keyword signals." },
      { q: "Should business analysts include SQL and data skills for ATS?", a: "Yes — SQL appears in a growing share of BA JDs, especially for roles at tech companies or analytics-adjacent teams. If SQL appears in the JD and you have any SQL experience, it must be on your resume. Similarly, if the JD mentions Tableau, Power BI, or any reporting tool — list it explicitly. Business analysts who bridge the gap between business and data are increasingly in demand, and the keyword gap between your resume and the JD on these skills is often the difference between ATS pass and fail." },
      { q: "How do IT BA and business-process BA resumes differ for ATS?", a: "IT BA ATS scans weight: systems integration, API documentation, data mapping, technical specifications, UAT, and software development lifecycle (SDLC) keywords. Business process BA ATS scans weight: lean, Six Sigma, process improvement, workflow analysis, operational efficiency, and ROI keywords. Know which type the role is — JDs make this clear — and tailor your keyword emphasis accordingly. Using IT BA language on a business-process BA role is a common ATS failure mode." },
    ],
  },
  "data-analyst": {
    display: "Data Analyst",
    metaTitle: "ATS Resume Checker for Data Analysts — Score & Optimize Free",
    metaDesc: "Check if your data analyst resume passes ATS filters. See missing keywords, get your ATS score, and unlock an AI-optimized resume. Free to try.",
    h1: "ATS Resume Checker for Data Analysts",
    intro: "Data analyst resumes are screened by ATS for specific tool proficiency, SQL depth, and business intelligence keywords — before any manager evaluates your insight quality. A resume that says 'analyzed large datasets to support business decisions' is invisible to ATS. One that says 'wrote complex SQL (window functions, CTEs) in BigQuery to analyze cohort retention across 2.3M users, built Tableau dashboard used by 8 exec stakeholders weekly' is packed with keyword signals. Our checker shows you exactly what's missing.",
    tip: "SQL depth keywords are more valuable than SQL breadth on a data analyst resume. Don't just list 'SQL' — list 'SQL (window functions, CTEs, subqueries, JOINS)'. ATS systems for senior analyst roles increasingly filter for specific SQL complexity signals. If you've written complex queries, say so explicitly.",
    topKeywords: [
      "SQL (advanced)", "Python / pandas", "Tableau / Looker / Power BI",
      "Google BigQuery / Snowflake / Redshift", "Excel / Google Sheets",
      "A/B testing", "Dashboard development", "ETL / data pipelines",
      "KPI analysis", "Cohort analysis", "Business intelligence",
      "Data visualization",
    ],
    faqs: [
      { q: "What ATS keywords matter most for data analyst resumes?", a: "Data analyst ATS scans look for: SQL (and increasingly SQL complexity signals like window functions, CTEs), Python tools (pandas, NumPy, matplotlib), BI tools (Tableau, Looker, Power BI, Metabase — the exact one in the JD), data warehouses (BigQuery, Snowflake, Redshift, Databricks), Excel/Sheets, and analysis type keywords (cohort analysis, funnel analysis, A/B testing, retention analysis, churn modeling). List all tools individually — never group them as 'BI tools'." },
      { q: "How do I write data analyst bullets that pass ATS and impress hiring managers?", a: "Chain the tool, the data scale, and the business impact. 'Wrote SQL window function queries in Snowflake to calculate 30/60/90-day cohort retention across 1.8M users, built Looker dashboard tracking 6 retention KPIs — findings directly informed a product change that improved D30 retention by 9%.' This hits: SQL, window functions, Snowflake, cohort, retention, Looker, KPI, dashboard as separate keyword signals." },
      { q: "Should data analysts include Python or just SQL for ATS?", a: "Include both if you use both. Python is now mentioned in over 50% of data analyst JDs — if it appears in the JD you're applying to, Python must appear on your resume. List specific libraries: 'Python (pandas, NumPy, matplotlib, seaborn)' is better than just 'Python'. If your Python experience is limited to basic data manipulation, that's still worth listing — ATS scores keyword presence, not depth of experience." },
      { q: "How do data analyst resumes differ for tech vs non-tech companies for ATS?", a: "Tech company data analyst ATS scans weight: BigQuery/Snowflake/Redshift, Python, experimentation (A/B testing), product analytics (funnel, retention, activation), and Looker/Amplitude/Mixpanel. Non-tech company ATS scans weight: Excel, Tableau/Power BI, SQL Server/MySQL, reporting, and business process keywords. If you're applying across both, check whether each JD emphasizes tech-stack tools or business-reporting tools and adjust your keyword emphasis accordingly." },
    ],
  },
  "cybersecurity-analyst": {
    display: "Cybersecurity Analyst",
    metaTitle: "ATS Resume Checker for Cybersecurity Analysts — Score & Optimize Free",
    metaDesc: "Check if your cybersecurity analyst resume passes ATS filters. See missing keywords, get your ATS score, and unlock an AI-optimized resume. Free to try.",
    h1: "ATS Resume Checker for Cybersecurity Analysts",
    intro: "Cybersecurity analyst resumes face some of the most rigorous ATS filtering in any technical field — firms screen for specific certifications, tool proficiency, and framework knowledge before a human ever evaluates your incident response experience. A resume without 'SIEM', 'NIST', and the specific tools listed in the JD will fail ATS regardless of your actual capabilities. Our checker maps your resume to the exact keyword requirements of the job description you're targeting.",
    tip: "Security certifications are hard ATS filters for most cybersecurity roles. If the JD says 'Security+, CISSP, or CEH required' — and you have one — use the exact abbreviation: 'CompTIA Security+', 'CISSP (Certified Information Systems Security Professional)', 'CEH (Certified Ethical Hacker)'. ATS matches exact strings. 'Security certification' matches nothing.",
    topKeywords: [
      "SIEM (Splunk / Microsoft Sentinel / QRadar)", "Incident response",
      "Threat detection", "Vulnerability assessment", "NIST / ISO 27001",
      "Penetration testing", "SOC (Security Operations Center)",
      "Security+, CISSP, CEH", "Endpoint detection (EDR)", "Firewall / IDS / IPS",
      "Risk assessment", "MITRE ATT&CK",
    ],
    faqs: [
      { q: "What ATS keywords matter most for cybersecurity analyst resumes?", a: "Cybersecurity ATS scans look for: tool names (Splunk, Microsoft Sentinel, CrowdStrike, Palo Alto, Wireshark, Nessus, Burp Suite — match the JD), frameworks (NIST CSF, MITRE ATT&CK, ISO 27001, SOC 2, CIS Controls), certification abbreviations (Security+, CISSP, CEH, CISM, OSCP), function keywords (SOC, incident response, threat hunting, vulnerability management, pen testing, GRC), and compliance keywords (HIPAA, PCI-DSS, GDPR, FedRAMP) if the role requires them." },
      { q: "How do I write cybersecurity resume bullets that pass ATS?", a: "Lead with the tool or framework, describe the threat or action, and quantify the outcome. 'Led Tier-2 SOC analysis in Splunk SIEM, triaging 120+ daily alerts and escalating 18 confirmed incidents in Q3 — average MTTR reduced from 4.2 hours to 1.8 hours through runbook standardization.' This hits: SOC, Splunk, SIEM, incidents, MTTR as keyword signals and the metrics demonstrate real impact." },
      { q: "How do SOC analyst resumes differ from GRC analyst resumes for ATS?", a: "SOC analyst ATS scans weight: SIEM tool names, EDR platforms (CrowdStrike, SentinelOne), incident response, threat detection, malware analysis, log analysis, MITRE ATT&CK, and playbook keywords. GRC (Governance, Risk, Compliance) analyst ATS scans weight: compliance frameworks (SOC 2, ISO 27001, NIST, HIPAA, PCI-DSS), risk assessment, policy development, vendor assessment, and audit keywords. If you've done both, you likely need separate tailored resume versions." },
      { q: "Which certifications have the highest ATS impact for cybersecurity roles?", a: "CompTIA Security+ is the most broadly required certification — it appears as a requirement or preference in more cybersecurity job postings than any other single certification. For higher-level roles: CISSP (enterprise security architect/manager positions), CISM (management-track roles), CEH or OSCP (penetration testing roles), and AWS Security Specialty or Azure Security Engineer (cloud security roles). List every certification you hold using its official abbreviation in a dedicated certifications section." },
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
      name: `ATS Resume Checker — ${data.display}`,
      url: `${SITE_URL}/for/${role}`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      description: data.metaDesc,
      offers: [
        { "@type": "Offer", name: "Free ATS Score", price: "0", priceCurrency: "USD" },
        { "@type": "Offer", name: "AI-Optimized Resume", price: "9", priceCurrency: "USD" },
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
        { "@type": "ListItem", position: 2, name: "ATS Checker by Role", item: `${SITE_URL}/for/` },
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
            <a href="/" className="hover:text-gray-800">ATS Resume Checker</a>
            <span className="mx-2">›</span>
            <span className="text-gray-800">{data.display}</span>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-white border-b px-6 py-14 text-center">
          <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
            Free ATS Score — No Signup Required
          </span>
          <h1 className="text-4xl font-bold mt-4 mb-3 text-gray-900">{data.h1}</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{data.intro}</p>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-12 space-y-10">

          {/* CTA */}
          <div className="bg-black rounded-2xl p-8 text-center text-white">
            <p className="text-lg font-bold mb-2">
              Check Your {data.display} Resume Score Free
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Paste your resume + job description → get a free ATS score → unlock AI-optimized rewrite for $9
            </p>
            <a
              href="/"
              className="inline-block bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Check My {data.display} Resume →
            </a>
            <p className="text-gray-500 text-xs mt-3">No signup · Results in ~10 seconds</p>
          </div>

          {/* Pro tip */}
          <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-6">
            <p className="text-sm font-bold text-yellow-800 mb-1">ATS Optimization Tip</p>
            <p className="text-sm text-yellow-900">{data.tip}</p>
          </div>

          {/* Top keywords */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Top ATS Keywords for {data.display} Resumes
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              These keywords appear most frequently in {data.display} job descriptions. Missing any of these on your resume could drop your ATS score significantly — especially if the JD emphasizes them.
            </p>
            <div className="flex flex-wrap gap-2">
              {data.topKeywords.map((kw, i) => (
                <span
                  key={i}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 font-medium"
                >
                  {kw}
                </span>
              ))}
            </div>
            <div className="mt-5 bg-gray-50 border rounded-2xl p-5 text-center">
              <p className="text-sm text-gray-600 mb-3">
                Paste your actual resume to see which of these keywords you&#39;re missing — and get a full gap analysis against the specific job description you&#39;re targeting.
              </p>
              <a
                href="/"
                className="inline-block bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition"
              >
                Run My Free ATS Score →
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {data.display} Resume ATS — Frequently Asked Questions
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
              ATS Checker for Other Roles
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
              <p className="text-sm font-medium text-blue-700 mb-1">Write a cover letter for this role →</p>
              <a href="https://cover-letter-gen-rho.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline">Free AI Cover Letter Generator</a>
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
