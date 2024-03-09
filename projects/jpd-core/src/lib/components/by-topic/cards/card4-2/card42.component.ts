import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FragmentDirective } from '@lib/common/directives/fragment.directive';
import { BaseComponent } from '@lib/components/core/base/base.component';
import { TitleSubtitles } from "@lib/content/content";

export interface Card42Model {
  items: TitleSubtitles[]
}

@Component({
  selector: 'a4w-card42',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card42.component.html',
  styleUrls: ['./card42.component.scss']
})
export class Card42Component extends BaseComponent<Card42Model> {

  constructor(override fragment?: FragmentDirective) {
    super(fragment)
  }

}
