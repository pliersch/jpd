import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ImageFallbackDirective } from '../../../../common';

@Component({
  selector: 'a4w-card-video-1',
  imports: [CommonModule, ImageFallbackDirective],
  templateUrl: './card-video1.component.html',
  styleUrl: './card-video1.component.scss'
})
export class CardVideo1Component {

  readonly title = input.required<string>();

  readonly subtitle = input.required<string>();

  readonly imageUrl = input.required<string | undefined>();

  readonly videoId = input.required<string>();

  readonly idEmitter = output<string>();

  emitId(): void {
    this.idEmitter.emit(this.videoId());
  }
}
