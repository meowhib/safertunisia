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
  content: string;
  duration: string;
  difficulty: string;
  maxAdults: number;
  minAdults: number;
  priceAdults: number;
  maxChildren: number;
  minChildren: number;
  priceChildren: number;
  minAge: number;
  imageUrl: string | null;
  requirement: string | null;
  date: string | null;
  location: string | null;
  destination: string | null;
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

export type ProductFormValues = {
  id: string;
  date: string | null;
  priceAdults: number;
  minAdults: number;
  maxAdults: number;
  priceChildren: number;
  minChildren: number;
  maxChildren: number;
};
