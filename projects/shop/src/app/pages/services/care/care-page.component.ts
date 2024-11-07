import { Component } from '@angular/core';
import { AbstractDefaultPageComponent, TxtImg2Component } from 'jpd-core';

@Component({
  selector: 'app-service-care-page',
  standalone: true,
  imports: [
    TxtImg2Component,
  ],
  templateUrl: './care-page.component.html',
  styleUrls: ['./care-page.component.scss']
})
export class CarePageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super()
  }

}
