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
    h2: (props: any) => (
      <h2 {...props} className="text-3xl font-bold">
        {props.children}
      </h2>
    ),
    h3: (props: any) => (
      <h3 {...props} className="text-2xl font-bold">
        {props.children}
      </h3>
    ),
    h4: (props: any) => (
      <h4 {...props} className="text-xl font-bold">
        {props.children}
      </h4>
    ),
    h5: (props: any) => (
      <h5 {...props} className="text-lg font-bold">
        {props.children}
      </h5>
    ),
    h6: (props: any) => (
      <h6 {...props} className="text-base font-bold">
        {props.children}
      </h6>
    ),
    p: (props: any) => (
      <p {...props} className="text-lg leading-8 text-gray-600">
        {props.children}
      </p>
    ),
    a: (props: any) => (
      <a {...props} className="text-blue-600 hover:underline">
        {props.children}
      </a>
    ),
    ul: (props: any) => (
      <ul {...props} className="list-disc list-inside">
        {props.children}
      </ul>
    ),
    ol: (props: any) => (
      <ol {...props} className="list-decimal list-inside">
        {props.children}
      </ol>
    ),
    li: (props: any) => (
      <li {...props} className="text-lg leading-8 text-gray-600">
        {props.children}
      </li>
    ),
    blockquote: (props: any) => (
      <blockquote
        {...props}
        className="border-l-4 border-gray-200 pl-4 italic my-8"
      >
        {props.children}
      </blockquote>
    ),
    img: (props: any) => (
      <img
        {...props}
        className="my-8 w-full rounded-2xl bg-gray-100 object-cover aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]"
      />
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
              src={blog.author.imageUrl || ""}
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
