import { Directive } from '@angular/core';
import { Route } from '../../../common';
import { AbstractNavigationComponent } from '../base/behavior/abstract-navigation.component';

@Directive({
  selector: '[a4wNavigation]',
  standalone: true
})
export class NavigationDirective {

  constructor(public navigationComponent: AbstractNavigationComponent) {
  }

  show(route: Route, x: number): void {
    this.navigationComponent.show(route, x)
  }

  hide(): void {
    this.navigationComponent.hide();
  }
}
