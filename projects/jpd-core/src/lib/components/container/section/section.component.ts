import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, input } from '@angular/core';

@Component({
    selector: 'a4w-section',
    imports: [CommonModule],
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  readonly bgColor = input<string>();

  readonly container = input<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>();

  private _noPadding: boolean;

  @Input({transform: booleanAttribute})
  get noPadding(): boolean {
    return this._noPadding;
  }

  set noPadding(value: boolean) {
    this._noPadding = value;
  }
}
