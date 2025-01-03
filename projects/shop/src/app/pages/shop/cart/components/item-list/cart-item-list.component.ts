import { Component, inject, Signal, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { LargeCartItemComponent } from '@shop/pages/shop/cart/components/item-list/large/large-cart-item.component';
import { SmallCartItemComponent } from '@shop/pages/shop/cart/components/item-list/small/small-cart-item.component';
import { CartItem, UpdateOrderPosition } from '@shop/pages/shop/cart/store/cart.model';
import { BreakpointService, Dimension } from 'jpd-core';
import { map } from 'rxjs/operators';

@Component({
    selector: 'shop-cart-item-list',
    imports: [
        LargeCartItemComponent,
        SmallCartItemComponent
    ],
    templateUrl: './cart-item-list.component.html',
    styleUrl: './cart-item-list.component.scss'
})
export class CartItemListComponent {

  readonly items = input<CartItem[]>();

  readonly quantityChange = output<UpdateOrderPosition>();

  readonly deleteItem = output<number>();

  isSmall: Signal<boolean | undefined>;

  private breakpointService: BreakpointService = inject(BreakpointService);

  constructor() {
    this.isSmall = toSignal(this.breakpointService.dimension$.pipe(
      map(dimension => dimension === Dimension.XSmall ||
        dimension === Dimension.Small),));
  }
}
