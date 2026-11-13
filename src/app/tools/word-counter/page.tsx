import { Metadata } from "next";
import Script from "next/script";
import WordCounterClient from "./word-counter-client";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { GrammarlyAffiliate } from "@/components/grammarly-affiliate";

export const metadata: Metadata = {
  title: "Free Online Word Counter - Character & Word Count Tool",
  description: "Count words, characters, sentences, and paragraphs in real-time. Find out reading and speaking time instantly. 100% free online word counter tool.",
  alternates: {
    canonical: "/tools/word-counter",
  },
  openGraph: {
    title: "Free Online Word Counter",
    description: "Real-time word and character counting tool for writers and SEOs.",
    url: "/tools/word-counter",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Word Counter Tool",
  "operatingSystem": "All",
  "applicationCategory": "UtilitiesApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A free online tool to count words, characters, sentences, and calculate reading time."
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://text-tools-swart.vercel.app/" },
    { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://text-tools-swart.vercel.app/tools" },
    { "@type": "ListItem", "position": 3, "name": "Word Counter", "item": "https://text-tools-swart.vercel.app/tools/word-counter" }
  ]
};

export default function WordCounterPage() {
  return (
    <>
      <Script id="wordcounter-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="wordcounter-breadcrumb" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
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
                  <span className="text-foreground font-medium">Word Counter</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Word Counter</h1>
          <p className="text-muted-foreground">Instantly count words, characters, sentences, and paragraphs.</p>
        </div>

        {/* Client Tool Component */}
        <div className="mb-8">
          <WordCounterClient />
        </div>

        <GrammarlyAffiliate />

        {/* SEO Content Section */}
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">What is a Word Counter?</h2>
          <p className="mb-6 leading-relaxed">
            Our free online word counter is a comprehensive tool designed for writers, students, SEO professionals, and content creators. It provides real-time statistics about your text, ensuring you meet strict word count limits or character requirements for essays, social media posts, and blog articles.
          </p>

          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="space-y-2 mb-8 list-none pl-0">
            {[
              "Real-time word and character counting.",
              "Calculates characters with and without spaces.",
              "Provides accurate paragraph and sentence counts.",
              "Estimates reading and speaking times.",
              "Works entirely in your browser - no data is sent to our servers."
            ].map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-4">How to Use the Word Counter</h3>
          <ol className="list-decimal pl-6 mb-8 space-y-2">
            <li>Simply type or paste your text into the large text area above.</li>
            <li>Watch as the statistics update instantly in real-time.</li>
            <li>Use the "Copy" button to copy your text to the clipboard.</li>
            <li>Use the "Clear" button to reset the text area and start over.</li>
          </ol>

          <h3 className="text-xl font-semibold mb-4">Why is Word Count Important?</h3>
          <p className="mb-6 leading-relaxed">
            Different platforms have different requirements. For example, Twitter has a strict character limit, while SEO best practices often suggest blog posts should be over 1,000 words. Knowing your exact word and character count helps you tailor your content for its intended platform and audience.
          </p>

          <div className="bg-muted p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions (FAQ)</h3>
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-medium">Is this tool free?</h4>
                <p className="text-muted-foreground text-sm">Yes, our word counter is 100% free to use with no hidden costs or subscriptions.</p>
              </div>
              <div>
                <h4 className="font-medium">Is my data secure?</h4>
                <p className="text-muted-foreground text-sm">Absolutely. All processing is done locally in your browser (client-side). We do not store or transmit your text.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
