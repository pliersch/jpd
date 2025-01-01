import { Component, input } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'shop-tag-chips',
    imports: [
        RouterLink,
        MatAnchor
    ],
    templateUrl: './tag-chips.component.html',
    styleUrl: './tag-chips.component.scss'
})
export class TagChipsComponent {

  readonly tags = input.required<string[]>();

}
