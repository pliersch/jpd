import { Component } from '@angular/core';
import { ProductFilterComponent } from '@shop/components/product-filter/product-filter.component';
import { DefaultListComponent } from '@shop/pages/shop/default-list/default-list.component';

@Component({
  selector: 'app-shop-container',
  standalone: true,
  imports: [
    DefaultListComponent,
    ProductFilterComponent
  ],
  templateUrl: './shop-container.component.html',
  styleUrl: './shop-container.component.scss'
})
export class ShopContainerComponent {

}
