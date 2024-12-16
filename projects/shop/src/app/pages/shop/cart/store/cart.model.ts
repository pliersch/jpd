export interface OrderPosition {
  id: number;
  entityId: number;
  quantity: number;
  size: string;
}

export interface CreateOrderPositionDto {
  entityId: number;
  quantity: number;
  size: string;
}

export function createOrderPositionDto(entityId: number, quantity: number, size: string): CreateOrderPositionDto {
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
  }
}

export function totalCost(positions: CartItem[]): number {
  let total = 0;
  for (const pos of positions) {
    total += pos.quantity * pos.price!;
  }
  return total;
}

export interface CartItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  size: string;
  price: number;
  quantity: number;
  routerLink: string[];
}
