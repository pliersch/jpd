import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'shop-shop-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [ShopStore, DealerStore],
})
export class ShopPageComponent {


  constructor() {

  }
}
