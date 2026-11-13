import { Metadata } from "next";
import Script from "next/script";
import DuplicateLineRemoverClient from "./duplicate-line-remover-client";
import { CheckCircle2, Code2 } from "lucide-react";
import Link from "next/link";
import { AffiliateBanner, AffiliateLink } from "@/components/affiliate-banner";

export const metadata: Metadata = {
  title: "Duplicate Line Remover - Remove Duplicate Text Online",
  description: "Free online tool to easily remove duplicate lines from your text or list. Sort output and ignore case sensitivity automatically.",
  alternates: {
    canonical: "/tools/duplicate-line-remover",
  },
  openGraph: {
    title: "Duplicate Line Remover Tool",
    description: "Instantly clean up lists by removing duplicate lines online.",
    url: "/tools/duplicate-line-remover",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Duplicate Line Remover Tool",
  "operatingSystem": "All",
  "applicationCategory": "UtilitiesApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A free online tool to remove duplicate lines from text and lists."
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://text-tools-swart.vercel.app/" },
    { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://text-tools-swart.vercel.app/tools" },
    { "@type": "ListItem", "position": 3, "name": "Duplicate Line Remover", "item": "https://text-tools-swart.vercel.app/tools/duplicate-line-remover" }
  ]
};

export default function DuplicateLineRemoverPage() {
  return (
    <>
      <Script id="dupelineremover-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="dupelineremover-breadcrumb" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
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
                  <span className="text-foreground font-medium">Duplicate Line Remover</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Duplicate Line Remover</h1>
          <p className="text-muted-foreground">Remove duplicate lines from your text, sort them, and easily clean up lists.</p>
        </div>

        {/* Client Tool Component */}
        <div className="mb-8">
          <DuplicateLineRemoverClient />
        </div>

        <AffiliateBanner
          title="Code smarter, not harder"
          description="Remove duplicates easily here, but write code faster with AI-powered editors."
          icon={<Code2 className="h-6 w-6" />}
          colorScheme="purple"
        >
          <AffiliateLink href="https://marketplace.visualstudio.com/" variant="secondary">VS Code Extensions</AffiliateLink>
          <AffiliateLink href="https://cursor.com/" variant="primary">Cursor AI</AffiliateLink>
        </AffiliateBanner>

        {/* SEO Content Section */}
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">What is a Duplicate Line Remover?</h2>
          <p className="mb-6 leading-relaxed">
            When combining multiple lists, exporting data, or copying large amounts of text, you often end up with duplicate entries. Finding and removing these duplicates manually can take hours. Our free online duplicate line remover automates this process instantly.
          </p>

          <h3 className="text-xl font-semibold mb-4">Features Included</h3>
          <ul className="space-y-2 mb-8 list-none pl-0">
            {[
              "Remove Duplicate Lines: Automatically keeps only the first unique instance of every line.",
              "Ignore Case: Optionally treat 'Apple' and 'apple' as the exact same line.",
              "Sort Output: Automatically alphabetize your cleaned list.",
              "Real-time processing: The output updates as soon as you change options.",
            ].map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}
