export interface Recipe {
  id: number;
  flour1: number;
  flour2: number;
  water: number;
  temperature: number;
  yeast: number;
  fermentation1: number;
  fermentation2: number;
}

export function createRecipe(
  id: number, flour1: number,
  flour2: number,
  water: number,
  temperature: number,
  yeast: number,
  fermentation1: number,
  fermentation2: number): Recipe {
  return {
    id,
    flour1,
    flour2,
    water,
    temperature,
    yeast,
    fermentation1,
    fermentation2
  }
}

export function getMockRecipe(): Recipe {
  return {
    id: 1,
    flour1: 5,
    flour2: 5,
    water: 5,
    temperature: 5,
    yeast: 5,
    fermentation1: 5,
    fermentation2: 5,
  }
}
