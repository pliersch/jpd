import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FragmentDirective } from '@lib/common/directives/fragment.directive';
import { ImageFallbackDirective } from '@lib/common/directives/image-fallback-directive';
import { BaseComponent } from '@lib/components/core/base/base.component';
import { TitleSubtitleDescription } from '@lib/content/content';

export interface Card43Model {
  headline: string;
  items: TitleSubtitleDescription[];
}

@Component({
  selector: 'a4w-card43',
  standalone: true,
  imports: [CommonModule, ImageFallbackDirective, RouterLink],
  templateUrl: './card43.component.html',
  styleUrls: ['./card43.component.scss']
})
export class Card43Component extends BaseComponent<Card43Model> {

  constructor(override fragment?: FragmentDirective) {
    super(fragment)
  }

}
