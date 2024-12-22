import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractDefaultPageComponent, TxtImg2Component } from 'jpd-core';

@Component({
    selector: 'app-service-herbal-page',
    imports: [
        CommonModule,
        TxtImg2Component,
    ],
    templateUrl: './herbal-page.component.html',
    styleUrls: ['./herbal-page.component.scss']
})
export class HerbalPageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super()
  }

}
