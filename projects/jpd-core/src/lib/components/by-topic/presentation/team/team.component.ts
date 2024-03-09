import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FragmentDirective } from '@lib/common/directives/fragment.directive';
import { BaseComponent } from '@lib/components/core/base/base.component';
import { TitleSubtitleDescription } from '@lib/content/content';

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
    super(fragment)
  }
}
