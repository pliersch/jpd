import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from "@angular/google-maps";
import { BaseComponent } from '@lib/components/core/base/base.component';
import { FragmentDirective } from '@lib/common/directives/fragment.directive';
import { SafePipe } from "@lib/common/pipes/safe.pipe";

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
    super(fragment)
  }

}
