import { Article, ArticleSize } from '@shop/pages/shop/store/articles/article.model';

export interface KratomTableData {
  size: ArticleSize;
  price: number;
  kgPrice: number;
  stock: number;
}

export function createTableData(article: Article): KratomTableData[] {
  const data = article.data;
  const tableData: KratomTableData[] = [];
  let size = 0;
  let factor = 0;
  for (const item of data) {
    size = Number(item.size);
    factor = 1000 / size;
    tableData.push(
      {size: size, price: item.price, kgPrice: item.price * factor, stock: item.stock}
    )
  }
  return tableData;
}
