import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock, Tag } from "lucide-react";
import { ALL_BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | TextTools - Tips, Tutorials & Guides for Writers",
  description:
    "Read our latest articles on content writing, SEO formatting, data cleaning, and how to get the most out of TextTools. Practical tips for writers and developers.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "TextTools Blog - Writing Tips & Tutorials",
    description:
      "Practical guides on text formatting, word count management, SEO, and digital productivity.",
    url: "/blog",
    type: "website",
    siteName: "TextTools",
  },
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(240,248,255,1)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(20,20,25,1)_0%,rgba(10,10,15,1)_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-[100%] bg-gradient-to-tr from-blue-500/10 via-violet-500/10 to-pink-500/10 blur-[120px] -z-10 opacity-80" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50/80 dark:bg-blue-950/40 px-4 py-1.5 mb-8 text-sm text-blue-700 dark:text-blue-300 backdrop-blur-sm">
            <BookOpen className="h-3.5 w-3.5" />
            Tips, Tutorials & Guides
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            The TextTools{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Practical insights on writing efficiency, text formatting, SEO best
            practices, and how to maximize your digital productivity.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 bg-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/blog/${ALL_BLOG_POSTS[0].slug}`}
            className="group block rounded-2xl border border-border bg-card hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 dark:bg-blue-950/60 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                  <Tag className="h-3 w-3" />
                  {ALL_BLOG_POSTS[0].category}
                </span>
                <span className="text-xs text-muted-foreground">
                  Featured Article
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {ALL_BLOG_POSTS[0].title}
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                {ALL_BLOG_POSTS[0].excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <time dateTime={ALL_BLOG_POSTS[0].publishedDate}>
                    {new Date(
                      ALL_BLOG_POSTS[0].publishedDate
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{ALL_BLOG_POSTS[0].readingTime} read</span>
                </div>
                <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-2 transition-all">
                  Read article{" "}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">All Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 dark:bg-blue-950/60 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <time dateTime={post.publishedDate}>
                          {new Date(post.publishedDate).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>

                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Ready to boost your productivity?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Explore our complete collection of free, privacy-first text tools.
            No sign-up required.
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Browse All Tools <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
