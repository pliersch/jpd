import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractDefaultPageComponent,
  FragmentDirective,
  LegalContainerComponent,
  LegalNoticeComponent,
  SectionComponent
} from 'jpd-core';

@Component({
  selector: 'app-legal-notice-page',
  standalone: true,
  imports: [
    CommonModule,
    FragmentDirective,
    SectionComponent,
    LegalContainerComponent,
    LegalNoticeComponent,
  ],
  templateUrl: './legal-notice-page.component.html',
  styleUrls: ['./legal-notice-page.component.scss']
})
export class LegalNoticePageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super()
  }

}
