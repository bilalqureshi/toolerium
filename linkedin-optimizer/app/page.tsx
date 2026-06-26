"use client";
import { useState } from "react";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "LinkedIn Profile Optimizer",
    url: "https://linkedin-optimizer-livid.vercel.app/",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    description:
      "Free AI-powered LinkedIn profile optimizer. Get a profile strength score, see missing recruiter keywords, and unlock a fully rewritten bio and headline.",
    offers: [
      {
        "@type": "Offer",
        name: "Free LinkedIn Profile Score",
        price: "0",
        priceCurrency: "USD",
        description:
          "Free profile strength score, missing keywords report, and 3 specific improvement tips",
      },
      {
        "@type": "Offer",
        name: "AI LinkedIn Profile Optimization",
        price: "5.99",
        priceCurrency: "USD",
        description:
          "Full AI-rewritten headline, About section, and recommended skills list",
      },
    ],
    featureList: [
      "LinkedIn profile strength score out of 100",
      "Missing recruiter keyword detection",
      "3 specific improvement tips",
      "AI-rewritten headline (max 220 characters)",
      "AI-rewritten About / Summary section",
      "Recommended LinkedIn skills list",
      "No signup required",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Optimize Your LinkedIn Profile with AI",
    description:
      "Step-by-step guide to scoring and optimizing your LinkedIn bio, headline, and About section for recruiter searches",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Paste Your Current LinkedIn Profile",
        text: "Copy your current LinkedIn headline and About/Summary section and paste them into the tool. Even a partial profile works.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Enter Your Target Role",
        text: "Tell us the job title or role you want to be found for. This is how recruiters search LinkedIn — we optimize your profile for exactly this.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Get Your Profile Score",
        text: "Receive a free profile strength score, a list of missing keywords, and 3 specific tips to improve how recruiters perceive your profile.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does this tool actually improve LinkedIn recruiter visibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. LinkedIn's search algorithm ranks profiles based on keyword relevance, profile completeness, and engagement signals. Our AI analyzes your headline and About section against your target role and rewrites them to include the exact keywords recruiters search for — directly improving your LinkedIn search ranking.",
        },
      },
      {
        "@type": "Question",
        name: "Is the LinkedIn profile optimizer free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Checking your profile score, seeing missing keywords, and getting 3 improvement tips is completely free with no signup required. The full AI-rewritten headline, About section, and recommended skills list is a one-time $5.99 — no subscription.",
        },
      },
      {
        "@type": "Question",
        name: "What does the AI rewrite include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The $5 optimization includes: (1) a keyword-rich headline up to 220 characters that includes your target role and value proposition, (2) a fully rewritten About section with a strong hook, natural keyword integration, and a closing call to action, and (3) a list of 8–12 recommended LinkedIn skills to add for maximum search visibility.",
        },
      },
      {
        "@type": "Question",
        name: "Will the AI invent experience I don't have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The AI only works with what you give it — it rewrites and elevates your existing experience, skills, and background using stronger language and better keyword placement. It does not fabricate credentials, job titles, or experience you have not provided.",
        },
      },
      {
        "@type": "Question",
        name: "How long should my LinkedIn About section be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LinkedIn allows up to 2,600 characters in the About section. The sweet spot for recruiter engagement is 300–500 words — long enough to be rich in keywords and context, short enough to be readable. Our AI targets this range for the optimized version.",
        },
      },
      {
        "@type": "Question",
        name: "Is my profile data stored or shared?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Your headline and About section text are sent to our AI for processing and are discarded immediately after. We do not store your profile data on our servers, and we do not share it with any third parties.",
        },
      },
    ],
  },
];

const CHAR_LIMITS = {
  headline: 220,
  about: 2600,
};

