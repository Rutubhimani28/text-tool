"use client";

import { useState, useMemo } from "react";
import { Copy, Trash2, Clock, Mic, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ReadingTimeClient() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const readingMinutes = words / 238;
    const speakingMinutes = words / 183;

    const formatTime = (minutes: number) => {
      if (minutes < 1) return "< 1 min";
      const m = Math.floor(minutes);
      const s = Math.round((minutes - m) * 60);
      return s > 0 ? `${m} min ${s} sec` : `${m} min`;
    };

    return {
      words,
      readingTime: formatTime(readingMinutes),
      speakingTime: formatTime(speakingMinutes),
    };
  }, [text]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-blue-50/60 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
              <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{stats.words}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Words</div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-violet-50/60 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-violet-700 dark:text-violet-300">{stats.readingTime}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Reading Time</div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-pink-50/60 dark:bg-pink-950/20 border-pink-200 dark:border-pink-800">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-pink-100 dark:bg-pink-900/40 flex items-center justify-center shrink-0">
              <Mic className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-700 dark:text-pink-300">{stats.speakingTime}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Speaking Time</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="relative group">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your article, blog post, or essay here to calculate reading time..."
          className="min-h-[350px] text-base resize-y p-4 bg-background border-border focus-visible:ring-primary shadow-sm"
        />
        <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <CopyButton textToCopy={text} />
          <Button size="sm" variant="secondary" onClick={() => setText("")} disabled={!text}>
            <Trash2 className="h-4 w-4 mr-2" /> Clear
          </Button>
        </div>
      </div>
    </div>
  );
}
