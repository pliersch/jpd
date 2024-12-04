import { Article } from '@shop/pages/shop/store/articles/article.model';

export interface OrderPosition {
  id: number;
  article: Article;
  quantity: number;
  size: number | string;
}

export interface CreateOrderPositionDto {
  article: Article;
  quantity: number;
  size: number | string;
}

export function createOrderPosition(article: Article, quantity: number, size: number | string): CreateOrderPositionDto {
  return {
    article, quantity, size
  }
}
