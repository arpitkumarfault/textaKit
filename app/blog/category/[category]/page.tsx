import { Metadata } from "next";
import { capitalize } from "../../../lib/utils";
import { getPostsByCategory } from "../../../data/blog-posts";
import BlogCard from "../../../components/shared/BlogCard";
interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = params.category.replace(/-/g, " ");
  
  return {
    title: `${capitalize(category)} - Blog`,
    description: `Read articles about ${category.toLowerCase()}`,
  };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const category = params.category.replace(/-/g, " ");
  const posts = getPostsByCategory(category);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">
            {capitalize(category)}
          </h1>
          <p className="mt-2 text-xl text-gray-600">
            {posts.length} article{posts.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post,index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No articles found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;