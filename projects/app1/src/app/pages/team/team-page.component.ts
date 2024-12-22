import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractDefaultPageComponent,
  Banner2Component,
  Banner3Component,
  Banner4Component,
  Card31Component,
  FragmentDirective,
  SectionComponent,
  TitleSubtitleDecoratorComponent,
  WaveDesign1Component
} from 'jpd-core';

@Component({
    selector: 'app-team-page',
    imports: [
        CommonModule,
        FragmentDirective,
        TitleSubtitleDecoratorComponent,
        SectionComponent,
        WaveDesign1Component,
        Card31Component,
        Banner3Component,
        Banner4Component,
        Banner2Component,
    ],
    templateUrl: './team-page.component.html',
    styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super()
  }

}
