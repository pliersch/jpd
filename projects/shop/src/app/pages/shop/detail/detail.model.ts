import { Article } from '@shop/pages/shop/store/articles/article.model';

export interface KratomTableData {
  size: string;
  price: number;
  kgPrice: number;
  stock: number;
}

export function createTableData(article: Article): KratomTableData[] {
  const data = article.data;
  const tableData: KratomTableData[] = [];
  let sizeAsNumber = 0;
  let factor = 0;
  for (const item of data) {
    sizeAsNumber = Number(item.size.split(' ')[0]);
    factor = 1000 / sizeAsNumber;
    tableData.push(
      {size: item.size, price: item.price, kgPrice: item.price * factor, stock: item.stock}
    )
  }
  return tableData;
}
