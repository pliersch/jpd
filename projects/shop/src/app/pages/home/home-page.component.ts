import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingSplashComponent } from '@shop/pages/home/landing-splash/landing-splash.component';
import { AbstractDefaultPageComponent, FragmentDirective, Parallax1Component, SectionComponent } from 'jpd-core';

@Component({
  selector: 'shop-home-page',
  imports: [
    CommonModule,
    Parallax1Component,
    FragmentDirective,
    SectionComponent,
    LandingSplashComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super();
  }

}
