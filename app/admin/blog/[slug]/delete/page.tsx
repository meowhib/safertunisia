import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeleteBlogPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  await prisma.blog.delete({
    where: {
      slug: slug,
    },
  });

  revalidatePath("/admin/blog", "page");
  redirect("/admin/blog");
}
