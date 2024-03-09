import { BreakpointObserver } from "@angular/cdk/layout";
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseComponent } from '@lib/components/core/base/base.component';
import { TitleDescriptionImage } from "@lib/content/content";
import { FragmentDirective } from '@lib/common/directives/fragment.directive';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

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
    super(fragment);
    this.isHandset$ = this.breakpointObserver.observe('(max-width: 740px)')
      .pipe(
        map(result => result.matches)
      );
  }

}
