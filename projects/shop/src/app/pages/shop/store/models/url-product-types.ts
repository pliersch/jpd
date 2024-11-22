export function getProductTypeFromUrl(url: string): string | null {
  const newVar = getMap().get(url);
  if (!newVar) {
    return null;
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
