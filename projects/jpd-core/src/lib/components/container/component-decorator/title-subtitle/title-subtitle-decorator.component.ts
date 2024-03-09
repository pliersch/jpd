import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FragmentDirective } from '@lib/common/directives/fragment.directive';
import { BaseComponent } from '@lib/components/core/base/base.component';
import { TitleSubtitle } from '@lib/content/content';

@Component({
  selector: 'a4w-title-subtitle-decorator',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './title-subtitle-decorator.component.html',
  styleUrls: ['./title-subtitle-decorator.component.scss']
})
export class TitleSubtitleDecoratorComponent extends BaseComponent<TitleSubtitle> implements OnInit {

  route: string;
  anchor: string | undefined;

  constructor(override fragment?: FragmentDirective) {
    super(fragment)
  }

  ngOnInit(): void {
    this.route = this.router.url.split('#')[0];
    this.anchor = this.fragment?.appFragment;
  }

}
