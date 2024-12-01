import { Article } from '@shop/pages/shop/store/articles/article.model';

export interface Kratom extends Article {

}

// export interface KratomDetails extends ArticleDetails {
//   prices: KratomPrices;
//   stock: KratomStock;
// }

export interface KratomPrices {
  price10: number;
  price50: number;
  price100: number;
  price250: number;
  price500: number;
  price1000: number;
}

export interface KratomStock {
  stock10: number;
  stock50: number;
  stock100: number;
  stock250: number;
  stock500: number;
  stock1000: number;
}

// export type KratomWeight = '10' | '50' | '100' | '250' | '500' | '1000';
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
