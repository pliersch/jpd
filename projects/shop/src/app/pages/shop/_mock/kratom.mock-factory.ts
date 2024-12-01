import { Category } from '@shop/pages/shop/store/articles/article.model';
import { DealerType } from '@shop/pages/shop/store/articles/kratom/dealer.model';
import { Kratom } from '@shop/pages/shop/store/articles/kratom/kratom.model';
import { LoremIpsumFactory } from 'jpd-core';

export function createKratomArticles(): Kratom[] {
  // todo 'Type' sounds better then 'Category'
  const types: string[] = ['white', 'green', 'red'];
  const names: string[] = ['Bali', 'Borneo', 'Thai', 'Sumatra'];
  const articles: Kratom[] = [];
  let id = 1;
  for (const type of types) {
    for (const name of names) {
      articles.push(createKratomArticle(name, 'kratom', type, randomDealer(), String(id++)))
    }
  }
  return articles;
}

function createKratomArticle(name: string, product: Category, category: string, dealer: DealerType, id: string): Kratom {
  return {
    id: id,
    name: `${capitalizeFirstLetter(category)} ${name}`,
    rating: randomRating(),
    date: new Date(),
    product: product,
    group: category,
    charge: randomIntFromInterval(1000, 9999),
    shortName: createShortName(name, category, dealer),
    description: LoremIpsumFactory.getText(150),
    // comments: [],
    dealer: dealer,
    prices: {price10: 2.00, price50: 8.5, price100: 15.44, price250: 30.5, price500: 50, price1000: 80},
    stock: {stock10: 20, stock50: 25, stock100: 30, stock250: 70, stock500: 10, stock1000: 8},
    pictureUrl: 'kratom_red_hell-250x250.png'
  }
}

function capitalizeFirstLetter(val: string): string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function randomIntFromInterval(min: number, max: number): number { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomRating(): number {
  return randomIntFromInterval(1, 5);
}

function randomDealer(): DealerType {
  const dealers: DealerType[] = ['A', 'B', 'C', 'D', 'E', 'F'];
  return dealers[randomIntFromInterval(0, 5)];
}

function createShortName(name: string, category: string, dealer: DealerType): string {
  return dealer.charAt(0).toUpperCase()
    .concat(category.charAt(0)).toUpperCase()
    .concat(name.charAt(0)).toUpperCase();
}
