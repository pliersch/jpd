import { Component, EventEmitter, Output, input } from '@angular/core';

@Component({
  selector: 'a4w-scroller-item',
  templateUrl: './scroller-item.component.html',
  styleUrls: ['./scroller-item.component.scss'],
  standalone: true
})
export class ScrollerItemComponent {

  readonly index = input<number>();

  readonly imageUrl = input<string>();

  readonly active = input<boolean>();

  @Output()
  selectEvent = new EventEmitter<number>();

  onClick(): void {
    this.selectEvent.emit(this.index());
  }
}
