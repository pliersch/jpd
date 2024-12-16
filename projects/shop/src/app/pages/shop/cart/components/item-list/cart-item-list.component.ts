import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CartItemComponent } from '@shop/pages/shop/cart/components/item/cart-item.component';
import { CartItem, UpdateOrderPosition } from '@shop/pages/shop/cart/store/cart.model';

@Component({
  selector: 'shop-cart-item-list',
  standalone: true,
  imports: [
    CartItemComponent,
    CurrencyPipe,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './cart-item-list.component.html',
  styleUrl: './cart-item-list.component.scss'
})
export class CartItemListComponent {

  @Input() items: Signal<CartItem[]>;

  @Output()
  quantityChange = new EventEmitter<UpdateOrderPosition>();

  @Output()
  deleteItem = new EventEmitter<number>();

  emitQuantityChange(id: number, quantity: string): void {
    this.quantityChange.emit({id: id, quantity: Number(quantity)});
  }

  onDelete(id: number): void {
    this.deleteItem.emit(id);
  }
}
