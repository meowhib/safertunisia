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

export type ProductProps = {
  id: string;
  name: string;
  type: string;
  description: string;
  duration: string;
  difficulty: string;
  minAge: number;
  imageUrl: string;
  requirements: string;
  price: number;
  date: string;
  location: string;
  gallery: string[];
};

export type BlogProps = {
  slug: string;
  title: string;
  description: string;
  imageUrl: string | null;
  author: {
    name: string;
    role: string | null;
    imageUrl: string | null;
  };
  createdAt: Date;
};