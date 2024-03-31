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
  author: z.string({
    required_error: "Author is required",
  }),
});

export type NewBlogPostForm = z.infer<typeof newBlogPostFormSchema>;

export const productSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be at most 100 characters"),
  type: z
    .string()
    .min(1, "Type is required")
    .max(50, "Type must be at most 50 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(500, "Description must be at most 500 characters"),
  duration: z
    .string()
    .min(1, "Duration is required")
    .max(50, "Duration must be at most 50 characters"),
  difficulty: z
    .string()
    .min(1, "Difficulty is required")
    .max(50, "Difficulty must be at most 50 characters"),
  minAge: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z
      .number()
      .min(0, "Min age must be 0 or greater")
      .max(120, "Max age cannot exceed 120")
  ),
  imageUrl: z.string().url({ message: "Please enter a valid URL." }),
  requirements: z
    .string()
    .min(1, "Requirements is required")
    .max(500, "Requirements must be at most 500 characters"),
  price: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z
      .number()
      .min(0, "Price must be 0 or greater")
      .max(1000000, "Price cannot exceed 1,000,000")
  ),
  date: z.string().min(1, "Date is required"), // Assuming this is a string representation of a date
  location: z
    .string()
    .min(1, "Location is required")
    .max(100, "Location must be at most 100 characters"),
  gallery: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .min(1, "At least one gallery image is required"),
});

export type Product = z.infer<typeof productSchema>;
