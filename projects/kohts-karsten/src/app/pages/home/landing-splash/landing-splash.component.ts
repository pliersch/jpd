import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { BaseComponent, FragmentDirective } from 'jpd-core';

export interface LandingSplashModel {
  title: string;
  subtitle: string;
  imageUrl: string;
}

@Component({
    selector: 'app-landing-splash',
    imports: [CommonModule, MatButtonModule],
    templateUrl: './landing-splash.component.html',
    styleUrls: ['./landing-splash.component.scss']
})
export class LandingSplashComponent extends BaseComponent<LandingSplashModel> {

  constructor(override fragment?: FragmentDirective) {
    super('LandingSplash', fragment)
  }

}
