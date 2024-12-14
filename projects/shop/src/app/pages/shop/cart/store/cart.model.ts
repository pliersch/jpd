import { ArticleSize } from '@shop/pages/shop/store/articles/article.model';

export interface OrderPosition {
  id: number;
  entityId: number;
  quantity: number;
  size: ArticleSize;
}

export interface CreateOrderPositionDto {
  entityId: number;
  quantity: number;
  size: ArticleSize;
}

export function createOrderPositionDto(entityId: number, quantity: number, size: ArticleSize): CreateOrderPositionDto {
  return {
    entityId: entityId, quantity, size
  }
}

export function createOrderPosition(dto: CreateOrderPositionDto, id: number): OrderPosition {
  return {
    id: id,
    entityId: dto.entityId,
    size: dto.size,
    quantity: dto.quantity,
    // price: getPriceBySize(dto.article, dto.size)
  }
}

export function totalCost(positions: CartItem[]): number {
  let total = 0;
  for (const pos of positions) {
    total += pos.quantity * pos.price!;
  }
  return total;
  // return 42;
}

export interface CartItem {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  size: ArticleSize;
  price: number;
  quantity: number;
  routerLink: string[];
}
