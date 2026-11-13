import { Metadata } from "next";
import Script from "next/script";
import ReadingTimeClient from "./reading-time-client";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { GrammarlyAffiliate } from "@/components/grammarly-affiliate";

export const metadata: Metadata = {
  title: "Reading Time Calculator - Estimate Read & Speak Duration",
  description:
    "Paste any text and instantly estimate how long it will take to read or speak it aloud. Based on scientifically-backed average reading speeds.",
  alternates: { canonical: "/tools/reading-time-calculator" },
  openGraph: {
    title: "Reading Time Calculator — TextForge",
    description: "Estimate reading and speaking time for any text.",
    url: "/tools/reading-time-calculator",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://texttools.com/" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://texttools.com/tools" },
    { "@type": "ListItem", position: 3, name: "Reading Time Calculator", item: "https://texttools.com/tools/reading-time-calculator" },
  ],
};

export default function ReadingTimeCalculatorPage() {
  return (
    <>
      <Script id="readingtime-breadcrumb" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        <div className="mb-8">
          <nav className="flex text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><div className="flex items-center"><span className="mx-2">/</span><Link href="/tools" className="hover:text-primary">Tools</Link></div></li>
              <li aria-current="page"><div className="flex items-center"><span className="mx-2">/</span><span className="text-foreground font-medium">Reading Time Calculator</span></div></li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Reading Time Calculator</h1>
          <p className="text-muted-foreground">Find out exactly how long it takes to read or speak your text.</p>
        </div>

        <div className="mb-8"><ReadingTimeClient /></div>

        <GrammarlyAffiliate />

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Why Reading Time Matters</h2>
          <p className="mb-6 leading-relaxed">
            Platforms like Medium display estimated reading time because it sets reader expectations and increases engagement. If readers know an article is a 5-minute read, they're more likely to commit. Our reading time calculator uses the same industry-standard averages (238 wpm for reading, 183 wpm for speaking) so you can plan your content precisely.
          </p>
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <ul className="space-y-2 mb-8 list-none pl-0">
            {["Estimated reading time based on 238 words per minute.", "Estimated speaking time for presentations at 183 wpm.", "Real-time word count alongside the time estimates.", "Completely client-side — your text stays private."].map((f, i) => (
              <li key={i} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" /><span>{f}</span></li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}
