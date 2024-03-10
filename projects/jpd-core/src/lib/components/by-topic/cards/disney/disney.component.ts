import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FragmentDirective } from '../../../../common';
import { TitleSubtitleDescription } from '../../../../content';
import { BaseComponent } from '../../../core/base/base.component';

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
