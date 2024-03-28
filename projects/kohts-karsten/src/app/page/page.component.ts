import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  A4WFooterComponent,
  AboutUsComponent,
  AbstractDefaultPageComponent,
  Card31Component,
  Card41Component,
  Card42Component,
  FragmentDirective,
  GMapsIframeComponent,
  Parallax1Component,
  ParallaxSectionComponent,
  SectionComponent,
  TitleSubtitleDecoratorComponent
} from 'jpd-core';
import { LandingSplashComponent } from './components/landing-splash/landing-splash.component';


@Component({
  selector: 'app-default-page',
  standalone: true,
  imports: [
    CommonModule,
    Parallax1Component,
    GMapsIframeComponent,

    A4WFooterComponent,
    Card41Component,
    AboutUsComponent,
    FragmentDirective,
    Card42Component,
    SectionComponent,
    Card31Component,
    TitleSubtitleDecoratorComponent,
    ParallaxSectionComponent,
    LandingSplashComponent
  ],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super();
  }

}
