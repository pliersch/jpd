import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ShopStore } from '@shop/pages/shop/store/shop.store';
import { ShopCard1Component } from 'jpd-core';

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
