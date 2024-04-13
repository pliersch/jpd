import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AboutUsComponent,
  AbstractDefaultPageComponent,
  Address1Component,
  Banner2Component,
  Banner4Component,
  Card31Component,
  Card41Component,
  Card42Component,
  ContactInfoBoard1Component,
  FragmentDirective,
  GMapsIframeComponent,
  Mail1Component,
  Opening1Component,
  Parallax1Component,
  ParallaxSectionComponent,
  Phone1Component,
  SectionBgImageComponent,
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
    Banner2Component,
    ContactInfoBoard1Component,
    SectionBgImageComponent,
    Address1Component,
    Phone1Component,
    Mail1Component,
    Opening1Component,
    Banner4Component
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super();
  }

}
