import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageFallbackDirective, StarsComponent } from 'jpd-core';

@Component({
    selector: 'shop-card-1',
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
  price: number;

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

}
