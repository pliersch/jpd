import { CommonModule } from '@angular/common';
import { Component, Input, model } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageFallbackDirective } from '../../../../common';
import { StarRatingComponent } from '../../miscellaneous/star-rating/star-rating.component';

@Component({
  selector: 'a4w-card45',
  standalone: true,
  imports: [CommonModule, RouterLink, ImageFallbackDirective, ImageFallbackDirective, StarRatingComponent],
  templateUrl: './card45.component.html',
  styleUrl: './card45.component.scss'
})

export class Card45Component {

  @Input({required: true})
  title: string;

  @Input({required: true})
  subtitle: string;

  @Input({required: true})
  linkUrl: string;

  @Input({required: true})
  imageUrl: string;

  @Input()
  rating: number = 0;

  @Input()
  colorOn: string = 'yellow';

  @Input()
  colorOff: string = 'white';

  // @Output()
  // emitter = new EventEmitter<string>();
  //
  // emitId(): void {
  //   this.emitter.emit(this.videoId);
  // }
  protected readonly model = model;
}
