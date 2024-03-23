import NewBlogForm from "@/components/admin/blog/NewBlogForm";
import prisma from "@/lib/prisma";

export default async function NewBlogPage() {
  const authors = await prisma.author.findMany();

  return <NewBlogForm authors={authors} />;
}
