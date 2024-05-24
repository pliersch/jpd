import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PosterComponent } from '../../../../poster/poster.component';

@Component({
  selector: 'a4w-card-h-1',
  standalone: true,
  imports: [CommonModule, PosterComponent, RouterLink],
  templateUrl: './card-h-1.component.html',
})
export class CardH1Component {

  @Input({required: true})
  title: string;

  @Input({required: true})
  subtitle: string;

  @Input({required: true})
  description: string;

  @Input()
  imageUrl?: string

  @Input()
  link?: string

}
