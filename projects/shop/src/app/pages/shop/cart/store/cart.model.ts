import { Article, getPriceBySize } from '@shop/pages/shop/store/articles/article.model';

export interface OrderPosition {
  id: number;
  article: Article;
  quantity: number;
  size: number | string;
}

export interface ExtendedOrderPosition extends OrderPosition {
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

export function totalCost(positions: OrderPosition[]): number {
  let total = 0;
  for (const pos of positions) {
    total += pos.quantity * getPriceBySize(pos.article.data, pos.size);
  }
  return total;
}
