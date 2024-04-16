import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';

export interface Banner5Model {
  title: string;
  message: string;
  description: string;
  imageUrl: string;
  buttonIcon: 'phone'
}

@Component({
  selector: 'a4w-banner-5',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './banner5.component.html',
  styleUrl: './banner5.component.scss'
})
export class Banner5Component extends BaseComponent<Banner5Model> {

  constructor(override fragment?: FragmentDirective) {
    super('Banner5', fragment)
  }
}
