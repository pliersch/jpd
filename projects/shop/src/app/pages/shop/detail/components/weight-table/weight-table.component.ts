import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { KratomPrices, KratomStock } from '@shop/pages/shop/store/articles/kratom/kratom.model';

@Component({
  selector: 'shop-weight-table',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './weight-table.component.html',
  styleUrl: './weight-table.component.scss'
})
export class WeightTableComponent {

  @Input({required: true})
  prices: KratomPrices;

  @Input({required: true})
  stock: KratomStock;
}
