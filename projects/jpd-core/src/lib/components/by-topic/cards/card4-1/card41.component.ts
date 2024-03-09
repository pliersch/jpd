import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseComponent } from '@lib/components/core/base/base.component';
import { TitleSubtitleDescription } from "@lib/content/content";
import { FragmentDirective } from '@lib/common/directives/fragment.directive';

export interface Card41Model {
  headline: string;
  items: TitleSubtitleDescription[]
}

@Component({
  selector: 'a4w-card41',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card41.component.html',
  styleUrls: ['./card41.component.scss']
})
export class Card41Component extends BaseComponent<Card41Model> {

  constructor(override fragment?: FragmentDirective) {
    super(fragment)
  }

}
