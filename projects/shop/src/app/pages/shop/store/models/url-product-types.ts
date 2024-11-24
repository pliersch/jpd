import { Product } from '@shop/pages/shop/store/shop.model';

export function getProductFromUrl(url: string): Product | null {
  const newVar = getProductMap().get(url);
  if (!newVar) {
    return null;
  }
  return newVar;
}

function getProductMap(): Map<string, Product> {
  return new Map<string, Product>([
    ["kratom", "kratom"],
  ]);
}

export function getProductCategoryFromUrl(url: string): string | null {
  const newVar = getCategoryMap().get(url);
  if (!newVar) {
    return null;
  }
  return newVar;
}

function getCategoryMap(): Map<string, string> {
  return new Map<string, string>([
    ["home", "home"],
    ["white-vein", "white"],
    ["green-vein", "green"],
    ["red-vein", "red"],
  ]);
}
