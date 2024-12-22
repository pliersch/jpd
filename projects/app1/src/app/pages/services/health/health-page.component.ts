import { Component } from '@angular/core';
import { AbstractDefaultPageComponent, TxtImg2Component } from 'jpd-core';

@Component({
    selector: 'app-service-health-page',
    imports: [
        TxtImg2Component,
    ],
    templateUrl: './health-page.component.html',
    styleUrls: ['./health-page.component.scss']
})
export class HealthPageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super()
  }

}
