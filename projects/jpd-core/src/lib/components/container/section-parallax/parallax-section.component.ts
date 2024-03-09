import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';
import { BaseComponent } from '@lib/components/core/base/base.component';
import { FragmentDirective } from '@lib/common/directives/fragment.directive';

export interface ParallaxSectionModel {
  backgroundImageUrl: string;
}

@Component({
  selector: 'a4w-section-parallax',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parallax-section.component.html',
  styleUrl: './parallax-section.component.scss'
})
export class ParallaxSectionComponent extends BaseComponent<ParallaxSectionModel> {

  @Input()
  color: string;

  private _noPadding: boolean;

  @Input({transform: booleanAttribute})
  get noPadding(): boolean {
    return this._noPadding;
  }

  set noPadding(value: boolean) {
    this._noPadding = value;
  }

  constructor(override fragment?: FragmentDirective) {
    super(fragment)
  }

}
