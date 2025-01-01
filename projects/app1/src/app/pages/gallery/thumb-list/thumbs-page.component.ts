import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractDefaultPageComponent,
  EndlessGridComponent,
  FragmentDirective,
  SectionComponent,
  TitleSubtitleDecoratorComponent
} from 'jpd-core';

@Component({
    selector: 'app-gallery-page',
  imports: [
    CommonModule,
    FragmentDirective,
    EndlessGridComponent,
    TitleSubtitleDecoratorComponent,
    SectionComponent,

  ],
    templateUrl: './thumbs-page.component.html',
    styleUrls: ['./thumbs-page.component.scss']
})
export class ThumbsPageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super();
  }
}
