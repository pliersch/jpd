import { Article } from '@shop/pages/shop/store/articles/article.model';

export interface Position {
  article: Article;
  count: number;
  size: number | string;
}

export function totalCost(articles: Article[]): number {
  let total = 0;
  for (const article of articles) {
    total += article.prices.price500;
  }
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
