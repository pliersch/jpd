// todo is it possible to use capitalizeFirstLetter
import { DealerType } from '@shop/pages/shop/store/articles/kratom/dealer.model';
import { KratomPrices, KratomStock } from '@shop/pages/shop/store/articles/kratom/kratom.model';

export type Category = 'kratom' | 'cbd' | 'miscellaneous';

export interface Article {
  id: string;
  name: string;
  product: Category;
  group: string;
  shortName: string;
  description: string;
  rating: number;
  charge: number;
  // comments: Comment[];
  dealer: DealerType;
  stock: KratomStock;
  date: Date;
  pictureUrl: string;
  prices: KratomPrices;
}

// export interface ArticleDetails {
//   id: string;
//   articleId: string;
//   charge: number;
//   description: string;
//   comments: Comment[];
//   stock: KratomStock;
//   date: Date;
// }

export interface Comment {
  userName: string;
  comment: string;
  rating: number;
  date: Date;
}

export interface CreateArticle {
  name: string;
  product: Category;
  group: string;
  charge: number;
  shortName: string;
  description: string;
  dealer: DealerType;
  stock: KratomStock;
  date?: Date;
  pictureUrl: string;
}

export interface UpdateArticle {
  name?: string;
  description?: string;
  dealer?: DealerType;
  stock?: KratomStock;
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

