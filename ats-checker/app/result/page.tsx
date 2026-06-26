"use client";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ResultContent() {
  const [data, setData] = useState<any>(null);
  const [optimized, setOptimized] = useState("");
  const [optimizing, setOptimizing] = useState(false);
  const [optimizeError, setOptimizeError] = useState("");
  const [payLoading, setPayLoading] = useState(false);
  const hasGenerated = useRef(false);
  const searchParams = useSearchParams();
  const paid = searchParams.get("paid");

  useEffect(() => {
    const stored = localStorage.getItem("ats_result");
    if (!stored) return;

    const parsed = JSON.parse(stored);
    setData(parsed);

    const isPaid =
      paid === "true" || localStorage.getItem("paid") === "true";

    if (paid === "true") {
      localStorage.setItem("paid", "true");
    }

    if (isPaid && !hasGenerated.current) {
      hasGenerated.current = true;
      generateOptimized(parsed.resume, parsed.job);
    }
  }, [paid]);

  const generateOptimized = async (resume: string, job: string) => {
    setOptimizing(true);
    setOptimizeError("");
    try {
      const res = await fetch("/api/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resume, job }),
      });
      const result = await res.json();
      setOptimized(result.result);
    } catch {
      setOptimizeError("Something went wrong. Try again.");
    }
    setOptimizing(false);
  };

  const handlePay = async () => {
    setPayLoading(true);
    const res = await fetch("/api/checkout", { method: "POST" });
    const { url } = await res.json();
    window.location.href = url;
  };

  const handleDownload = () => {
    const blob = new Blob([optimized], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "optimized_resume.txt";
    a.click();
  };

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading your results...</p>
      </div>
    );

  const scoreColor =
    data.score >= 70
      ? "text-green-600"
      : data.score >= 40
        ? "text-yellow-500"
        : "text-red-500";
  const scoreLabel =
    data.score >= 70 ? "Good" : data.score >= 40 ? "Needs Work" : "Poor";

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Score Card */}
        <div className="bg-white rounded-2xl border shadow-sm p-8 text-center">
          <p className="text-gray-500 text-sm mb-2">Your ATS Score</p>
          <p className={`text-7xl font-bold ${scoreColor}`}>{data.score}</p>
          <p className={`text-lg font-semibold mt-1 ${scoreColor}`}>
            {scoreLabel}
          </p>
          <p className="text-gray-400 text-sm mt-2">out of 100</p>
        </div>

        {/* Missing Keywords */}
        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="font-bold text-gray-900 mb-3">
            ❌ Missing Keywords ({data.missing_keywords?.length || 0})
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.missing_keywords?.map((k: string, i: number) => (
              <span
                key={i}
                className="bg-red-50 text-red-600 text-sm px-3 py-1 rounded-full border border-red-100"
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="font-bold text-gray-900 mb-3">💡 Suggestions</h2>
          <ul className="space-y-2">
            {data.suggestions?.map((s: string, i: number) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className="text-blue-500 font-bold mt-0.5">→</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        {!optimized && !optimizing && !optimizeError && (
          <div className="bg-black rounded-2xl p-8 text-center text-white">
            {(data.missing_keywords?.length ?? 0) > 0 && (
              <p className="text-red-400 font-semibold mb-3">
                ⚠️ Your resume is missing {data.missing_keywords.length} critical keywords
              </p>
            )}
            <p className="text-lg font-bold mb-1">Get Your Optimized Resume</p>
            <p className="text-gray-400 text-sm mb-6">
              We'll rewrite your resume with all the missing keywords — ATS
              ready in seconds.
            </p>
            <button
              onClick={handlePay}
              disabled={payLoading}
              className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition disabled:opacity-60 flex items-center justify-center gap-3 mx-auto"
            >
              {payLoading && (
                <svg className="animate-spin h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {payLoading ? "Redirecting to checkout..." : "Optimize My Resume — $8.99"}
            </button>
            <p className="text-gray-500 text-xs mt-3">
              One-time payment. No subscription.
            </p>
          </div>
        )}

        {optimizing && (
          <div className="bg-white rounded-2xl border p-8 text-center flex flex-col items-center gap-3">
            <svg className="animate-spin h-7 w-7 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <p className="text-gray-500">Rewriting your resume for ATS — this takes about 15 seconds...</p>
          </div>
        )}

        {optimizeError && (
          <div className="bg-white rounded-2xl border p-8 text-center">
            <p className="text-red-500 mb-4">{optimizeError}</p>
            <button
              onClick={() => {
                const stored = localStorage.getItem("ats_result");
                if (stored) {
                  const parsed = JSON.parse(stored);
                  generateOptimized(parsed.resume, parsed.job);
                }
              }}
              className="bg-black text-white px-6 py-2 rounded-xl text-sm font-semibold hover:bg-gray-800 transition"
            >
              Try Again
            </button>
          </div>
        )}

        {optimized && (
          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-gray-900">
                ✅ Your Optimized Resume
              </h2>
              <button
                onClick={handleDownload}
                className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Download
              </button>
            </div>
            <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
              {optimized}
            </pre>
          </div>
        )}

        <button
          onClick={() => (window.location.href = "/")}
          className="w-full text-center text-sm text-gray-400 hover:text-gray-600 py-2"
        >
          ← Check another resume
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
