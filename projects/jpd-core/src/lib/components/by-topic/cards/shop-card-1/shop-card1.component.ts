import { CommonModule } from '@angular/common';
import { Component, Input, model } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageFallbackDirective } from '../../../../common';
import { StarsComponent } from '../../miscellaneous/stars/stars.component';

@Component({
  selector: 'a4w-shop-card-1',
  standalone: true,
  imports: [CommonModule, RouterLink, ImageFallbackDirective, ImageFallbackDirective, StarsComponent],
  templateUrl: './shop-card1.component.html',
  styleUrl: './shop-card1.component.scss'
})

export class ShopCard1Component {

  @Input({required: true})
  title: string;

  @Input({required: true})
  subtitle: string;

  @Input({required: true})
  link: string;

  @Input({required: true})
  linkId: string;

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
