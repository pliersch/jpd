import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Article } from '@shop/pages/shop/store/shop.model';
import { ShopService } from '@shop/pages/shop/store/shop.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  shopService = inject(ShopService);

  @Input() // read id from url (withComponentInputBinding)
  set id(heroId: string) {
    this.article$ = this.shopService.getById(heroId);
  }

  article$: Observable<Article>

  // productDetail: Signal<Article | undefined> = toSignal(
  //   toObservable(this.id).pipe(switchMap((id) => this.shopService.getById(id)))
  // )

}
