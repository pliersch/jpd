import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'a4w-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule]
})
export class StarsComponent {

  @Input()
  rate = 0;

  @Input()
  colorOn = 'yellow';

  @Input()
  colorOff = 'white';

}
