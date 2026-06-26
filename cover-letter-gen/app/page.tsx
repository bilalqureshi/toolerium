"use client";
import { useEffect, useState } from "react";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Cover Letter Generator",
    url: "https://cover-letter-gen-rho.vercel.app",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    description:
      "Free AI-powered cover letter generator. Paste your resume and any job description to get a tailored, ATS-friendly professional cover letter in seconds.",
    offers: [
      {
        "@type": "Offer",
        name: "Free Cover Letter Preview",
        price: "0",
        priceCurrency: "USD",
        description:
          "Generate and preview a tailored AI cover letter for free — no signup required",
      },
      {
        "@type": "Offer",
        name: "Unlock Full Cover Letter",
        price: "8.99",
        priceCurrency: "USD",
        description:
          "Unlock, copy, and download the full cover letter — one-time payment, no subscription",
      },
    ],
    featureList: [
      "AI-generated tailored cover letter",
      "ATS-friendly keyword inclusion",
      "Multiple tone options (Professional, Confident, Friendly, Enthusiastic)",
      "Free preview",
      "One-click copy and download",
      "No signup required",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Generate a Cover Letter with AI",
    description:
      "Step-by-step guide to generating a professional, tailored cover letter using AI in under a minute",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Fill in the Job Details",
        text: "Enter the job title, company name, choose your preferred tone, and paste your resume and the job description.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "AI Writes Your Cover Letter",
        text: "Our AI reads both documents, identifies your most relevant experience, and writes a tailored, ATS-friendly cover letter in your chosen tone — in seconds.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Unlock and Download",
        text: "Preview the cover letter free, then unlock the full version for $8.99 to copy or download. One-time payment, no subscription.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes a great cover letter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A great cover letter is tailored to the specific job, uses keywords from the job description, highlights your most relevant experience, and has a confident tone. Generic cover letters get ignored — specific, targeted ones get interviews. Our AI automatically personalizes your letter to the exact job and company you're applying to.",
        },
      },
      {
        "@type": "Question",
        name: "How does AI cover letter generation work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI reads your resume and the job description, identifies matching skills and experience, and writes a cover letter that connects the two naturally. It includes keywords from the job description that both recruiters and ATS systems look for.",
        },
      },
      {
        "@type": "Question",
        name: "Is the generated cover letter ATS-friendly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our AI is specifically prompted to include keywords from the job description naturally, making the cover letter compatible with both ATS screening systems and human readers. The output is clean plain text that parses perfectly.",
        },
      },
      {
        "@type": "Question",
        name: "Is the cover letter generator free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can generate your cover letter and see a preview for free — no signup required. For $8.99 (one-time), you unlock the full letter to copy or download. There is no subscription or recurring charge.",
        },
      },
      {
        "@type": "Question",
        name: "Can I edit the generated cover letter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, and we encourage it. The AI output is a high-quality starting point — download it and personalize it with specific details, stories, or context the AI wouldn't know. Small personal touches make a big difference.",
        },
      },
      {
        "@type": "Question",
        name: "How long does cover letter generation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically 10 to 20 seconds. We use state-of-the-art AI models that are both fast and produce high-quality output.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use this for any job or industry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Our AI analyzes the specific job description you paste, so it adapts to any role — tech, finance, healthcare, marketing, creative, legal, and more. The output is always specific to the job you're targeting.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cover Letter Generator",
    url: "https://cover-letter-gen-rho.vercel.app",
    contactPoint: {
      "@type": "ContactPoint",
      email: "bqtools92@gmail.com",
      contactType: "customer service",
    },
  },
];

