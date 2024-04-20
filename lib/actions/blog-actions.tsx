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

export async function getLatestBlogPosts() {
  const blogPosts = await prisma.blog.findMany({
    select: {
      title: true,
      description: true,
      imageUrl: true,
      slug: true,
      createdAt: true,
      author: {
        select: {
          name: true,
          role: true,
          imageUrl: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
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
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  if (!session.user || !session.user?.email) {
    redirect("/api/auth/signin");
  }

  if (!session.user?.email.endsWith("@safertunisia.com")) {
    redirect("/api/auth/signin");
  }

  await prisma.blog.delete({
    where: {
      slug: slug,
    },
  });

  revalidatePath("/blog", "page");
  revalidatePath("/", "page");
  redirect("/blog");
}

export async function updateBlogPost(
  slug: string,
  values: z.infer<typeof newBlogPostFormSchema>
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  if (!session.user || !session.user?.email) {
    redirect("/api/auth/signin");
  }

  if (!session.user?.email.endsWith("@safertunisia.com")) {
    redirect("/api/auth/signin");
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

  revalidatePath("/blog", "page");
  revalidatePath("/", "page");
  redirect("/blog");
}

export async function createBlogPost(
  values: z.infer<typeof newBlogPostFormSchema>
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  if (!session.user || !session.user?.email) {
    redirect("/api/auth/signin");
  }

  if (!session.user?.email.endsWith("@safertunisia.com")) {
    redirect("/api/auth/signin");
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

  revalidatePath("/blog", "page");
  revalidatePath("/", "page");
  redirect("/blog");
}
