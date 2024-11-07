import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractDefaultPageComponent, AdminPanelMenuComponent } from 'jpd-core';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    CommonModule,
    AdminPanelMenuComponent,
  ],
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent extends AbstractDefaultPageComponent {

  edit = false;

  constructor() {
    super();
  }

}
