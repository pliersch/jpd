import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartItemListComponent } from '@shop/pages/shop/cart/components/item-list/cart-item-list.component';
import { ShipmentComponent } from '@shop/pages/shop/cart/components/shipment/shipment.component';
import { CartSummaryComponent } from '@shop/pages/shop/cart/components/summary/cart-summary.component';
import { UpdateOrderPosition } from '@shop/pages/shop/cart/store/cart.model';
import { CartStore } from '@shop/pages/shop/cart/store/cart.store';

@Component({
  selector: 'shop-cart',
  standalone: true,
  imports: [
    CartItemListComponent,
    CartSummaryComponent,
    ShipmentComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {

  cartStore = inject(CartStore);

  onDelete(id: number): void {
    this.cartStore.remove(id);
  }

  changeQuantity(update: UpdateOrderPosition): void {
    this.cartStore.update(update);
  }

}
