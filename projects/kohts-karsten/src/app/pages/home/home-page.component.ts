import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractDefaultPageComponent,
  Address1Component,
  Banner2Component,
  Banner4Component,
  Banner5Component,
  BannerContainer1Component,
  Card31Component,
  Card42Component,
  Cards41Component,
  ContactInfoBoard1Component,
  FragmentDirective,
  GMapsIframeComponent,
  IframePlaceholderComponent,
  ImageCards2Component,
  ImageContent1Component,
  Mail1Component,
  Opening1Component,
  Parallax1Component,
  ParallaxSectionComponent,
  Phone1Component,
  PhoneActionComponent,
  PresentationCards1Component,
  SectionBgImageComponent,
  SectionComponent,
  TextContent1Component,
  TitleSubtitleDecoratorComponent
} from 'jpd-core';

import { LandingSplashComponent } from './landing-splash/landing-splash.component';

@Component({
    imports: [
        CommonModule,
        // AboutUsComponent,
        Banner2Component,
        Banner4Component,
        PresentationCards1Component,
        Parallax1Component,
        ParallaxSectionComponent,
        GMapsIframeComponent,
        FragmentDirective,
        Card31Component,
        Cards41Component,
        Card42Component,
        SectionComponent,
        TitleSubtitleDecoratorComponent,
        LandingSplashComponent,
        ContactInfoBoard1Component,
        SectionBgImageComponent,
        Address1Component,
        Phone1Component,
        Mail1Component,
        Opening1Component,
        PhoneActionComponent,
        Banner5Component,
        BannerContainer1Component,
        TextContent1Component,
        ImageContent1Component,
        IframePlaceholderComponent,
        ImageCards2Component
        // BannerContainer1Component,
        // TextContent1Component,
        // ImageContent1Component
    ],
    selector: 'app-home-page',
    styleUrls: ['./home-page.component.scss'],
    templateUrl: './home-page.component.html'
})
export class HomePageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super();
  }

  protected readonly GMapsIframeComponent = GMapsIframeComponent;
}
