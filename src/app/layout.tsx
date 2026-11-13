import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AdScripts } from "@/components/ad-scripts";
import { SideBanners, InlineBanner } from "@/components/banner-ads";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "TextForge - Free Online Text Toolkit for Clean, Fast Writing",
    template: "%s | TextForge",
  },
  description: "Forge cleaner text in seconds. Free, private text tools for writers, bloggers, students & SEO pros — count, convert, compare and clean text right in your browser.",
  keywords: ["text tools", "word counter", "character counter", "seo tools", "case converter", "duplicate line remover"],
  authors: [{ name: "TextForge Team" }],
  creator: "TextForge",
  verification: {
    google: "H4iwDAN2zhQPslpxE1LgC9m_9WpAz6QV6G1ykKei0n0",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://text-tools-swart.vercel.app",
    title: "TextForge - Free Online Text Toolkit for Clean, Fast Writing",
    description: "Forge cleaner text in seconds. Free, private text tools for writers, bloggers, students & SEO pros.",
    siteName: "TextForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "TextForge - Free Online Text Toolkit for Clean, Fast Writing",
    description: "Forge cleaner text in seconds. Free, private text tools for writers, bloggers, students & SEO pros.",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  referrer: "no-referrer-when-downgrade",
  other: {
    // HilltopAds site verification
    "38341942767368086a4933aa5e125ad2e66e81c6": "38341942767368086a4933aa5e125ad2e66e81c6",
  },
  metadataBase: new URL(process.env.SITE_URL || "https://text-tools-swart.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background font-sans antialiased text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="relative flex flex-1 flex-col">
            <SideBanners />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
          </div>
          <InlineBanner />
          <Footer />
        </ThemeProvider>
        <AdScripts />
      </body>
    </html>
  );
}
