import prisma from "@/lib/prisma";
import EditBlogForm from "@/components/admin/blog/EditBlogForm";

export default async function EditBlogPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const authors = await prisma.author.findMany({
    select: {
      id: true,
      email: true,
    },
  });

  console.log(authors);

  const blogPost = await prisma.blog.findFirst({
    where: {
      slug: slug,
    },
    include: {
      author: true,
    },
  });

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="container mx-auto">
      <EditBlogForm
        authors={authors}
        slug={slug}
        values={{
          title: blogPost.title,
          content: blogPost.content,
          description: blogPost.description,
          imageURL: blogPost.imageUrl,
          author: {
            id: blogPost.author.id,
            email: blogPost.author.email,
          },
        }}
      />
    </div>
  );
}
