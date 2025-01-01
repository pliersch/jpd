import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'a4w-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
  imports: [MatButtonModule, MatIconModule],
})
export class StarsComponent {
  readonly rate = input(0);

  readonly colorOn = input('#E7C512');

  readonly colorOff = input<string>();
}
