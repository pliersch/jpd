import { Article } from '@shop/pages/shop/store/articles/article.model';

export type SortOrder = 'Newest' | 'Oldest' | 'HighestRating' | 'LowestRating' | 'AZ' | 'ZA';

export function sort(articles: Article[], mode: SortOrder): Article[] {
  switch (mode) {
    case 'AZ':
      return articles.sort(sortByABC);
    case 'ZA':
      return articles.sort(sortByABC);
    case 'Newest':
      return articles.sort(sortByNewest);
    case 'Oldest':
      return articles.sort(sortByOldest);
    case 'HighestRating':
      return articles.sort(sortByHighestRating);
    case 'LowestRating':
      return articles.sort(sortByLowestRating);
    default:
      return articles;
  }
}

function sortByABC(a1: Article, a2: Article): number {
  // const compare = a1.name - a2.name;
  // if (compare > 0) {
  //   return -1;
  // } else if (compare < 0) {
  //   return 1;
  // } else {
  //   return 0;
  // }
  return 0;
}

function sortByNewest(a1: Article, a2: Article): number {
  const compare = a1.date.getTime() - a2.date.getTime();
  if (compare > 0) {
    return -1;
  } else if (compare < 0) {
    return 1;
  } else {
    return 0;
  }
}

function sortByOldest(a1: Article, a2: Article): number {
  const compare = a1.date.getTime() - a2.date.getTime();
  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else {
    return 0;
  }
}

function sortByHighestRating(a1: Article, a2: Article): number {
  const compare = a1.rating - a2.rating;
  if (compare > 0) {
    return -1;
  } else if (compare < 0) {
    return 1;
  } else {
    return 0;
  }
}

function sortByLowestRating(a1: Article, a2: Article): number {
  const compare = a1.rating - a2.rating;
  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else {
    return 0;
  }
}
