import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavMenuComponent } from '@shop/components/side-nav-menu/side-nav-menu.component';

@Component({
    selector: 'shop-shop-page',
    imports: [
        CommonModule,
        RouterOutlet,
        SideNavMenuComponent,
    ],
    templateUrl: './shop-page.component.html',
    styleUrls: ['./shop-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopPageComponent {


  constructor() {

  }
}
