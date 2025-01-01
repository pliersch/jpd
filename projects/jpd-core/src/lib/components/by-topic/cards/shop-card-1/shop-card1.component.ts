import { CommonModule } from '@angular/common';
import { Component, model, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageFallbackDirective } from '../../../../common';
import { StarsComponent } from '../../miscellaneous/stars/stars.component';

@Component({
    selector: 'a4w-shop-card-1',
    imports: [CommonModule, RouterLink, ImageFallbackDirective, ImageFallbackDirective, StarsComponent],
    templateUrl: './shop-card1.component.html',
    styleUrl: './shop-card1.component.scss'
})

export class ShopCard1Component {

  readonly title = input.required<string>();

  readonly subtitle = input.required<string>();

  readonly link = input.required<string>();

  readonly linkId = input.required<string>();

  readonly imageUrl = input.required<string>();

  readonly rating = input<number>(0);

  readonly colorOn = input<string>('yellow');

  readonly colorOff = input<string>('white');

  // @Output()
  // emitter = new EventEmitter<string>();
  //
  // emitId(): void {
  //   this.emitter.emit(this.videoId);
  // }
  protected readonly model = model;
}
