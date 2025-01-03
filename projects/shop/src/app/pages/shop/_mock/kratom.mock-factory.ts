import { Category } from '@shop/pages/shop/store/articles/article.model';
import { DealerType } from '@shop/pages/shop/store/articles/kratom/dealer.model';
import { Kratom, KratomTag } from '@shop/pages/shop/store/articles/kratom/kratom.model';
import { LoremIpsumFactory } from 'jpd-core';

export function createKratomArticles(): Kratom[] {
  // todo 'Type' sounds better then 'Category'
  const types: string[] = ['white', 'green', 'red'];
  const names: string[] = ['Bali', 'Borneo', 'Thai', 'Sumatra'];
  const articles: Kratom[] = [];
  let id = 1;
  for (const type of types) {
    for (const name of names) {
      articles.push(createKratomArticle(name, 'kratom', type, randomDealer(), String(id++)));
    }
  }
  return articles;
}

function createKratomArticle(
  name: string,
  product: Category,
  category: string,
  dealer: DealerType,
  id: string,
): Kratom {
  return {
    id: id,
    name: `${capitalizeFirstLetter(category)} ${name}`,
    rating: randomRating(),
    date: new Date(),
    product: product,
    group: category,
    price: 0,
    charge: randomIntFromInterval(1000, 9999),
    shortName: createShortName(name, category, dealer),
    description: LoremIpsumFactory.getText(150),
    // comments: [],
    dealer: dealer,
    data: [
      { index: 0, size: '10 Gramm', price: 2, stock: 20 },
      { index: 1, size: '50 Gramm', price: 8.5, stock: 25 },
      { index: 2, size: '100 Gramm', price: 15.45, stock: 22 },
      { index: 3, size: '250 Gramm', price: 30.5, stock: 17 },
      { index: 4, size: '500 Gramm', price: 50, stock: 11 },
      { index: 5, size: '1000 Gramm', price: 80, stock: 33 },
    ],
    pictureUrl: 'kratom_red_hell-250x250.png',
    tags: [category, 'Händler ' + dealer, ...randomTags()],
  };
}

function capitalizeFirstLetter(val: string): string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function randomIntFromInterval(min: number, max: number): number {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomRating(): number {
  return randomIntFromInterval(1, 5);
}

function randomTags(): KratomTag[] {
  const tags: KratomTag[] = ['Lab-Tested', 'Fermented', 'Ultra'];
  const random1: KratomTag[] = [tags[0], tags[1]];
  const random2: KratomTag[] = [tags[0], tags[2]];
  const random3: KratomTag[] = [tags[1], tags[2]];
  const random4: KratomTag[] = [tags[0]];
  const random5: KratomTag[] = [tags[1]];
  const random6: KratomTag[] = [tags[2]];
  const all = [random1, random2, random3, random4, random5, random6];
  return all[randomIntFromInterval(0, 5)];
}

function randomDealer(): DealerType {
  const dealers: DealerType[] = ['A', 'B', 'C', 'D', 'E', 'F'];
  return dealers[randomIntFromInterval(0, 5)];
}

function createShortName(name: string, category: string, dealer: DealerType): string {
  return dealer.charAt(0).toUpperCase().concat(category.charAt(0)).toUpperCase().concat(name.charAt(0)).toUpperCase();
}
