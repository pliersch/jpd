import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractDefaultPageComponent,
  Address1Component,
  ContactCompanyComponent,
  ContactCompanyInfoComponent,
  FragmentDirective,
  GMapsIframeComponent,
  Mail1Component,
  Parallax1Component,
  Phone1Component,
  SectionComponent
} from 'jpd-core';

@Component({
    selector: 'app-contact',
    imports: [CommonModule, FragmentDirective, Parallax1Component, GMapsIframeComponent, ContactCompanyComponent, ContactCompanyInfoComponent, Address1Component, Mail1Component, Phone1Component, SectionComponent],
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super()
  }
}
