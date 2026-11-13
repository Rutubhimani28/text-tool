"use client";

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface Tool {
  name: string;
  href: string;
  desc: string;
}

const ALL_TOOLS: Tool[] = [
  { name: "Word Counter", href: "/tools/word-counter", desc: "Count words, characters, sentences, paragraphs and get reading & speaking time." },
  { name: "Character Counter", href: "/tools/character-counter", desc: "Live character count with a max-length indicator for Twitter, SMS, and SEO." },
  { name: "Case Converter", href: "/tools/case-converter", desc: "Convert text to UPPERCASE, lowercase, Title Case, Sentence case, or tOGGLE cASE." },
  { name: "Remove Extra Spaces", href: "/tools/remove-extra-spaces", desc: "Clean up messy text by removing duplicate spaces, empty lines, and tabs." },
  { name: "Duplicate Line Remover", href: "/tools/duplicate-line-remover", desc: "Remove duplicate entries from lists or data with optional case-insensitive matching." },
  { name: "Text Compare", href: "/tools/text-compare", desc: "Compare two blocks of text side-by-side and see exactly what changed." },
  { name: "Reading Time Calculator", href: "/tools/reading-time-calculator", desc: "Estimate how long it takes to read or speak any block of text." },
  { name: "Keyword Density Checker", href: "/tools/keyword-density-checker", desc: "Analyze keyword frequency and density to optimize content for SEO." },
  { name: "Markdown Preview", href: "/tools/markdown-preview", desc: "Write Markdown and preview the rendered HTML live. Export or copy with one click." },
  { name: "Sentence Counter", href: "/tools/sentence-counter", desc: "Count sentences quickly and improve text readability." },
  { name: "Paragraph Counter", href: "/tools/paragraph-counter", desc: "Count paragraphs instantly to verify structure and flow." },
  { name: "Speaking Time Calculator", href: "/tools/speaking-time-calculator", desc: "Estimate spoken length based on your text and speaking speed." },
  { name: "Text Statistics", href: "/tools/text-statistics", desc: "View detailed statistics on your text, including words, characters, and sentences." },
  { name: "Random Text Generator", href: "/tools/random-text-generator", desc: "Generate random placeholder text for demos or quick content testing." },
  { name: "Lorem Ipsum Generator", href: "/tools/lorem-ipsum-generator", desc: "Create classic Lorem Ipsum placeholder text for design mockups." },
  { name: "Remove Empty Lines", href: "/tools/remove-empty-lines", desc: "Delete blank lines and keep your text compact and tidy." },
  { name: "Remove Line Breaks", href: "/tools/remove-line-breaks", desc: "Convert multiline text into one line or normalize line breaks." },
  { name: "Sort Lines (A-Z / Z-A)", href: "/tools/sort-lines", desc: "Sort each line alphabetically in ascending or descending order." },
  { name: "Reverse Text", href: "/tools/reverse-text", desc: "Reverse the order of characters in your text instantly." },
  { name: "Reverse Words", href: "/tools/reverse-words", desc: "Reverse the word order in your text with one click." },
  { name: "Shuffle Text", href: "/tools/shuffle-text", desc: "Randomize words or lines to create fresh text variations." },
  { name: "Trim Text", href: "/tools/trim-text", desc: "Remove leading and trailing whitespace from your text quickly." },
  { name: "Find & Replace Text", href: "/tools/find-and-replace", desc: "Search and replace text across your document." },
  { name: "Text Splitter", href: "/tools/text-splitter", desc: "Split text into lines, sentences, or custom delimiter chunks." },
  { name: "Text Joiner", href: "/tools/text-joiner", desc: "Join lines or phrases together with a custom separator." },
  { name: "Alphabetical Sort", href: "/tools/alphabetical-sort", desc: "Sort text alphabetically for easy organization and comparison." },
  { name: "Number Lines", href: "/tools/number-lines", desc: "Add line numbers to your text for reference or code samples." },
  { name: "Remove Numbers", href: "/tools/remove-numbers", desc: "Strip digits from your text to clean up formatting." },
  { name: "Remove Special Characters", href: "/tools/remove-special-characters", desc: "Remove punctuation and symbol characters from your content." },
  { name: "Remove Emojis", href: "/tools/remove-emojis", desc: "Remove emoji characters to keep your text plain and readable." },
  { name: "Extract Emails", href: "/tools/extract-emails", desc: "Find and extract all email addresses from any text block." },
  { name: "Extract URLs", href: "/tools/extract-urls", desc: "Extract links from text so you can review or re-use them." },
];

export function ToolSearch() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const filtered = query.trim()
    ? ALL_TOOLS.filter(
      (t) =>
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        t.desc.toLowerCase().includes(query.toLowerCase())
    )
    : [];

  const showDropdown = isFocused && query.trim().length > 0;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={containerRef} className="max-w-xl mx-auto relative group mb-6">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
        <Search strokeWidth={2.5} className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();

            if (filtered.length > 0) {
              router.push(filtered[0].href);
              setQuery("");
              setIsFocused(false);
            }
          }
        }}
        onFocus={() => setIsFocused(true)}
        className="block w-full pl-12 pr-4 py-4 rounded-full border border-border bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-xl shadow-blue-500/5 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all text-base outline-none"
        placeholder="Search for tool… (e.g. Word Counter)"
        aria-label="Search tools"
        autoComplete="off"
      />

      {/* Search Results Dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-2xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl text-left">
          {filtered.length > 0 ? (
            <ul className="py-2">
              {filtered.slice(0, 2).map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    onClick={() => { setQuery(""); setIsFocused(false); }}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-muted/60 transition-colors"
                  >
                    <Search strokeWidth={2.5} className="h-4 w-4 mt-1 text-muted-foreground shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">{tool.name}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1">{tool.desc}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-6 text-center">
              <p className="text-sm text-muted-foreground">No tools found for &ldquo;{query}&rdquo;</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
