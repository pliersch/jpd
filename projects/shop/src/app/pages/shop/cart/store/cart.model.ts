import { Article, getPriceBySize } from '@shop/pages/shop/store/articles/article.model';

export interface OrderPosition {
  id: number;
  article: Article;
  quantity: number;
  size: number | string;
  price?: number;
}

export interface CreateOrderPositionDto {
  article: Article;
  quantity: number;
  size: number | string;
}

export function createOrderPositionDto(article: Article, quantity: number, size: number | string): CreateOrderPositionDto {
  return {
    article, quantity, size
  }
}

export function createOrderPosition(dto: CreateOrderPositionDto, id: number): OrderPosition {
  return {
    id: id,
    article: dto.article,
    size: dto.size,
    quantity: dto.quantity,
    price: getPriceBySize(dto.article, dto.size)
  }
}

export function totalCost(positions: OrderPosition[]): number {
  let total = 0;
  for (const pos of positions) {
    total += pos.quantity * getPriceBySize(pos.article, pos.size);
  }
  return total;
}
