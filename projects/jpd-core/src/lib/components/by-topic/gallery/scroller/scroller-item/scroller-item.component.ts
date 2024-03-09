import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'a4w-scroller-item',
  templateUrl: './scroller-item.component.html',
  styleUrls: ['./scroller-item.component.scss'],
  standalone: true
})
export class ScrollerItemComponent {

  @Input()
  index: number;

  @Input()
  imageUrl: string;

  @Input()
  active: boolean;

  @Output()
  selectEvent = new EventEmitter<number>();

  onClick(): void {
    this.selectEvent.emit(this.index);
  }
}