export default function Home() {
  const [headline, setHeadline] = useState("");
  const [about, setAbout] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [skills, setSkills] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!targetRole.trim()) {
      setError("Please enter your target role.");
      return;
    }
    if (!headline.trim() && !about.trim()) {
      setError(
        "Please paste at least your LinkedIn headline or About section.",
      );
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ headline, about, targetRole, skills }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Analysis failed.");
      }

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem(
        "li_result",
        JSON.stringify({ ...data, headline, about, targetRole, skills }),
      );
      window.location.href = "/result";
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
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
          <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
            Free LinkedIn Profile Score — No Signup Required
          </span>
          <h1 className="text-4xl font-bold mt-4 mb-3 text-gray-900">
            Free LinkedIn Profile Optimizer — Get Found by Recruiters
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Most LinkedIn profiles are invisible to recruiters because they lack
            the right keywords. Get your profile strength score, see exactly
            what's missing, and unlock an AI-rewritten bio and headline in
            seconds.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="bg-white rounded-2xl shadow-sm border p-8 space-y-6">
            {/* Target Role */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Target Role <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-400 mb-2">
                The job title or role you want recruiters to find you for
              </p>
              <input
                type="text"
                placeholder="e.g. Senior Product Manager, Full Stack Engineer, UX Designer..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
              />
            </div>

            {/* Headline */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Current LinkedIn Headline
              </label>
              <p className="text-xs text-gray-400 mb-2">
                The line that appears under your name on LinkedIn (max 220
                chars)
              </p>
              <div className="relative">
                <input
                  type="text"
                  maxLength={CHAR_LIMITS.headline}
                  placeholder="e.g. Software Engineer at Acme | React · Node.js · TypeScript"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                />
                <span className="absolute right-3 bottom-3 text-xs text-gray-400">
                  {headline.length}/{CHAR_LIMITS.headline}
                </span>
              </div>
            </div>

            {/* About */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Current LinkedIn About / Summary
              </label>
              <p className="text-xs text-gray-400 mb-2">
                Paste your full About section from your LinkedIn profile
              </p>
              <div className="relative">
                <textarea
                  maxLength={CHAR_LIMITS.about}
                  placeholder="Paste your LinkedIn About section here. Leave blank if you don't have one yet — we'll write it from scratch based on your headline and target role."
                  className="w-full border border-gray-200 rounded-xl p-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  rows={7}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
                <span className="absolute right-3 bottom-3 text-xs text-gray-400">
                  {about.length}/{CHAR_LIMITS.about}
                </span>
              </div>
            </div>

            {/* Skills (optional) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Key Skills to Highlight{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <p className="text-xs text-gray-400 mb-2">
                List skills you want the optimizer to emphasize
              </p>
              <input
                type="text"
                placeholder="e.g. React, TypeScript, system design, cross-functional leadership..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-xl font-semibold text-base hover:bg-gray-800 transition disabled:opacity-60 flex items-center justify-center gap-3"
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
                ? "Analyzing your LinkedIn profile..."
                : "Get My Free Profile Score →"}
            </button>

            <p className="text-center text-xs text-gray-400">
              100% Free · No signup required · Results in ~10 seconds
            </p>
          </div>

          {/* Cross-sell */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
              <p className="text-sm font-medium text-blue-700 mb-1">
                Also optimize your resume for ATS →
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
              <p className="text-sm font-medium text-blue-700 mb-1">
                Write your cover letter in seconds →
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
          </div>

          {/* How it works */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              How the LinkedIn Profile Optimizer Works
            </h2>
            <p className="text-center text-gray-500 text-sm mb-8">
              Three steps. Ten seconds. A complete profile strength report —
              free.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📋",
                  title: "1. Paste Your Profile",
                  body: "Copy your current LinkedIn headline and About section. No account connection needed — just paste plain text.",
                },
                {
                  icon: "🎯",
                  title: "2. Enter Your Target Role",
                  body: "Tell us the job title recruiters should find you for. We optimize specifically for that role's search terms.",
                },
                {
                  icon: "✅",
                  title: "3. Get Your Score & Tips",
                  body: "Receive a profile strength score, missing keywords, and 3 specific improvements — free. Unlock the full rewrite for $5.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border p-6 text-center"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 bg-white rounded-2xl border p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Why Your LinkedIn Profile Matters More Than Your Resume
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                {
                  stat: "87%",
                  label:
                    "of recruiters use LinkedIn to find and vet candidates",
                },
                {
                  stat: "40×",
                  label:
                    "more job opportunities with a complete LinkedIn profile",
                },
                {
                  stat: "71%",
                  label:
                    "of professionals say LinkedIn is their primary job search tool",
                },
                {
                  stat: "3×",
                  label:
                    "more profile views with a keyword-optimized headline and bio",
                },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-black">{item.stat}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              10 LinkedIn Profile Tips That Actually Get You Found
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Use these strategies to rank higher in recruiter searches and get
              more profile views.
            </p>
            <div className="space-y-4">
              {[
                {
                  tip: "Put your target job title in your headline",
                  detail:
                    "LinkedIn's search algorithm weighs your headline heavily. If you want to be found for 'Product Manager' roles, that exact phrase should appear in your headline — not just in your experience section. Include your title, one or two core skills, and a short value proposition in your 220 characters.",
                },
                {
                  tip: "Front-load your About section with keywords",
                  detail:
                    "Only the first 3 lines of your About section show before 'See more'. Pack your target role, biggest strength, and top 2–3 keywords into those first sentences. Recruiters scan — your hook needs to be immediate.",
                },
                {
                  tip: "Match keywords from job descriptions you want",
                  detail:
                    "Search for 5 jobs you'd apply to. Copy the job titles, required skills, and buzzwords into a list. Those are the exact terms you need in your headline, About, and skills. LinkedIn surfaces profiles that match recruiter search terms — use their language, not yours.",
                },
                {
                  tip: "Add at least 5 skills and get endorsements",
                  detail:
                    "LinkedIn's search algorithm factors in skills and endorsements. Profiles with 5+ skills get 17× more profile views. Add the top skills for your target role and ask colleagues to endorse the most important ones.",
                },
                {
                  tip: "Turn on 'Open to Work' (private mode available)",
                  detail:
                    "Enabling 'Open to Work' with your target job titles signals LinkedIn's algorithm to surface you in recruiter searches. You can set it to only show to recruiters (not your network) if you're employed and searching discreetly.",
                },
                {
                  tip: "Use a professional photo — profiles with photos get 21× more views",
                  detail:
                    "LinkedIn data shows profiles with a professional headshot get 21× more views and 36× more messages. Your photo is the first visual signal of professionalism. It doesn't need to be expensive — a clean background and good lighting are enough.",
                },
                {
                  tip: "Write your About section in first person",
                  detail:
                    "Third-person bios ('John is a product manager who...') feel cold and outdated. First person ('I build products that...') is warmer and more compelling. LinkedIn is a professional-social network — write like a human, not a press release.",
                },
                {
                  tip: "Include measurable achievements in your experience",
                  detail:
                    "Numbers make your profile stand out to both recruiters and LinkedIn's algorithm. Instead of 'Led a team', write 'Led a 7-person engineering team that shipped 3 features in Q1, increasing user retention by 18%'. Specificity signals credibility.",
                },
                {
                  tip: "Customize your LinkedIn URL",
                  detail:
                    "A custom URL (linkedin.com/in/yourname) looks cleaner on your resume and in emails, and is easier for people to find. Go to your profile → Edit public profile & URL → Edit your custom URL. This takes 30 seconds and makes you look more professional.",
                },
                {
                  tip: "Post or engage at least once a week",
                  detail:
                    "LinkedIn's algorithm boosts the visibility of active users. Commenting on industry posts, sharing articles, or writing short posts increases your profile's search ranking over time. Even one short post per week compounds significantly over months.",
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
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm">
              Everything you need to know about optimizing your LinkedIn
              profile.
            </p>
            {[
              {
                q: "Does this tool actually improve LinkedIn recruiter visibility?",
                a: "Yes. LinkedIn's search algorithm ranks profiles based on keyword relevance, profile completeness, and engagement signals. Our AI analyzes your headline and About section against your target role and rewrites them to include the exact keywords recruiters search for — directly improving your LinkedIn search ranking.",
              },
              {
                q: "Is the LinkedIn profile optimizer free?",
                a: "Checking your profile score, seeing missing keywords, and getting 3 improvement tips is completely free with no signup required. The full AI-rewritten headline, About section, and recommended skills list is a one-time $5.99 — no subscription.",
              },
              {
                q: "What does the AI rewrite include?",
                a: "The $5 optimization includes: (1) a keyword-rich headline up to 220 characters that includes your target role and value proposition, (2) a fully rewritten About section with a strong hook, natural keyword integration, and a closing call to action, and (3) a list of 8–12 recommended LinkedIn skills to add for maximum search visibility.",
              },
              {
                q: "Will the AI invent experience I don't have?",
                a: "No. The AI only works with what you give it — it rewrites and elevates your existing experience, skills, and background using stronger language and better keyword placement. It does not fabricate credentials, job titles, or experience you have not provided.",
              },
              {
                q: "How long should my LinkedIn About section be?",
                a: "LinkedIn allows up to 2,600 characters in the About section. The sweet spot for recruiter engagement is 300–500 words. Our AI targets this range for the optimized version.",
              },
              {
                q: "Is my profile data stored or shared?",
                a: "No. Your headline and About section text are sent to our AI for processing and discarded immediately after. We do not store your profile data on our servers, and we do not share it with any third parties.",
              },
              {
                q: "Can I use this if I don't have a LinkedIn About section yet?",
                a: "Absolutely. If your About section is blank, just leave it empty and we'll write one from scratch based on your headline and target role. Many people get their first professional About section this way.",
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
