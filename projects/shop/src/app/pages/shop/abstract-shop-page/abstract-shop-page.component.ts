import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ShopStore } from '@shop/pages/shop/store/shop.store';
import { filter } from 'rxjs';

@Component({
  selector: 'app-abstract-shop-page',
  standalone: true,
  imports: [],
  templateUrl: './abstract-shop-page.component.html',
  styleUrl: './abstract-shop-page.component.scss'
})
export abstract class AbstractShopPageComponent implements OnInit {

  protected router: Router = inject(Router);

  protected productCategory: string;

  readonly store = inject(ShopStore);

  ngOnInit(): void {
    console.log('AbstractShopPageComponent ngOnInit: ', this.router.url)
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event) => {
      console.log(event);

    });
  }

}
