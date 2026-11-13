import type { LucideIcon } from "lucide-react";
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

type ToolType =
  | "counter"
  | "formatter"
  | "transformer"
  | "generator"
  | "analyzer"
  | "extractor"
  | "utility";

export interface ToolDefinition {
  slug: string;
  name: string;
  href: string;
  desc: string;
  icon: LucideIcon;
  type: ToolType;
  category: string;
  seoDescription: string;
}

export type ToolClientData = Omit<ToolDefinition, "icon">;

export function toToolClientData(tool: ToolDefinition): ToolClientData {
  const { icon: _icon, ...serializableTool } = tool;
  return serializableTool;
}

export const ALL_TOOLS: ToolDefinition[] = [
  {
    slug: "word-counter",
    name: "Word Counter",
    href: "/tools/word-counter",
    desc: "Count words, characters, sentences, paragraphs and get reading & speaking time — all in real-time.",
    icon: Type,
    type: "analyzer",
    category: "Counting & Analysis",
    seoDescription:
      "A fast word counter that shows words, characters, sentences, paragraphs, reading time, and speaking time instantly.",
  },
  {
    slug: "character-counter",
    name: "Character Counter",
    href: "/tools/character-counter",
    desc: "Live character count with a max-length indicator, perfect for Twitter, SMS, and SEO meta tags.",
    icon: AlignLeft,
    type: "analyzer",
    category: "Counting & Analysis",
    seoDescription:
      "Count characters with and without spaces and stay within limits for social posts, meta tags, and descriptions.",
  },
  {
    slug: "case-converter",
    name: "Case Converter",
    href: "/tools/case-converter",
    desc: "Instantly convert text to UPPERCASE, lowercase, Title Case, Sentence case, or tOGGLE cASE.",
    icon: CaseSensitive,
    type: "formatter",
    category: "Formatting",
    seoDescription:
      "Convert your text instantly between uppercase, lowercase, title case, sentence case, and toggle case.",
  },
  {
    slug: "remove-extra-spaces",
    name: "Remove Extra Spaces",
    href: "/tools/remove-extra-spaces",
    desc: "Clean up messy text by removing duplicate spaces, empty lines, and tab characters.",
    icon: Trash2,
    type: "formatter",
    category: "Formatting",
    seoDescription:
      "Remove duplicate spaces, extra tabs, and unnecessary blank lines to clean up your text instantly.",
  },
  {
    slug: "duplicate-line-remover",
    name: "Duplicate Line Remover",
    href: "/tools/duplicate-line-remover",
    desc: "Remove duplicate entries from lists or data with optional case-insensitive and sort options.",
    icon: Layers,
    type: "formatter",
    category: "Formatting",
    seoDescription:
      "Remove duplicate lines from lists, code blocks, or data and produce a clean unique result.",
  },
  {
    slug: "text-compare",
    name: "Text Compare",
    href: "/tools/text-compare",
    desc: "Compare two blocks of text side-by-side and see exactly what changed between them.",
    icon: Columns2,
    type: "analyzer",
    category: "Developer Tools",
    seoDescription:
      "Compare two text snippets side-by-side and quickly detect differences, additions, and deletions.",
  },
  {
    slug: "reading-time-calculator",
    name: "Reading Time Calculator",
    href: "/tools/reading-time-calculator",
    desc: "Estimate how long it takes to read or speak any block of text accurately.",
    icon: BookOpen,
    type: "analyzer",
    category: "Counting & Analysis",
    seoDescription:
      "Calculate estimated reading and speaking time for your text using industry-standard formulas.",
  },
  {
    slug: "keyword-density-checker",
    name: "Keyword Density Checker",
    href: "/tools/keyword-density-checker",
    desc: "Analyze keyword frequency and density to optimize your content for SEO.",
    icon: BarChart3,
    type: "analyzer",
    category: "SEO",
    seoDescription:
      "Analyze keyword density and frequency in your text to improve SEO and content relevance.",
  },
  {
    slug: "markdown-preview",
    name: "Markdown Preview",
    href: "/tools/markdown-preview",
    desc: "Write Markdown and preview the rendered HTML live. Export or copy with one click.",
    icon: Code2,
    type: "utility",
    category: "Developer Tools",
    seoDescription:
      "Preview Markdown instantly as rendered HTML for documentation, notes, and blog posts.",
  },
  {
    slug: "sentence-counter",
    name: "Sentence Counter",
    href: "/tools/sentence-counter",
    desc: "Count sentences quickly and improve readability.",
    icon: FileText,
    type: "counter",
    category: "Counting & Analysis",
    seoDescription:
      "Count sentences in any text block and improve your writing structure with fast feedback.",
  },
  {
    slug: "paragraph-counter",
    name: "Paragraph Counter",
    href: "/tools/paragraph-counter",
    desc: "Count paragraphs instantly to verify structure and flow.",
    icon: FileText,
    type: "counter",
    category: "Counting & Analysis",
    seoDescription:
      "Count paragraphs quickly and ensure your content is spaced and structured correctly.",
  },
  {
    slug: "speaking-time-calculator",
    name: "Speaking Time Calculator",
    href: "/tools/speaking-time-calculator",
    desc: "Estimate how long your text will take to speak aloud with professional pacing.",
    icon: Clock,
    type: "analyzer",
    category: "Counting & Analysis",
    seoDescription:
      "Estimate spoken word duration with professional pacing for presentations and recordings.",
  },
  {
    slug: "text-statistics",
    name: "Text Statistics",
    href: "/tools/text-statistics",
    desc: "View detailed text metrics such as character counts, density, and structure.",
    icon: BarChart3,
    type: "analyzer",
    category: "Counting & Analysis",
    seoDescription:
      "Get rich text statistics like words, characters, sentences, paragraphs, and reading time.",
  },
  {
    slug: "random-text-generator",
    name: "Random Text Generator",
    href: "/tools/random-text-generator",
    desc: "Generate natural-looking placeholder text for mockups, prototypes, and layout testing.",
    icon: Sparkles,
    type: "generator",
    category: "Generators",
    seoDescription:
      "Create realistic placeholder paragraphs for website mockups, design reviews, and UI testing without using repetitive Lorem Ipsum.",
  },
  {
    slug: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    href: "/tools/lorem-ipsum-generator",
    desc: "Create classic Lorem Ipsum placeholder text for design mockups and layouts.",
    icon: BookOpen,
    type: "generator",
    category: "Generators",
    seoDescription:
      "Generate Lorem Ipsum placeholder text for design templates, websites, and mockups.",
  },
  {
    slug: "remove-empty-lines",
    name: "Remove Empty Lines",
    href: "/tools/remove-empty-lines",
    desc: "Delete blank lines and keep your text compact and tidy.",
    icon: Trash2,
    type: "formatter",
    category: "Formatting",
    seoDescription:
      "Remove blank lines and keep your text compact, neat, and professional.",
  },
  {
    slug: "remove-line-breaks",
    name: "Remove Line Breaks",
    href: "/tools/remove-line-breaks",
    desc: "Convert multiline text into a single line or normalize line breaks.",
    icon: AlignLeft,
    type: "formatter",
    category: "Formatting",
    seoDescription:
      "Remove line breaks or normalize line endings for cleaner, single-line output.",
  },
  {
    slug: "sort-lines",
    name: "Sort Lines (A-Z / Z-A)",
    href: "/tools/sort-lines",
    desc: "Sort each line alphabetically in ascending or descending order.",
    icon: ArrowDownUp,
    type: "transformer",
    category: "Transformations",
    seoDescription:
      "Sort text lines alphabetically ascending or descending with one click.",
  },
  {
    slug: "reverse-text",
    name: "Reverse Text",
    href: "/tools/reverse-text",
    desc: "Reverse the order of characters in your text instantly.",
    icon: RotateCcw,
    type: "transformer",
    category: "Transformations",
    seoDescription:
      "Reverse the character order in any text block for palindromes, testing, or fun.",
  },
  {
    slug: "reverse-words",
    name: "Reverse Words",
    href: "/tools/reverse-words",
    desc: "Reverse the word order in your text with one click.",
    icon: Repeat,
    type: "transformer",
    category: "Transformations",
    seoDescription:
      "Reverse word order to change sentence structure or create mirrored phrases.",
  },
  {
    slug: "shuffle-text",
    name: "Shuffle Text",
    href: "/tools/shuffle-text",
    desc: "Randomize words or lines to create fresh text variations.",
    icon: Shuffle,
    type: "transformer",
    category: "Transformations",
    seoDescription:
      "Shuffle words or lines in your text to generate randomized variations quickly.",
  },
  {
    slug: "trim-text",
    name: "Trim Text",
    href: "/tools/trim-text",
    desc: "Remove leading and trailing whitespace from your text quickly.",
    icon: Scissors,
    type: "formatter",
    category: "Formatting",
    seoDescription:
      "Trim leading and trailing whitespace from your text to clean up formatting.",
  },
  {
    slug: "find-and-replace",
    name: "Find & Replace Text",
    href: "/tools/find-and-replace",
    desc: "Search for text and replace it anywhere in your document.",
    icon: Search,
    type: "formatter",
    category: "Helpers",
    seoDescription:
      "Find and replace text across your document with plain text or regex matching.",
  },
  {
    slug: "text-splitter",
    name: "Text Splitter",
    href: "/tools/text-splitter",
    desc: "Split text into chunks by line, sentence, or custom delimiter.",
    icon: Columns2,
    type: "transformer",
    category: "Helpers",
    seoDescription:
      "Split text by line, sentence, or custom delimiter to break content into manageable pieces.",
  },
  {
    slug: "text-joiner",
    name: "Text Joiner",
    href: "/tools/text-joiner",
    desc: "Join lines or phrases together with custom separators.",
    icon: Layers,
    type: "formatter",
    category: "Helpers",
    seoDescription:
      "Join lines or phrases together using a custom separator for fast text assembly.",
  },
  {
    slug: "alphabetical-sort",
    name: "Alphabetical Sort",
    href: "/tools/alphabetical-sort",
    desc: "Sort text alphabetically for easy organization and comparison.",
    icon: ArrowDownUp,
    type: "transformer",
    category: "Transformations",
    seoDescription:
      "Sort words alphabetically to organize content, lists, or data quickly.",
  },
  {
    slug: "number-lines",
    name: "Number Lines",
    href: "/tools/number-lines",
    desc: "Add line numbers to your text for reference or code samples.",
    icon: List,
    type: "formatter",
    category: "Helpers",
    seoDescription:
      "Add line numbers to each line in your text for easy reference and review.",
  },
  {
    slug: "remove-numbers",
    name: "Remove Numbers",
    href: "/tools/remove-numbers",
    desc: "Strip digits from your text to clean up formatting.",
    icon: Hash,
    type: "formatter",
    category: "Formatting",
    seoDescription:
      "Remove all numerical digits from your text to clean up formatting instantly.",
  },
  {
    slug: "remove-special-characters",
    name: "Remove Special Characters",
    href: "/tools/remove-special-characters",
    desc: "Remove punctuation and symbol characters from your content.",
    icon: Code2,
    type: "formatter",
    category: "Formatting",
    seoDescription:
      "Remove special characters and punctuation to keep your text plain and readable.",
  },
  {
    slug: "remove-emojis",
    name: "Remove Emojis",
    href: "/tools/remove-emojis",
    desc: "Remove emoji characters to keep your text plain and readable.",
    icon: Smile,
    type: "formatter",
    category: "Formatting",
    seoDescription:
      "Strip emoji characters from your text to preserve a plain, professional output.",
  },
  {
    slug: "extract-emails",
    name: "Extract Emails",
    href: "/tools/extract-emails",
    desc: "Find and extract all email addresses from any text block.",
    icon: Mail,
    type: "extractor",
    category: "Helpers",
    seoDescription:
      "Extract email addresses from any text so you can copy, export, or review them.",
  },
  {
    slug: "extract-urls",
    name: "Extract URLs",
    href: "/tools/extract-urls",
    desc: "Extract links from text so you can review or re-use them.",
    icon: Link2,
    type: "extractor",
    category: "Helpers",
    seoDescription:
      "Extract URLs and links from text quickly for review, export, or reuse.",
  },
];

export const TOOL_MAP = new Map<string, ToolDefinition>(ALL_TOOLS.map((tool) => [tool.slug, tool]));
