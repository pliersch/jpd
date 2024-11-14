import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { getProductTypeFromUrl } from '@shop/pages/shop/store/models/url-product-types';
import { Category, Family, Product } from '@shop/pages/shop/store/shop.model';
import { ShopStore } from '@shop/pages/shop/store/shop.store';
import { filter, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-abstract-shop-page',
  standalone: true,
  imports: [],
  templateUrl: './abstract-shop-page.component.html',
  styleUrl: './abstract-shop-page.component.scss'
})
export abstract class AbstractShopPageComponent implements OnInit, OnDestroy {

  protected router: Router = inject(Router);
  // protected location: Location = inject(Location);

  private subscription: Subscription;

  // abstract productCategory: string;
  // abstract productTypes: string[];

  readonly store = inject(ShopStore);

  ngOnInit(): void {
    this.subscription =
      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd),
          // tap(event => console.log((event as NavigationEnd).url)),
          // tap(event => console.log((event as NavigationEnd).urlAfterRedirects)),
          // tap(event => this.productCategory = (event as NavigationEnd).url),
          tap(event => {
            const category = this.parseProductCategory((event as NavigationEnd).urlAfterRedirects);
            const rxProductRequest =
              this.createRequestObj('Kratom', getProductTypeFromUrl(category));
            this.store.loadProductsByCategoryAndFamily(rxProductRequest)
          }),
        ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private createRequestObj(family: string, category: string): Product {
    return {id: family.concat(category), family: family as Family, category: category as Category}
  }

  private parseProductCategory(url: string): string {
    const regExp = /kratom\/(.*)/;
    return regExp.exec(url)![1];
  }

}
