import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PosterComponent } from '@lib/components';

@Component({
  selector: 'a4w-privacy-1',
  standalone: true,
  imports: [CommonModule, PosterComponent],
  templateUrl: './privacy1.component.html',
  styleUrl: './privacy1.component.scss'
})
export class Privacy1Component {

}
