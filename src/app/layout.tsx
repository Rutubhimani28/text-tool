import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "TextTools - Free Online Text Tools",
    template: "%s | TextTools",
  },
  description: "Free Online Text Tools for Writers, Bloggers, Students & SEO Professionals. Fast, reliable, and completely client-side.",
  keywords: ["text tools", "word counter", "character counter", "seo tools", "case converter", "duplicate line remover"],
  authors: [{ name: "TextTools Team" }],
  creator: "TextTools",
  verification: {
    google: "H4iwDAN2zhQPslpxE1LgC9m_9WpAz6QV6G1ykKei0n0",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://text-tools-swart.vercel.app",
    title: "TextTools - Free Online Text Tools",
    description: "Free Online Text Tools for Writers, Bloggers, Students & SEO Professionals.",
    siteName: "TextTools",
  },
  twitter: {
    card: "summary_large_image",
    title: "TextTools - Free Online Text Tools",
    description: "Free Online Text Tools for Writers, Bloggers, Students & SEO Professionals.",
    creator: "@texttools",
  },
  icons: {
    icon: "/TextToolLogo.png",
    shortcut: "/TextToolLogo.png",
    apple: "/TextToolLogo.png",
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
        <link rel="icon" href="/TextToolLogo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/TextToolLogo.png" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background font-sans antialiased text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
