import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CartItem } from '@shop/pages/shop/cart/store/cart.model';

@Component({
    selector: 'shop-cart-pop-over-item',
    imports: [
        MatIcon,
        MatIconButton,
        NgOptimizedImage,
        RouterLink,
        CurrencyPipe
    ],
    templateUrl: './cart-pop-over-item.component.html',
    styleUrl: './cart-pop-over-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartPopOverItemComponent {

  readonly item = input.required<CartItem>();

  @Output()
  itemEvent = new EventEmitter<number>();

  emitId(): void {
    this.itemEvent.emit(this.item().id);
  }

}
