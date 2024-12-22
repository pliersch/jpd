import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';
import { TitleTitleSubtitleImg } from '../model';

@Component({
    selector: 'a4w-content-ttsi',
    imports: [CommonModule],
    templateUrl: './title-title-sub-img.component.html',
    styleUrls: ['./title-title-sub-img.component.scss']
})
export class TitleTitleSubImgComponent extends BaseComponent<TitleTitleSubtitleImg> {

  constructor(override fragment?: FragmentDirective) {
    super('TitleTitleSubImg', fragment)
  }
}
