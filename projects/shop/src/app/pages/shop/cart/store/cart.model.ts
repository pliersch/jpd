import { OrderPosition } from '@shop/pages/shop/shared/models/orderPosition';

export function totalCost(positions: OrderPosition[]): number {
  let total = 0;
  for (const pos of positions) {
    total += pos.quantity * pos.article.prices.price100;
  }
  console.log('totalCost totalCost: ', total);
  return total;
}

// export function sortById(p1: Video, p2: Video): number {
//   const compare = Number(p1.artist.at(0)) - Number(p2.artist.at(0));
//   if (compare > 0) {
//     return 1;
//   } else if (compare < 0) {
//     return -1;
//   } else {
//     return 0;
//   }
// }
