import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingSplashComponent } from '@app1/components/landing-splash/landing-splash.component';
import { FragmentDirective, ToggleThemeDirective } from 'jpd-core';

import {
  A4WFooterComponent,
  AbstractDefaultPageComponent,
  Banner1Component,
  Banner2Component,
  Card31Component,
  Card42Component,
  Card43Component,
  FooterComponent,
  GMapsIframeComponent,
  ImageGrid321Component,
  LinkFooterDecoratorComponent,
  Parallax1Component,
  ParallaxSectionComponent,
  SectionComponent,
  TextFooterDecoratorComponent,
  TitleSubtitleDecoratorComponent
} from 'jpd-core';


@Component({
  selector: 'app-default-page',
  standalone: true,
  imports: [
    CommonModule,
    Parallax1Component,
    GMapsIframeComponent,
    FooterComponent,
    A4WFooterComponent,
    FragmentDirective,
    Card31Component,
    ImageGrid321Component,
    TitleSubtitleDecoratorComponent,
    TextFooterDecoratorComponent,
    SectionComponent,
    Card43Component,
    ToggleThemeDirective,
    LandingSplashComponent,
    Card42Component,
    ParallaxSectionComponent,
    LinkFooterDecoratorComponent,
    Banner2Component,
    Banner1Component,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super();
  }

}