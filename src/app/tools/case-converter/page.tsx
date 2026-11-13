import { Metadata } from "next";
import Script from "next/script";
import CaseConverterClient from "./case-converter-client";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { GrammarlyAffiliate } from "@/components/grammarly-affiliate";

export const metadata: Metadata = {
  title: "Case Converter - Change Text to Uppercase, Lowercase & Title Case",
  description: "Free online case converter. Easily change your text to UPPERCASE, lowercase, Title Case, Sentence case, and Capitalize Each Word instantly.",
  alternates: {
    canonical: "/tools/case-converter",
  },
  openGraph: {
    title: "Case Converter Tool",
    description: "Instantly convert your text case online for free.",
    url: "/tools/case-converter",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Case Converter Tool",
  "operatingSystem": "All",
  "applicationCategory": "UtilitiesApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A free online tool to convert text case between uppercase, lowercase, title case, and more."
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://text-tools-swart.vercel.app/" },
    { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://text-tools-swart.vercel.app/tools" },
    { "@type": "ListItem", "position": 3, "name": "Case Converter", "item": "https://text-tools-swart.vercel.app/tools/case-converter" }
  ]
};

export default function CaseConverterPage() {
  return (
    <>
      <Script id="caseconverter-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="caseconverter-breadcrumb" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        {/* Tool Header */}
        <div className="mb-8">
          <nav className="flex text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-primary">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <Link href="/tools" className="hover:text-primary">Tools</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-foreground font-medium">Case Converter</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Case Converter</h1>
          <p className="text-muted-foreground">Easily switch text between uppercase, lowercase, title case, and more.</p>
        </div>

        {/* Client Tool Component */}
        <div className="mb-8">
          <CaseConverterClient />
        </div>

        <GrammarlyAffiliate />

        {/* SEO Content Section */}
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">What is a Case Converter?</h2>
          <p className="mb-6 leading-relaxed">
            Have you ever accidentally left the caps lock on while typing a long document? Instead of deleting and retyping everything, our free Case Converter tool allows you to instantly transform your text into the correct casing format.
          </p>

          <h3 className="text-xl font-semibold mb-4">Supported Conversions</h3>
          <ul className="space-y-4 mb-8 list-none pl-0">
            {[
              { title: "Sentence case", desc: "Capitalizes the first letter of each sentence and makes the rest lowercase." },
              { title: "lowercase", desc: "Converts all letters in your text to lowercase." },
              { title: "UPPERCASE", desc: "Converts all letters in your text to uppercase letters." },
              { title: "Capitalize Each Word", desc: "Capitalizes the first letter of every word (often called Title Case)." },
              { title: "tOGGLE cASE", desc: "Inverts the casing of each individual letter." },
            ].map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-foreground">{feature.title}</strong>
                  <span className="text-muted-foreground">{feature.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}
