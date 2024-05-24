import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';

export interface Card32Model {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
  linkTxt: string;
}

export interface Card32ComponentModel {
  items: Card32Model[];
}

@Component({
  selector: 'a4w-card32',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIcon, MatAnchor],
  templateUrl: './card32.component.html',
  styleUrls: ['./card32.component.scss']
})
export class Card32Component extends BaseComponent<Card32ComponentModel> {

  constructor(override fragment?: FragmentDirective) {
    super('Card32', fragment)
  }

}
