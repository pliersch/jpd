import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { getProductTypeFromUrl } from '@shop/pages/shop/store/models/url-product-types';
import { Product } from '@shop/pages/shop/store/shop.model';
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

  protected abstract product: Product;
  protected abstract category: string[];

  ngOnInit(): void {
    this.store.setProduct(this.product);
    this.store.loadAll(this.product);
    // this.loadArticles(this.product);
    this.filterArticlesByUrl(this.router.url);
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
            this.filterArticlesByUrl((event as NavigationEnd).urlAfterRedirects);
          }),
        ).subscribe();
  }

  private filterArticlesByUrl(url: string): void {
    const productCategory = this.findProductCategory(url);
    if (!productCategory) {
      this.store.setCategory(undefined);
      return;
    }
    this.store.setCategory(getProductTypeFromUrl(productCategory));
  }

  private findProductCategory(url: string): string | null {
    const regExp = /kratom\/(.*)/;
    const exec = regExp.exec(url);
    return exec && exec[1] || null;
  }

}
