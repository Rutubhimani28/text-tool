"use client"

import * as React from "react"
import { Moon, Sun, Palette, Check } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

function getContrastColor(hex: string) {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 140 ? "#0f172a" : "#f8fafc";
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [activeColor, setActiveColor] = React.useState("#e11d48") // Rose
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const savedColor = localStorage.getItem("custom-theme-color")
    if (savedColor) setActiveColor(savedColor)
  }, [])

  // Apply custom background & automatically suited text color variables dynamically
  React.useEffect(() => {
    const isCustomActive = theme === "custom";
    if (isCustomActive) {
      const textColor = getContrastColor(activeColor);
      const isLightBg = textColor === "#0f172a";
      
      document.documentElement.style.setProperty("--background", activeColor)
      document.documentElement.style.setProperty("--foreground", textColor)
      document.documentElement.style.setProperty("--card", activeColor)
      document.documentElement.style.setProperty("--card-foreground", textColor)
      document.documentElement.style.setProperty("--popover", activeColor)
      document.documentElement.style.setProperty("--popover-foreground", textColor)
      
      // Secondary/Muted colors that fit this background
      document.documentElement.style.setProperty("--muted", isLightBg ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)")
      document.documentElement.style.setProperty("--muted-foreground", isLightBg ? "rgba(15,23,42,0.7)" : "rgba(248,250,252,0.7)")
      document.documentElement.style.setProperty("--border", isLightBg ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)")
      
      // Let primary color be the text contrast color so buttons stand out
      document.documentElement.style.setProperty("--primary", textColor)
      document.documentElement.style.setProperty("--primary-foreground", activeColor)
      document.documentElement.style.setProperty("--ring", textColor)
      
      // Manually manage dark/light class on body for Tailwind styling components (like shadcn cards)
      if (!isLightBg) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } else {
      document.documentElement.style.removeProperty("--background")
      document.documentElement.style.removeProperty("--foreground")
      document.documentElement.style.removeProperty("--card")
      document.documentElement.style.removeProperty("--card-foreground")
      document.documentElement.style.removeProperty("--popover")
      document.documentElement.style.removeProperty("--popover-foreground")
      document.documentElement.style.removeProperty("--muted")
      document.documentElement.style.removeProperty("--muted-foreground")
      document.documentElement.style.removeProperty("--border")
      document.documentElement.style.removeProperty("--primary")
      document.documentElement.style.removeProperty("--primary-foreground")
      document.documentElement.style.removeProperty("--ring")
    }
  }, [theme, activeColor])

  const handleColorChange = (hex: string) => {
    setActiveColor(hex)
    localStorage.setItem("custom-theme-color", hex)
  }

  if (!mounted) return null

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger render={
        <Button variant="ghost" size="icon" className="rounded-full w-9 h-9 border bg-muted/30 hover:bg-muted/80 transition-colors">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      } />
      
      <DropdownMenuContent 
        align="end" 
        className={`${theme === "custom" ? "w-[260px]" : "w-[150px]"} p-1.5 rounded-xl border border-border/50 bg-popover shadow-xl transition-all duration-200`}
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-muted focus:bg-muted transition-colors text-sm"
        >
          <Sun className="w-4 h-4 text-orange-500" />
          <span>Day</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-muted focus:bg-muted transition-colors text-sm"
        >
          <Moon className="w-4 h-4 text-violet-500" />
          <span>Night</span>
        </DropdownMenuItem>
        
        <button 
          onClick={() => setTheme("custom")}
          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-muted text-left text-sm transition-colors outline-none select-none ${theme === 'custom' ? 'bg-muted font-medium' : ''}`}
        >
          <Palette className="w-4 h-4 text-emerald-500" />
          <span>Custom</span>
        </button>

        {theme === "custom" && (
          <div className="border-t border-border/50 mt-1.5 pt-2.5 px-2 pb-1.5 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-muted-foreground select-none">Themes</span>
            </div>
            
            <div className="grid grid-cols-6 gap-2">
              {PRESET_COLORS.map((color) => {
                const isSelected = activeColor === color.hex;
                return (
                  <button
                    key={color.hex}
                    onClick={() => handleColorChange(color.hex)}
                    title={color.name}
                    className="w-6 h-6 rounded-full flex items-center justify-center relative cursor-pointer shadow-sm hover:scale-110 active:scale-95 transition-transform"
                    style={{ backgroundColor: color.hex }}
                  >
                    {isSelected && (
                      <div className="absolute inset-0 rounded-full border-[1.5px] border-background flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
