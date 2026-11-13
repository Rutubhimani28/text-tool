import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Shield,
  Zap,
  Users,
  Globe,
  Code2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About TextForge - Our Mission, Team & Privacy Commitment",
  description:
    "TextForge is a free, open-source suite of 30+ text utilities built by a team of developers and writers. Learn about our mission, privacy-first architecture, and commitment to quality.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About TextForge — Free, Private, Open Text Utilities",
    description:
      "Built by developers for everyone. Learn about the team and mission behind TextForge.",
    url: "/about",
    type: "website",
    siteName: "TextForge",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(240,248,255,1)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(20,20,25,1)_0%,rgba(10,10,15,1)_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-[100%] bg-gradient-to-tr from-blue-500/10 via-violet-500/10 to-pink-500/10 blur-[120px] -z-10 opacity-80" />

        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              TextForge
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We are building the internet&apos;s fastest, most secure, and
            completely free text processing platform — trusted by thousands of
            writers, developers, and students worldwide.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 border-y border-border bg-muted/30">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">30+</p>
              <p className="text-sm text-muted-foreground mt-1">
                Free Text Tools
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">
                Client-Side Processing
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground mt-1">
                Data Stored on Servers
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">2024</p>
              <p className="text-sm text-muted-foreground mt-1">
                Year Launched
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Our Story</h2>
            <p>
              TextForge was founded in 2024 by a small team of web developers
              and content professionals who were frustrated by the state of
              online text utilities. Every free tool we tried was either buried
              under layers of intrusive advertising, required unnecessary account
              registration, or — most concerning of all — transmitted our
              sensitive text data to unknown servers for processing.
            </p>
            <p>
              We set out to build something better: a comprehensive, beautifully
              designed suite of text tools that runs entirely in the user&apos;s
              browser. No server-side processing, no data collection, no
              tracking cookies, and no paywalls. Just fast, reliable utilities
              that respect your privacy and get out of your way so you can focus
              on your work.
            </p>

            {/* Values Cards */}
            <div className="grid sm:grid-cols-3 gap-8 my-12 not-prose">
              <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-lg shadow-blue-500/5 hover:-translate-y-1 transition-transform">
                <div className="mx-auto w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">
                  Everything runs directly in your browser. Zero server latency
                  means instant results.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-lg shadow-blue-500/5 hover:-translate-y-1 transition-transform">
                <div className="mx-auto w-12 h-12 bg-violet-500/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">100% Private</h3>
                <p className="text-sm text-muted-foreground">
                  Your data never leaves your device. We physically cannot see,
                  store, or access your text.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-lg shadow-blue-500/5 hover:-translate-y-1 transition-transform">
                <div className="mx-auto w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Always Free</h3>
                <p className="text-sm text-muted-foreground">
                  No premium tiers, no hidden fees, no sign-ups. Every tool is
                  free forever.
                </p>
              </div>
            </div>

            <h2>Why Client-Side Architecture Matters</h2>
            <p>
              Privacy is not just a feature — it is a fundamental right. When you
              paste confidential business emails, proprietary source code, or
              sensitive legal documents into an online tool, you need an absolute
              guarantee that your data is safe. Most traditional web utilities
              send your text to a remote server for processing, introducing
              significant security risks.
            </p>
            <p>
              TextForge is built with modern Web APIs and advanced JavaScript
              frameworks. Every single calculation — from complex word counting
              algorithms to intensive duplicate line removal — happens locally on
              your own machine. Your text data never leaves your device, is never
              transmitted over the internet, and is never saved to any database.
              Once you close your browser tab, the data is completely and
              permanently gone.
            </p>

            <h2>Our Team & Expertise</h2>
            <p>
              TextForge is maintained by a dedicated team of full-stack
              developers, UX designers, and technical writers with combined
              experience spanning web development, content strategy, and
              developer tooling. Our engineering team has built production
              software used by thousands of users and brings that same standard
              of quality to every tool in the TextForge suite.
            </p>
            <p>
              We follow industry best practices in web performance optimization,
              accessibility standards (WCAG 2.1), and responsive design. Our
              codebase uses Next.js, React, and TypeScript — battle-tested
              technologies trusted by companies like Netflix, Uber, and Airbnb.
              Every tool undergoes rigorous testing to ensure accuracy and
              reliability across all modern browsers and devices.
            </p>

            {/* Team Expertise Cards */}
            <div className="grid sm:grid-cols-3 gap-6 my-12 not-prose">
              <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <Code2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">
                    Modern Tech Stack
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Built with Next.js, React 18, TypeScript, and Tailwind CSS
                    for maximum performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <Users className="h-5 w-5 text-violet-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">
                    User-Centered Design
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Interfaces tested with real users for accessibility and ease
                    of use.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <Globe className="h-5 w-5 text-pink-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">
                    Global Availability
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Deployed on Vercel&apos;s edge network for fast access from
                    anywhere in the world.
                  </p>
                </div>
              </div>
            </div>

            <h2>A Tool for Every Professional</h2>
            <p>
              Text processing is a universal requirement across countless
              professions. A student writing a dissertation needs accurate word
              and character counters to meet strict guidelines. A software
              engineer needs to quickly convert variable names between different
              case formats. A data analyst relies on tools to remove duplicate
              lines and strip unnecessary whitespace from massive datasets.
            </p>
            <p>
              TextForge brings all of these utilities under one cohesive,
              easy-to-use platform. Our suite currently includes over 30 tools
              spanning text analysis, formatting, transformation, generation, and
              data extraction. We are continuously developing new features based
              on user feedback and emerging needs in the writing and development
              communities.
            </p>

            <h2>Our Commitment to Quality</h2>
            <p>
              Great software should function flawlessly and be a joy to use. We
              invest heavily in creating intuitive, accessible, and visually
              polished interfaces. From carefully selected color palettes to
              smooth micro-animations, every element of TextForge is crafted to
              provide a premium experience. We believe that free tools do not
              have to look or feel cheap.
            </p>
            <p>
              Our platform is fully responsive — whether you access TextForge
              from a desktop workstation, a laptop at a coffee shop, or a
              smartphone during your commute, the interface adapts seamlessly.
              Accessibility is woven into our design philosophy, ensuring that
              everyone can leverage the power of our utilities regardless of
              device or ability.
            </p>

            <h2>Looking to the Future</h2>
            <p>
              The digital landscape is constantly evolving, and so are we. We are
              actively researching and developing new tools that leverage the
              latest advancements in web technology, including enhanced text
              analysis, improved code formatting utilities, and smarter content
              optimization features. Our ultimate goal is to build the most
              comprehensive, reliable, and user-friendly suite of text utilities
              on the internet.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Ready to explore our tools?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Browse our complete collection of free, privacy-first text
            utilities. No sign-up required — start using them instantly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Browse All Tools <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted transition-colors"
            >
              Read Our Blog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
