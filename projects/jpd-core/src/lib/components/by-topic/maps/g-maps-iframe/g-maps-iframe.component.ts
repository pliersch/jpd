import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from "@angular/google-maps";
import { FragmentDirective, SafePipe } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';

export interface GMapsModel {
  url: string;
}

@Component({
  selector: 'a4w-maps-iframe',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule, SafePipe],
  templateUrl: './g-maps-iframe.component.html',
  styleUrls: ['./g-maps-iframe.component.scss']
})
export class GMapsIframeComponent extends BaseComponent<GMapsModel> {

  constructor(override fragment?: FragmentDirective) {
    super('GMapsIframe', fragment)
  }

}
