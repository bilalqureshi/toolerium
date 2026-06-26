import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CompressTool from "../../components/CompressTool";

const SITE_URL = "https://pdf-compressor-ecru-two.vercel.app";

type UseCaseConfig = {
  title: string;
  metaDescription: string;
  h1: string;
  badge: string;
  intro: string;
  tip: string;
  recommendedLevel: "high" | "balanced" | "maximum";
  faqs: { q: string; a: string }[];
};

const USE_CASES: Record<string, UseCaseConfig> = {
  "pdf-for-whatsapp": {
    title: "Compress PDF for WhatsApp — Free Online Tool",
    metaDescription:
      "Compress a PDF to send on WhatsApp. Free, browser-based — your file never gets uploaded. Reduce PDF size in seconds.",
    h1: "Compress PDF for WhatsApp — Free & Private",
    badge: "WhatsApp PDF Size Limit",
    intro:
      "WhatsApp allows PDF attachments up to 100MB, but large files can be slow to send and even slower to open on mobile. Compressing your PDF before sending makes it faster to share and easier for the recipient to open. Our tool compresses your PDF entirely in your browser — nothing is uploaded anywhere.",
    tip: "Use the Balanced setting for WhatsApp. It reduces file size by 50–70% while keeping the PDF looking sharp on a phone screen.",
    recommendedLevel: "balanced",
    faqs: [
      {
        q: "What is the PDF size limit for WhatsApp?",
        a: "WhatsApp allows PDF attachments up to 100MB. If your file is over that limit, you need to compress it or split it before sending.",
      },
      {
        q: "Will the compressed PDF open correctly on WhatsApp?",
        a: "Yes. The compressed PDF is a standard PDF file that opens in any PDF viewer on iOS, Android, or desktop — including WhatsApp's built-in viewer.",
      },
      {
        q: "How much can I reduce my PDF size for WhatsApp?",
        a: "Using the Balanced setting, most PDFs compress by 50–70%. A 10MB PDF typically becomes 3–5MB — much faster to send and receive on mobile.",
      },
      {
        q: "Does compression affect the quality when viewed on WhatsApp?",
        a: "On a phone screen, Balanced compression is visually identical to the original. You would need to zoom in significantly to notice any softening.",
      },
    ],
  },

  "pdf-for-email": {
    title: "Compress PDF for Email — Reduce PDF Size to Send",
    metaDescription:
      "Reduce PDF file size before emailing. Most email providers limit attachments to 25MB. Compress your PDF free in seconds — no upload required.",
    h1: "Compress PDF for Email — Free File Size Reducer",
    badge: "Email Attachment Limit",
    intro:
      "Gmail, Outlook, and most email providers limit attachments to 25MB. Larger PDFs get blocked or bounce. Compressing your PDF before attaching it avoids delivery failures and makes emails faster to send and receive. Our compressor runs entirely in your browser — your PDF is never uploaded to any server.",
    tip: "Gmail blocks attachments over 25MB. Use Balanced compression to get most PDFs well under that limit while keeping them readable.",
    recommendedLevel: "balanced",
    faqs: [
      {
        q: "What is the email attachment size limit for PDF files?",
        a: "Gmail limits attachments to 25MB. Outlook allows up to 20MB for most accounts. Yahoo Mail allows 25MB. If your PDF exceeds these limits, it will be rejected or you will need to use a file-sharing link instead.",
      },
      {
        q: "How do I compress a PDF to send by email?",
        a: "Upload your PDF to our free compressor, choose Balanced compression, click Compress PDF, then download the compressed file. Most PDFs compress by 50–70%, bringing them well under email limits.",
      },
      {
        q: "Will the compressed PDF look professional in an email?",
        a: "Yes. Balanced compression produces a PDF that is visually identical on screen. Charts, tables, and text all render cleanly when the recipient opens it.",
      },
    ],
  },

  "pdf-to-1mb": {
    title: "Compress PDF to 1MB — Free Online PDF Size Reducer",
    metaDescription:
      "Compress a PDF to under 1MB free. No upload required — runs entirely in your browser. Reduce PDF to 1MB for form uploads, portals, and attachments.",
    h1: "Compress PDF to 1MB — Free Browser-Based Tool",
    badge: "Target: Under 1MB",
    intro:
      "Many online portals, job application forms, and government websites have a strict 1MB PDF upload limit. Our compressor gives you three compression levels to hit that target. Maximum Compression typically reduces PDFs by 70–85%, bringing most documents well under 1MB. Your file never leaves your device.",
    tip: "To reach 1MB, use Maximum Compression first. If the result is still over 1MB, the PDF likely has many high-resolution images. Try splitting it into sections.",
    recommendedLevel: "maximum",
    faqs: [
      {
        q: "Can I compress any PDF to under 1MB?",
        a: "Most single-document PDFs compress to under 1MB with Maximum Compression. Very large PDFs (many pages or embedded high-resolution images) may not reach 1MB — in those cases, try splitting the PDF into smaller sections.",
      },
      {
        q: "Why do some forms require a PDF under 1MB?",
        a: "Government portals, HR systems, and application forms often have strict file size limits to reduce server storage costs and upload time. Compressing your PDF is the standard way to meet these requirements.",
      },
      {
        q: "Does Maximum Compression ruin the PDF?",
        a: "The PDF will look very slightly softer at 100% zoom, but all content remains fully legible. For form submissions and uploads, the quality is always acceptable.",
      },
    ],
  },

  "reduce-pdf-size": {
    title: "Reduce PDF Size — Free PDF File Size Reducer Online",
    metaDescription:
      "Reduce PDF file size online for free. No upload, 100% private. Shrink large PDFs for sharing, storage, and sending. Works in your browser.",
    h1: "Reduce PDF File Size — Free Online Compressor",
    badge: "Free · No Upload · Instant",
    intro:
      "Large PDF files take up storage space, slow down email, and are awkward to share. Our free PDF size reducer shrinks your PDF in seconds — and because it works entirely in your browser, your file is never uploaded to any server. Choose from three compression levels to match your quality and size needs.",
    tip: "Balanced compression is the sweet spot for most use cases — it reduces file size by 50–65% while keeping text and images sharp.",
    recommendedLevel: "balanced",
    faqs: [
      {
        q: "What is the best way to reduce a PDF file size?",
        a: "The most effective way is to re-compress the embedded images at a lower quality. Our tool does this automatically in your browser — no software to install, no upload required.",
      },
      {
        q: "How much can I reduce a PDF's file size?",
        a: "PDFs with many images typically reduce by 50–80%. Text-heavy PDFs reduce by 20–40%. The tool shows the exact before and after size after compression.",
      },
      {
        q: "Does reducing PDF size affect the content?",
        a: "The visual content is preserved. Compression converts pages to compressed images, so text may not be directly selectable, but the document looks the same on screen.",
      },
    ],
  },

  "large-pdf": {
    title: "Compress Large PDF Files — Free Online Tool",
    metaDescription:
      "Compress large PDF files free in your browser. No upload, no size limit. Reduce 50MB, 100MB, or larger PDFs instantly.",
    h1: "Compress Large PDF Files — No Upload, No Limit",
    badge: "Works on Any PDF Size",
    intro:
      "Large PDFs — reports, presentations, scanned documents, portfolios — can be tens or hundreds of megabytes. Our compressor handles PDFs of any size because everything runs locally in your browser. There is no server-side file size limit. Larger files take a bit longer depending on your device, but the compression is done entirely on your machine.",
    tip: "For very large PDFs (50MB+), the compression may take 30–60 seconds. Keep the browser tab open while it processes. Maximum Compression gives the biggest size reduction for large files.",
    recommendedLevel: "maximum",
    faqs: [
      {
        q: "Is there a file size limit for the PDF compressor?",
        a: "No. Because the tool runs entirely in your browser, there is no server-side limit. Any size PDF can be compressed — just allow a bit more time for very large files.",
      },
      {
        q: "How long does it take to compress a large PDF?",
        a: "A 10MB PDF typically compresses in under 15 seconds. A 50MB PDF may take 30–60 seconds. Processing time depends on the number of pages and your device speed.",
      },
      {
        q: "What is the best compression setting for large PDFs?",
        a: "Use Maximum Compression for the biggest file size reduction. It typically achieves 70–85% reduction on image-heavy PDFs. If text sharpness is important, use Balanced instead.",
      },
    ],
  },

  "pdf-online": {
    title: "Compress PDF Online Free — No Upload Required",
    metaDescription:
      "Compress PDF online free — no signup, no upload, 100% private. Runs in your browser. Reduce PDF size instantly for any use case.",
    h1: "Compress PDF Online Free — 100% Private, No Upload",
    badge: "No Upload · No Account · Free",
    intro:
      "Most online PDF compressors upload your file to a server — which means your documents are handled by third parties, stored temporarily, and potentially exposed to privacy risks. Ours is different: the compression runs entirely in your browser using JavaScript. Your PDF never leaves your device. No account, no signup, no size limit.",
    tip: "Balanced compression is recommended for general use — it reduces most PDFs by 50–65% while keeping them sharp on screen.",
    recommendedLevel: "balanced",
    faqs: [
      {
        q: "Is it safe to compress a PDF online?",
        a: "With most tools, your PDF is uploaded to a third-party server. Our compressor is different — it runs entirely in your browser, so your file is never transmitted anywhere. It is the safest way to compress a PDF online.",
      },
      {
        q: "Do I need to create an account to compress a PDF?",
        a: "No. There is no account, no signup, and no email required. Drop your PDF, choose a compression level, and download the result.",
      },
      {
        q: "How does browser-based PDF compression work?",
        a: "The tool uses JavaScript libraries (pdfjs-dist and pdf-lib) to render each page of your PDF to a compressed image in your browser's memory, then reassemble them into a new PDF — all without any data leaving your device.",
      },
    ],
  },

  "pdf-to-200kb": {
    title: "Compress PDF to 200KB — Free PDF Size Reducer",
    metaDescription:
      "Compress a PDF to 200KB or smaller free online. No upload required. Use Maximum Compression to hit strict file size limits.",
    h1: "Compress PDF to 200KB — Free Browser-Based Tool",
    badge: "Target: Under 200KB",
    intro:
      "Some application portals, university submission systems, and visa forms require PDFs under 200KB. That is a tight target, but achievable for most single-page or short documents. Use Maximum Compression to get the smallest possible output. Your file is never uploaded — everything runs in your browser.",
    tip: "For a single-page scanned document, Maximum Compression typically reaches 150–250KB. If your document is still too large, try reducing it to fewer pages or use a lower scan resolution before compressing.",
    recommendedLevel: "maximum",
    faqs: [
      {
        q: "Can I compress a PDF to under 200KB?",
        a: "Yes, for most short documents (1–5 pages). A single-page scanned form typically compresses to 100–250KB with Maximum Compression. Multi-page or image-heavy PDFs may not reach 200KB — splitting the document into smaller parts is the solution.",
      },
      {
        q: "What if my PDF is still over 200KB after compression?",
        a: "Try splitting the PDF into individual pages and compressing each separately. Alternatively, reduce the scan resolution of the original document if you have access to the source.",
      },
      {
        q: "Is a 200KB PDF readable and usable?",
        a: "Yes. Maximum Compression preserves all visual content at a quality that is fully legible on screen and when printed. The trade-off is that text is image-based and not directly searchable.",
      },
    ],
  },

  "pdf-without-losing-quality": {
    title: "Compress PDF Without Losing Quality — Free Tool",
    metaDescription:
      "Compress a PDF without losing visible quality. Use Best Quality mode for maximum sharpness with reduced file size. Free, no upload.",
    h1: "Compress PDF Without Losing Quality — Free & Private",
    badge: "Best Quality Mode",
    intro:
      "If you need to share a PDF that will be printed, presented, or scrutinized closely, quality matters. Our Best Quality compression mode reduces file size by 20–40% while keeping text sharp and images visually indistinguishable from the original at normal viewing sizes. Your PDF is never uploaded — it is compressed entirely in your browser.",
    tip: "Use Best Quality if you are compressing a portfolio, presentation, or document that will be viewed at 100% zoom or printed. Use Balanced for documents shared over WhatsApp or email where screen quality is sufficient.",
    recommendedLevel: "high",
    faqs: [
      {
        q: "Can you compress a PDF without any quality loss?",
        a: "Lossless PDF compression (which removes metadata and redundant data without touching images) typically yields only 5–10% reduction. Our Best Quality mode uses very light JPEG compression that is visually lossless for most practical purposes, achieving 20–40% reduction.",
      },
      {
        q: "Which compression level preserves the most quality?",
        a: "Best Quality is the recommended setting if quality is your priority. It applies the lightest compression and the highest image fidelity. Balanced is next — it is imperceptible on screen. Maximum Compression applies the strongest compression and is best for file size targets, not quality preservation.",
      },
      {
        q: "Will the compressed PDF print correctly?",
        a: "With Best Quality mode, yes. The output PDF prints at a quality that is visually equivalent to the original for most documents. If you are printing large format or at very high DPI, use the original file.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(USE_CASES).map((useCase) => ({ useCase }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ useCase: string }>;
}): Promise<Metadata> {
  const { useCase } = await params;
  const config = USE_CASES[useCase];
  if (!config) return {};

  return {
    title: config.title,
    description: config.metaDescription,
    alternates: { canonical: `${SITE_URL}/compress/${useCase}` },
    openGraph: {
      title: config.title,
      description: config.metaDescription,
      url: `${SITE_URL}/compress/${useCase}`,
      type: "website",
    },
  };
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ useCase: string }>;
}) {
  const { useCase } = await params;
  const config = USE_CASES[useCase];
  if (!config) notFound();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "PDF Compressor",
      url: `${SITE_URL}/compress/${useCase}`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      description: config.metaDescription,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: config.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "PDF Compressor",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: config.h1,
          item: `${SITE_URL}/compress/${useCase}`,
        },
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
        {/* Hero */}
        <div className="bg-white border-b px-6 py-16 text-center">
          <span className="bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full">
            {config.badge} · Free · No Upload Required
          </span>
          <h1 className="text-4xl font-bold mt-4 mb-3 text-gray-900">{config.h1}</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{config.intro}</p>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-12">
          {/* Tip callout */}
          <div className="mb-6 bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <p className="text-sm text-amber-800">
              <span className="font-semibold">Recommended setting:</span>{" "}
              <span className="capitalize">{config.recommendedLevel === "high" ? "Best Quality" : config.recommendedLevel === "maximum" ? "Maximum Compression" : "Balanced"}</span>
              {" "}— {config.tip}
            </p>
          </div>

          <CompressTool defaultQuality={config.recommendedLevel} />

          {/* Privacy callout */}
          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
            <p className="text-sm font-semibold text-blue-800 mb-1">🔒 100% Private</p>
            <p className="text-sm text-blue-700">
              Your PDF never leaves your device. All compression happens in your browser.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            {config.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Internal links back to hub + siblings */}
          <div className="mt-10 bg-white border rounded-2xl p-6">
            <h2 className="font-bold text-gray-900 mb-4">More PDF Compression Options</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                { label: "Compress PDF for WhatsApp", href: "/compress/pdf-for-whatsapp" },
                { label: "Compress PDF for Email", href: "/compress/pdf-for-email" },
                { label: "Compress PDF to 1MB", href: "/compress/pdf-to-1mb" },
                { label: "Reduce PDF Size", href: "/compress/reduce-pdf-size" },
                { label: "Compress Large PDF", href: "/compress/large-pdf" },
                { label: "Compress PDF Online", href: "/compress/pdf-online" },
                { label: "Compress PDF to 200KB", href: "/compress/pdf-to-200kb" },
                { label: "Compress Without Losing Quality", href: "/compress/pdf-without-losing-quality" },
              ]
                .filter((item) => item.href !== `/compress/${useCase}`)
                .map((item) => (
                  <a key={item.href} href={item.href} className="text-blue-600 hover:underline py-1">
                    {item.label}
                  </a>
                ))}
              <a href="/" className="text-blue-600 hover:underline py-1 col-span-2">
                ← Back to PDF Compressor home
              </a>
            </div>
          </div>

          {/* Cross-sells */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white border rounded-2xl p-5 text-center">
              <p className="text-sm font-medium text-gray-700 mb-1">
                Sending a resume? Check it passes ATS first →
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
        </div>
      </main>
    </>
  );
}
