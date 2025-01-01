import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PosterComponent } from '../../../poster/poster.component';

@Component({
    selector: 'a4w-card-h-1',
    imports: [CommonModule, PosterComponent, RouterLink],
    templateUrl: './card-h-1.component.html'
})
export class CardH1Component {

  readonly title = input.required<string>();

  readonly subtitle = input.required<string>();

  readonly description = input.required<string>();

  readonly imageUrl = input<string>();

  readonly link = input<string>();

}
