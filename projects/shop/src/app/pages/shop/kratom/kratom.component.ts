import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbstractShopPageComponent } from '@shop/pages/shop/abstract-shop-page/abstract-shop-page.component';

@Component({
  selector: 'app-kratom',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './kratom.component.html',
  styleUrl: './kratom.component.scss'
})
export class KratomComponent extends AbstractShopPageComponent {

}
