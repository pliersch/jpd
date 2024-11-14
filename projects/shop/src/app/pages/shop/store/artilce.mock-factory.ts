import { Article, Category, Family } from '@shop/pages/shop/store/shop.model';
import { LoremIpsumFactory } from 'jpd-core';

export function createKratomArticles(): Article[] {
  const types: Category[] = ['white', 'green', 'red'];
  const names: string[] = ['Bali', 'Borneo', 'Thai', 'Sumatra'];
  const articles: Article[] = [];
  let id = 1;
  for (const type of types) {
    for (const name of names) {
      articles.push(createKratomArticle(name, 'kratom', type, String(id++)))
    }
  }
  return articles;
}

function createKratomArticle(name: string, family: Family, type: Category, id: string): Article {
  return {
    id: id,
    name: `${type} ${name}`,
    rating: 0,
    date: new Date(),
    family: family,
    category: type,
    description: LoremIpsumFactory.getText(150),
    comments: [],
    dealer: 'A',
    stock: {gram10: 20, gram50: 25, gram100: 30, gram250: 70, gram500: 10, gram1000: 8},
    pictureUrl: ''
  }
}
