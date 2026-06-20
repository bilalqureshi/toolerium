"use client";
import { useState } from "react";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ATS Resume Checker",
    url: "https://ats-checker-lake.vercel.app",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    description:
      "Free AI-powered ATS resume checker. Instantly score your resume against any job description, see every missing keyword, and get actionable improvement suggestions.",
    offers: [
      {
        "@type": "Offer",
        name: "Free ATS Score Check",
        price: "0",
        priceCurrency: "USD",
        description:
          "Free ATS compatibility score, missing keywords report, and improvement suggestions",
      },
      {
        "@type": "Offer",
        name: "AI Resume Optimization",
        price: "3",
        priceCurrency: "USD",
        description:
          "Complete AI-powered resume rewrite optimized for ATS and the specific job description",
      },
    ],
    featureList: [
      "ATS compatibility score out of 100",
      "Missing keywords detection",
      "Resume improvement suggestions",
      "AI-powered resume rewrite",
      "Instant results — under 15 seconds",
      "No signup or account required",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Check Your ATS Resume Score",
    description:
      "Step-by-step guide to checking your ATS resume score and optimizing your resume for applicant tracking systems",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Paste Your Resume",
        text: "Copy and paste your full resume text into the resume field. Plain text works best for accurate keyword analysis — no PDF required.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Add the Job Description",
        text: "Paste the job posting you are applying to. Our AI compares every keyword, skill, and requirement against your resume.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Get Your ATS Score",
        text: "Receive an ATS compatibility score out of 100, a detailed list of missing keywords, and actionable suggestions — instantly, for free.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is ATS and why does it matter for my resume?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Applicant Tracking Systems (ATS) are software used by 99% of Fortune 500 companies to automatically filter resumes before a human reads them. The system scans your resume for keywords, skills, and formatting signals to decide if you advance to the next stage. If your resume doesn't pass ATS, no human ever sees it — regardless of how qualified you are.",
        },
      },
      {
        "@type": "Question",
        name: "Is this ATS resume checker free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, checking your ATS score, seeing missing keywords, and getting improvement suggestions is completely free — no signup required. If you want our AI to automatically rewrite and optimize your entire resume for the specific job posting, that is a one-time $3 fee with no subscription.",
        },
      },
      {
        "@type": "Question",
        name: "How is the ATS score calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI compares the keywords, skills, job titles, and requirements in the job description against your resume. It evaluates keyword match rate, section completeness, formatting signals, and skill alignment to produce an ATS compatibility score out of 100.",
        },
      },
      {
        "@type": "Question",
        name: "How can I improve my ATS score quickly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mirror the exact keywords from the job description, use standard section headings (Work Experience, Skills, Education), avoid tables and graphics, and quantify your achievements with numbers. Our AI optimizer does all of this automatically for $3.",
        },
      },
      {
        "@type": "Question",
        name: "Does a low ATS score hurt my chances of getting hired?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, significantly. If your resume does not pass the ATS threshold — typically 70 to 80 percent — it will never reach a human recruiter. Optimizing your resume for ATS compatibility is the essential first step to getting an interview.",
        },
      },
      {
        "@type": "Question",
        name: "Is my resume data private and secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Your resume and job description are processed in memory and are not stored on our servers after the analysis is complete. We do not sell or share your personal data with any third parties.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use this ATS checker for any industry or job type?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Our AI analyzes the specific job description you paste, so it works for any industry — tech, finance, healthcare, marketing, engineering, legal, and more. The analysis is always tailored to the exact role you are applying for.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ATS Resume Checker",
    url: "https://ats-checker-lake.vercel.app",
    contactPoint: {
      "@type": "ContactPoint",
      email: "bqtools92@gmail.com",
      contactType: "customer service",
    },
  },
];

