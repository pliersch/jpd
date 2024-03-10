import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractDefaultPageComponent,
  Banner3Component,
  Card31Component,
  FragmentDirective,
  SectionComponent, StickySideContainerComponent, StoriesGroup1Component, StoriesOverview1Component,
  TitleSubtitleDecoratorComponent
} from 'jpd-core';
import {
  WaveDesign1Component
} from '../../../../../../jpd-core/src/lib/components/by-topic/presentation/wave-design-1/wave-design-1.component';


@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [
    CommonModule,
    FragmentDirective,
    TitleSubtitleDecoratorComponent,
    SectionComponent,
    WaveDesign1Component,
    Card31Component,
    Banner3Component,
    StickySideContainerComponent,
    StoriesGroup1Component,
    StoriesOverview1Component,
  ],
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super()
  }

}
