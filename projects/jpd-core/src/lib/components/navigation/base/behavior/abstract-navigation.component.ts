import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route } from '@lib/common/interfaces/route';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'a4w-base-behavior',
  standalone: true,
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

  show(route: Route, event: DOMRect): void {
    this.route$ = of(route);

    clearTimeout(this.timeoutId);
    this.left = event.x + 'px';
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
