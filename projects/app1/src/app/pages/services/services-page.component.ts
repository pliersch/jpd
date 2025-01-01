import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractDefaultPageComponent, TabNavComponent } from 'jpd-core';

@Component({
    selector: 'app-service-page',
    imports: [
        CommonModule,
        TabNavComponent,
    ],
    templateUrl: './services-page.component.html',
    styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent extends AbstractDefaultPageComponent {

  bg = '1x/11.jpg'

  constructor() {
    super()
  }

}
