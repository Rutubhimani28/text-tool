import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, User } from "lucide-react";
import { ALL_BLOG_POSTS, BLOG_POST_MAP } from "@/lib/blog-data";
import { TOOL_MAP } from "@/lib/tool-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POST_MAP.get(slug);

  if (!post) {
    return {
      title: "Post Not Found — TextTools Blog",
      description: "The requested blog post does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
      siteName: "TextTools",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POST_MAP.get(slug);

  if (!post) {
    notFound();
  }

  const relatedToolDefs = post.relatedTools
    .map((toolSlug) => TOOL_MAP.get(toolSlug))
    .filter(Boolean);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    datePublished: post.publishedDate,
    publisher: {
      "@type": "Organization",
      name: "TextTools",
      url: "https://text-tools-swart.vercel.app",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://text-tools-swart.vercel.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://text-tools-swart.vercel.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://text-tools-swart.vercel.app/blog/${post.slug}`,
      },
    ],
  };

  // Find next and previous posts for navigation
  const currentIndex = ALL_BLOG_POSTS.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? ALL_BLOG_POSTS[currentIndex - 1] : null;
  const nextPost =
    currentIndex < ALL_BLOG_POSTS.length - 1
      ? ALL_BLOG_POSTS[currentIndex + 1]
      : null;

  return (
    <>
      <Script
        id="blog-article-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id="blog-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Hero Header */}
        <section className="relative pt-20 pb-12 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(240,248,255,1)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(20,20,25,1)_0%,rgba(10,10,15,1)_100%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-[100%] bg-gradient-to-tr from-blue-500/10 via-violet-500/10 to-pink-500/10 blur-[120px] -z-10 opacity-80" />

          <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav
              className="flex text-sm text-muted-foreground mb-6"
              aria-label="Breadcrumb"
            >
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <Link href="/blog" className="hover:text-primary">
                      Blog
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-foreground font-medium line-clamp-1">
                      {post.title}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>

            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50/80 dark:bg-blue-950/40 px-4 py-1.5 mb-6 text-sm text-blue-700 dark:text-blue-300 backdrop-blur-sm">
              <Tag className="h-3.5 w-3.5" />
              {post.category}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedDate}>
                  {new Date(post.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              {post.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </div>
              ))}
            </article>

            {/* Related Tools */}
            {relatedToolDefs.length > 0 && (
              <div className="mt-16 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold mb-6 tracking-tight">
                  Tools Mentioned in This Article
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedToolDefs.map(
                    (t) =>
                      t && (
                        <Link
                          key={t.slug}
                          href={t.href}
                          className="group p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-200 block"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                              {t.name}
                            </h4>
                            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                            {t.desc}
                          </p>
                        </Link>
                      )
                  )}
                </div>
              </div>
            )}

            {/* Post Navigation */}
            <div className="mt-12 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-200"
                >
                  <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Previous Article
                    </p>
                    <p className="text-sm font-medium line-clamp-1 group-hover:text-primary transition-colors">
                      {prevPost.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex items-center justify-end gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-200 text-right"
                >
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Next Article
                    </p>
                    <p className="text-sm font-medium line-clamp-1 group-hover:text-primary transition-colors">
                      {nextPost.title}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0" />
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
