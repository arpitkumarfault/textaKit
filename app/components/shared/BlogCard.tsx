import Link from "next/link";
import { BlogPost } from "../../types/blog";
import { formatDate, calculateReadingTime } from "../../lib/utils";

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group block rounded-lg border border-border bg-surface overflow-hidden transition hover:border-primary hover:shadow-lg hover:-translate-y-1 duration-300"
        >
            {post.image && (
                <div className="aspect-video overflow-hidden bg-surface-hover">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                </div>
            )}
            <div className="p-6">
                <div className="mb-3 flex items-center gap-3 text-sm text-text-tertiary">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-primary font-medium">
                        {post.category}
                    </span>
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>•</span>
                    <span>{post.readingTime} min read</span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-text-primary group-hover:gradient-text transition-all">
                    {post.title}
                </h3>
                <p className="mb-4 text-text-secondary line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {post.author.avatar && (
                            <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="h-8 w-8 rounded-full border border-border"
                            />
                        )}
                        <span className="text-sm text-text-secondary font-medium">{post.author.name}</span>
                    </div>

                    <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                        Read More
                        <svg
                            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;