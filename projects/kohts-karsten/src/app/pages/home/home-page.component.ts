import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AboutUsComponent,
  AbstractDefaultPageComponent,
  Banner2Component,
  Card31Component,
  Card41Component,
  Card42Component,
  FragmentDirective,
  GMapsIframeComponent,
  Parallax1Component,
  ParallaxSectionComponent,
  SectionComponent,
  ShopFooter1Component,
  SmallFooter2Component,
  TitleSubtitleDecoratorComponent
} from 'jpd-core';
import { LandingSplashComponent } from './landing-splash/landing-splash.component';


@Component({
  selector: 'app-default-page',
  standalone: true,
  imports: [
    CommonModule,
    Parallax1Component,
    GMapsIframeComponent,
    Card41Component,
    AboutUsComponent,
    FragmentDirective,
    Card42Component,
    SectionComponent,
    Card31Component,
    TitleSubtitleDecoratorComponent,
    ParallaxSectionComponent,
    LandingSplashComponent,
    ShopFooter1Component,
    SmallFooter2Component,
    Banner2Component
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super();
  }

}
