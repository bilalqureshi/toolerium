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

interface Props {
  defaultQuality?: Quality;
}

export default function CompressTool({ defaultQuality = "balanced" }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState<Quality>(defaultQuality);
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
    <div className="bg-white rounded-2xl shadow-sm border p-8">
      {/* Upload zone */}
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
            Original layout is preserved visually.
          </p>
        </div>
      )}
    </div>
  );
}
