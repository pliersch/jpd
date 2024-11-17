import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shop/components/navbar/navbar.component';
import { AbstractShopPageComponent } from '@shop/pages/shop/abstract-shop-page/abstract-shop-page.component';

@Component({
  selector: 'app-kratom',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './kratom.component.html',
  styleUrl: './kratom.component.scss'
})
export class KratomComponent extends AbstractShopPageComponent {

  // productCategory = 'kratom';
  // productTypes = ['white', 'green', 'red'];


}
