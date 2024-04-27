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
  name: z.string().min(1, "Name is required"),
  type: z.string().min(1, "Type is required"),
  description: z.string().min(1, "Description is required"),
  duration: z.string().min(1, "Duration is required"),
  difficulty: z.string().min(1, "Difficulty is required"),
  maxAdults: z.preprocess(
    (val) => parseInt(val as string, 10),
    z.number().int().positive({
      message: "Max adults must be a positive integer",
    })
  ),
  minAdults: z.preprocess(
    (val) => parseInt(val as string, 10),
    z.number().int().positive({
      message: "Min adults must be a positive integer",
    })
  ),
  priceAdults: z.preprocess(
    (val) => parseFloat(val as string),
    z.number().nonnegative({
      message: "Price for adults must be a non-negative number",
    })
  ),
  maxChildren: z.preprocess(
    (val) => parseInt(val as string, 10),
    z.number().int().nonnegative({
      message: "Max children must be a non-negative integer",
    })
  ),
  minChildren: z.preprocess(
    (val) => parseInt(val as string, 10),
    z.number().int().nonnegative({
      message: "Min children must be a non-negative integer",
    })
  ),
  priceChildren: z.preprocess(
    (val) => parseFloat(val as string),
    z.number().nonnegative({
      message: "Price for children must be a non-negative number",
    })
  ),
  minAge: z.preprocess(
    (val) => parseInt(val as string, 10),
    z.number().int().positive({
      message: "Min age must be a positive integer",
    })
  ),
  imageUrl: z.string().url("Invalid image URL"),
  requirement: z.string().min(1, "Requirement is required"),
  date: z.string().min(1, "Date is required"),
  location: z.string().min(1, "Location is required"),
  destination: z.string().min(1, "Destination is required"),
  gallery: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .min(1, "At least one gallery image is required"),
});

export type Product = z.infer<typeof productSchema>;
