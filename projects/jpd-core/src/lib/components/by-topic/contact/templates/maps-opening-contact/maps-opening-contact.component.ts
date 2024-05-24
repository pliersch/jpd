import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FragmentDirective, SafePipe } from '../../../../../common';
import { BaseComponent } from '../../../../core/base/base.component';
import { GMapsIframeComponent } from '../../../maps/g-maps-iframe/g-maps-iframe.component';

export interface MapsOpeningContactModel {
  url: string;
  openingHours: string[];
}

@Component({
  selector: 'a4w-maps-opening-contact',
  standalone: true,
  imports: [
    MatIcon,
    GMapsIframeComponent,
    SafePipe,
    NgForOf
  ],
  templateUrl: './maps-opening-contact.component.html',
  styleUrl: './maps-opening-contact.component.scss'
})
export class MapsOpeningContactComponent extends BaseComponent<MapsOpeningContactModel> {

  constructor(override fragment?: FragmentDirective) {
    super('MapsOpeningContact', fragment)
  }
}
