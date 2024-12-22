import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractDefaultPageComponent,
  FragmentDirective,
  SectionComponent,
  StickySideContainerComponent,
  StoriesGroup1Component,
  StoriesOverview1Component,
} from 'jpd-core';

@Component({
    selector: 'app-blog-page',
    imports: [
        CommonModule,
        FragmentDirective,
        SectionComponent,
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
