import Link from "next/link";
import {
  Search,
  ArrowRight,
  Zap,
  Shield,
  Sparkles,
  CheckCircle2,
  Star,
  Clock,
  Globe,
  Layers,
  ChevronDown,
  ChevronUp,
  Type,
  AlignLeft,
  CaseSensitive,
  FileText,
  Columns2,
  BookOpen,
  BarChart3,
  Code2,
  Trash2,
  List,
  ArrowDownUp,
  Shuffle,
  RotateCcw,
  Repeat,
  Mail,
  Link2,
  Hash,
  Smile,
  Scissors,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { TypingGame } from "@/components/typing-game";
import { ToolSearch } from "@/components/tool-search";
import { GoogleAd } from "@/components/google-ad";
import { FloatingToolsGraphic } from "@/components/floating-tools-graphic";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const allTools = [
  {
    name: "Word Counter",
    href: "/tools/word-counter",
    desc: "Count words, characters, sentences, paragraphs and get reading & speaking time — all in real-time.",
    icon: Type,
    isNew: false,
  },
  {
    name: "Character Counter",
    href: "/tools/character-counter",
    desc: "Live character count with a max-length indicator, perfect for Twitter, SMS, and SEO meta tags.",
    icon: AlignLeft,
    isNew: false,
  },
  {
    name: "Case Converter",
    href: "/tools/case-converter",
    desc: "Instantly convert text to UPPERCASE, lowercase, Title Case, Sentence case, or tOGGLE cASE.",
    icon: CaseSensitive,
    isNew: false,
  },
  {
    name: "Remove Extra Spaces",
    href: "/tools/remove-extra-spaces",
    desc: "Clean up messy text by removing duplicate spaces, empty lines, and tab characters.",
    icon: Trash2,
    isNew: false,
  },
  {
    name: "Duplicate Line Remover",
    href: "/tools/duplicate-line-remover",
    desc: "Remove duplicate entries from lists or data with optional case-insensitive and sort options.",
    icon: Layers,
    isNew: true,
  },
  {
    name: "Text Compare",
    href: "/tools/text-compare",
    desc: "Compare two blocks of text side-by-side and see exactly what changed between them.",
    icon: Columns2,
    isNew: true,
  },
  {
    name: "Reading Time Calculator",
    href: "/tools/reading-time-calculator",
    desc: "Estimate how long it takes to read or speak any block of text accurately.",
    icon: BookOpen,
    isNew: true,
  },
  {
    name: "Keyword Density Checker",
    href: "/tools/keyword-density-checker",
    desc: "Analyze keyword frequency and density to optimize your content for SEO.",
    icon: BarChart3,
    isNew: true,
  },
  {
    name: "Markdown Preview",
    href: "/tools/markdown-preview",
    desc: "Write Markdown and preview the rendered HTML live. Export or copy with one click.",
    icon: Code2,
    isNew: true,
  },
  {
    name: "Sentence Counter",
    href: "/tools/sentence-counter",
    desc: "Count sentences quickly and improve text readability.",
    icon: FileText,
    isNew: true,
  },
  {
    name: "Paragraph Counter",
    href: "/tools/paragraph-counter",
    desc: "Count paragraphs instantly to verify structure and flow.",
    icon: FileText,
    isNew: true,
  },
  {
    name: "Speaking Time Calculator",
    href: "/tools/speaking-time-calculator",
    desc: "Estimate how long your text will take to speak aloud with professional pacing.",
    icon: Clock,
    isNew: true,
  },
  {
    name: "Text Statistics",
    href: "/tools/text-statistics",
    desc: "View detailed text metrics such as character counts, density, and structure.",
    icon: BarChart3,
    isNew: true,
  },
  {
    name: "Random Text Generator",
    href: "/tools/random-text-generator",
    desc: "Generate random placeholder text for demos, testing, or creative prompts.",
    icon: Sparkles,
    isNew: true,
  },
  {
    name: "Lorem Ipsum Generator",
    href: "/tools/lorem-ipsum-generator",
    desc: "Create classic Lorem Ipsum placeholder text for design mockups and layouts.",
    icon: BookOpen,
    isNew: true,
  },
  {
    name: "Remove Empty Lines",
    href: "/tools/remove-empty-lines",
    desc: "Delete blank lines and keep your text compact and tidy.",
    icon: Trash2,
    isNew: true,
  },
  {
    name: "Remove Line Breaks",
    href: "/tools/remove-line-breaks",
    desc: "Convert multiline text into a single line or normalize line breaks.",
    icon: AlignLeft,
    isNew: true,
  },
  {
    name: "Sort Lines (A-Z / Z-A)",
    href: "/tools/sort-lines",
    desc: "Sort each line alphabetically in ascending or descending order.",
    icon: ArrowDownUp,
    isNew: true,
  },
  {
    name: "Reverse Text",
    href: "/tools/reverse-text",
    desc: "Reverse the order of characters in your text instantly.",
    icon: RotateCcw,
    isNew: true,
  },
  {
    name: "Reverse Words",
    href: "/tools/reverse-words",
    desc: "Reverse the word order in your text with one click.",
    icon: Repeat,
    isNew: true,
  },
  {
    name: "Shuffle Text",
    href: "/tools/shuffle-text",
    desc: "Randomize words or lines to create fresh text variations.",
    icon: Shuffle,
    isNew: true,
  },
  {
    name: "Trim Text",
    href: "/tools/trim-text",
    desc: "Remove leading and trailing whitespace from your text quickly.",
    icon: Scissors,
    isNew: true,
  },
  {
    name: "Find & Replace Text",
    href: "/tools/find-and-replace",
    desc: "Search for text and replace it anywhere in your document.",
    icon: Search,
    isNew: true,
  },
  {
    name: "Text Splitter",
    href: "/tools/text-splitter",
    desc: "Split text into chunks by line, sentence, or custom delimiter.",
    icon: Columns2,
    isNew: true,
  },
  {
    name: "Text Joiner",
    href: "/tools/text-joiner",
    desc: "Join lines or phrases together with custom separators.",
    icon: Layers,
    isNew: true,
  },
  {
    name: "Alphabetical Sort",
    href: "/tools/alphabetical-sort",
    desc: "Sort text alphabetically for easy organization and comparison.",
    icon: ArrowDownUp,
    isNew: true,
  },
  {
    name: "Number Lines",
    href: "/tools/number-lines",
    desc: "Add line numbers to your text for reference or code samples.",
    icon: List,
    isNew: true,
  },
  {
    name: "Remove Numbers",
    href: "/tools/remove-numbers",
    desc: "Strip digits from your text to clean up formatting.",
    icon: Hash,
    isNew: true,
  },
  {
    name: "Remove Special Characters",
    href: "/tools/remove-special-characters",
    desc: "Remove punctuation and symbol characters from your content.",
    icon: Code2,
    isNew: true,
  },
  {
    name: "Remove Emojis",
    href: "/tools/remove-emojis",
    desc: "Remove emoji characters to keep your text plain and readable.",
    icon: Smile,
    isNew: true,
  },
  {
    name: "Extract Emails",
    href: "/tools/extract-emails",
    desc: "Find and extract all email addresses from any text block.",
    icon: Mail,
    isNew: true,
  },
  {
    name: "Extract URLs",
    href: "/tools/extract-urls",
    desc: "Extract links from text so you can review or re-use them.",
    icon: Link2,
    isNew: true,
  },
];

const categories = [
  {
    name: "Writing & Analysis",
    desc: "Word Counter, Character Counter, Reading & Speaking Time, Sentences",
    count: 7,
    icon: Type,
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    border: "border-blue-500/20 hover:border-blue-500/50",
    iconColor: "text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
  },
  {
    name: "Formatting & Cleanup",
    desc: "Remove Spaces, Duplicate Remover, Trim Text, Remove Emojis & Numbers",
    count: 9,
    icon: Trash2,
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300",
  },
  {
    name: "Transformations & Sorting",
    desc: "Sort Lines, Reverse Text & Words, Shuffle, Text Splitter & Joiner",
    count: 9,
    icon: ArrowDownUp,
    gradient: "from-purple-500/10 via-violet-500/5 to-transparent",
    border: "border-purple-500/20 hover:border-purple-500/50",
    iconColor: "text-purple-600 dark:text-purple-400",
    badgeBg: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
  },
  {
    name: "SEO & Extraction",
    desc: "Keyword Density Checker, Extract Emails, Extract URLs",
    count: 3,
    icon: BarChart3,
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    border: "border-amber-500/20 hover:border-amber-500/50",
    iconColor: "text-amber-600 dark:text-amber-400",
    badgeBg: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
  },
  {
    name: "Developer Tools",
    desc: "Markdown Live Preview, Side-by-Side Text Compare",
    count: 2,
    icon: Code2,
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    badgeBg: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300",
  },
  {
    name: "Generators",
    desc: "Lorem Ipsum Generator, Random Text Generator",
    count: 2,
    icon: Sparkles,
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    border: "border-pink-500/20 hover:border-pink-500/50",
    iconColor: "text-pink-600 dark:text-pink-400",
    badgeBg: "bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300",
  },
];

const features = [
  {
    title: "Lightning Fast",
    desc: "Every tool runs 100 % in your browser. Zero server round-trips means zero waiting.",
    icon: Zap,
  },
  {
    title: "Privacy First",
    desc: "Your text never leaves your device. We don't store, transmit, or even see your data.",
    icon: Shield,
  },
  {
    title: "Beautiful & Modern",
    desc: "A clean, minimal interface with dark mode, responsive layouts, and smooth micro-animations.",
    icon: Sparkles,
  },
  {
    title: "Works Everywhere",
    desc: "Phone, tablet, laptop, or desktop — TextTools adapts perfectly to every screen size.",
    icon: Globe,
  },
  {
    title: "No Sign-Up Required",
    desc: "Just open the tool and start working. No accounts, no ads, no distractions.",
    icon: CheckCircle2,
  },
  {
    title: "Always Free",
    desc: "All 9+ tools are completely free with no hidden paywalls or premium tiers.",
    icon: Star,
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Content Writer",
    text: "TextTools has become my daily companion. The Word Counter and Reading Time Calculator help me hit publishing deadlines with perfectly-sized articles every single time.",
    avatar: "PS",
  },
  {
    name: "Alex Johnson",
    role: "SEO Specialist",
    text: "The Keyword Density Checker alone is worth bookmarking. I used to rely on clunky desktop apps — now I just open a tab and I'm done in seconds.",
    avatar: "AJ",
  },
  {
    name: "Maria Garcia",
    role: "University Student",
    text: "I use the Character Counter for every assignment that has a word or character limit. It's fast, accurate, and the clean design doesn't distract me from my work.",
    avatar: "MG",
  },
];

const faqs = [
  {
    q: "Are all the text formatting and SEO tools on TextTools truly 100% free to use?",
    a: "Yes, every single tool available on the TextTools platform is absolutely 100% free for everyone, without any strings attached. In today's digital landscape, many utility websites lure you in with basic features and then hide their best tools behind expensive premium tiers or recurring monthly subscriptions. We firmly believe that fundamental text manipulation, SEO analysis, and content formatting tools should be universally accessible. Whether you are a student writing an essay, an author drafting a novel, or a digital marketer optimizing website content, you have unlimited access to our word counters, case converters, and duplicate line removers at zero cost. There are no paywalls, no hidden fees, and no usage limits.",
  },
  {
    q: "How secure is my text data? Is it ever uploaded or stored on your servers?",
    a: "Your privacy and data security are our absolute top priorities. Unlike many other online text editors or grammar checkers that upload your sensitive documents to remote servers for processing, TextTools is built entirely on modern client-side web technologies. This means that every single operation—whether you are counting words, converting text cases, calculating keyword densities, or removing duplicate lines—happens locally right inside your own web browser. Your text data never leaves your device, it is never transmitted over the internet, and it is never saved to any database. Once you close your browser tab, the data is completely gone. This robust, zero-server-interaction architecture ensures that you can safely paste confidential emails, proprietary code, or sensitive legal documents without any fear of data breaches or privacy violations.",
  },
  {
    q: "Do I need to create a user account, provide my email, or log in to use the platform?",
    a: "No, you do not need to create an account, and we will never ask for your email address. We understand how frustrating it is when you simply want to quickly format a paragraph or count the words in a sentence, only to be blocked by a mandatory sign-up form or an email verification prompt. TextTools is designed for ultimate speed, frictionless access, and instant productivity. You can simply bookmark our homepage, open it whenever you need a tool, and start typing or pasting your text immediately. By completely eliminating the user registration process, we respect your time and ensure that you can jump straight into your workflow without any unnecessary digital hurdles.",
  },
  {
    q: "Is TextTools compatible with mobile devices, tablets, and different web browsers?",
    a: "Absolutely! TextTools has been meticulously engineered from the ground up using responsive web design principles to ensure a flawless user experience across all devices and screen sizes. Whether you are using a large 4K desktop monitor in your office, a laptop at a coffee shop, an iPad, or a smartphone while on the commute, the interface automatically adapts to provide you with the most optimal layout. Furthermore, because our tools run entirely on client-side JavaScript, they are fully compatible with all modern web browsers, including Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge. You get the exact same powerful functionality and lightning-fast performance regardless of the hardware or operating system you choose to use.",
  },
  {
    q: "How exactly do you calculate the estimated reading time and speaking time?",
    a: "Our reading time and speaking time calculators use advanced, academically backed algorithms to provide you with highly accurate estimates. For reading time, we use the widely accepted industry standard of 238 words per minute, which is the average silent reading speed for a typical adult. This is the exact same metric utilized by major publishing platforms like Medium to estimate article lengths. For speaking time—which is incredibly useful for podcasters, public speakers, and video scriptwriters—we calculate based on a slightly slower pace of 183 words per minute, allowing for natural pauses, breathing, and vocal inflection. These detailed metrics help content creators perfectly tailor their scripts and articles to fit specific time slots or audience attention spans.",
  },
  {
    q: "Why is tracking Keyword Density so important for SEO (Search Engine Optimization)?",
    a: "Keyword density is a critical metric in Search Engine Optimization that measures how often a specific target keyword or phrase appears in your content compared to the total word count. While search engine algorithms have evolved significantly, maintaining an optimal keyword density (typically between 1% and 3%) remains essential for on-page SEO. If your density is too low, search engines like Google might not understand the primary topic of your page, causing it to rank poorly. Conversely, if your density is too high, you risk triggering spam filters for 'keyword stuffing,' which can lead to severe ranking penalties. Our Keyword Density Checker provides instant, real-time analysis of your text, automatically filtering out common stop words (like 'the', 'and', 'or') to give you an accurate picture of your most dominant terms, helping you craft perfectly optimized content that ranks higher in search results.",
  },
  {
    q: "What makes TextTools different from or better than other standard online word counters?",
    a: "While many websites offer basic word counting, TextTools is an all-in-one, comprehensive text processing suite designed specifically for power users, writers, and digital professionals. First, our platform features a breathtakingly modern, premium, and clutter-free interface that eliminates the aggressive banner ads and pop-ups that plague other utility sites. Second, we bundle multiple indispensable tools into one cohesive ecosystem—you don't just get a word counter; you get instant access to case converters, duplicate line removers, reading time calculators, and markdown previewers all in one place. Finally, our commitment to 100% client-side processing means that our tools are significantly faster than server-based alternatives. There is zero loading time or server latency; as soon as you type or paste your text, the results are calculated and displayed instantaneously.",
  },
  {
    q: "How can the Duplicate Line Remover tool help me with data cleaning and coding?",
    a: "The Duplicate Line Remover is one of our most powerful utilities, specifically designed to help researchers, data analysts, and software developers clean up messy data sets in seconds. When you are dealing with massive lists of email addresses, messy CSV data, scraped URLs, or extensive code logs, manually identifying and deleting repetitive lines is incredibly tedious and prone to human error. Our tool instantly scans your text, identifies every exact duplicate line, and strips them away, leaving you with a perfectly clean, unique list. We also offer advanced options like case-sensitive filtering and the ability to automatically remove empty lines, saving you hours of frustrating manual labor and streamlining your data processing workflows.",
  },
  {
    q: "Who can benefit the most from using the suite of utilities provided by TextTools?",
    a: "TextTools is a versatile platform that caters to a massive variety of digital professionals and students. Copywriters and freelance bloggers use our Word Counter and Character Counter to ensure they meet strict editorial guidelines and character limits for social media platforms like Twitter (X) or LinkedIn. SEO specialists rely heavily on our Keyword Density Checker to analyze and optimize their web copy for search engines. Programmers, developers, and data scientists utilize our Duplicate Line Remover and Case Converter to quickly format code, sanitize datasets, and convert text into camelCase, snake_case, or standard uppercase formats. Even casual users find our platform incredibly helpful for quickly formatting messy text copied from PDF documents or poorly formatted emails.",
  },
  {
    q: "Will you be adding more text formatting and manipulation tools in the future?",
    a: "Absolutely! TextTools is an actively maintained and constantly evolving platform. Our development team is deeply committed to expanding our suite of utilities based directly on user feedback and emerging digital trends. We are already in the process of designing and developing several exciting new features, including advanced text diff tools (to compare two documents side-by-side), JSON formatters, regular expression (RegEx) testers, and AI-assisted grammar checking modules. We continuously monitor the needs of writers, developers, and SEO experts to ensure that TextTools remains the ultimate, all-in-one destination for text processing on the web. If you have a specific tool request or a feature suggestion, we highly encourage you to reach out to us through our contact page!",
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-29 overflow-x-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-1" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-[100%] bg-gradient-to-tr from-blue-500/20 via-violet-500/20 to-pink-500/20 blur-[120px] -z-10 opacity-80" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-center lg:text-left">
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50/80 dark:bg-blue-950/40 px-4 py-1.5 mb-8 text-sm text-blue-700 dark:text-blue-300 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                9+ Free Text Tools — No Sign-Up Required
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Free Online Text Tools
                <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 dark:from-blue-400 dark:via-violet-400 dark:to-pink-400 bg-clip-text text-transparent">
                  {" "}for Everyone
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                Count words, convert case, remove duplicates, compare text, and more —
                all from your browser, completely free and private.
              </p>

              {/* Search Bar */}
              <div className="w-full max-w-xl mb-6">
                <ToolSearch />
              </div>

              <p className="text-sm text-muted-foreground">
                Popular:{" "}
                <Link href="/tools/word-counter" className="text-blue-600 dark:text-blue-400 hover:underline">Word Counter</Link>
                {" · "}
                <Link href="/tools/case-converter" className="text-blue-600 dark:text-blue-400 hover:underline">Case Converter</Link>
                {" · "}
                <Link href="/tools/keyword-density-checker" className="text-blue-600 dark:text-blue-400 hover:underline">Keyword Density</Link>
              </p>
            </div>

            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <FloatingToolsGraphic />
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-8">
        <GoogleAd slot="HOMEPAGE_SLOT_ID" />
      </div>

      {/* ─── POPULAR TOOLS ────────────────────────────────────── */}
      <section className="py-5 md:py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 ">
            <div className="text-center mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold   tracking-tight mb-2">Popular Tools</h2>
              <p className="text-muted-foreground max-w-lg">
                The tools writers, bloggers, students, and SEO professionals use every day.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allTools.slice(0, 4).map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="group relative p-6 rounded-3xl border border-border bg-card/50 hover:bg-card backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 flex items-center justify-center">
                    <tool.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <h3 className="font-semibold text-lg mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/tools" className={buttonVariants({ variant: "outline", className: "rounded-full" })}>
              View All Tools <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── LATEST TOOLS ─────────────────────────────────────── */}
      <section className="py-10 md:py-24 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div className="text-center mx-auto"  >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Latest Tools</h2>
              <p className="text-muted-foreground max-w-lg">
                Recently added tools to supercharge your text workflow.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allTools.filter(t => t.isNew).map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="group relative p-6 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-black/[.04] hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 block"
              >
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                    NEW
                  </span>
                </div>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center mb-4">
                  <tool.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-lg mb-1.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ───────────────────────────────────────── */}
      {/* <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Browse by Category</h2>
            <p className="text-muted-foreground">
              Find the right tool for your workflow — organised by purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href="/tools"
                className={`group relative p-6 rounded-3xl border ${cat.border} bg-gradient-to-br ${cat.gradient} backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <cat.icon className={`h-6 w-6 ${cat.iconColor}`} />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${cat.badgeBg}`}>
                      {cat.count} tools
                    </span>
                  </div>

                  <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{cat.name}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground font-medium">
                  <span>Explore category</span>
                  <span className="text-primary font-semibold group-hover:underline">View all →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* ─── FEATURES / WHY CHOOSE US ─────────────────────────── */}
      <section className="py-2 md:py-14 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Why Choose TextTools?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We built TextTools to be the fastest, cleanest, and most privacy-conscious
              text toolkit on the web.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative p-7 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 flex items-center justify-center mb-5">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────── */}
      <section className="py-5 md:py-15 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about TextTools.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-border bg-card overflow-hidden [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-medium select-none">
                  {faq.q}
                  <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TYPING GAME ──────────────────────────────────────── */}
      <TypingGame />
    </div>
  );
}
