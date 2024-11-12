import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleSubtitleDescription } from '../../../../content';

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
export class DisneyComponent/* extends BaseComponent<DisneyModel>*/ {

  // className = 'Disney';

  // constructor(override fragment?: FragmentDirective) {
  //   super(fragment)
  // }
}
