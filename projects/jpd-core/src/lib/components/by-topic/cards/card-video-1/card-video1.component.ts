import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageFallbackDirective } from '../../../../common';

@Component({
  selector: 'a4w-card-video-1',
  imports: [CommonModule, ImageFallbackDirective],
  templateUrl: './card-video1.component.html',
  styleUrl: './card-video1.component.scss'
})
export class CardVideo1Component {

  @Input({required: true})
  title: string;

  @Input({required: true})
  subtitle: string;

  @Input({required: true})
  imageUrl?: string;

  @Input({required: true})
  videoId: string;

  @Output()
  idEmitter = new EventEmitter<string>();

  emitId(): void {
    this.idEmitter.emit(this.videoId);
  }
}
