import { z } from "zod";

export const searchSchema = z.object({
  keywords: z.string().optional(),
  attraction: z.string().optional(),
  location: z.string().optional(),
});

export type SearchFormSchema = z.infer<typeof searchSchema>;
