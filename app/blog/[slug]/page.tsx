import { MDXRemote } from "next-mdx-remote/rsc";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const components = {
    h1: (props: any) => (
      <h1 {...props} className="text-4xl font-bold">
        {props.children}
      </h1>
    ),
  };

  async function getBlogBySlug(slug: string) {
    "use server";

    const blog = await prisma.blog.findUnique({
      where: {
        slug,
      },
      include: {
        author: {
          select: { name: true, imageUrl: true, role: true },
        },
      },
    });

    return blog;
  }

  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    redirect("/blog");
  }

  const { title, description, content } = blog;

  console.log(blog);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <article className="py-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-lg leading-8 text-gray-600">{description}</p>

        <div className="mt-8 flex flex-row">
          <div className="flex items-center gap-x-4 text-xs">
            <img
              src={blog.author.imageUrl}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-gray-900 font-medium text-base">
                {blog.author.name}
              </p>
              <p className="text-gray-500">{blog.author.role}</p>
            </div>
          </div>
        </div>
        <img
          src={blog.imageUrl}
          alt=""
          className="my-8 w-full rounded-2xl bg-gray-100 object-cover aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <MDXRemote source={content} components={components} />
      </article>
    </div>
  );
}
