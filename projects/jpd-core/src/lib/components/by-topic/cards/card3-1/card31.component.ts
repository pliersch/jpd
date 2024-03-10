import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';

export interface Card31Model {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface Card31ComponentModel {
  items: Card31Model[];
}

@Component({
  selector: 'a4w-card31',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card31.component.html',
  styleUrls: ['./card31.component.scss']
})
export class Card31Component extends BaseComponent<Card31ComponentModel> {

  constructor(override fragment?: FragmentDirective) {
    super(fragment)
  }
}
