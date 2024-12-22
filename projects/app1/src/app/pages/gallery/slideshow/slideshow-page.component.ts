import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractDefaultPageComponent,
  BackActionComponent,
  FragmentDirective,
  SectionComponent,
  SlideshowComponent
} from 'jpd-core';

@Component({
    selector: 'app-demo-page-images',
    imports: [CommonModule, FragmentDirective, SlideshowComponent, SectionComponent, BackActionComponent],
    templateUrl: './slideshow-page.component.html',
    styleUrls: ['./slideshow-page.component.scss']
})
export class SlideshowPageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super()
  }
}
