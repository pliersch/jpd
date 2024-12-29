import { Article } from '@shop/pages/shop/store/articles/article.model';

export interface Kratom extends Article {

}

export type KratomTag = 'Lab-Tested' | 'Fermented' | 'Ultra';

// export interface KratomDetails extends ArticleDetails {
//   prices: KratomPrices;
//   stock: KratomStock;
// }

//
// export interface KratomPrices {
//   prices: KratomPrice[];
// }
//
// export interface KratomPrice {
//   weight: KratomWeight;
//   price: number;
// }
//
// export interface KratomStock {
//   stock10: number;
//   stock50: number;
//   stock100: number;
//   stock250: number;
//   stock500: number;
//   stock1000: number;
// }
