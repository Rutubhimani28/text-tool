"use client";

import { useState, useEffect } from "react";
import { Copy, Trash2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

interface Stats {
  words: number;
  characters: number;
  charactersWithoutSpaces: number;
  paragraphs: number;
  sentences: number;
  readingTime: number;
  speakingTime: number;
}

export default function WordCounterClient() {
  const [text, setText] = useState("");
  const [stats, setStats] = useState<Stats>({
    words: 0,
    characters: 0,
    charactersWithoutSpaces: 0,
    paragraphs: 0,
    sentences: 0,
    readingTime: 0,
    speakingTime: 0,
  });

  useEffect(() => {
    const calculateStats = (input: string) => {
      const trimmed = input.trim();
      
      const words = trimmed ? trimmed.split(/\s+/).length : 0;
      const characters = input.length;
      const charactersWithoutSpaces = input.replace(/\s+/g, "").length;
      const paragraphs = trimmed ? trimmed.split(/\n+/).filter(p => p.length > 0).length : 0;
      const sentences = trimmed ? (trimmed.match(/[.!?]+[\s]+|[.!?]+$/g) || []).length : 0;
      
      // Reading time: avg 238 words per minute
      const readingTime = Math.ceil(words / 238);
      
      // Speaking time: avg 183 words per minute
      const speakingTime = Math.ceil(words / 183);

      setStats({
        words,
        characters,
        charactersWithoutSpaces,
        paragraphs,
        sentences,
        readingTime,
        speakingTime,
      });
    };

    calculateStats(text);
  }, [text]);

  const handleClear = () => {
    setText("");
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "word-count-result.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6">
      {/* Top Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4 md:p-6 text-center flex flex-col items-center justify-center h-full">
            <span className="text-3xl md:text-4xl font-bold text-primary mb-1">{stats.words}</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Words</span>
          </CardContent>
        </Card>
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4 md:p-6 text-center flex flex-col items-center justify-center h-full">
            <span className="text-3xl md:text-4xl font-bold text-primary mb-1">{stats.characters}</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Characters</span>
          </CardContent>
        </Card>
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4 md:p-6 text-center flex flex-col items-center justify-center h-full">
            <span className="text-3xl md:text-4xl font-bold text-primary mb-1">{stats.sentences}</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Sentences</span>
          </CardContent>
        </Card>
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4 md:p-6 text-center flex flex-col items-center justify-center h-full">
            <span className="text-3xl md:text-4xl font-bold text-primary mb-1">{stats.paragraphs}</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Paragraphs</span>
          </CardContent>
        </Card>
      </div>

      {/* Editor Area */}
      <div className="relative group">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here to begin counting..."
          className="min-h-[300px] text-base resize-y p-4 bg-background border-border focus-visible:ring-primary shadow-sm"
        />
        
        {/* Action Toolbar */}
        <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <CopyButton textToCopy={text} />
          <Button size="sm" variant="secondary" onClick={handleClear} disabled={!text}>
            <Trash2 className="h-4 w-4 mr-2" /> Clear
          </Button>
        </div>
      </div>

      {/* Bottom Detailed Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
          <span className="text-sm text-muted-foreground">Characters (no spaces)</span>
          <span className="font-semibold">{stats.charactersWithoutSpaces}</span>
        </div>
        <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
          <span className="text-sm text-muted-foreground">Reading Time</span>
          <span className="font-semibold">{stats.readingTime} min</span>
        </div>
        <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
          <span className="text-sm text-muted-foreground">Speaking Time</span>
          <span className="font-semibold">{stats.speakingTime} min</span>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <Button onClick={handleDownload} disabled={!text} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Download as TXT
        </Button>
      </div>
    </div>
  );
}
