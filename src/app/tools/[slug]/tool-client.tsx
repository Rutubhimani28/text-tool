"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ToolClientData } from "@/lib/tool-data";
import { Copy, Trash2, Download, RefreshCcw } from "lucide-react";

interface ToolClientProps {
  tool: ToolClientData;
}

type CaseMode = "uppercase" | "lowercase" | "titlecase" | "sentencecase" | "togglecase";

type SortDirection = "asc" | "desc";

type ShuffleMode = "words" | "lines";

const sentenceRegex = /[^.!?\r\n]+[.!?]+(?:\s|$)|[^.!?\r\n]+$/g;
const emailRegex = /[\w.+-]+@[\w-]+\.[\w.-]+/g;
const urlRegex = /https?:\/\/[\w\-]+(\.[\w\-]+)+([\w.,@?^=%&:/~+#\-]*[\w@?^=%&/~+#\-])?/g;
const emojiRegex = /\p{Extended_Pictographic}/gu;
const specialCharRegex = /[^\p{L}\p{N}\s]/gu;

function titleCase(text: string) {
  return text
    .toLowerCase()
    .replace(/(^|\s)([a-z])/g, (match, prefix, char) => `${prefix}${char.toUpperCase()}`);
}

function sentenceCase(text: string) {
  return text
    .toLowerCase()
    .replace(/(^|[.!?]\s+)([a-z])/g, (match, prefix, char) => `${prefix}${char.toUpperCase()}`);
}

function toggleCase(text: string) {
  return text
    .split("")
    .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
    .join("");
}

function shuffleArray<T>(array: T[]) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function getStats(text: string) {
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
  const characters = text.length;
  const charactersWithoutSpaces = text.replace(/\s+/g, "").length;
  const paragraphs = trimmed ? trimmed.split(/\n+/).filter((line) => line.trim().length > 0).length : 0;
  const sentences = trimmed ? (trimmed.match(sentenceRegex) || []).length : 0;
  const readingTime = Math.ceil(words / 238);
  const speakingTime = Math.ceil(words / 183);
  const avgWordLength = words ? Math.round(charactersWithoutSpaces / words) : 0;

  return {
    words,
    characters,
    charactersWithoutSpaces,
    paragraphs,
    sentences,
    readingTime,
    speakingTime,
    avgWordLength,
  };
}

function wordFrequency(text: string) {
  const words = text.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, "").split(/\s+/).filter(Boolean);
  const frequency = new Map<string, number>();
  words.forEach((word) => {
    frequency.set(word, (frequency.get(word) || 0) + 1);
  });
  return Array.from(frequency.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
}

function normalizeLineBreaks(text: string) {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

function compareTextBlocks(first: string, second: string) {
  const aLines = normalizeLineBreaks(first).split("\n");
  const bLines = normalizeLineBreaks(second).split("\n");
  const maxLines = Math.max(aLines.length, bLines.length);
  const result = [];

  for (let i = 0; i < maxLines; i += 1) {
    const aLine = aLines[i] ?? "";
    const bLine = bLines[i] ?? "";

    if (aLine === bLine) {
      result.push(`  ${aLine}`);
    } else {
      if (aLine.length > 0) {
        result.push(`- ${aLine}`);
      }
      if (bLine.length > 0) {
        result.push(`+ ${bLine}`);
      }
    }
  }

  return result.join("\n");
}

export default function ToolClient({ tool }: ToolClientProps) {
  const [inputText, setInputText] = useState("");
  const [inputTextB, setInputTextB] = useState("");
  const [outputText, setOutputText] = useState("");
  const [caseMode, setCaseMode] = useState<CaseMode>("uppercase");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [shuffleMode, setShuffleMode] = useState<ShuffleMode>("words");
  const [splitDelimiter, setSplitDelimiter] = useState("\n");
  const [joinerSeparator, setJoinerSeparator] = useState(", ");
  const [replaceFrom, setReplaceFrom] = useState("");
  const [replaceTo, setReplaceTo] = useState("");
  const [useRegex, setUseRegex] = useState(false);
  const [regexError, setRegexError] = useState<string | null>(null);
  const [generatorCount, setGeneratorCount] = useState(3);
  const [removeTabs, setRemoveTabs] = useState(true);
  const [removeExtraSpaces, setRemoveExtraSpaces] = useState(true);
  const [removeEmptyLines, setRemoveEmptyLines] = useState(true);
  const [sortOutputEntries, setSortOutputEntries] = useState(true);
  const [ignoreCase, setIgnoreCase] = useState(false);
  const [preserveOrder, setPreserveOrder] = useState(true);

  const stats = useMemo(() => getStats(inputText), [inputText]);
  const keywordFrequency = useMemo(() => wordFrequency(inputText), [inputText]);

  const isGenerator = tool.slug === "random-text-generator" || tool.slug === "lorem-ipsum-generator";

  const handleClear = () => {
    setInputText("");
    setInputTextB("");
    setOutputText("");
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([outputText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${tool.slug}-result.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const processText = () => {
    const text = inputText;
    const normalized = normalizeLineBreaks(text);
    const lines = normalized.split("\n");

    switch (tool.slug) {
      case "word-counter":
      case "character-counter":
      case "sentence-counter":
      case "paragraph-counter":
      case "speaking-time-calculator":
      case "text-statistics":
      case "keyword-density-checker":
      case "reading-time-calculator":
        return text;
      case "case-converter": {
        switch (caseMode) {
          case "uppercase":
            return text.toUpperCase();
          case "lowercase":
            return text.toLowerCase();
          case "titlecase":
            return titleCase(text);
          case "sentencecase":
            return sentenceCase(text);
          case "togglecase":
            return toggleCase(text);
        }
        return text;
      }
      case "remove-extra-spaces": {
        let output = text;
        if (removeTabs) output = output.replace(/\t/g, " ");
        if (removeExtraSpaces) output = output.replace(/ {2,}/g, " ");
        if (removeEmptyLines) output = output.replace(/^[ \t]*\n+/gm, "");
        return output.replace(/^[ \t]+|[ \t]+$/gm, "");
      }
      case "duplicate-line-remover": {
        const seen = new Set<string>();
        const result = lines.filter((line) => {
          const key = ignoreCase ? line.toLowerCase() : line;
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });
        if (sortOutputEntries) {
          return [...result].sort((a, b) => (ignoreCase ? a.toLowerCase().localeCompare(b.toLowerCase()) : a.localeCompare(b))).join("\n");
        }
        return result.join("\n");
      }
      case "remove-empty-lines":
        return normalized.split("\n").filter((line) => line.trim().length > 0).join("\n");
      case "remove-line-breaks":
        return normalized.split("\n").filter(Boolean).join(joinerSeparator);
      case "sort-lines": {
        const sorted = [...lines].sort((a, b) => (sortDirection === "asc" ? a.localeCompare(b) : b.localeCompare(a)));
        return sorted.join("\n");
      }
      case "reverse-text":
        return text.split("").reverse().join("");
      case "reverse-words": {
        const words = text.split(/(\s+)/);
        const reversed = words.filter(Boolean).reverse().join("");
        return reversed;
      }
      case "shuffle-text": {
        if (shuffleMode === "lines") {
          return shuffleArray(lines).join("\n");
        }
        const words = text.split(/(\s+)/).filter(Boolean);
        return shuffleArray(words).join("");
      }
      case "trim-text":
        return text.trim();
      case "find-and-replace": {
        if (!replaceFrom) return text;
        try {
          if (useRegex) {
            const regex = new RegExp(replaceFrom, "g");
            setRegexError(null);
            return text.replace(regex, replaceTo);
          }
          return text.split(replaceFrom).join(replaceTo);
        } catch (error: unknown) {
          setRegexError(error instanceof Error ? error.message : "Invalid regex");
          return text;
        }
      }
      case "text-splitter": {
        if (!splitDelimiter) return text;
        if (splitDelimiter === "sentence") {
          return (text.match(sentenceRegex) || []).join("\n");
        }
        if (splitDelimiter === "line") {
          return normalized.split("\n").filter(Boolean).join("\n");
        }
        return text.split(splitDelimiter).map((item) => item.trim()).filter(Boolean).join("\n");
      }
      case "text-compare": {
        if (!inputTextB.trim()) {
          return "Enter text in both fields to compare them line by line.";
        }
        return compareTextBlocks(inputText, inputTextB);
      }
      case "text-joiner": {
        return normalized.split("\n").filter(Boolean).join(joinerSeparator);
      }
      case "alphabetical-sort": {
        const words = text.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, "").split(/\s+/).filter(Boolean);
        const sorted = words.sort((a, b) => a.localeCompare(b));
        return sorted.join(" ");
      }
      case "number-lines":
        return lines
          .map((line, index) => `${index + 1}. ${line}`)
          .join("\n");
      case "remove-numbers":
        return text.replace(/[0-9]/g, "");
      case "remove-special-characters":
        return text.replace(specialCharRegex, "");
      case "remove-emojis":
        return text.replace(emojiRegex, "");
      case "extract-emails": {
        const matches = text.match(emailRegex) || [];
        return Array.from(new Set(matches)).join("\n");
      }
      case "extract-urls": {
        const matches = text.match(urlRegex) || [];
        return Array.from(new Set(matches)).join("\n");
      }
      case "random-text-generator": {
        const words = [
          "quick",
          "bright",
          "memory",
          "harbor",
          "silent",
          "garden",
          "swift",
          "ancient",
          "spark",
          "gentle",
          "breeze",
          "crimson",
          "journey",
          "canvas",
          "whisper",
          "mosaic",
          "ember",
          "wander",
          "echo",
          "luminous",
        ];
        let result = "";
        for (let i = 0; i < generatorCount; i += 1) {
          const sentence = shuffleArray(words)
            .slice(0, 8)
            .join(" ")
            .replace(/^./, (char) => char.toUpperCase()) + ".";
          result += sentence + "\n\n";
        }
        return result.trim();
      }
      case "lorem-ipsum-generator": {
        const lorem =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        return Array.from({ length: generatorCount }, () => lorem).join("\n\n");
      }
      default:
        return text;
    }
  };

  useEffect(() => {
    if (!isGenerator) {
      setOutputText(processText());
    }
  }, [inputText, inputTextB, caseMode, sortDirection, shuffleMode, splitDelimiter, joinerSeparator, replaceFrom, replaceTo, useRegex, generatorCount, removeTabs, removeExtraSpaces, removeEmptyLines, sortOutputEntries, ignoreCase, preserveOrder, tool.slug]);

  const handleGenerate = () => {
    setOutputText(processText());
  };

  const renderStats = () => {
    if (["word-counter", "character-counter", "sentence-counter", "paragraph-counter", "speaking-time-calculator", "text-statistics", "reading-time-calculator", "keyword-density-checker"].includes(tool.slug)) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="bg-card border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Words</p>
            <p className="mt-2 text-3xl font-semibold">{stats.words}</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Characters</p>
            <p className="mt-2 text-3xl font-semibold">{stats.characters}</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Sentences</p>
            <p className="mt-2 text-3xl font-semibold">{stats.sentences}</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Paragraphs</p>
            <p className="mt-2 text-3xl font-semibold">{stats.paragraphs}</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Reading Time</p>
            <p className="mt-2 text-3xl font-semibold">{stats.readingTime} min</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Speaking Time</p>
            <p className="mt-2 text-3xl font-semibold">{stats.speakingTime} min</p>
          </div>
        </div>
      );
    }
    if (tool.slug === "keyword-density-checker") {
      return (
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-card border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Top Keywords</p>
            <div className="mt-3 grid gap-2">
              {keywordFrequency.length ? (
                keywordFrequency.map(([word, count]) => (
                  <div key={word} className="flex justify-between text-sm">
                    <span>{word}</span>
                    <span className="font-semibold">{count}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">Enter text to see keyword frequency.</p>
              )}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderToolOptions = () => {
    switch (tool.slug) {
      case "case-converter":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(["uppercase", "lowercase", "titlecase", "sentencecase", "togglecase"] as CaseMode[]).map((mode) => (
              <Button
                key={mode}
                variant={caseMode === mode ? "default" : "outline"}
                onClick={() => setCaseMode(mode)}
              >
                {mode.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase())}
              </Button>
            ))}
          </div>
        );
      case "remove-extra-spaces":
      case "duplicate-line-remover":
      case "remove-line-breaks":
      case "sort-lines":
      case "shuffle-text":
      case "find-and-replace":
      case "text-splitter":
      case "text-joiner":
      case "alphabetical-sort":
      case "remove-special-characters":
        return (
          <div className="space-y-4">
            {tool.slug === "remove-extra-spaces" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2"><Checkbox id="tabs" checked={removeTabs} onCheckedChange={(value) => setRemoveTabs(value as boolean)} /><Label htmlFor="tabs">Remove Tabs</Label></div>
                <div className="flex items-center gap-2"><Checkbox id="extraSpaces" checked={removeExtraSpaces} onCheckedChange={(value) => setRemoveExtraSpaces(value as boolean)} /><Label htmlFor="extraSpaces">Remove Extra Spaces</Label></div>
                <div className="flex items-center gap-2"><Checkbox id="emptyLines" checked={removeEmptyLines} onCheckedChange={(value) => setRemoveEmptyLines(value as boolean)} /><Label htmlFor="emptyLines">Remove Empty Lines</Label></div>
              </div>
            )}
            {tool.slug === "duplicate-line-remover" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2"><Checkbox id="ignoreCase" checked={ignoreCase} onCheckedChange={(value) => setIgnoreCase(value as boolean)} /><Label htmlFor="ignoreCase">Ignore Case</Label></div>
                <div className="flex items-center gap-2"><Checkbox id="sortOutput" checked={sortOutputEntries} onCheckedChange={(value) => setSortOutputEntries(value as boolean)} /><Label htmlFor="sortOutput">Sort Output</Label></div>
              </div>
            )}
            {tool.slug === "remove-line-breaks" && (
              <div>
                <Label className="block mb-2">Join Separator</Label>
                <input
                  type="text"
                  value={joinerSeparator}
                  onChange={(e) => setJoinerSeparator(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            )}
            {tool.slug === "sort-lines" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant={sortDirection === "asc" ? "default" : "outline"} onClick={() => setSortDirection("asc")}>A → Z</Button>
                <Button variant={sortDirection === "desc" ? "default" : "outline"} onClick={() => setSortDirection("desc")}>Z → A</Button>
              </div>
            )}
            {tool.slug === "shuffle-text" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant={shuffleMode === "words" ? "default" : "outline"} onClick={() => setShuffleMode("words")}>Shuffle Words</Button>
                <Button variant={shuffleMode === "lines" ? "default" : "outline"} onClick={() => setShuffleMode("lines")}>Shuffle Lines</Button>
              </div>
            )}
            {tool.slug === "find-and-replace" && (
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label className="block mb-2">Find</Label>
                  <input
                    type="text"
                    value={replaceFrom}
                    onChange={(e) => setReplaceFrom(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <Label className="block mb-2">Replace With</Label>
                  <input
                    type="text"
                    value={replaceTo}
                    onChange={(e) => setReplaceTo(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="useRegex" checked={useRegex} onCheckedChange={(value) => setUseRegex(value as boolean)} />
                  <Label htmlFor="useRegex">Use Regular Expression</Label>
                </div>
                {regexError && <p className="text-sm text-destructive">{regexError}</p>}
              </div>
            )}
            {tool.slug === "text-splitter" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="block mb-2">Split Mode</Label>
                  <select
                    value={splitDelimiter}
                    onChange={(e) => setSplitDelimiter(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="line">Line</option>
                    <option value="sentence">Sentence</option>
                    <option value=" ">Space</option>
                    <option value=",">Comma</option>
                    <option value=";">Semicolon</option>
                  </select>
                </div>
              </div>
            )}
            {tool.slug === "text-joiner" && (
              <div>
                <Label className="block mb-2">Join Separator</Label>
                <input
                  type="text"
                  value={joinerSeparator}
                  onChange={(e) => setJoinerSeparator(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            )}
            {tool.slug === "alphabetical-sort" && (
              <div className="flex items-center gap-2"><Checkbox id="ignoreCaseSort" checked={ignoreCase} onCheckedChange={(value) => setIgnoreCase(value as boolean)} /><Label htmlFor="ignoreCaseSort">Ignore Case</Label></div>
            )}
            {tool.slug === "remove-special-characters" && (
              <div className="text-sm text-muted-foreground">This tool removes punctuation and symbols but preserves letters and numbers.</div>
            )}
          </div>
        );
      case "random-text-generator":
      case "lorem-ipsum-generator":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label className="block mb-2">Paragraphs</Label>
              <input
                type="number"
                min={1}
                max={10}
                value={generatorCount}
                onChange={(e) => setGeneratorCount(Number(e.target.value))}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex items-end gap-2">
              <Button onClick={handleGenerate}>
                <RefreshCcw className="h-4 w-4 mr-2" /> Generate
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {renderStats()}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Input Text</h2>
            <Button size="sm" variant="outline" onClick={handleClear} disabled={!inputText && !inputTextB}>
              <Trash2 className="h-4 w-4 mr-2" /> Clear
            </Button>
          </div>
          {tool.slug === "text-compare" ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <Label className="block mb-2">Text A</Label>
                <Textarea value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Enter the first text block..." className="min-h-[220px]" />
              </div>
              <div>
                <Label className="block mb-2">Text B</Label>
                <Textarea value={inputTextB} onChange={(e) => setInputTextB(e.target.value)} placeholder="Enter the second text block..." className="min-h-[220px]" />
              </div>
            </div>
          ) : (
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={tool.slug === "random-text-generator" || tool.slug === "lorem-ipsum-generator" ? "Use generate to create placeholder text." : "Type or paste your text here..."}
              className="min-h-[280px]"
            />
          )}

          <div>{renderToolOptions()}</div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Output</h2>
            <div className="flex items-center gap-2">
              <CopyButton textToCopy={outputText} />
              <Button size="sm" variant="outline" onClick={handleDownload} disabled={!outputText}>
                <Download className="h-4 w-4 mr-2" /> Download
              </Button>
            </div>
          </div>
          <Textarea value={outputText} readOnly placeholder="Your output appears here..." className="min-h-[280px]" />
        </div>
      </div>
    </div>
  );
}
