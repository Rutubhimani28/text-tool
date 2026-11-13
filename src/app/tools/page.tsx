import { Metadata } from "next";
import Link from "next/link";
import {
  Type,
  AlignLeft,
  CaseSensitive,
  Trash2,
  Layers,
  Columns2,
  BookOpen,
  BarChart3,
  Code2,
  ArrowRight,
  FileText,
  Clock,
  Sparkles,
  ArrowDownUp,
  RotateCcw,
  Repeat,
  Shuffle,
  Scissors,
  Search,
  List,
  Mail,
  Link2,
  Hash,
  Smile,
} from "lucide-react";

export const metadata: Metadata = {
  title: "All Free Text Tools - Word Counter, Case Converter & More",
  description:
    "Browse 30+ free text tools: sentence counters, lorem ipsum generators, text formatters, find & replace utilities, and more.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "All Text Tools — TextForge",
    description: "Browse the full collection of free online text tools.",
    url: "/tools",
  },
};

const tools = [
  {
    name: "Word Counter",
    href: "/tools/word-counter",
    desc: "Count words, characters, sentences, paragraphs and get reading & speaking time — all in real-time.",
    icon: Type,
  },
  {
    name: "Character Counter",
    href: "/tools/character-counter",
    desc: "Live character count with a max-length indicator, perfect for Twitter, SMS, and SEO meta tags.",
    icon: AlignLeft,
  },
  {
    name: "Case Converter",
    href: "/tools/case-converter",
    desc: "Instantly convert text to UPPERCASE, lowercase, Title Case, Sentence case, or tOGGLE cASE.",
    icon: CaseSensitive,
  },
  {
    name: "Remove Extra Spaces",
    href: "/tools/remove-extra-spaces",
    desc: "Clean up messy text by removing duplicate spaces, empty lines, and tab characters.",
    icon: Trash2,
  },
  {
    name: "Duplicate Line Remover",
    href: "/tools/duplicate-line-remover",
    desc: "Remove duplicate entries from lists or data with optional case-insensitive and sort options.",
    icon: Layers,
  },
  {
    name: "Text Compare",
    href: "/tools/text-compare",
    desc: "Compare two blocks of text side-by-side and see exactly what changed between them.",
    icon: Columns2,
  },
  {
    name: "Reading Time Calculator",
    href: "/tools/reading-time-calculator",
    desc: "Estimate how long it takes to read or speak any block of text accurately.",
    icon: BookOpen,
  },
  {
    name: "Keyword Density Checker",
    href: "/tools/keyword-density-checker",
    desc: "Analyze keyword frequency and density to optimize your content for SEO.",
    icon: BarChart3,
  },
  {
    name: "Markdown Preview",
    href: "/tools/markdown-preview",
    desc: "Write Markdown and preview the rendered HTML live. Export or copy with one click.",
    icon: Code2,
  },
  {
    name: "Sentence Counter",
    href: "/tools/sentence-counter",
    desc: "Count sentences quickly and improve text readability.",
    icon: FileText,
  },
  {
    name: "Paragraph Counter",
    href: "/tools/paragraph-counter",
    desc: "Count paragraphs instantly to verify structure and flow.",
    icon: FileText,
  },
  {
    name: "Speaking Time Calculator",
    href: "/tools/speaking-time-calculator",
    desc: "Estimate how long your text will take to speak aloud with professional pacing.",
    icon: Clock,
  },
  {
    name: "Text Statistics",
    href: "/tools/text-statistics",
    desc: "View detailed text metrics such as character counts, density, and structure.",
    icon: BarChart3,
  },
  {
    name: "Random Text Generator",
    href: "/tools/random-text-generator",
    desc: "Generate random placeholder text for demos, testing, or creative prompts.",
    icon: Sparkles,
  },
  {
    name: "Lorem Ipsum Generator",
    href: "/tools/lorem-ipsum-generator",
    desc: "Create classic Lorem Ipsum placeholder text for design mockups and layouts.",
    icon: BookOpen,
  },
  {
    name: "Remove Empty Lines",
    href: "/tools/remove-empty-lines",
    desc: "Delete blank lines and keep your text compact and tidy.",
    icon: Trash2,
  },
  {
    name: "Remove Line Breaks",
    href: "/tools/remove-line-breaks",
    desc: "Convert multiline text into a single line or normalize line breaks.",
    icon: AlignLeft,
  },
  {
    name: "Sort Lines (A-Z / Z-A)",
    href: "/tools/sort-lines",
    desc: "Sort each line alphabetically in ascending or descending order.",
    icon: ArrowDownUp,
  },
  {
    name: "Reverse Text",
    href: "/tools/reverse-text",
    desc: "Reverse the order of characters in your text instantly.",
    icon: RotateCcw,
  },
  {
    name: "Reverse Words",
    href: "/tools/reverse-words",
    desc: "Reverse the word order in your text with one click.",
    icon: Repeat,
  },
  {
    name: "Shuffle Text",
    href: "/tools/shuffle-text",
    desc: "Randomize words or lines to create fresh text variations.",
    icon: Shuffle,
  },
  {
    name: "Trim Text",
    href: "/tools/trim-text",
    desc: "Remove leading and trailing whitespace from your text quickly.",
    icon: Scissors,
  },
  {
    name: "Find & Replace Text",
    href: "/tools/find-and-replace",
    desc: "Search for text and replace it anywhere in your document.",
    icon: Search,
  },
  {
    name: "Text Splitter",
    href: "/tools/text-splitter",
    desc: "Split text into chunks by line, sentence, or custom delimiter.",
    icon: Columns2,
  },
  {
    name: "Text Joiner",
    href: "/tools/text-joiner",
    desc: "Join lines or phrases together with custom separators.",
    icon: Layers,
  },
  {
    name: "Alphabetical Sort",
    href: "/tools/alphabetical-sort",
    desc: "Sort text alphabetically for easy organization and comparison.",
    icon: ArrowDownUp,
  },
  {
    name: "Number Lines",
    href: "/tools/number-lines",
    desc: "Add line numbers to your text for reference or code samples.",
    icon: List,
  },
  {
    name: "Remove Numbers",
    href: "/tools/remove-numbers",
    desc: "Strip digits from your text to clean up formatting.",
    icon: Hash,
  },
  {
    name: "Remove Special Characters",
    href: "/tools/remove-special-characters",
    desc: "Remove punctuation and symbol characters from your content.",
    icon: Code2,
  },
  {
    name: "Remove Emojis",
    href: "/tools/remove-emojis",
    desc: "Remove emoji characters to keep your text plain and readable.",
    icon: Smile,
  },
  {
    name: "Extract Emails",
    href: "/tools/extract-emails",
    desc: "Find and extract all email addresses from any text block.",
    icon: Mail,
  },
  {
    name: "Extract URLs",
    href: "/tools/extract-urls",
    desc: "Extract links from text so you can review or re-use them.",
    icon: Link2,
  },
];

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
      <div className="mb-12">
        <nav className="flex text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li aria-current="page"><div className="flex items-center"><span className="mx-2">/</span><span className="text-foreground font-medium">Tools</span></div></li>
          </ol>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">All Text Tools</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A growing collection of free, fast, and privacy-focused text utilities. Pick the tool you need and start working — no sign-up required.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className="group relative p-6 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-black/[.04] hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 block"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 flex items-center justify-center">
                <tool.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </div>
            <h2 className="font-semibold text-lg mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {tool.name}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
