import { Article, Category } from '@shop/pages/shop/store/shop.model';

export function createKratomArticles(): Article[] {
  const types: Category[] = ['White', 'Green', 'Red'];
  const names: string[] = ['Bali', 'Borneo', 'Thai', 'Sumatra'];
  const articles: Article[] = [];
  console.log('createKratomArticles createKratomArticles: ',)
  let id = 1;
  for (const type of types) {
    for (const name of names) {
      articles.push(createKratomArticle(name, type, String(id++)))
    }
  }
  return articles;
}

function createKratomArticle(name: string, type: Category, id: string): Article {
  return {
    id: id,
    name: `${type} ${name}`,
    rating: 0,
    date: new Date(),
    category: type,
    description: 'foo', //LoremIpsumFactory.getText(150),
    comments: [],
    dealer: 'A',
    stock: {gram10: 20, gram50: 25, gram100: 30, gram250: 70, gram500: 10, gram1000: 8},
    pictureUrl: ''
  }
}
