"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Check } from "lucide-react";

const PRESET_COLORS = [
  { name: "Slate", hex: "#475569" },
  { name: "Teal", hex: "#0d9488" },
  { name: "Green", hex: "#16a34a" },
  { name: "Lime", hex: "#65a30d" },
  { name: "Yellow", hex: "#ca8a04" },
  { name: "Orange", hex: "#ea580c" },
  { name: "Rose", hex: "#e11d48" },
  { name: "Fuchsia", hex: "#c026d3" },
  { name: "Purple", hex: "#9333ea" },
  { name: "Indigo", hex: "#4f46e5" },
  { name: "Blue", hex: "#2563eb" },
  { name: "Sky", hex: "#0284c7" },
  { name: "Brown", hex: "#78350f" },
];

export function ThemeCustomizer() {
  const { theme, setTheme } = useTheme();
  const [activeColor, setActiveColor] = useState("#e11d48"); // Default to Rose as in screenshot
  const [activeMode, setActiveMode] = useState<"dark" | "lite">("lite");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedColor = localStorage.getItem("custom-theme-color");
    const savedMode = localStorage.getItem("custom-theme-mode") as "dark" | "lite";
    if (savedColor) setActiveColor(savedColor);
    if (savedMode) setActiveMode(savedMode);
  }, []);

  // Sync mode with next-themes when activeMode changes
  useEffect(() => {
    if (theme === "custom") {
      setTheme(activeMode === "dark" ? "dark" : "light");
    }
  }, [activeMode, theme, setTheme]);

  // Apply custom primary color variables dynamically
  useEffect(() => {
    if (theme === "custom" || theme === "dark" || theme === "light" || theme === "system") {
      // Check if custom color should be active
      const isCustomActive = theme === "custom";
      if (isCustomActive) {
        document.documentElement.style.setProperty("--primary", activeColor);
        document.documentElement.style.setProperty("--ring", activeColor);
        // Force header accents to update
        document.documentElement.style.setProperty("--primary-foreground", "#ffffff");
      } else {
        document.documentElement.style.removeProperty("--primary");
        document.documentElement.style.removeProperty("--ring");
        document.documentElement.style.removeProperty("--primary-foreground");
      }
    }
  }, [theme, activeColor]);

  if (!mounted) return null;
  if (theme !== "custom") return null;

  const handleModeChange = (mode: "dark" | "lite") => {
    setActiveMode(mode);
    localStorage.setItem("custom-theme-mode", mode);
  };

  const handleColorChange = (hex: string) => {
    setActiveColor(hex);
    localStorage.setItem("custom-theme-color", hex);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 border border-border/80 rounded-2xl md:rounded-full px-4 py-2 bg-background text-foreground shadow-sm max-w-full">
      {/* Themes Label & Mode Radios */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-muted-foreground select-none">Themes</span>
        <div className="flex items-center gap-3 text-xs">
          <label className="flex items-center gap-1.5 cursor-pointer font-medium select-none">
            <input
              type="radio"
              name="custom-mode"
              checked={activeMode === "dark"}
              onChange={() => handleModeChange("dark")}
              className="accent-primary w-3.5 h-3.5"
            />
            Dark
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer font-medium select-none">
            <input
              type="radio"
              name="custom-mode"
              checked={activeMode === "lite"}
              onChange={() => handleModeChange("lite")}
              className="accent-primary w-3.5 h-3.5"
            />
            Lite
          </label>
        </div>
      </div>

      {/* Vertical Divider (hidden on very small screens) */}
      <div className="hidden sm:block h-4 w-[1px] bg-border/60" />

      {/* Predefined Colors Swatches */}
      <div className="flex flex-wrap items-center gap-2">
        {PRESET_COLORS.map((color) => {
          const isSelected = activeColor === color.hex;
          return (
            <button
              key={color.hex}
              onClick={() => handleColorChange(color.hex)}
              title={color.name}
              className="w-4 h-4 rounded-full transition-all hover:scale-125 flex items-center justify-center relative cursor-pointer shadow-sm active:scale-95"
              style={{ backgroundColor: color.hex }}
            >
              {isSelected && (
                <div className="absolute inset-0 rounded-full border-[1.5px] border-background flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-white" strokeWidth={3.5} />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
