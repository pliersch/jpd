import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Route } from '../../../../common';

@Component({
    selector: 'a4w-base-behavior',
    imports: [CommonModule],
    template: ``,
    styles: []
})
export abstract class AbstractNavigationComponent {

  visible = false;
  active = false;
  left = '0px';
  timeoutId: number;

  route$: Observable<Route>;

  show(route: Route, x: number): void {
    this.route$ = of(route);
    clearTimeout(this.timeoutId);
    this.left = x + 'px';
    this.visible = true;
  }

  hide(): void {
    if (this.active) {
      return;
    }
    this._hide();
  }

  setActive(): void {
    clearTimeout(this.timeoutId);
    this.active = true;
  }

  setInactive(): void {
    this.active = false;
    this._hide();
  }

  _hide(): void {
    this.timeoutId = window.setTimeout(() => this.visible = false, 300);
  }
}
