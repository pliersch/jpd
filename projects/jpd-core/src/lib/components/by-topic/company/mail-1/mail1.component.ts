import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';

export interface Mail1Model {
  mail: string;
}

@Component({
  selector: 'lib-company-mail-1',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './mail1.component.html',
  styleUrl: './mail1.component.scss'
})
export class Mail1Component extends BaseComponent<Mail1Model> {

  constructor(fragment: FragmentDirective) {
    super('Mail1', fragment);
  }
}
