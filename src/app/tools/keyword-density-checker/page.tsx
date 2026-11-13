import { Metadata } from "next";
import Script from "next/script";
import KeywordDensityClient from "./keyword-density-client";
import { CheckCircle2, Search } from "lucide-react";
import Link from "next/link";
import { AffiliateBanner, AffiliateLink } from "@/components/affiliate-banner";

export const metadata: Metadata = {
  title: "Keyword Density Checker - Analyze Keyword Frequency & SEO",
  description:
    "Free keyword density checker. Paste your content and see the top keywords, their count, and density percentage to optimize for SEO.",
  alternates: { canonical: "/tools/keyword-density-checker" },
  openGraph: {
    title: "Keyword Density Checker — TextForge",
    description: "Analyze keyword frequency and density for better SEO.",
    url: "/tools/keyword-density-checker",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://text-tools-swart.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://text-tools-swart.vercel.app/tools" },
    { "@type": "ListItem", position: 3, name: "Keyword Density Checker", item: "https://text-tools-swart.vercel.app/tools/keyword-density-checker" },
  ],
};

export default function KeywordDensityCheckerPage() {
  return (
    <>
      <Script id="keyworddensity-breadcrumb" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        <div className="mb-8">
          <nav className="flex text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><div className="flex items-center"><span className="mx-2">/</span><Link href="/tools" className="hover:text-primary">Tools</Link></div></li>
              <li aria-current="page"><div className="flex items-center"><span className="mx-2">/</span><span className="text-foreground font-medium">Keyword Density Checker</span></div></li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Keyword Density Checker</h1>
          <p className="text-muted-foreground">Analyze the frequency and density of keywords in your content for better SEO.</p>
        </div>

        <div className="mb-8"><KeywordDensityClient /></div>

        <AffiliateBanner
          title="Dominate Search Rankings"
          description="Analyze keyword density here, and use professional SEO tools for deeper insights."
          icon={<Search className="h-6 w-6" />}
          colorScheme="green"
        >
          <AffiliateLink href="https://www.semrush.com/" variant="secondary">Semrush</AffiliateLink>
          <AffiliateLink href="https://ahrefs.com/" variant="secondary">Ahrefs</AffiliateLink>
          <AffiliateLink href="https://seranking.com/" variant="primary">SE Ranking</AffiliateLink>
        </AffiliateBanner>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">What Is Keyword Density?</h2>
          <p className="mb-6 leading-relaxed">
            Keyword density is the percentage of times a keyword or phrase appears in a piece of content compared to the total word count. Search engines use this metric — among many others — to understand the topic of a page. A keyword density between 1 % and 3 % is generally considered healthy; anything higher may look like keyword stuffing to Google.
          </p>
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <ul className="space-y-2 mb-8 list-none pl-0">
            {[
              "Extracts and ranks the top keywords automatically.",
              "Shows count and density percentage for each keyword.",
              "Supports single-word (1-gram) analysis.",
              "Copy the full report to your clipboard.",
            ].map((f, i) => (
              <li key={i} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" /><span>{f}</span></li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}
