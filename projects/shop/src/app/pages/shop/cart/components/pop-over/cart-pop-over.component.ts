import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatAnchor, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { cartIconAnimation } from '@shop/pages/shop/cart/components/pop-over/cart-icon-animation';
import {
  CartPopOverItemComponent
} from '@shop/pages/shop/cart/components/pop-over/cart-pop-over-item/cart-pop-over-item.component';
import { CartStore } from '@shop/pages/shop/cart/store/cart.store';
import { PosterComponent } from 'jpd-core';

@Component({
    selector: 'shop-cart-pop-over',
    imports: [
        PosterComponent,
        CdkOverlayOrigin,
        MatIcon,
        MatIconButton,
        CdkConnectedOverlay,
        RouterLink,
        MatAnchor,
        CurrencyPipe,
        CartPopOverItemComponent
    ],
    templateUrl: './cart-pop-over.component.html',
    styleUrl: './cart-pop-over.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [cartIconAnimation]
})
export class CartPopOverComponent {

  cartStore = inject(CartStore);

  isOpen = false;

  close(): void {
    this.isOpen = false;
  }

  delete($event: number): void {
    this.cartStore.remove($event);
  }
}
