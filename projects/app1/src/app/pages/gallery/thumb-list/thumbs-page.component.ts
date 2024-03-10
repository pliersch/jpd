import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AbstractDefaultPageComponent,
  EndlessGridComponent,
  FragmentDirective,
  SectionComponent,
  TitleSubtitleDecoratorComponent
} from 'jpd-core';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [
    CommonModule,
    FragmentDirective,
    EndlessGridComponent,
    TitleSubtitleDecoratorComponent,
    SectionComponent,
    RouterOutlet,
  ],
  templateUrl: './thumbs-page.component.html',
  styleUrls: ['./thumbs-page.component.scss']
})
export class ThumbsPageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super();
  }
}
