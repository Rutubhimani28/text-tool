import Link from "next/link";
import { ADSTERRA_SMARTLINK } from "@/components/ad-scripts";
import Image from "next/image";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  popularTools: [
    { name: "Word Counter", href: "/tools/word-counter" },
    { name: "Character Counter", href: "/tools/character-counter" },
    { name: "Case Converter", href: "/tools/case-converter" },
    { name: "Remove Extra Spaces", href: "/tools/remove-extra-spaces" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full border-t bg-background pt-12 pb-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="TextForge logo" width={48} height={48} className="h-10 w-10" priority />
              <span className="font-bold text-xl tracking-tight">TextForge</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Forge cleaner text in seconds. Free, private text tools for writers, bloggers, students & SEO pros — everything runs in your browser.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tools */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Popular Tools</h3>
            <ul className="space-y-2">
              {footerLinks.popularTools.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TextForge. All rights reserved.
          </p>
          <a
            href={ADSTERRA_SMARTLINK}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="mt-2 inline-block text-sm text-muted-foreground hover:text-primary transition-colors sm:mt-0"
          >
            Sponsored
          </a>
        </div>
      </div>
    </footer>
  );
}