export default function Home() {
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!resume.trim() || !job.trim()) {
      setError("Please paste both your resume and the job description.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resume, job }),
      });
      const data = await res.json();
      localStorage.setItem(
        "ats_result",
        JSON.stringify({ ...data, resume, job }),
      );
      window.location.href = "/result";
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-white border-b px-6 py-16 text-center">
          <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
            Free ATS Resume Check — No Signup Required
          </span>
          <h1 className="text-4xl font-bold mt-4 mb-3 text-gray-900">
            Free ATS Resume Checker — Score Your Resume Instantly
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            75% of resumes are rejected by applicant tracking systems before a
            human ever reads them. Check your ATS compatibility score, see every
            missing keyword, and fix your resume in seconds.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Resume Text
              </label>
              <textarea
                placeholder="Paste your full resume text here — plain text works best for accurate ATS keyword analysis..."
                className="w-full border border-gray-200 rounded-xl p-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                rows={8}
                onChange={(e) => setResume(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Job Description
              </label>
              <textarea
                placeholder="Paste the job description you are applying for — our AI will compare every keyword and requirement..."
                className="w-full border border-gray-200 rounded-xl p-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                rows={8}
                onChange={(e) => setJob(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-xl font-semibold text-base hover:bg-gray-800 transition disabled:opacity-60 flex items-center justify-center gap-3"
            >
              {loading && (
                <svg className="animate-spin h-5 w-5 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {loading ? "Analyzing your resume against ATS..." : "Check My ATS Score Free →"}
            </button>

            <p className="text-center text-xs text-gray-400 mt-3">
              100% Free • No signup required • Results in ~10 seconds
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center mt-6">
            <p className="text-sm font-medium text-blue-700 mb-1">
              Resume optimized? Now write the perfect cover letter →
            </p>
            <a
              href="https://cover-letter-gen-rho.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm underline"
            >
              Free AI Cover Letter Generator
            </a>
          </div>

          {/* How It Works */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              How the ATS Resume Checker Works
            </h2>
            <p className="text-center text-gray-500 text-sm mb-8">
              Three steps. Ten seconds. A complete ATS compatibility report — free.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border p-6 text-center">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  1. Paste Your Resume
                </h3>
                <p className="text-sm text-gray-500">
                  Copy and paste your resume text. No PDF required — plain text
                  gives the most accurate ATS keyword analysis.
                </p>
              </div>
              <div className="bg-white rounded-2xl border p-6 text-center">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  2. Add the Job Description
                </h3>
                <p className="text-sm text-gray-500">
                  Paste the job posting you're applying to. Our AI compares
                  every keyword, skill, and requirement against your resume.
                </p>
              </div>
              <div className="bg-white rounded-2xl border p-6 text-center">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  3. Get Your ATS Score
                </h3>
                <p className="text-sm text-gray-500">
                  Receive an ATS compatibility score out of 100, a list of every
                  missing keyword, and specific suggestions — instantly, free.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 bg-white rounded-2xl border p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Why ATS Resume Optimization Matters
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-black">99%</p>
                <p className="text-sm text-gray-500 mt-1">
                  of Fortune 500 companies use ATS software to filter resumes
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">75%</p>
                <p className="text-sm text-gray-500 mt-1">
                  of resumes are rejected by ATS before a human reads them
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">6 sec</p>
                <p className="text-sm text-gray-500 mt-1">
                  average time a recruiter spends scanning a resume
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">3×</p>
                <p className="text-sm text-gray-500 mt-1">
                  more interview callbacks with a keyword-optimized resume
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              10 Proven Tips to Improve Your ATS Score
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Use these strategies to pass ATS filters and get your resume in
              front of human recruiters.
            </p>
            <div className="space-y-4">
              {[
                {
                  tip: "Mirror job description keywords exactly",
                  detail:
                    "ATS systems match exact keyword phrases. If the job posting says 'project management' and your resume says 'managing projects', you may not score the match. Use the exact phrasing from the job description — this is the single highest-impact ATS optimization.",
                },
                {
                  tip: "Use standard ATS-friendly section headings",
                  detail:
                    "Stick to headings like Work Experience, Education, Skills, and Summary. Creative headings like 'My Journey' or 'What I've Built' confuse ATS parsers and cause your content to be miscategorized or skipped entirely.",
                },
                {
                  tip: "Avoid tables, columns, and text boxes",
                  detail:
                    "Many ATS systems cannot parse multi-column layouts or text inside tables and text boxes. Use a single-column format throughout your resume to ensure all your content is read and scored correctly.",
                },
                {
                  tip: "Include a dedicated skills section",
                  detail:
                    "A dedicated skills section makes it easy for ATS to extract and match your technical and soft skills. List hard skills (Python, SQL, Figma) and relevant soft skills (cross-functional collaboration, stakeholder management) explicitly.",
                },
                {
                  tip: "Quantify your achievements with numbers",
                  detail:
                    "Numbers make your resume stand out to both ATS and human reviewers. Instead of 'improved sales', write 'increased sales by 32% over 6 months'. Numbers are easy for ATS to parse and highly compelling to hiring managers.",
                },
                {
                  tip: "Keep contact info out of headers and footers",
                  detail:
                    "Contact information placed in document headers or footers is often invisible to ATS software. Keep your name, email, phone number, and LinkedIn URL in the main body of the document.",
                },
                {
                  tip: "Tailor your resume for every application",
                  detail:
                    "A generic resume rarely scores above 50% on ATS. Review each job description and adjust your bullet points and skills section to match the most relevant terms for that specific role. Our tool makes this fast.",
                },
                {
                  tip: "Include both full terms and acronyms",
                  detail:
                    "Write 'Search Engine Optimization (SEO)' rather than just 'SEO'. Some ATS systems match on the full phrase, others on the acronym. Including both ensures you're covered — and it reads naturally to humans too.",
                },
                {
                  tip: "Save as .docx or a clean text-based PDF",
                  detail:
                    "The .docx format is the most reliably parsed by ATS. If you use PDF, ensure it is a text-based PDF — not a scanned image. Avoid PDF formats with heavy design elements, gradients, or embedded graphics.",
                },
                {
                  tip: "Use standard fonts and simple formatting",
                  detail:
                    "Use fonts like Arial, Calibri, or Times New Roman at 10–12pt. Decorative fonts, icons, and infographic elements may not render correctly in ATS. Simple, clean formatting consistently outperforms elaborate design.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {i + 1}. {item.tip}
                  </h3>
                  <p className="text-sm text-gray-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Frequently Asked Questions — ATS Resume Checker
            </h2>
            <p className="text-gray-500 text-sm">
              Everything you need to know about ATS systems and how to optimize your resume.
            </p>
            {[
              {
                q: "What is ATS and why does it matter for my resume?",
                a: "Applicant Tracking Systems (ATS) are software used by 99% of Fortune 500 companies to automatically filter resumes before a human reads them. The system scans your resume for keywords, skills, and formatting signals to decide if you advance to the next stage. If your resume doesn't pass ATS, no human ever sees it — regardless of how qualified you are.",
              },
              {
                q: "Is this ATS resume checker free?",
                a: "Yes, checking your ATS score, seeing missing keywords, and getting improvement suggestions is completely free — no signup required. If you want our AI to automatically rewrite and optimize your entire resume for the specific job posting, that is a one-time $3 fee with no subscription.",
              },
              {
                q: "How is the ATS compatibility score calculated?",
                a: "Our AI compares the keywords, skills, job titles, and requirements in the job description against your resume. It evaluates keyword match rate, section completeness, formatting signals, and skill alignment to produce an ATS compatibility score out of 100.",
              },
              {
                q: "How can I improve my ATS score quickly?",
                a: "Mirror the exact keywords from the job description, use standard section headings (Work Experience, Skills, Education), avoid tables and graphics, and quantify your achievements with numbers. Our AI optimizer does all of this automatically for $3.",
              },
              {
                q: "Does a low ATS score hurt my chances of getting hired?",
                a: "Yes, significantly. If your resume does not pass the ATS threshold — typically 70 to 80 percent — it will never reach a human recruiter. Optimizing your resume for ATS compatibility is the essential first step to getting an interview.",
              },
              {
                q: "What happens after I pay $3 for the AI resume optimization?",
                a: "After payment, our AI rewrites your entire resume to include all the missing keywords naturally, improves section structure, and formats the content for maximum ATS compatibility. The optimized resume is ready within seconds and can be downloaded as a text file.",
              },
              {
                q: "Is my resume data private and secure?",
                a: "Yes. Your resume and job description are processed in memory and are not stored on our servers after the analysis is complete. We do not sell or share your personal data with any third parties.",
              },
              {
                q: "Can I use this ATS checker for any industry or job type?",
                a: "Absolutely. Our AI analyzes the specific job description you paste, so it works for any industry — tech, finance, healthcare, marketing, engineering, legal, and more. The analysis is always tailored to the exact role you are applying for.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-500">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
