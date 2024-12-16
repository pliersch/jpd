import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';

export interface CartSummary {
  totalCost: number;
}

@Component({
  selector: 'shop-cart-summary',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss'
})
export class CartSummaryComponent {

  @Input()
  summary: CartSummary;

}
