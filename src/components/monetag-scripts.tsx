"use client";

import { useEffect } from "react";

// Monetag tags. Injected with plain DOM scripts (like Monetag's own snippets) rather than
// next/script (which de-duplicates by `src`, a problem if two tags share one script URL).
// Removed on request: Magnificent (zone 309603) and multitag (309605), both quge5.com/88/tag.min.js, to stop the popup ad.
const TAGS: { name: string; src: string; zone: string; cfasync?: boolean }[] = [
  { name: "in-page push", src: "https://nap5k.com/tag.min.js", zone: "12253614" },
  { name: "onclick", src: "https://al5sm.com/tag.min.js", zone: "12253625" },
];

export function MonetagScripts() {
  useEffect(() => {
    const parent = document.body || document.documentElement;
    const added = TAGS.map((tag) => {
      const s = document.createElement("script");
      s.dataset.zone = tag.zone;
      s.src = tag.src;
      s.async = true;
      if (tag.cfasync) s.setAttribute("data-cfasync", "false");
      parent.appendChild(s);
      return s;
    });
    return () => added.forEach((s) => s.remove());
  }, []);

  return null;
}
