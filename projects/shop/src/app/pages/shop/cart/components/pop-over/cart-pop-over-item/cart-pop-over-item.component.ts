import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { OrderPosition } from '@shop/pages/shop/cart/store/cart.model';
import { getPriceBySize } from '@shop/pages/shop/store/articles/article.model';

@Component({
  selector: 'shop-cart-pop-over-item',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    NgOptimizedImage,
    RouterLink,
    CurrencyPipe
  ],
  templateUrl: './cart-pop-over-item.component.html',
  styleUrl: './cart-pop-over-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPopOverItemComponent {

  @Input({required: true})
  item: OrderPosition

  @Output()
  itemEvent = new EventEmitter<OrderPosition>();

  emitItem(): void {
    this.itemEvent.emit(this.item);
  }

  protected readonly getPriceBySize = getPriceBySize;
}
