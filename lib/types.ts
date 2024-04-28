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
  imageUrl: string;
  requirement: string;
  date: string;
  location: string;
  destination: string;
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
