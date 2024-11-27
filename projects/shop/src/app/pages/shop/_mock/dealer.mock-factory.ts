import { Dealer, DealerType } from '@shop/pages/shop/store/articles/kratom/dealer.model';
import { LoremIpsumFactory } from 'jpd-core';

export function createDealer(): Dealer[] {
  const dealers: DealerType[] = ['A', 'B', 'C', 'D', 'E', 'F'];
  const foo: Dealer[] = [];
  for (const dealer of dealers) {
    foo.push({id: dealer, dealerType: dealer, info: 'Händler ' + dealer + ' ' + LoremIpsumFactory.getText(100)});
  }
  return foo;
}
