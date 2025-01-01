import { Component, input, output } from '@angular/core';

@Component({
  selector: 'a4w-scroller-item',
  templateUrl: './scroller-item.component.html',
  styleUrls: ['./scroller-item.component.scss'],
  standalone: true
})
export class ScrollerItemComponent {

  readonly index = input.required<number>();

  readonly imageUrl = input.required<string>();

  readonly active = input<boolean>();

  readonly selectEvent = output<number>();

  onClick(): void {
    this.selectEvent.emit(this.index());
  }
}
