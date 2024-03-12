import { BreakpointObserver } from "@angular/cdk/layout";
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { FragmentDirective } from '../../../../common';
import { TitleDescriptionImage } from '../../../../content';
import { BaseComponent } from '../../../core/base/base.component';

export interface AboutUsModel {
  items: TitleDescriptionImage[];
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent extends BaseComponent<AboutUsModel> {

  isHandset$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver,
              override fragment?: FragmentDirective) {
    super('AboutUs', fragment);
    this.isHandset$ = this.breakpointObserver.observe('(max-width: 740px)')
      .pipe(
        map(result => result.matches)
      );
  }

}
