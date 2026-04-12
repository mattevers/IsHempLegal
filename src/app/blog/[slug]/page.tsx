import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPost, getAllBlogPosts } from "@/data/blog";

export async function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://www.ishemplegal.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.ishemplegal.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = (post.relatedSlugs ?? [])
    .map((s) => getBlogPost(s))
    .filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    publisher: {
      "@type": "Organization",
      name: "Is Hemp Legal?",
      url: "https://www.ishemplegal.com",
    },
    mainEntityOfPage: `https://www.ishemplegal.com/blog/${post.slug}`,
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb */}
      <div className="text-gray-500 text-sm mb-4">
        <a href="/blog" className="hover:text-gray-400">
          Blog
        </a>{" "}
        &rarr; {post.title.length > 50 ? post.title.slice(0, 50) + "..." : post.title}
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="rounded-full bg-green-900/30 border border-green-800/40 px-3 py-0.5 text-green-400 text-xs font-medium capitalize">
            {post.category}
          </span>
          <span className="text-gray-500 text-xs">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
          {post.title}
        </h1>
        <p className="text-gray-400 text-lg mt-3">{post.description}</p>
      </div>

      {/* Content */}
      <article
        className="prose-custom text-gray-300 leading-relaxed space-y-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mb-4 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:mb-4 [&_a]:text-green-400 [&_a]:underline hover:[&_a]:text-green-300 [&_strong]:text-white [&_table]:w-full [&_table]:my-4 [&_table]:text-sm [&_th]:text-left [&_th]:text-gray-400 [&_th]:font-medium [&_th]:px-3 [&_th]:py-2 [&_th]:border-b [&_th]:border-brand-border [&_td]:px-3 [&_td]:py-2 [&_td]:border-b [&_td]:border-brand-border/50"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-12 pt-8 border-t border-brand-border">
          <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
          <div className="space-y-3">
            {relatedPosts.map(
              (rp) =>
                rp && (
                  <a
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="block rounded-xl border border-brand-border bg-brand-card p-4 hover:border-brand-green/50 transition-colors group"
                  >
                    <p className="text-white font-semibold group-hover:text-green-400 transition-colors text-sm">
                      {rp.title}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      {rp.description}
                    </p>
                  </a>
                )
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mt-10 rounded-2xl border border-brand-border bg-brand-card p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-2">
          Check Your State&apos;s Hemp Laws
        </h2>
        <p className="text-gray-400 mb-4">
          See the exact legal status of every hemp compound in your state.
        </p>
        <a
          href="/"
          className="inline-block rounded-xl bg-brand-green hover:bg-green-500 text-white font-bold px-8 py-3 transition-colors"
        >
          Use the Free Tool &rarr;
        </a>
      </section>
    </main>
  );
}
