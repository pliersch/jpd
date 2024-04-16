import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from '@angular/router';
import * as CookieConsent from 'vanilla-cookieconsent';
import { FragmentDirective } from '../../../common';
import { BaseComponent } from '../../core/base/base.component';

export interface Small2FooterModel {
  routeNames: string[];
}

@Component({
  selector: 'a4w-small-footer-2',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatAnchor, RouterLink],
  templateUrl: './small-footer2.component.html',
  styleUrls: ['./small-footer2.component.scss']
})
export class SmallFooter2Component extends BaseComponent<Small2FooterModel> {

  constructor(override fragment?: FragmentDirective) {
    super('SmallFooter2', fragment);
  }

  openCookieConsent(): void {
    CookieConsent.showPreferences();
  }
}
