import { booleanAttribute, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'a4w-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  imports: [MatButtonModule, MatIconModule],
})
export class StarRatingComponent {
  readonly rate = input(0);

  readonly colorOn = input('#E7C512');

  readonly colorOff = input('white');

  readonly rateChangeEvent = output<number>();

  readonly disabled = input(false, { transform: booleanAttribute });

  onClickStar(rate: number): void {
    this.rateChangeEvent.emit(rate);
  }
}
