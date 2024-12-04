import { Component, Input } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shop-tag-chips',
  standalone: true,
  imports: [
    RouterLink,
    MatAnchor
  ],
  templateUrl: './tag-chips.component.html',
  styleUrl: './tag-chips.component.scss'
})
export class TagChipsComponent {

  @Input({required: true})
  tags: string[];

}
