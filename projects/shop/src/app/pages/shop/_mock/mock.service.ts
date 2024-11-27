import { Injectable } from '@angular/core';
import { createDealer } from '@shop/pages/shop/_mock/dealer.mock-factory';
import { createKratomArticles } from '@shop/pages/shop/_mock/kratom.mock-factory';
import { Dealer } from '@shop/pages/shop/store/articles/kratom/dealer.model';
import { Kratom } from '@shop/pages/shop/store/articles/kratom/kratom.model';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private readonly kratomArticles: Kratom[];
  private readonly dealer: Dealer[];

  constructor() {
    this.kratomArticles = createKratomArticles();
    this.dealer = createDealer();
  }

  getKratomArticles(): Kratom[] {
    return this.kratomArticles;
  }

  getDealer(): Dealer[] {
    return this.dealer;
  }

}
