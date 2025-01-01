import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CartItem, UpdateOrderPosition } from '@shop/pages/shop/cart/store/cart.model';

@Component({
    selector: 'shop-small-cart-item',
    imports: [
        CurrencyPipe,
        MatIcon,
        MatIconButton,
        NgOptimizedImage,
        RouterLink
    ],
    templateUrl: './small-cart-item.component.html',
    styleUrl: './small-cart-item.component.scss'
})
export class SmallCartItemComponent {

  readonly item = input.required<CartItem>();

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
