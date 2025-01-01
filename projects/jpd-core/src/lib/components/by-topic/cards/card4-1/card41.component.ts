import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

export interface Card41Model {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string
  link?: string
}

@Component({
    selector: 'a4w-card41',
    imports: [CommonModule],
    templateUrl: './card41.component.html'
})
export class Card41Component {

  readonly model = input<Card41Model>();

  readonly padding = input<string>('0');

}
