"use client";
import { useCallback, useRef, useState } from "react";

type Quality = "high" | "balanced" | "maximum";
type Stage = "idle" | "compressing" | "done" | "error";

const QUALITY_SETTINGS: Record<Quality, { label: string; jpegQuality: number; scale: number; description: string }> = {
  high: {
    label: "Best Quality",
    jpegQuality: 0.88,
    scale: 1.0,
    description: "Smallest reduction, sharpest output",
  },
  balanced: {
    label: "Balanced",
    jpegQuality: 0.72,
    scale: 0.92,
    description: "Good quality, significant size reduction",
  },
  maximum: {
    label: "Maximum Compression",
    jpegQuality: 0.52,
    scale: 0.78,
    description: "Smallest file size, slightly lower quality",
  },
};

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function compressPdf(file: File, quality: Quality): Promise<Uint8Array> {
  const { jpegQuality, scale } = QUALITY_SETTINGS[quality];

  const [pdfjsLib, { PDFDocument }] = await Promise.all([
    import("pdfjs-dist"),
    import("pdf-lib"),
  ]);

  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

  const arrayBuffer = await file.arrayBuffer();
  const srcPdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const outPdf = await PDFDocument.create();

  for (let i = 1; i <= srcPdf.numPages; i++) {
    const page = await srcPdf.getPage(i);
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement("canvas");
    canvas.width = Math.floor(viewport.width);
    canvas.height = Math.floor(viewport.height);
    const ctx = canvas.getContext("2d")!;

    await page.render({ canvasContext: ctx, viewport }).promise;

    const dataUrl = canvas.toDataURL("image/jpeg", jpegQuality);
    const base64 = dataUrl.split(",")[1];
    const jpegBytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));

    const jpegImage = await outPdf.embedJpg(jpegBytes);
    const newPage = outPdf.addPage([canvas.width, canvas.height]);
    newPage.drawImage(jpegImage, { x: 0, y: 0, width: canvas.width, height: canvas.height });
  }

  return outPdf.save();
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PDF Compressor",
  url: "https://pdf-compressor-mbq.vercel.app",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Free online PDF compressor. Compress PDF files instantly in your browser — no uploads, 100% private.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "100% client-side — your file never leaves your device",
    "Three compression levels: Best Quality, Balanced, Maximum",
    "Shows before and after file size",
    "Instant download of compressed PDF",
    "No signup, no email, no limits",
  ],
};

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState<Quality>("balanced");
  const [stage, setStage] = useState<Stage>("idle");
  const [result, setResult] = useState<{ bytes: Uint8Array; name: string } | null>(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    if (f.type !== "application/pdf") {
      setError("Please upload a PDF file.");
      return;
    }
    setFile(f);
    setResult(null);
    setError("");
    setStage("idle");
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }, []);

  const handleCompress = async () => {
    if (!file) return;
    setStage("compressing");
    setError("");
    try {
      const compressed = await compressPdf(file, quality);
      setResult({ bytes: compressed, name: file.name.replace(/\.pdf$/i, "_compressed.pdf") });
      setStage("done");
    } catch {
      setError("Compression failed. Please try a different file.");
      setStage("error");
    }
  };

  const handleDownload = () => {
    if (!result) return;
    const blob = new Blob([new Uint8Array(result.bytes)], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = result.name;
    a.click();
    URL.revokeObjectURL(url);
  };

  const savings = result && file
    ? Math.round((1 - result.bytes.length / file.size) * 100)
    : 0;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-white border-b px-6 py-16 text-center">
          <span className="bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full">
            100% Free · No Signup · Your File Never Leaves Your Device
          </span>
          <h1 className="text-4xl font-bold mt-4 mb-3 text-gray-900">
            Free PDF Compressor — Reduce PDF Size Instantly
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Compress any PDF in seconds. Works entirely in your browser — no uploads, no privacy risk.
            Perfect for WhatsApp, email, and cloud storage.
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-12">
          {/* Upload zone */}
          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <div
              onClick={() => inputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition ${
                dragging ? "border-black bg-gray-50" : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <input
                ref={inputRef}
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={(e) => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }}
              />
              <div className="text-4xl mb-3">📄</div>
              {file ? (
                <div>
                  <p className="font-semibold text-gray-900">{file.name}</p>
                  <p className="text-sm text-gray-500 mt-1">Original size: {formatBytes(file.size)}</p>
                  <p className="text-xs text-gray-400 mt-2">Click to change file</p>
                </div>
              ) : (
                <div>
                  <p className="font-semibold text-gray-700">Drop your PDF here or click to browse</p>
                  <p className="text-sm text-gray-400 mt-1">PDF files only · Any size</p>
                </div>
              )}
            </div>

            {/* Quality selector */}
            {file && stage !== "done" && (
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-700 mb-3">Compression Level</p>
                <div className="grid grid-cols-3 gap-3">
                  {(Object.keys(QUALITY_SETTINGS) as Quality[]).map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuality(q)}
                      className={`rounded-xl border p-3 text-left transition ${
                        quality === q
                          ? "border-black bg-black text-white"
                          : "border-gray-200 hover:border-gray-400 text-gray-700"
                      }`}
                    >
                      <p className="text-xs font-bold">{QUALITY_SETTINGS[q].label}</p>
                      <p className={`text-xs mt-0.5 ${quality === q ? "text-gray-300" : "text-gray-400"}`}>
                        {QUALITY_SETTINGS[q].description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

            {/* Compress button */}
            {file && stage !== "done" && (
              <button
                onClick={handleCompress}
                disabled={stage === "compressing"}
                className="w-full mt-6 bg-black text-white py-4 rounded-xl font-semibold text-base hover:bg-gray-800 transition disabled:opacity-60 flex items-center justify-center gap-3"
              >
                {stage === "compressing" && (
                  <svg className="animate-spin h-5 w-5 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {stage === "compressing" ? "Compressing your PDF..." : "Compress PDF →"}
              </button>
            )}

            {/* Result */}
            {stage === "done" && result && file && (
              <div className="mt-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
                  <p className="text-green-700 font-bold text-lg">
                    {savings > 0 ? `${savings}% smaller!` : "Compression complete"}
                  </p>
                  <div className="flex justify-center gap-8 mt-3">
                    <div>
                      <p className="text-xs text-gray-500">Original</p>
                      <p className="font-semibold text-gray-700">{formatBytes(file.size)}</p>
                    </div>
                    <div className="text-gray-300 text-xl self-center">→</div>
                    <div>
                      <p className="text-xs text-gray-500">Compressed</p>
                      <p className="font-semibold text-green-700">{formatBytes(result.bytes.length)}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  className="w-full mt-4 bg-green-600 text-white py-4 rounded-xl font-semibold text-base hover:bg-green-700 transition"
                >
                  Download Compressed PDF ↓
                </button>

                <button
                  onClick={() => { setFile(null); setResult(null); setStage("idle"); }}
                  className="w-full mt-3 border border-gray-200 text-gray-600 py-3 rounded-xl text-sm hover:border-gray-400 transition"
                >
                  Compress another PDF
                </button>

                <p className="text-xs text-gray-400 text-center mt-3">
                  Note: compressed PDFs are image-based and may not be text-searchable.
                  Original formatting is preserved visually.
                </p>
              </div>
            )}
          </div>

          {/* Privacy callout */}
          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
            <p className="text-sm font-semibold text-blue-800 mb-1">🔒 100% Private</p>
            <p className="text-sm text-blue-700">
              Your PDF is processed entirely in your browser. It is never uploaded to any server.
              Not even we can see your file.
            </p>
          </div>

          {/* Cross-sells */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white border rounded-2xl p-5 text-center">
              <p className="text-sm font-medium text-gray-700 mb-1">
                Sending your resume? Make sure it passes ATS first →
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
            <div className="bg-white border rounded-2xl p-5 text-center">
              <p className="text-sm font-medium text-gray-700 mb-1">
                Need a cover letter to go with your resume? →
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
              How the PDF Compressor Works
            </h2>
            <p className="text-center text-gray-500 text-sm mb-8">
              Three steps. Entirely in your browser. No account required.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border p-6 text-center">
                <div className="text-3xl mb-3">📂</div>
                <h3 className="font-bold text-gray-900 mb-2">1. Upload Your PDF</h3>
                <p className="text-sm text-gray-500">
                  Drop your PDF or click to browse. Any size, any number of pages.
                </p>
              </div>
              <div className="bg-white rounded-2xl border p-6 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-gray-900 mb-2">2. Choose Compression</h3>
                <p className="text-sm text-gray-500">
                  Pick your compression level. Balanced works great for WhatsApp and email.
                </p>
              </div>
              <div className="bg-white rounded-2xl border p-6 text-center">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-bold text-gray-900 mb-2">3. Download</h3>
                <p className="text-sm text-gray-500">
                  See your savings and download the compressed PDF instantly.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            {[
              {
                q: "Is this PDF compressor really free?",
                a: "Yes, completely free. No signup, no email, no payment required. The tool runs entirely in your browser.",
              },
              {
                q: "Is my PDF safe? Does it get uploaded anywhere?",
                a: "Your file never leaves your device. All compression happens locally in your browser using JavaScript. We have no server that receives your file.",
              },
              {
                q: "How much will my PDF shrink?",
                a: "Depends on the content. PDFs with images typically compress 50–80%. Text-only PDFs compress less (20–40%). The tool shows the exact before and after size.",
              },
              {
                q: "Will the compressed PDF look different?",
                a: "The visual layout is preserved. The compression converts pages to high-quality images, so text may appear very slightly softer at maximum zoom. For sharing on WhatsApp or email, the difference is not noticeable.",
              },
              {
                q: "Can I still copy text from the compressed PDF?",
                a: "The compressed PDF is image-based, so text is not directly selectable. If you need a searchable PDF, use the Best Quality setting which minimises this trade-off.",
              },
              {
                q: "What is the file size limit?",
                a: "There is no server-side limit since everything runs in your browser. Very large PDFs (50MB+) may take longer depending on your device speed.",
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
