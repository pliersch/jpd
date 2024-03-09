import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseComponent } from '@lib/components/core/base/base.component';
import { TitleSubtitleDescription } from '@lib/content/content';
import { FragmentDirective } from '@lib/common/directives/fragment.directive';

export interface DisneyModel {
  items: TitleSubtitleDescription[];
}

@Component({
  selector: 'a4w-disney',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disney.component.html',
  styleUrl: './disney.component.scss'
})
export class DisneyComponent extends BaseComponent<DisneyModel> {

  constructor(override fragment?: FragmentDirective) {
    super(fragment)
  }
}
