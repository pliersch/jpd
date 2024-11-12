import { Component, inject } from '@angular/core';
import { ShopStore } from '@shop/pages/shop/store/shop.store';
import { Card45Component } from 'jpd-core';

@Component({
  selector: 'app-default-list',
  standalone: true,
  imports: [
    Card45Component
  ],
  templateUrl: './default-list.component.html',
  styleUrl: './default-list.component.scss'
})
export class DefaultListComponent {

  readonly store = inject(ShopStore);
}
