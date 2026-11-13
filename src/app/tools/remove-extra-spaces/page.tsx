import { Metadata } from "next";
import Script from "next/script";
import RemoveExtraSpacesClient from "./remove-extra-spaces-client";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remove Extra Spaces - Clean Up Text Format Tool",
  description: "Free online tool to remove extra spaces, empty lines, and tabs from your text. Clean up formatting instantly.",
  alternates: {
    canonical: "/tools/remove-extra-spaces",
  },
  openGraph: {
    title: "Remove Extra Spaces Tool",
    description: "Easily remove multiple spaces and empty lines to clean up your text.",
    url: "/tools/remove-extra-spaces",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Remove Extra Spaces Tool",
  "operatingSystem": "All",
  "applicationCategory": "UtilitiesApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A free online tool to clean up text formatting by removing extra spaces and empty lines."
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://text-tools-swart.vercel.app/" },
    { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://text-tools-swart.vercel.app/tools" },
    { "@type": "ListItem", "position": 3, "name": "Remove Extra Spaces", "item": "https://text-tools-swart.vercel.app/tools/remove-extra-spaces" }
  ]
};

export default function RemoveExtraSpacesPage() {
  return (
    <>
      <Script id="removeextraspaces-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="removeextraspaces-breadcrumb" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
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
                  <span className="text-foreground font-medium">Remove Extra Spaces</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Remove Extra Spaces</h1>
          <p className="text-muted-foreground">Clean up your text by removing multiple spaces, empty lines, and tabs.</p>
        </div>

        {/* Client Tool Component */}
        <div className="mb-16">
          <RemoveExtraSpacesClient />
        </div>

        {/* SEO Content Section */}
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Why Remove Extra Spaces?</h2>
          <p className="mb-6 leading-relaxed">
            When copying text from PDFs, websites, or old documents, you often end up with irregular formatting, including double spaces, extra tabs, and unnecessary line breaks. Our free "Remove Extra Spaces" tool cleans up your text instantly, making it ready for publishing or professional use.
          </p>

          <h3 className="text-xl font-semibold mb-4">Features Included</h3>
          <ul className="space-y-2 mb-8 list-none pl-0">
            {[
              "Remove Multiple Spaces: Converts double or triple spaces into a single space.",
              "Remove Empty Lines: Deletes unnecessary line breaks and blank lines.",
              "Remove Tabs: Strips out tab characters to normalize indentation.",
              "Real-time processing: See the cleaned text immediately.",
            ].map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-4">How to Use</h3>
          <ol className="list-decimal pl-6 mb-8 space-y-2">
            <li>Paste your messy text into the input field above.</li>
            <li>Select the specific formatting issues you want to fix (e.g., "Remove Empty Lines").</li>
            <li>Click the "Clean Text" button to instantly format your content.</li>
            <li>Copy the cleaned result or download it as a text file.</li>
          </ol>
        </article>
      </div>
    </>
  );
}
