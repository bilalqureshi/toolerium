"use client";
import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

type AnalyzeResult = {
  score: number;
  verdict: string;
  improvements: string[];
  missing_keywords: string[];
  headline: string;
  about: string;
  targetRole: string;
  skills: string;
};

type OptimizeResult = {
  headline: string;
  about: string;
  recommended_skills: string[];
};

function ResultContent() {
  const [data, setData] = useState<AnalyzeResult | null>(null);
  const [optimized, setOptimized] = useState<OptimizeResult | null>(null);
  const [optimizing, setOptimizing] = useState(false);
  const [optimizeError, setOptimizeError] = useState("");
  const [payLoading, setPayLoading] = useState(false);
  const [payError, setPayError] = useState("");
  const [copied, setCopied] = useState<"headline" | "about" | null>(null);
  const hasGenerated = useRef(false);
  const searchParams = useSearchParams();
  const paid = searchParams.get("paid");

  useEffect(() => {
    const stored = localStorage.getItem("li_result");
    if (!stored) return;

    const parsed: AnalyzeResult = JSON.parse(stored);
    setData(parsed);

    const isPaid =
      paid === "true" || localStorage.getItem("li_paid") === "true";

    if (paid === "true") {
      localStorage.setItem("li_paid", "true");
    }

    if (isPaid && !hasGenerated.current) {
      hasGenerated.current = true;
      generateOptimized(parsed);
    }
  }, [paid]);

  const generateOptimized = async (profile: AnalyzeResult) => {
    setOptimizing(true);
    setOptimizeError("");
    try {
      const res = await fetch("/api/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          headline: profile.headline,
          about: profile.about,
          targetRole: profile.targetRole,
          skills: profile.skills,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Optimization failed.");
      }

      const result: OptimizeResult = await res.json();

      if (!result.headline || !result.about) {
        throw new Error("Incomplete response from AI. Please try again.");
      }

      setOptimized(result);
    } catch (err: unknown) {
      setOptimizeError(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    } finally {
      setOptimizing(false);
    }
  };

  const handlePay = async () => {
    setPayLoading(true);
    setPayError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          returnUrl: `${window.location.origin}/result?paid=true`,
        }),
      });

      if (!res.ok) throw new Error("Could not create checkout.");

      const { url } = await res.json();
      window.location.href = url;
    } catch {
      setPayError("Could not start checkout. Please try again.");
      setPayLoading(false);
    }
  };

  const handleCopy = async (text: string, key: "headline" | "about") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // fallback for older browsers
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <svg
          className="animate-spin h-7 w-7 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <p className="text-gray-400 text-sm">Loading your results...</p>
        <a href="/" className="text-sm text-gray-400 underline mt-2">
          ← Go back and analyze again
        </a>
      </div>
    );
  }

  const scoreColor =
    data.score >= 70
      ? "text-green-600"
      : data.score >= 40
        ? "text-yellow-500"
        : "text-red-500";

  const verdictBg =
    data.verdict === "Strong"
      ? "bg-green-100 text-green-700"
      : data.verdict === "Needs Work"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700";

  const isPaid = paid === "true" || (typeof window !== "undefined" && localStorage.getItem("li_paid") === "true");

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Score Card */}
        <div className="bg-white rounded-2xl border shadow-sm p-8 text-center">
          <p className="text-gray-500 text-sm mb-2">LinkedIn Profile Strength</p>
          <p className={`text-7xl font-bold ${scoreColor}`}>{data.score}</p>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${verdictBg}`}>
            {data.verdict}
          </span>
          <p className="text-gray-400 text-sm mt-2">out of 100</p>
          {data.targetRole && (
            <p className="text-gray-500 text-xs mt-3">
              Analyzed for: <span className="font-medium text-gray-700">{data.targetRole}</span>
            </p>
          )}
        </div>

        {/* Missing Keywords */}
        {data.missing_keywords?.length > 0 && (
          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <h2 className="font-bold text-gray-900 mb-3">
              Missing Keywords ({data.missing_keywords.length})
            </h2>
            <p className="text-xs text-gray-400 mb-3">
              Recruiter search terms absent from your current profile
            </p>
            <div className="flex flex-wrap gap-2">
              {data.missing_keywords.map((k, i) => (
                <span
                  key={i}
                  className="bg-red-50 text-red-600 text-sm px-3 py-1 rounded-full border border-red-100"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Improvements */}
        {data.improvements?.length > 0 && (
          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <h2 className="font-bold text-gray-900 mb-3">
              3 Ways to Improve Your Profile
            </h2>
            <ul className="space-y-3">
              {data.improvements.map((tip, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-700">
                  <span className="text-blue-500 font-bold mt-0.5 shrink-0">→</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Paywall / Optimized Output */}
        {!optimized && !optimizing && !isPaid && (
          <div className="bg-black rounded-2xl p-8 text-center text-white">
            {data.missing_keywords?.length > 0 && (
              <p className="text-red-400 font-semibold mb-3">
                Your profile is missing {data.missing_keywords.length} recruiter keywords
              </p>
            )}
            <p className="text-lg font-bold mb-1">Get Your AI-Optimized LinkedIn Profile</p>
            <p className="text-gray-400 text-sm mb-2">What you unlock for $5.99:</p>
            <ul className="text-gray-300 text-sm mb-6 space-y-1">
              <li>✓ Keyword-rich headline (max 220 chars)</li>
              <li>✓ Fully rewritten About section</li>
              <li>✓ 8–12 recommended skills to add</li>
            </ul>
            {payError && (
              <p className="text-red-400 text-sm mb-3">{payError}</p>
            )}
            <button
              onClick={handlePay}
              disabled={payLoading}
              className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition disabled:opacity-60 flex items-center justify-center gap-3 mx-auto"
            >
              {payLoading && (
                <svg
                  className="animate-spin h-4 w-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {payLoading ? "Redirecting to checkout..." : "Optimize My LinkedIn Profile — $5.99"}
            </button>
            <p className="text-gray-500 text-xs mt-3">One-time payment · No subscription</p>
          </div>
        )}

        {optimizing && (
          <div className="bg-white rounded-2xl border p-8 text-center flex flex-col items-center gap-4">
            <svg
              className="animate-spin h-8 w-8 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <div>
              <p className="text-gray-700 font-semibold">Rewriting your LinkedIn profile...</p>
              <p className="text-gray-400 text-sm mt-1">This takes about 15 seconds</p>
            </div>
          </div>
        )}

        {optimizeError && (
          <div className="bg-white rounded-2xl border p-8 text-center space-y-4">
            <p className="text-red-500">{optimizeError}</p>
            <button
              onClick={() => {
                const stored = localStorage.getItem("li_result");
                if (stored) generateOptimized(JSON.parse(stored));
              }}
              className="bg-black text-white px-6 py-2 rounded-xl text-sm font-semibold hover:bg-gray-800 transition"
            >
              Try Again
            </button>
          </div>
        )}

        {optimized && (
          <>
            {/* Optimized Headline */}
            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-bold text-gray-900">Optimized Headline</h2>
                <button
                  onClick={() => handleCopy(optimized.headline, "headline")}
                  className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg transition flex items-center gap-1.5"
                >
                  {copied === "headline" ? "✓ Copied!" : "Copy"}
                </button>
              </div>
              <p className="text-gray-700 bg-blue-50 rounded-xl px-4 py-3 text-sm leading-relaxed">
                {optimized.headline}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {optimized.headline.length}/220 characters
              </p>
            </div>

            {/* Optimized About */}
            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-bold text-gray-900">Optimized About Section</h2>
                <button
                  onClick={() => handleCopy(optimized.about, "about")}
                  className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg transition flex items-center gap-1.5"
                >
                  {copied === "about" ? "✓ Copied!" : "Copy"}
                </button>
              </div>
              <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed bg-gray-50 rounded-xl p-4">
                {optimized.about}
              </pre>
              <p className="text-xs text-gray-400 mt-2">
                {optimized.about.length}/2,600 characters
              </p>
            </div>

            {/* Recommended Skills */}
            {optimized.recommended_skills?.length > 0 && (
              <div className="bg-white rounded-2xl border shadow-sm p-6">
                <h2 className="font-bold text-gray-900 mb-1">
                  Recommended Skills to Add
                </h2>
                <p className="text-xs text-gray-400 mb-3">
                  Add these to your LinkedIn Skills section for maximum search visibility
                </p>
                <div className="flex flex-wrap gap-2">
                  {optimized.recommended_skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full border border-green-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* How to apply */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="font-semibold text-blue-900 mb-2">How to apply these changes</h3>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>Go to your LinkedIn profile and click the pencil/edit icon</li>
                <li>Replace your headline with the optimized version above</li>
                <li>Scroll to the About section and replace with the rewritten copy</li>
                <li>Go to Skills and add the recommended skills listed above</li>
                <li>Save changes — your profile update will be indexed within 24 hours</li>
              </ol>
            </div>
          </>
        )}

        {/* Cross-sell */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 border rounded-2xl p-5 text-center">
            <p className="text-sm font-medium text-gray-700 mb-1">
              Now optimize your resume for ATS →
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
          <div className="bg-gray-50 border rounded-2xl p-5 text-center">
            <p className="text-sm font-medium text-gray-700 mb-1">
              Write a cover letter in seconds →
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
          <div className="bg-gray-50 border rounded-2xl p-5 text-center">
            <p className="text-sm font-medium text-gray-700 mb-1">
              Interview coming up? Prep with AI questions →
            </p>
            <a
              href="https://interview-prep-six-gules.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm underline"
            >
              Free AI Interview Prep
            </a>
          </div>
          <div className="bg-gray-50 border rounded-2xl p-5 text-center">
            <p className="text-sm font-medium text-gray-700 mb-1">
              Compress your resume PDF before sending →
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
        </div>

        <button
          onClick={() => (window.location.href = "/")}
          className="w-full text-center text-sm text-gray-400 hover:text-gray-600 py-2 transition"
        >
          ← Analyze another profile
        </button>
      </div>
    </main>
  );
}

export default function Result() {
  return (
    <Suspense>
      <ResultContent />
    </Suspense>
  );
}
