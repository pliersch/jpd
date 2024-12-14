import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ShopCard1Component } from '@shop/pages/shop/detail/components/product-detail/shop-card/shop-card1.component';
import { ShopStore } from '@shop/pages/shop/store/shop.store';

@Component({
  selector: 'shop-default-list',
  standalone: true,
  imports: [
    ShopCard1Component
  ],
  templateUrl: './default-list.component.html',
  styleUrl: './default-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultListComponent {

  readonly store = inject(ShopStore);
}
