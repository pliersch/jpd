import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { OrderPosition } from '@shop/pages/shop/shared/models/orderPosition';

@Component({
  selector: 'shop-cart-pop-over-item',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    NgOptimizedImage
  ],
  templateUrl: './cart-pop-over-item.component.html',
  styleUrl: './cart-pop-over-item.component.scss'
})
export class CartPopOverItemComponent {

  @Input({required: true})
  item: OrderPosition

  @Output()
  itemEvent = new EventEmitter<OrderPosition>();

  emitItem(): void {
    this.itemEvent.emit(this.item);
  }

}
