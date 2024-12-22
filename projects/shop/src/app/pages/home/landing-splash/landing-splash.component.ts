import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { BaseComponent, FragmentDirective } from 'jpd-core';

export interface LandingSplashModel {
  imageUrl: string;
}

@Component({
    selector: 'shop-landing-splash',
    imports: [CommonModule, MatButtonModule],
    templateUrl: './landing-splash.component.html',
    styleUrls: ['./landing-splash.component.scss']
})

export class LandingSplashComponent extends BaseComponent<LandingSplashModel> {

  constructor(fragment?: FragmentDirective,) {
    super('LandingSplash', fragment)
  }

}
