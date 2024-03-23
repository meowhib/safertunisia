import NewBlogForm from "@/components/admin/blog/NewBlogForm";
import prisma from "@/lib/prisma";

type Author = {
  email: string;
};

export default async function NewBlogPage() {
  const authors = await prisma.author.findMany();

  return <NewBlogForm authors={authors} />;
}
