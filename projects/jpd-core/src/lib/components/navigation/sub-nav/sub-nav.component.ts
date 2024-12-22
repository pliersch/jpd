import { CommonModule } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AbstractNavigationComponent } from '../base/behavior/abstract-navigation.component';

@Component({
    selector: 'a4w-sub-nav',
    imports: [CommonModule, MatMenuModule, MatListModule, RouterLink, RouterLinkActive, MatButtonModule],
    templateUrl: './sub-nav.component.html',
    styleUrl: './sub-nav.component.scss',
    providers: [
        {
            provide: AbstractNavigationComponent,
            useExisting: forwardRef(() => SubNavComponent)
        }
    ]
})
export class SubNavComponent extends AbstractNavigationComponent {

  constructor() {super();}

}
