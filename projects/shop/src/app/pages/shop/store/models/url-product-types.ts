export function getProductTypeFromUrl(url: string): string {
  const newVar = getMap().get(url);
  if (!newVar) {
    throw new Error(`Cannot get product type for ${url}`);
  }
  return newVar;
}

function getMap(): Map<string, string> {
  return new Map<string, string>([
    ["home", "home"],
    ["white-vein", "white"],
    ["green-vein", "green"],
    ["red-vein", "red"],
  ]);
}
