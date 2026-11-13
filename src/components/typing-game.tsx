"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Type } from "lucide-react";

const QUOTES = [
  "The quick brown fox jumps over the lazy dog.",
  "To be or not to be, that is the question.",
  "All that glitters is not gold.",
  "A journey of a thousand miles begins with a single step.",
  "Life is what happens when you're busy making other plans.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts."
];

export function TypingGame() {
  const [quote, setQuote] = useState("");
  const [input, setInput] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const inputRef = useRef<HTMLInputElement>(null);

  const startNewGame = (shouldFocus = true) => {
    const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setQuote(randomQuote);
    setInput("");
    setIsStarted(false);
    setIsFinished(false);
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    if (shouldFocus && inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    startNewGame(false);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isFinished) return;

    const val = e.target.value;
    if (!isStarted) {
      setIsStarted(true);
      setStartTime(Date.now());
    }

    setInput(val);

    // Calculate accuracy
    let correctChars = 0;
    for (let i = 0; i < val.length; i++) {
      if (val[i] === quote[i]) correctChars++;
    }
    const currentAccuracy = val.length > 0 ? Math.floor((correctChars / val.length) * 100) : 100;
    setAccuracy(currentAccuracy);

    // Check if finished
    if (val === quote) {
      setIsFinished(true);
      if (startTime) {
        const timeTakenInMinutes = (Date.now() - startTime) / 60000;
        const wordsTyped = quote.length / 5;
        setWpm(Math.round(wordsTyped / timeTakenInMinutes));
      }
    }
  };

  // Render the quote characters with specific colors
  const renderQuote = () => {
    return quote.split("").map((char, index) => {
      let colorClass = "text-muted-foreground/50"; // default
      if (index < input.length) {
        colorClass = input[index] === char ? "text-green-500 dark:text-green-400 font-bold" : "text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-900/30 rounded";
      } else if (index === input.length && !isFinished) {
        colorClass = "text-foreground border-b-2 border-primary animate-pulse";
      }

      return (
        <span key={index} className={`transition-colors duration-150 ${colorClass}`}>
          {char}
        </span>
      );
    });
  };

  return (
    <section className="py-2 md:py-28 relative overflow-hidden bg-muted/30">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-10 inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-2xl">
          <Type className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Test Your Typing Speed
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Take a quick break and see how fast you can type! A fun mini-game right in your browser.
        </p>

        <div className="bg-card border border-border shadow-xl rounded-3xl p-6 md:p-10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-violet-500 opacity-50 group-hover:opacity-100 transition-opacity" />

          {/* Stats Bar */}
          <div className="flex items-center justify-between mb-8 border-b border-border pb-6">
            <div className="text-left">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Speed</p>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                {wpm} <span className="text-xl font-medium text-muted-foreground">WPM</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Accuracy</p>
              <p className="text-4xl font-bold text-emerald-500 dark:text-emerald-400">
                {accuracy}<span className="text-xl font-medium text-muted-foreground">%</span>
              </p>
            </div>
          </div>

          {/* Typing Area */}
          <div
            className="text-2xl md:text-4xl text-left leading-relaxed font-medium mb-10 min-h-[120px] select-none cursor-text break-words"
            onClick={() => inputRef.current?.focus()}
          >
            {renderQuote()}
          </div>

          {/* Hidden Input */}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            disabled={isFinished}
            className="absolute opacity-0 -left-[9999px]"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-muted-foreground">
              {!isStarted && !isFinished ? "Start typing to begin..." : isFinished ? "Great job!" : "Keep going..."}
            </p>
            <Button
              onClick={() => startNewGame()}
              variant={isFinished ? "default" : "outline"}
              className={`rounded-full px-6 ${isFinished ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700 border-0 shadow-lg shadow-blue-500/25" : ""}`}
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              {isFinished ? "Play Again" : "Restart"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
