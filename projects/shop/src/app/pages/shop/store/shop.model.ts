export type Family = 'kratom' | 'cbd' | 'miscellaneous';
export type Category = 'white' | 'green' | 'red';
export type Dealer = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export interface Product {
  id: string;
  family: Family;
  category: Category;
}

export interface Article {
  id: string;
  name: string;
  family: Family;
  category: Category;
  description: string;
  rating: number;
  comments: Comment[];
  dealer: Dealer;
  stock: Stock;
  date: Date;
  pictureUrl: string;
}

export interface Comment {
  userName: string;
  comment: string;
  rating: number;
  date: Date;
}

export interface Stock {
  gram10: number;
  gram50: number;
  gram100: number;
  gram250: number;
  gram500: number;
  gram1000: number;
}

export interface CreateArticle {
  name: string;
  family: Family;
  category: Category;
  description: string;
  dealer: Dealer;
  stock: Stock;
  date?: Date;
  pictureUrl: string;
}

export interface UpdateArticle {
  name?: string;
  description?: string;
  dealer?: Dealer;
  stock?: Stock;
  date?: Date;
  pictureUrl?: string;
}

// export interface CreateArticleResult {
//   id: string;
//   message: string;
//   svg: string;
//   update: string;
// }

// export function sortArticles(albums: Article[], order: SortOrder): Article[] {
//   const direction = order === 'asc' ? 1 : -1;
//   return [...albums].sort((a, b) => direction * a.date.localeCompare(b.date));
// }

