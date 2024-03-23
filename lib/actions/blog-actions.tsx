"use server";

import prisma from "@/lib/prisma";
import { newBlogPostFormSchema } from "../validations";
import * as z from "zod";
import slugify from "slugify";

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
  await prisma.blog.delete({
    where: {
      slug: slug,
    },
  });

  console.log("Blog post deleted successfully");
  return true;
}

export async function updateBlogPost(
  slug: string,
  values: z.infer<typeof newBlogPostFormSchema>
) {
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
  return true;
}     

export async function createBlogPost(
  values: z.infer<typeof newBlogPostFormSchema>
) {
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

  console.log("Blog post created successfully");
  return true;
}
