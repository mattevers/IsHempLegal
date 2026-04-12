import type { Metadata } from "next";
import { getAllBlogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Hemp Law Guides & News — Delta-8, CBD & THCA Education",
  description:
    "Expert guides on hemp legality, Delta-8 laws, THCA loopholes, CBD comparisons, and the 2026 federal ban. Stay informed about hemp law changes.",
  alternates: { canonical: "https://www.ishemplegal.com/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
        Hemp Law Guides & News
      </h1>
      <p className="text-gray-400 mb-10">
        Expert guides on Delta-8, CBD, THCA, and hemp legality — updated for
        the 2026 federal changes.
      </p>

      <div className="space-y-6">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-2xl border border-brand-border bg-brand-card p-6 hover:border-brand-green/50 transition-colors group"
          >
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
            <h2 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors mb-2">
              {post.title}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {post.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-gray-500 text-xs bg-gray-800/50 rounded px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
