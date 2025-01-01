import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingSplashComponent } from '@app1/pages/home/landing-splash/landing-splash.component';
import {
  AbstractDefaultPageComponent,
  Banner1Component,
  Card31Component,
  Card32Component,
  Card42Component,
  Card43Component,
  FragmentDirective,
  ImageGrid321Component,
  LgContainerComponent,
  LinkFooterDecoratorComponent,
  Parallax1Component,
  ParallaxSectionComponent,
  SectionComponent,
  TextFooterDecoratorComponent,
  TitleSubtitleDecoratorComponent,
  ToggleThemeDirective
} from 'jpd-core';


@Component({
    selector: 'app-home-page',
  imports: [
    CommonModule,
    Parallax1Component,
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
    Banner1Component,
    LgContainerComponent,
  ],
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super();
  }

}
