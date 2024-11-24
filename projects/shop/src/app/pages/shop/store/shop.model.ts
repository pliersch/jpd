// todo is it possible to use capitalizeFirstLetter
import { DealerType } from '@shop/pages/shop/store/dealer/dealer.model';

export type Product = 'kratom' | 'cbd' | 'miscellaneous';

export interface Article {
  id: string;
  name: string;
  product: Product;
  category: string;
  charge: number;
  shortName: string;
  description: string;
  rating: number;
  comments: Comment[];
  dealer: DealerType;
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
  product: Product;
  category: string;
  charge: number;
  shortName: string;
  description: string;
  dealer: DealerType;
  stock: Stock;
  date?: Date;
  pictureUrl: string;
}

export interface UpdateArticle {
  name?: string;
  description?: string;
  dealer?: DealerType;
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

