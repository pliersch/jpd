import { Component } from '@angular/core';
import { AdminComponentBarComponent } from '../component-bar/admin-component-bar.component';

@Component({
    selector: 'a4w-admin-tab-container',
    imports: [
        AdminComponentBarComponent
    ],
    templateUrl: './admin-tab-container.component.html',
    styleUrl: './admin-tab-container.component.scss'
})
export class AdminTabContainerComponent {

}
