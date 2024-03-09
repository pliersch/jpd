import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleTitleSubtitleImg } from '@lib/components/by-topic/content-adapter/model';
import { BaseComponent } from '@lib/components/core/base/base.component';
import { FragmentDirective } from '@lib/common/directives/fragment.directive';

@Component({
  selector: 'a4w-content-ttsi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-title-sub-img.component.html',
  styleUrls: ['./title-title-sub-img.component.scss']
})
export class TitleTitleSubImgComponent extends BaseComponent<TitleTitleSubtitleImg> {

  constructor(override fragment?: FragmentDirective) {
    super(fragment)
  }
}
