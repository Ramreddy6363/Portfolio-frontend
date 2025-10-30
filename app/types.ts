export type Project = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  excerpt?: string;
  image: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  author: string;
  image: string;
  body?: string;
};

export type StrapiResponse<T> = {
  data: T[];
};

export type StrapiPost = {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  body: string;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
};

export type StrapiProject = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  excerpt?: string;
  image?: {
    url: string;
    format?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
  url: string;
  date: string;
  category: string;
  featured: boolean;
};