export default function Home() {
  const [resume, setResume] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [tone, setTone] = useState("Professional");
  const [loading, setLoading] = useState(false);
  const [payLoading, setPayLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isPaid =
      params.get("paid") === "true" || localStorage.getItem("paid") === "true";

    if (params.get("paid") === "true") {
      localStorage.setItem("paid", "true");
    }

    if (isPaid) {
      setPaid(true);
      const stored = localStorage.getItem("cl_data");
      if (stored) {
        const data = JSON.parse(stored);
        setResult(data.result || "");
      }
    }
  }, []);

  const handleGenerate = async () => {
    if (!resume.trim() || !jobTitle.trim() || !jobDescription.trim()) {
      setError("Please fill in resume, job title, and job description.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resume,
          jobTitle,
          company,
          jobDescription,
          tone,
        }),
      });
      const data = await res.json();
      localStorage.setItem(
        "cl_data",
        JSON.stringify({
          resume,
          jobTitle,
          company,
          jobDescription,
          tone,
          result: data.result,
        }),
      );
      setResult(data.result);
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const handlePay = async () => {
    setPayLoading(true);
    const res = await fetch("/api/checkout", { method: "POST" });
    const { url } = await res.json();
    window.location.href = url;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    alert("Copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cover-letter-${jobTitle.replace(/\s+/g, "-")}.txt`;
    a.click();
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
          <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
            AI-Powered • Free to Try • No Signup Required
          </span>
          <h1 className="text-4xl font-bold mt-4 mb-3 text-gray-900">
            Free AI Cover Letter Generator — Tailored to Any Job
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Stop writing cover letters from scratch. Paste your resume and the
            job description — our AI generates a professional, ATS-friendly
            cover letter tailored to the exact role in seconds.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-12 space-y-6">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Senior React Developer"
                  className="w-full border border-gray-200 text-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Google"
                  className="w-full border border-gray-200 text-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tone
              </label>
              <select
                className="w-full border border-gray-200 text-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                onChange={(e) => setTone(e.target.value)}
                value={tone}
              >
                <option>Professional</option>
                <option>Confident</option>
                <option>Friendly</option>
                <option>Enthusiastic</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Resume *
              </label>
              <textarea
                placeholder="Paste your full resume text here — the more detail you include, the better the AI can tailor the letter..."
                className="w-full border border-gray-200 text-gray-700 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
                rows={6}
                onChange={(e) => setResume(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Job Description *
              </label>
              <textarea
                placeholder="Paste the full job description here — our AI will extract every keyword and requirement to tailor your letter..."
                className="w-full border border-gray-200 text-gray-700 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
                rows={6}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition disabled:opacity-60 flex items-center justify-center gap-3"
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              )}
              {loading
                ? "Generating your cover letter..."
                : "Generate My Cover Letter Free →"}
            </button>

            <p className="text-center text-xs text-gray-400">
              Free preview • Full download $3 • No signup required
            </p>
          </div>

          {/* Result */}
          {result && (
            <div className="bg-white rounded-2xl shadow-sm border p-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-gray-900 text-lg">
                  ✅ Your Cover Letter
                </h2>
                {paid && (
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopy}
                      className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                    >
                      Copy
                    </button>
                    <button
                      onClick={handleDownload}
                      className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                    >
                      Download
                    </button>
                  </div>
                )}
              </div>

              <div className="relative">
                <pre
                  className={`whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed ${!paid ? "line-clamp-6 blur-sm select-none" : ""}`}
                >
                  {result}
                </pre>

                {!paid && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 rounded-xl">
                    <p className="text-red-500 font-semibold mb-2">
                      ⚠️ Your cover letter will be lost when you close this tab
                    </p>
                    <p className="font-bold text-gray-900 mb-1">
                      Your cover letter is ready!
                    </p>
                    <p className="text-gray-500 text-sm mb-4">
                      Unlock the full version for $8.99
                    </p>
                    <button
                      onClick={handlePay}
                      disabled={payLoading}
                      className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition disabled:opacity-60 flex items-center justify-center gap-3"
                    >
                      {payLoading && (
                        <svg
                          className="animate-spin h-4 w-4 shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                      )}
                      {payLoading
                        ? "Redirecting to checkout..."
                        : "Unlock Full Cover Letter — $8.99"}
                    </button>
                    <p className="text-gray-400 text-xs mt-3">
                      One-time payment. Instant download.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Cross-sell */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
              <p className="text-sm text-blue-700 font-medium mb-1">
                Also check your resume ATS score before you apply →
              </p>
              <a
                href="https://ats-checker-lake.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm underline"
              >
                Free ATS Resume Checker
              </a>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
              <p className="text-sm text-blue-700 font-medium mb-1">
                Make your LinkedIn profile stand out to recruiters →
              </p>
              <a
                href="https://linkedin-optimizer-livid.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm underline"
              >
                Free LinkedIn Profile Optimizer
              </a>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
              <p className="text-sm text-blue-700 font-medium mb-1">
                Sending your cover letter as PDF? Compress it first →
              </p>
              <a
                href="https://pdf-compressor-ecru-two.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm underline"
              >
                Free PDF Compressor
              </a>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
              <p className="text-sm text-blue-700 font-medium mb-1">
                Interview coming up? Prep with AI questions →
              </p>
              <a
                href="https://interview-prep-ai.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm underline"
              >
                Free AI Interview Prep
              </a>
            </div>
          </div>

          {/* How It Works */}
          <div className="pt-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              How the AI Cover Letter Generator Works
            </h2>
            <p className="text-center text-gray-500 text-sm mb-8">
              Three steps. Under a minute. A professional, tailored cover letter
              — free.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border p-6 text-center">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  1. Fill in the Details
                </h3>
                <p className="text-sm text-gray-500">
                  Enter the job title, company name, and paste your resume and
                  the job description. The more detail you provide, the better
                  the output.
                </p>
              </div>
              <div className="bg-white rounded-2xl border p-6 text-center">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  2. AI Writes Your Letter
                </h3>
                <p className="text-sm text-gray-500">
                  Our AI reads both documents, identifies your most relevant
                  experience, and writes a tailored letter in your chosen tone —
                  with all the right keywords.
                </p>
              </div>
              <div className="bg-white rounded-2xl border p-6 text-center">
                <div className="text-3xl mb-3">📥</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  3. Unlock &amp; Download
                </h3>
                <p className="text-sm text-gray-500">
                  Preview the cover letter free, then unlock the full version
                  for $8.99 to copy or download. One-time payment, no subscription.
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              10 Tips for a Cover Letter That Gets Interviews
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Use these strategies to write a cover letter that stands out to
              both ATS systems and human recruiters.
            </p>
            <div className="space-y-4">
              {[
                {
                  tip: "Open with a specific hook, not a generic line",
                  detail:
                    "Avoid opening with 'I am writing to apply for...' — recruiters have read this thousands of times. Open with something specific: a relevant achievement, a concrete reason you want this role, or something that signals you've researched the company.",
                },
                {
                  tip: "Mirror keywords from the job description",
                  detail:
                    "Cover letters also go through ATS filters. Use the same language as the job posting — if they say 'cross-functional collaboration', use that phrase. This helps both the ATS system and the human reader immediately see the match.",
                },
                {
                  tip: "Lead with impact, not duties",
                  detail:
                    "Don't summarize your job description. Instead, highlight a key result from your most relevant role: 'I led a team that reduced customer churn by 22%' is far more compelling than 'I was responsible for customer retention programs'.",
                },
                {
                  tip: "Address the company's specific challenge or goal",
                  detail:
                    "Research the company before writing. A line like 'I saw that you're expanding into Southeast Asia — my three years managing international logistics at [Company] is directly relevant' shows genuine interest and differentiation.",
                },
                {
                  tip: "Keep it to one page (300–400 words)",
                  detail:
                    "Hiring managers spend 30 seconds on a cover letter on average. A tight, punchy letter beats a comprehensive one every time. Focus on your top 2–3 points of fit and stop there.",
                },
                {
                  tip: "Use the hiring manager's name if you can find it",
                  detail:
                    "Check LinkedIn, the company website, or the job posting for the hiring manager's name. 'Dear Sarah Chen' is more engaging than 'Dear Hiring Manager' and signals that you put in effort to personalize the application.",
                },
                {
                  tip: "Tell a brief story around your biggest relevant achievement",
                  detail:
                    "A short narrative arc — challenge, action, result — makes you memorable. This structure is called CAR (Challenge, Action, Result) and is highly effective for cover letters and interviews alike.",
                },
                {
                  tip: "End with a clear, confident call to action",
                  detail:
                    "Close by asking for the next step: 'I'd welcome the opportunity to discuss how my background fits your team's goals — I'm available for a call this week or next.' Passive closings leave the ball in their court.",
                },
                {
                  tip: "Match the company's tone and culture",
                  detail:
                    "A startup that values moving fast wants a different tone than a professional services firm. Read the company's website and job ad for cues — formal, conversational, energetic — and match it in your letter.",
                },
                {
                  tip: "Proofread twice — especially for names",
                  detail:
                    "Spelling the company name or hiring manager's name wrong is an automatic rejection at many companies. After proofreading for grammar, do a second pass specifically checking all proper nouns, dates, and the job title.",
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
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Frequently Asked Questions — AI Cover Letter Generator
            </h2>
            <p className="text-gray-500 text-sm">
              Everything you need to know about writing a great cover letter
              with AI.
            </p>
            {[
              {
                q: "What makes a great cover letter?",
                a: "A great cover letter is tailored to the specific job, uses keywords from the job description, highlights your most relevant experience, and has a confident tone. Generic cover letters get ignored — specific, targeted ones get interviews. Our AI automatically personalizes your letter to the exact job and company you're applying to.",
              },
              {
                q: "How does AI cover letter generation work?",
                a: "Our AI reads your resume and the job description, identifies matching skills and experience, and writes a cover letter that connects the two naturally. It includes keywords from the job description that both recruiters and ATS systems look for, in the tone you select.",
              },
              {
                q: "Is the generated cover letter ATS-friendly?",
                a: "Yes. Our AI is specifically prompted to include keywords from the job description naturally, making the cover letter compatible with both ATS screening systems and human readers. The output is clean plain text that parses perfectly.",
              },
              {
                q: "Is the cover letter generator free?",
                a: "You can generate your cover letter and see a preview for free — no signup required. For $8.99 (one-time), you unlock the full letter to copy or download. There is no subscription or recurring charge.",
              },
              {
                q: "Can I edit the generated cover letter?",
                a: "Yes, and we encourage it. The AI output is a high-quality starting point — download it and personalize it with specific details, stories, or context the AI wouldn't know. Small personal touches make a big difference.",
              },
              {
                q: "How long does cover letter generation take?",
                a: "Typically 10 to 20 seconds. We use state-of-the-art AI models that are both fast and produce high-quality, tailored output.",
              },
              {
                q: "Can I use this for any job or industry?",
                a: "Absolutely. Our AI analyzes the specific job description you paste, so it adapts to any role — tech, finance, healthcare, marketing, creative, legal, and more. The output is always specific to the job you're targeting.",
              },
              {
                q: "Is my resume data private and secure?",
                a: "Yes. Your resume and job description are processed transiently to generate the cover letter and are not stored on our servers. Your generated letter is cached in your own browser's localStorage for convenience.",
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
