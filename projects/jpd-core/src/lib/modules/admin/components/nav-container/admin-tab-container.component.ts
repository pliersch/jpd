import { Component } from '@angular/core';
import { AdminComponentBarComponent } from '@lib/modules/admin/components/component-bar/admin-component-bar.component';

@Component({
  selector: 'a4w-admin-tab-container',
  standalone: true,
  imports: [
    AdminComponentBarComponent
  ],
  templateUrl: './admin-tab-container.component.html',
  styleUrl: './admin-tab-container.component.scss'
})
export class AdminTabContainerComponent {

}
