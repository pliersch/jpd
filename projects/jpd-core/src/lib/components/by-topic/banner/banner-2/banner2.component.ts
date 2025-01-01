import { Platform } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { Component, numberAttribute, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';

export interface Banner2ItemModel {
  contentText: string;
  postContentText: string;
  bigMessage: string;
  bgImageUrl: string;
  linkUrl: string;
  color: string;
}

export interface Banner2Model {
  items: Banner2ItemModel[];
}

@Component({
    selector: 'a4w-banner-2',
    imports: [CommonModule, RouterLink],
    templateUrl: './banner2.component.html',
    styleUrl: './banner2.component.scss'
})
export class Banner2Component extends BaseComponent<Banner2Model> implements OnInit {

  readonly textColor = input<string>();

  readonly intervall = input(5000, { transform: numberAttribute });

  current = 0;
  color: string;
  alphaColor: string;

  constructor(private platform: Platform,
              override fragment?: FragmentDirective) {
    super('Banner2', fragment);
  }

  ngOnInit(): void {
    this.color = this.model.items[this.current].color;
    this.alphaColor = this.color + '99';
    if (this.platform.isBrowser) {
      setInterval(() => {
        this.alphaColor = this.color + '99';
        this.current = ++this.current % this.model.items.length
        this.color = this.model.items[this.current].color;
      }, this.intervall());
    }
  }

  // fixme https://angular.io/errors/NG0506
  // todo there is no warning in app1 project
  // constructor(@Inject(PLATFORM_ID) private platformId: Object,
  //             private ngZone: NgZone,
  //             override fragment?: FragmentDirective) {
  //   super('Banner2', fragment);
  // }
  //
  // ngOnInit(): void {
  //   this.color = this.model.items[this.current].color;
  //   this.alphaColor = this.color + '99';
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.ngZone.runOutsideAngular(() => {
  //       setInterval(() => {
  //         this.alphaColor = this.color + '99';
  //         this.current = ++this.current % this.model.items.length
  //         this.color = this.model.items[this.current].color;
  //       }, this.intervall);
  //     })
  //   }
  // }


}
