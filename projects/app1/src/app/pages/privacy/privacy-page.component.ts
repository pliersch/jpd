import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractDefaultPageComponent,
  FragmentDirective,
  LegalContainerComponent,
  Privacy1Component,
  SectionComponent
} from 'jpd-core';

@Component({
    selector: 'app-privacy-page',
    imports: [
        CommonModule,
        FragmentDirective,
        SectionComponent,
        Privacy1Component,
        LegalContainerComponent,
    ],
    templateUrl: './privacy-page.component.html',
    styleUrls: ['./privacy-page.component.scss']
})
export class PrivacyPageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super()
  }

}
