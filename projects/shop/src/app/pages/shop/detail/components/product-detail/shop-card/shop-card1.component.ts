import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ImageFallbackDirective, StarsComponent } from 'jpd-core';

@Component({
  selector: 'shop-card-1',
  imports: [CommonModule, RouterLink, ImageFallbackDirective, ImageFallbackDirective, StarsComponent, ImageFallbackDirective, StarsComponent, MatCard],
  templateUrl: './shop-card1.component.html',
  styleUrl: './shop-card1.component.scss'
})

export class ShopCard1Component {

  readonly title = input.required<string>();

  readonly subtitle = input.required<string>();

  readonly price = input.required<number>();

  readonly link = input.required<string>();

  readonly linkId = input.required<string>();

  readonly imageUrl = input.required<string>();

  readonly rating = input<number>(0);

  readonly colorOn = input<string>('yellow');

  readonly colorOff = input<string>('white');

}
