export type Blog = {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Author = {
  id: string;
  email: string;
};