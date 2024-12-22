import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CartItem, UpdateOrderPosition } from '@shop/pages/shop/cart/store/cart.model';

@Component({
    selector: 'shop-large-cart-item',
    imports: [
        CurrencyPipe,
        MatIcon,
        MatIconButton,
        NgOptimizedImage,
        RouterLink
    ],
    templateUrl: './large-cart-item.component.html',
    styleUrl: './large-cart-item.component.scss'
})
export class LargeCartItemComponent {

  @Input({required: true})
  item: CartItem

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
