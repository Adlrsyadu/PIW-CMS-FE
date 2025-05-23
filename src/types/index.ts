// Blog Types
export interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: string;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  views: number;
}

// Tour Types
export interface Tour {
  id: string;
  title: string;
  description: string;
  duration: number;
  price: number;
  location: string;
  image: string;
  maxGroupSize: number;
  difficulty: 'easy' | 'medium' | 'difficult';
  startDates: Date[];
  createdAt: Date;
  updatedAt: Date;
  featured: boolean;
  bookings: number;
}