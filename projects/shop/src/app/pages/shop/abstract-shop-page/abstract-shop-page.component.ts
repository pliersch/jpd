import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { getProductTypeFromUrl } from '@shop/pages/shop/store/models/url-product-types';
import { Category, Family, ProductCategory } from '@shop/pages/shop/store/shop.model';
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

  private router: Router = inject(Router);
  private subscription: Subscription = new Subscription();
  readonly store = inject(ShopStore);

  ngOnInit(): void {
    this.loadArticlesByUrl(this.router.url);
    this.subscribeRouterEvents();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscribeRouterEvents(): void {
    this.subscription =
      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd),
          tap(event => {
            this.loadArticlesByUrl((event as NavigationEnd).urlAfterRedirects);
          }),
        ).subscribe();
  }

  private loadArticlesByUrl(url: string): void {
    const productCategory = this.findProductCategory(url);
    const productRequest =
      this.createRequestObj('kratom', getProductTypeFromUrl(productCategory));
    this.store.setProductsCategory(productRequest);
    // this.store.loadProductsByCategoryAndFamily(productRequest)
  }

  private createRequestObj(family: string, category: string): ProductCategory {
    return {id: family.concat(category), family: family as Family, category: category as Category}
  }

  private findProductCategory(url: string): string {
    const regExp = /kratom\/(.*)/;
    return regExp.exec(url)![1];
  }

}
