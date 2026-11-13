import { Metadata } from "next";
import Script from "next/script";
import CharacterCounterClient from "./character-counter-client";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { GrammarlyAffiliate } from "@/components/grammarly-affiliate";

export const metadata: Metadata = {
  title: "Free Character Counter - Live Letter Count Tool",
  description: "Count characters in your text instantly. Real-time character counter with and without spaces, and a maximum length indicator.",
  alternates: {
    canonical: "/tools/character-counter",
  },
  openGraph: {
    title: "Free Character Counter Tool",
    description: "Live character count tool for Twitter, SMS, and SEO meta tags.",
    url: "/tools/character-counter",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Character Counter Tool",
  "operatingSystem": "All",
  "applicationCategory": "UtilitiesApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A free online tool to count characters with and without spaces instantly."
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://text-tools-swart.vercel.app/" },
    { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://text-tools-swart.vercel.app/tools" },
    { "@type": "ListItem", "position": 3, "name": "Character Counter", "item": "https://text-tools-swart.vercel.app/tools/character-counter" }
  ]
};

export default function CharacterCounterPage() {
  return (
    <>
      <Script id="charcounter-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="charcounter-breadcrumb" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
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
                  <span className="text-foreground font-medium">Character Counter</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Character Counter</h1>
          <p className="text-muted-foreground">Instantly count characters and monitor text length limits.</p>
        </div>

        {/* Client Tool Component */}
        <div className="mb-8">
          <CharacterCounterClient />
        </div>

        <GrammarlyAffiliate />

        {/* SEO Content Section */}
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">What is a Character Counter?</h2>
          <p className="mb-6 leading-relaxed">
            Our free online character counter is designed to help you quickly determine the exact length of your text. Whether you are writing a tweet, filling out an application form, or optimizing SEO meta tags, knowing your character count is essential.
          </p>

          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="space-y-2 mb-8 list-none pl-0">
            {[
              "Live Character Count: Updates as you type.",
              "Characters Without Spaces: Accurate metric for specific formatting requirements.",
              "Maximum Length Indicator: Set a limit and see how many characters you have left.",
              "Privacy First: All counting is done in your browser.",
            ].map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-4">Common Character Limits</h3>
          <p className="mb-6 leading-relaxed">
            Different platforms impose different character limits to ensure concise communication. For instance:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Twitter:</strong> 280 characters</li>
            <li><strong>SMS Text Message:</strong> 160 characters</li>
            <li><strong>SEO Meta Title:</strong> Typically 50-60 characters</li>
            <li><strong>SEO Meta Description:</strong> Typically 150-160 characters</li>
            <li><strong>LinkedIn Summary:</strong> 2,600 characters</li>
          </ul>

          <div className="bg-muted p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions (FAQ)</h3>
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-medium">Does the tool count punctuation as characters?</h4>
                <p className="text-muted-foreground text-sm">Yes, punctuation marks (commas, periods, exclamation points, etc.) are all counted as characters.</p>
              </div>
              <div>
                <h4 className="font-medium">Are spaces counted as characters?</h4>
                <p className="text-muted-foreground text-sm">Yes, by default spaces are counted. However, we also provide a "Characters Without Spaces" metric for your convenience.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
