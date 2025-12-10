import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getFeaturedPosts, getRelatedPosts } from "../../data/blog-posts";
import ArticleContent from "./_components/ArticleContent";
import RelatedPosts from "./_components/RelatedPosts";
import ShareButtons from "../../components/shared/ShareButtons";
import InArticleAd from "../../components/ads/InArticleAd";
import SidebarAd from "../../components/ads/SidebarAd";
import { generateArticleSchema } from "../../lib/seo";
import StructuredData from "../../components/seo/StructuredData";
import { formatDate } from "../../lib/utils";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.tags.join(", "),
  };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    image: post.image || "/images/og-image.jpg",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: post.author.name,
  });

  return (
    <>
      <StructuredData data={articleSchema} />

      <article className="min-h-screen bg-background">
        <div className="bg-gradient-to-b from-surface to-background py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-4 flex items-center gap-3 text-sm">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-primary font-medium">
                  {post.category}
                </span>
                <span className="text-text-secondary">{formatDate(post.publishedAt)}</span>
                <span className="text-text-secondary">•</span>
                <span className="text-text-secondary">{post.readingTime} min read</span>
              </div>

              <h1 className="mb-6 text-4xl font-bold text-text-primary md:text-5xl">
                {post.title}
              </h1>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {post.author.avatar && (
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-12 w-12 rounded-full border border-border"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-text-primary">
                      {post.author.name}
                    </div>
                    {post.author.bio && (
                      <div className="text-sm text-text-secondary">{post.author.bio}</div>
                    )}
                  </div>
                </div>

                <div className="hidden sm:block">
                  <ShareButtons url={`/blog/${post.slug}`} title={post.title} />
                </div>
              </div>
              <div className="mt-4 sm:hidden">
                <ShareButtons url={`/blog/${post.slug}`} title={post.title} />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="mb-8 w-full rounded-lg shadow-md"
                />
              )}

              <div className="prose prose-slate dark:prose-invert max-w-none">
                <ArticleContent content={post.content} />
              </div>

              <InArticleAd />

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface px-3 py-1 text-sm text-text-secondary border border-border"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Bio */}
              {post.author.bio && (
                <div className="mt-12 rounded-lg border border-border bg-surface p-6">
                  <h3 className="mb-3 text-xl font-bold text-text-primary">About the Author</h3>
                  <div className="flex gap-4">
                    {post.author.avatar && (
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="h-16 w-16 rounded-full border border-border"
                      />
                    )}
                    <div>
                      <div className="font-semibold text-text-primary">{post.author.name}</div>
                      <p className="text-text-secondary">{post.author.bio}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <RelatedPosts posts={relatedPosts} />
              )}
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <SidebarAd slot="blogPost" />
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;