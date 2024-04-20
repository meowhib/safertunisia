import { getLatestBlogPosts } from "@/lib/actions/blog-actions";
import Link from "next/link";
import BlogsCarousel from "./BlogsCarousel";
import { Button } from "../ui/button";

export default async function BlogSection() {
  const posts = await getLatestBlogPosts();

  console.log(posts);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Learn about Djerba from travelers like yourself! The activities they love, tips on how to get around, and info about life on the island.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          {
            posts ? (
              <BlogsCarousel blogs={posts} />
            ) : (
              null
            )
          }
        </div>
        <div className="mt-12 text-center"
        >
          <Button asChild >
          <Link href="/blog">
              View all posts
          </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
