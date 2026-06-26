"use client";
import { useState } from "react";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Interview Prep Tool",
    url: "https://interview-prep-six-gules.vercel.app/",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    description:
      "AI-powered interview prep tool. Paste any job description and get 15 tailored interview questions with STAR method answers and follow-up tips.",
    offers: [
      {
        "@type": "Offer",
        name: "Free Sample Interview Questions",
        price: "0",
        priceCurrency: "USD",
        description: "3 tailored interview questions generated from your job description — free, no signup required",
      },
      {
        "@type": "Offer",
        name: "Full Interview Prep Pack",
        price: "19",
        priceCurrency: "USD",
        description: "15 tailored questions with full STAR method answers and follow-up tips",
      },
    ],
    featureList: [
      "3 free tailored interview questions",
      "15 full questions with STAR method answers",
      "Behavioral, technical, and situational question coverage",
      "Follow-up tips for each question",
      "Customized to the exact job description and company",
      "No signup required",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Prepare for a Job Interview with AI",
    description: "Step-by-step guide to generating tailored interview questions and STAR answers for any role",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Enter Your Target Role and Company",
        text: "Tell us the job title you're interviewing for and the company name. The more specific, the more tailored your questions will be.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Paste the Job Description",
        text: "Copy the full job description from the posting and paste it in. Our AI reads the requirements, responsibilities, and keywords to generate highly relevant questions.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Get Your Interview Questions",
        text: "Receive 3 free sample questions to see the quality. Unlock all 15 questions with complete STAR method answers and follow-up tips for $19 — a fraction of a single coaching session.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of questions does the tool generate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The tool generates a mix of behavioral questions (Tell me about a time when...), situational questions (How would you handle...), role-specific technical questions, and questions about your motivation for the role and company. The balance depends on the job description you paste.",
        },
      },
      {
        "@type": "Question",
        name: "What is the STAR method?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "STAR stands for Situation, Task, Action, Result. It's the framework most interviewers expect for behavioral questions. Each answer template we provide has these four sections pre-filled based on your role — you customize with your own experience before the interview.",
        },
      },
      {
        "@type": "Question",
        name: "Is the interview prep tool free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The first 3 sample questions are completely free with no signup. The full pack of 15 questions with STAR method answers and follow-up tips is a one-time $19 — no subscription.",
        },
      },
      {
        "@type": "Question",
        name: "How is this different from generic interview question lists?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generic lists give you the same 50 questions everyone else reads. Our tool reads the actual job description you paste and generates questions that match the specific skills, responsibilities, and keywords in that posting — the questions most likely to come up in your specific interview.",
        },
      },
      {
        "@type": "Question",
        name: "Is my job description data stored?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Your job description and role information are sent to our AI for processing and discarded immediately after. We do not store your data on our servers.",
        },
      },
    ],
  },
];

