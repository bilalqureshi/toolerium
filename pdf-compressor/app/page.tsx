import CompressTool from "./components/CompressTool";

const SITE_URL = "https://pdf-compressor-ecru-two.vercel.app";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF Compressor",
    url: SITE_URL,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    description:
      "Free online PDF compressor. Reduce PDF file size instantly in your browser — no uploads, 100% private. Works for WhatsApp, email, and cloud storage.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "100% client-side — your file never leaves your device",
      "Three compression levels: Best Quality, Balanced, Maximum",
      "Shows before and after file size with savings percentage",
      "Instant download of compressed PDF",
      "No signup, no email, no limits",
      "Works on any device — desktop, tablet, mobile",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Compress a PDF File Online for Free",
    description: "Step-by-step guide to reducing your PDF file size in your browser with no uploads.",
    totalTime: "PT30S",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Upload your PDF",
        text: "Drag and drop your PDF onto the upload zone, or click to browse. Any size PDF is supported — your file never leaves your device.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Choose a compression level",
        text: "Select Balanced for the best mix of quality and file size reduction. Choose Maximum Compression for the smallest possible output, or Best Quality if you need to preserve sharpness.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Download your compressed PDF",
        text: "Click Compress PDF and then download. You will see the exact before and after file size and the percentage saved.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this PDF compressor really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, completely free. No signup, no email, no payment. The tool runs entirely in your browser using JavaScript and requires no server.",
        },
      },
      {
        "@type": "Question",
        name: "Is my PDF safe? Does it get uploaded anywhere?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your file never leaves your device. All compression happens locally in your browser. We have no server that receives your PDF — it is 100% private.",
        },
      },
      {
        "@type": "Question",
        name: "How much will my PDF shrink?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PDF files with images typically compress 50–80%. Text-only PDFs compress 20–40%. The tool shows exact before and after file size so you always know your savings.",
        },
      },
      {
        "@type": "Question",
        name: "Can I compress a PDF for WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WhatsApp allows PDF attachments up to 100MB. Use the Balanced or Maximum compression setting to reduce your PDF size before sending. The compressed PDF will look visually identical on most screens.",
        },
      },
      {
        "@type": "Question",
        name: "Will the compressed PDF look different?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The visual layout is preserved. Compression converts pages to high-quality images, so text appears very slightly softer at maximum zoom. For WhatsApp, email, or screen viewing, the difference is not noticeable.",
        },
      },
      {
        "@type": "Question",
        name: "Can I still copy text from the compressed PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The compressed PDF is image-based, so text is not directly selectable or searchable. If you need a searchable PDF, use the Best Quality setting which gives the least compression but keeps the file visually sharp.",
        },
      },
      {
        "@type": "Question",
        name: "What is the file size limit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no server-side limit because everything runs in your browser. Very large PDFs (50MB+) may take longer depending on your device speed and the number of pages.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PDF Compressor",
    url: SITE_URL,
    contactPoint: {
      "@type": "ContactPoint",
      email: "bqtools92@gmail.com",
      contactType: "customer service",
    },
  },
];

export default function Home() {
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
            Compress any PDF in seconds — right in your browser. No uploads, no privacy risk,
            no limits. Perfect for WhatsApp, email, and cloud storage.
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-12">
          <CompressTool />

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
                Optimize your LinkedIn profile while you're at it →
              </p>
              <a
                href="https://linkedin-optimizer-livid.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm underline"
              >
                Free LinkedIn Profile Optimizer
              </a>
            </div>
          </div>

          {/* Use case links — internal pSEO hub */}
          <div className="mt-10 bg-white border rounded-2xl p-6">
            <h2 className="font-bold text-gray-900 mb-4 text-lg">Common PDF Compression Use Cases</h2>
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
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-blue-600 hover:underline py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              How to Compress a PDF — 3 Steps
            </h2>
            <p className="text-center text-gray-500 text-sm mb-8">
              Entirely in your browser. No account, no upload, no wait.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border p-6 text-center">
                <div className="text-3xl mb-3">📂</div>
                <h3 className="font-bold text-gray-900 mb-2">1. Upload Your PDF</h3>
                <p className="text-sm text-gray-500">
                  Drop your PDF or click to browse. Any size, any number of pages.
                  Your file never leaves your device.
                </p>
              </div>
              <div className="bg-white rounded-2xl border p-6 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-gray-900 mb-2">2. Choose Compression</h3>
                <p className="text-sm text-gray-500">
                  Pick your compression level. Balanced works great for WhatsApp, email,
                  and cloud storage without visible quality loss.
                </p>
              </div>
              <div className="bg-white rounded-2xl border p-6 text-center">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-bold text-gray-900 mb-2">3. Download</h3>
                <p className="text-sm text-gray-500">
                  See your file size savings and download the compressed PDF instantly.
                  No email required.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Frequently Asked Questions — PDF Compressor
            </h2>
            {[
              {
                q: "Is this PDF compressor really free?",
                a: "Yes, completely free. No signup, no email, no payment. The tool runs entirely in your browser using JavaScript and requires no server.",
              },
              {
                q: "Is my PDF safe? Does it get uploaded anywhere?",
                a: "Your file never leaves your device. All compression happens locally in your browser. We have no server that receives your PDF — it is 100% private.",
              },
              {
                q: "How much will my PDF shrink?",
                a: "PDF files with images typically compress 50–80%. Text-only PDFs compress 20–40%. The tool shows exact before and after file size so you always know your savings.",
              },
              {
                q: "Can I compress a PDF for WhatsApp?",
                a: "Yes. WhatsApp allows PDF attachments up to 100MB. Use the Balanced or Maximum compression setting to reduce your PDF size before sending. The compressed PDF will look visually identical on most screens.",
              },
              {
                q: "Will the compressed PDF look different?",
                a: "The visual layout is preserved. Compression converts pages to high-quality images, so text appears very slightly softer at maximum zoom. For WhatsApp, email, or screen viewing, the difference is not noticeable.",
              },
              {
                q: "Can I still copy text from the compressed PDF?",
                a: "The compressed PDF is image-based, so text is not directly selectable or searchable. If you need a searchable PDF, use the Best Quality setting.",
              },
              {
                q: "What is the file size limit?",
                a: "There is no server-side limit because everything runs in your browser. Very large PDFs (50MB+) may take longer depending on your device speed.",
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
