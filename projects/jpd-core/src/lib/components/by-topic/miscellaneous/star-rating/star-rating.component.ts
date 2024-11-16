import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'a4w-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule]
})
export class StarRatingComponent {

  @Input()
  rate = 0;

  @Input()
  colorOn = 'yellow';

  @Input()
  colorOff = 'white';

  @Output()
  rateChangeEvent = new EventEmitter<number>();

  @Input({transform: booleanAttribute})
  disabled = false;

  onClickStar(rate: number): void {
    this.rateChangeEvent.emit(rate);
  }
}
