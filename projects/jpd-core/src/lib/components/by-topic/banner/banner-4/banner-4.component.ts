import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'a4w-banner-4',
  standalone: true,
  imports: [
    MatAnchor,
    MatIcon
  ],
  templateUrl: './banner-4.component.html',
  styleUrl: './banner-4.component.scss'
})
export class Banner4Component {

  imageUrl = 'assets/img/bunny.jpg'

}