import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
    selector: 'a4w-tags-1',
    imports: [CommonModule, MatChipsModule],
    templateUrl: './tags-1.component.html',
    styleUrl: './tags-1.component.scss'
})
export class Tags1Component {

  readonly tags = input<string[]>();

}
