import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'a4w-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  @Input()
  bgColor: string;

  private _noPadding: boolean;

  @Input({transform: booleanAttribute})
  get noPadding(): boolean {
    return this._noPadding;
  }

  set noPadding(value: boolean) {
    this._noPadding = value;
  }
}
