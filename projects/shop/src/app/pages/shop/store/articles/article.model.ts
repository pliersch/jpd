// todo is it possible to use capitalizeFirstLetter
import { DealerType } from '@shop/pages/shop/store/articles/kratom/dealer.model';

export type Category = 'kratom' | 'cbd' | 'miscellaneous';

export type ArticleSize = number | string;

export interface Data {
  index: number;
  size: ArticleSize;
  price: number;
  stock: number;
  // kgPrice?: number;
}

export interface Article {
  id: string;
  name: string;
  product: Category;
  group: string;
  shortName: string;
  description: string;
  price: number;
  rating: number;
  charge: number;
  // comments: Comment[];
  dealer: DealerType;
  date: Date;
  pictureUrl: string;
  tags: string[];
  data: Data[]
}

export function getDataBySize(article: Article, size: string | number): Data {
  const find = article.data.find(item => item.size === size);
  if (!find) {
    throw new Error('No data found.');
  }
  return find;
}

export function getPriceBySize(article: Article, size: string | number): number {
  const find = article.data.find(item => item.size === size);
  if (!find) {
    throw new Error('No data found.');
  }
  return find.price;
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

export interface Tag {
  id: number;
  name: string;
}

export interface CreateArticle {
  name: string;
  product: Category;
  group: string;
  charge: number;
  shortName: string;
  description: string;
  dealer: DealerType;
  data: Data[];
  date?: Date;
  pictureUrl: string;
}

export interface UpdateArticle {
  name?: string;
  description?: string;
  dealer?: DealerType;
  // stock?: KratomStock;
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

