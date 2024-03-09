import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageFallbackDirective } from '@lib/common';
import { PosterComponent } from '@lib/components';

@Component({
  selector: 'a4w-card-video-1',
  standalone: true,
  imports: [CommonModule, PosterComponent, RouterLink, ImageFallbackDirective],
  templateUrl: './card-video1.component.html',
  styleUrl: './card-video1.component.scss'
})
export class CardVideo1Component {

  @Input({required: true})
  title: string;

  @Input({required: true})
  subtitle: string;

  @Input({required: true})
  imageUrl?: string

  @Input({required: true})
  link?: string

}
