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
  PhoneActionComponent,
  PresentationCards1Component,
  SectionBgImageComponent,
  SectionComponent,
  ShopFooter1Component,
  SmallFooter2Component,
  TitleSubtitleDecoratorComponent
} from 'jpd-core';
import { LandingSplashComponent } from './landing-splash/landing-splash.component';

@Component({
  imports: [
    CommonModule,
    AboutUsComponent,
    Banner2Component,
    Banner4Component,
    PresentationCards1Component,
    Parallax1Component,
    ParallaxSectionComponent,
    GMapsIframeComponent,
    FragmentDirective,
    Card31Component,
    Card41Component,
    Card42Component,
    SectionComponent,
    TitleSubtitleDecoratorComponent,
    LandingSplashComponent,
    ShopFooter1Component,
    SmallFooter2Component,
    ContactInfoBoard1Component,
    SectionBgImageComponent,
    Address1Component,
    Phone1Component,
    Mail1Component,
    Opening1Component,
    PhoneActionComponent,
  ],
  selector: 'app-default-page',
  standalone: true,
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super();
  }

}
