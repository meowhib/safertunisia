"use server";

import prisma from "@/lib/prisma";
import { newBlogPostFormSchema } from "../validations";
import * as z from "zod";
import slugify from "slugify";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function getAllBlogPosts() {
  const blogPosts = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return blogPosts;
}

export async function getBlogPostBySlug(slug: string) {
  const blogPost = await prisma.blog.findFirst({
    where: {
      slug: slug,
    },
  });

  return blogPost;
}

export async function deleteBlogPost(slug: string) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      throw new Error("Unauthorized");
    }

    if (!session.user || !session.user?.email) {
      throw new Error("Unauthorized");
    }

    if (!session.user?.email.endsWith("@safertunisia.com")) {
      throw new Error("Unauthorized");
    }

    await prisma.blog.delete({
      where: {
        slug: slug,
      },
    });

    console.log("Blog post deleted successfully");
    revalidatePath("/blog");
    redirect("/blog");
  } catch (error) {
    console.error(error);
  }
}

export async function updateBlogPost(
  slug: string,
  values: z.infer<typeof newBlogPostFormSchema>
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      throw new Error("Unauthorized");
    }

    if (!session.user || !session.user?.email) {
      throw new Error("Unauthorized");
    }

    if (!session.user?.email.endsWith("@safertunisia.com")) {
      throw new Error("Unauthorized");
    }

    await prisma.blog.update({
      where: {
        slug: slug,
      },
      data: {
        title: values.title,
        slug: slugify(values.title, {
          lower: true,
          strict: true,
        }),
        content: values.content,
        description: values.description,
        imageUrl: values.imageURL,
        authorId: values.author,
      },
    });
  
    console.log("Blog post updated successfully");
    revalidatePath(`/blog`);
    redirect(`/blog`);
  } catch (error) {
    console.error(error);
  }
}     

export async function createBlogPost(
  values: z.infer<typeof newBlogPostFormSchema>
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      throw new Error("Unauthorized");
    }

    if (!session.user || !session.user?.email) {
      throw new Error("Unauthorized");
    }

    if (!session.user?.email.endsWith("@safertunisia.com")) {
      throw new Error("Unauthorized");
    }

    await prisma.blog.create({
      data: {
        slug: slugify(values.title, {
          lower: true,
          strict: true,
        }), 
        title: values.title,
        description: values.description,
        imageUrl: values.imageURL,
        authorId: values.author,
        content: values.content,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