export default function Home() {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!role.trim()) {
      setError("Please enter your target role.");
      return;
    }
    if (!jobDescription.trim() || jobDescription.trim().length < 50) {
      setError("Please paste the job description (at least 50 characters).");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, company, jobDescription }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to generate questions.");
      }

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem(
        "ip_result",
        JSON.stringify({ ...data, role, company, jobDescription }),
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
          <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
            Free Interview Questions — No Signup Required
          </span>
          <h1 className="text-4xl font-bold mt-4 mb-3 text-gray-900">
            AI Interview Prep — Tailored Questions & STAR Answers for Any Role
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Paste any job description and get interview questions the hiring
            manager is likely to ask — with ready-to-customize STAR method
            answers. Stop guessing. Show up prepared.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="bg-white rounded-2xl shadow-sm border p-8 space-y-6">
            {/* Role */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Target Role <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-400 mb-2">
                The job title you&apos;re interviewing for
              </p>
              <input
                type="text"
                placeholder="e.g. Senior Software Engineer, Product Manager, Data Scientist..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Company Name{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <p className="text-xs text-gray-400 mb-2">
                Makes questions more specific to the company culture and stage
              </p>
              <input
                type="text"
                placeholder="e.g. Google, a Series B startup, a mid-size fintech..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            {/* Job Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Job Description <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-400 mb-2">
                Paste the full job posting — the more detail, the more relevant
                your questions
              </p>
              <div className="relative">
                <textarea
                  placeholder="Paste the job description here. Include responsibilities, requirements, and any specific skills mentioned..."
                  className="w-full border border-gray-200 rounded-xl p-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  rows={9}
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
                <span className="absolute right-3 bottom-3 text-xs text-gray-400">
                  {jobDescription.length} chars
                </span>
              </div>
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
                ? "Generating your questions..."
                : "Get My Free Interview Questions →"}
            </button>

            <p className="text-center text-xs text-gray-400">
              100% Free · No signup required · Results in ~15 seconds
            </p>
          </div>

          {/* Cross-sell */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
              <p className="text-sm font-medium text-blue-700 mb-1">
                Make sure your resume passes ATS first →
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
                Still need a cover letter for this role? →
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
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
              <p className="text-sm font-medium text-blue-700 mb-1">
                Optimize your LinkedIn before they look you up →
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
          </div>

          {/* How it works */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              How the Interview Prep Tool Works
            </h2>
            <p className="text-center text-gray-500 text-sm mb-8">
              Three steps to walking into your interview fully prepared.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📋",
                  title: "1. Paste the Job Description",
                  body: "Copy the full job posting. Our AI reads the responsibilities, requirements, and keywords to identify what the interviewer cares about most.",
                },
                {
                  icon: "🧠",
                  title: "2. AI Generates Your Questions",
                  body: "Get 3 free sample questions tailored to this exact role. Unlock 15 full questions with STAR method answers and follow-up tips for $19.",
                },
                {
                  icon: "✅",
                  title: "3. Practice and Walk In Confident",
                  body: "Use the STAR answers as templates, fill in your own experience, and practice out loud. You'll have a prepared answer for every likely question.",
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
              Why Interview Prep Matters
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                {
                  stat: "47%",
                  label: "of candidates fail interviews due to poor preparation, not lack of skills",
                },
                {
                  stat: "$200/hr",
                  label: "is what human interview coaches charge — our tool is $19",
                },
                {
                  stat: "3×",
                  label: "more likely to get an offer when you practice answers out loud beforehand",
                },
                {
                  stat: "15",
                  label: "tailored questions cover behavioral, technical, and situational rounds",
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
              10 Interview Prep Tips That Actually Work
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Practical strategies to perform better in your next interview.
            </p>
            <div className="space-y-4">
              {[
                {
                  tip: "Research the job description keywords before any interview",
                  detail:
                    "The job description is a cheat sheet. Every skill and responsibility they list is something they plan to ask about. Highlight the top 5 requirements and make sure you have a prepared story for each one before you walk in.",
                },
                {
                  tip: "Use the STAR method for every behavioral question",
                  detail:
                    "STAR (Situation, Task, Action, Result) gives your answers a clear structure that interviewers follow easily. Without structure, even great answers sound disorganized. Practice delivering each answer in 90 seconds or less.",
                },
                {
                  tip: "Prepare 5-7 core stories and adapt them to multiple questions",
                  detail:
                    "You don't need a unique story for every possible question. Pick 5-7 strong experiences from your career and practice framing each one for different question types: leadership, conflict, failure, success, collaboration. Most questions fit one of these buckets.",
                },
                {
                  tip: "Research the company's recent news before the interview",
                  detail:
                    "Check their website, LinkedIn, and Google news in the 48 hours before your interview. Mentioning a recent product launch, funding round, or company initiative in your answers signals genuine interest and stands out immediately.",
                },
                {
                  tip: "Prepare 3 strong questions to ask at the end",
                  detail:
                    "Most candidates ask weak questions like 'what's the culture like?' Prepare questions that show you've done your research: 'I saw you recently expanded into X market — how is the team positioning for that?' Strong questions leave a lasting impression.",
                },
                {
                  tip: "Practice out loud, not just in your head",
                  detail:
                    "An answer that sounds perfect in your head often comes out disorganized when spoken. Practice your STAR answers out loud at least 3 times each. Record yourself once. You'll catch filler words, unclear logic, and answers that run too long.",
                },
                {
                  tip: "Address weaknesses with a growth story, not apologies",
                  detail:
                    'When asked about weaknesses, don\'t say "I work too hard." Pick a real but minor weakness and follow it with concrete steps you\'ve taken to improve. "I used to struggle with delegating — I fixed this by setting weekly check-in rhythms with my team" is credible and shows self-awareness.',
                },
                {
                  tip: "Align your answers to the company's stage and values",
                  detail:
                    "A startup interview values scrappiness, speed, and ownership. An enterprise interview values process, scale, and stakeholder management. Look at their LinkedIn, culture pages, and Glassdoor reviews. Frame your stories to match what they value.",
                },
                {
                  tip: "Clarify the question before answering if you're unsure",
                  detail:
                    "It's always better to ask a quick clarifying question than to answer the wrong thing. 'Just to make sure I understand — are you asking about X or Y?' shows listening and prevents a wasted 2-minute answer. Interviewers appreciate it.",
                },
                {
                  tip: "Send a follow-up thank-you email within 24 hours",
                  detail:
                    "Most candidates don't send one. A 3-sentence email referencing something specific from the conversation, expressing continued interest, and noting one thing that excites you about the role takes 5 minutes and puts you ahead of 80% of the competition.",
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
              Everything you need to know about AI interview prep.
            </p>
            {[
              {
                q: "What types of questions does the tool generate?",
                a: "The tool generates a mix of behavioral questions (Tell me about a time when...), situational questions (How would you handle...), role-specific technical questions, and questions about your motivation for the role and company. The balance depends on the job description you paste.",
              },
              {
                q: "What is the STAR method?",
                a: "STAR stands for Situation, Task, Action, Result. It's the framework most interviewers expect for behavioral questions. Each answer template we provide has these four sections pre-filled based on your role — you customize with your own experience before the interview.",
              },
              {
                q: "Is the interview prep tool free?",
                a: "The first 3 sample questions are completely free with no signup. The full pack of 15 questions with STAR method answers and follow-up tips is a one-time $19 — no subscription.",
              },
              {
                q: "How is this different from generic interview question lists?",
                a: "Generic lists give you the same 50 questions everyone else reads. Our tool reads the actual job description you paste and generates questions that match the specific skills, responsibilities, and keywords in that posting — the questions most likely to come up in your specific interview.",
              },
              {
                q: "Can I use this for technical interviews?",
                a: "Yes. If your job description mentions specific technologies, frameworks, or technical responsibilities, the tool generates relevant technical questions alongside behavioral ones. For deep algorithm/leetcode prep, this works best as a complement to technical practice, not a replacement.",
              },
              {
                q: "Is my job description data stored?",
                a: "No. Your job description and role information are sent to our AI for processing and discarded immediately after. We do not store your data on our servers.",
              },
              {
                q: "What if I have multiple rounds of interviews?",
                a: "Use the tool once for each round if the focus shifts (e.g. an initial HR screen vs a technical deep-dive vs a final culture fit). Each time you paste the job description, the AI tailors questions to the role. The $19 unlocks one full prep pack per session.",
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
