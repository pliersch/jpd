import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FragmentDirective } from '../../../../common';
import { TitleSubtitleDescription } from '../../../../content';
import { BaseComponent } from '../../../core/base/base.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent extends BaseComponent<any> {

  team: TitleSubtitleDescription[]
  // team: TitleSubtitleDescription[] = [
  //   TitleSubtitleMessageFactory.create(LoremIpsumFactory.getText(20), LoremIpsumFactory.getText(50), '', this.placeHolder),
  //   TitleSubtitleMessageFactory.create(LoremIpsumFactory.getText(25), LoremIpsumFactory.getText(36), '', this.placeHolder),
  //   TitleSubtitleMessageFactory.create(LoremIpsumFactory.getText(17), LoremIpsumFactory.getText(42), '', this.placeHolder),
  // ]

  constructor(override fragment?: FragmentDirective) {
    super('Team', fragment)
  }
}
