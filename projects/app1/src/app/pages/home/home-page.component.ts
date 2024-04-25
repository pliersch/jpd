import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingSplashComponent } from '@app1/pages/home/landing-splash/landing-splash.component';
import {
  AbstractDefaultPageComponent,
  Banner1Component,
  Banner2Component,
  Card31Component,
  Card32Component,
  Card42Component,
  Card43Component,
  FragmentDirective,
  GMapsIframeComponent,
  ImageGrid321Component,
  LinkFooterDecoratorComponent,
  Parallax1Component,
  ParallaxSectionComponent,
  SectionComponent,
  TextFooterDecoratorComponent,
  TitleSubtitleDecoratorComponent,
  ToggleThemeDirective
} from 'jpd-core';


@Component({
  selector: 'app-default-page',
  standalone: true,
  imports: [
    CommonModule,
    Parallax1Component,
    GMapsIframeComponent,
    FragmentDirective,
    Card31Component,
    Card32Component,
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
