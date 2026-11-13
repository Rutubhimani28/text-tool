"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, RefreshCw, Type, AlignLeft, ShieldCheck, Zap } from "lucide-react";

const SAMPLE_TEXTS = [
  "Free Online Text Tools for Writers & Developers 🚀",
  "Instant Word Counter, Case Converter & Duplicate Remover ✨",
  "100% Client-Side Processing for Maximum Privacy 🔒",
];

const MODES = [
  { label: "Original", transform: (t: string) => t },
  { label: "UPPERCASE", transform: (t: string) => t.toUpperCase() },
  { label: "Title Case", transform: (t: string) => t.toLowerCase().replace(/(^|\s)[a-z]/g, (l) => l.toUpperCase()) },
  { label: "lowercase", transform: (t: string) => t.toLowerCase() },
];

export function FloatingToolsGraphic() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [activeMode, setActiveMode] = useState(0);

  // Auto typing simulator
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullText = SAMPLE_TEXTS[textIndex];

    if (isTyping) {
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 40);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2500);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 2));
        }, 20);
      } else {
        setTextIndex((prev) => (prev + 1) % SAMPLE_TEXTS.length);
        setActiveMode(0);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, textIndex]);

  // Auto cycle modes periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMode((prev) => (prev + 1) % MODES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentTransformedText = MODES[activeMode].transform(displayedText || "Type something...");
  const wordCount = currentTransformedText.trim() ? currentTransformedText.trim().split(/\s+/).length : 0;
  const charCount = currentTransformedText.length;

  return (
    <div className="relative w-full max-w-lg mx-auto select-none py-4">
      {/* Background Decorative Glows */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      {/* Outer Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-2xl p-5 md:p-6"
      >
        {/* Terminal / Card Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-xs font-mono text-muted-foreground flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" /> Live Text Processor
            </span>
          </div>

          <div className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Private
          </div>
        </div>

        {/* Live Transformation Mode Selector Tabs */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {MODES.map((mode, index) => (
            <button
              key={mode.label}
              onClick={() => setActiveMode(index)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeMode === index
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* Live Typing & Result Display Area */}
        <div className="relative min-h-[110px] bg-zinc-900 text-zinc-100 p-4 rounded-2xl font-mono text-sm shadow-inner flex flex-col justify-between overflow-hidden">
          <div className="relative z-10 leading-relaxed break-words">
            <span>{currentTransformedText}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 ml-1 bg-blue-400 align-middle"
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-3 border-t border-zinc-800 mt-3">
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" /> Real-time output
            </span>
            <span>Mode: {MODES[activeMode].label}</span>
          </div>
        </div>

        {/* Real-Time Live Statistics Badges */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="p-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 text-center">
            <span className="block text-[11px] text-muted-foreground">Words</span>
            <motion.span
              key={wordCount}
              initial={{ scale: 1.2, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-base font-bold text-blue-600 dark:text-blue-400"
            >
              {wordCount}
            </motion.span>
          </div>

          <div className="p-2.5 rounded-xl bg-violet-50/60 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/40 text-center">
            <span className="block text-[11px] text-muted-foreground">Characters</span>
            <motion.span
              key={charCount}
              initial={{ scale: 1.2, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-base font-bold text-violet-600 dark:text-violet-400"
            >
              {charCount}
            </motion.span>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 text-center flex flex-col items-center justify-center">
            <span className="block text-[11px] text-muted-foreground">Status</span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Clean
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating Auxiliary Badges around the graphic */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -top-4 -right-2 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg text-xs font-semibold text-zinc-800 dark:text-zinc-200"
      >
        <Type className="w-3.5 h-3.5 text-blue-500" /> Word Counter
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-4 -left-2 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg text-xs font-semibold text-zinc-800 dark:text-zinc-200"
      >
        <AlignLeft className="w-3.5 h-3.5 text-emerald-500" /> Case Converter
      </motion.div>
    </div>
  );
}

