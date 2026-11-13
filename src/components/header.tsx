"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import dynamic from "next/dynamic";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Tools", href: "/tools" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container max-w-7xl mx-auto flex h-24 items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-6 flex items-center">
          <Image src="/TextToolLogo.png" alt="TextTools Logo" width={200} height={60} className="h-20 w-auto" priority />
        </Link>
        <div className="hidden md:flex flex-1 items-center justify-between space-x-4">
          <nav className="flex items-center space-x-6 font-medium">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors hover:text-foreground/80 ${
                    isActive ? "text-primary font-semibold text-lg" : "text-foreground/60 text-lg"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        {/* Right side tools: ModeToggle and Mobile Menu */}
        <div className="flex items-center justify-end space-x-2 flex-1 md:flex-none">
          <ModeToggle />
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon", className: "md:hidden ml-2" })}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-2 py-1 text-lg transition-colors hover:text-foreground/80 ${
                        isActive ? "text-primary font-bold" : "font-semibold text-foreground/80"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
