import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { FragmentDirective } from '../../../../common';
import { TitleSubtitle } from '../../../../content';
import { BaseComponent } from '../../../core/base/base.component';

@Component({
    selector: 'a4w-title-subtitle-decorator',
    imports: [CommonModule, RouterLink, MatIcon],
    templateUrl: './title-subtitle-decorator.component.html',
    styleUrls: ['./title-subtitle-decorator.component.scss']
})
export class TitleSubtitleDecoratorComponent extends BaseComponent<TitleSubtitle> implements OnInit {

  route: string;
  anchor: string | undefined;

  constructor(override fragment?: FragmentDirective) {
    super('TitleSubtitleDecorator', fragment)
  }

  ngOnInit(): void {
    this.route = this.router.url.split('#')[0];
    this.anchor = this.fragment?.name;
  }

}
