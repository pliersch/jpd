import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { BaseComponent, FragmentDirective } from 'jpd-core';

export interface LandingSplashModel {
  imageUrl: string;
}

@Component({
  selector: 'app-landing-splash',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './landing-splash.component.html',
  styleUrls: ['./landing-splash.component.scss'],
  // animations: [
  //   bounceInUpOnEnterAnimation({anchor: 'enter1'}),
  // ]
})

export class LandingSplashComponent extends BaseComponent<LandingSplashModel> {

  constructor(override fragment?: FragmentDirective,) {
    super(fragment)
  }

}
