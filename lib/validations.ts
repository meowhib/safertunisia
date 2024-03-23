import { z } from "zod";

export const searchSchema = z.object({
  keywords: z.string().optional(),
  attraction: z.string().optional(),
  location: z.string().optional(),
});

export type SearchFormSchema = z.infer<typeof searchSchema>;

export const newBlogPostFormSchema = z.object({
  title: z.string(),
  content: z.string(),
  description: z.string(),
  imageURL: z.string(),
  author: z
    .string({
      required_error: "Author is required",
    })
});

export type NewBlogPostForm = z.infer<typeof newBlogPostFormSchema>;
