import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractDefaultPageComponent,
  ContactCompanyComponent,
  FragmentDirective,
  GMapsIframeComponent,
  Parallax1Component
} from 'jpd-core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FragmentDirective, Parallax1Component, GMapsIframeComponent, ContactCompanyComponent],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super()
  }
}
