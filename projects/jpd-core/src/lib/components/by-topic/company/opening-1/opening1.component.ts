import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';

export interface Opening1Model {
  openingHours: string[]
}

@Component({
    selector: 'lib-company-opening-1',
    imports: [
        MatIcon
    ],
    templateUrl: './opening1.component.html',
    styleUrl: './opening1.component.scss'
})
export class Opening1Component extends BaseComponent<Opening1Model> {

  constructor(fragment: FragmentDirective) {
    super('Opening1', fragment);
  }
}
