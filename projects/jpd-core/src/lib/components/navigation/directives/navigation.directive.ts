import { Directive } from '@angular/core';
import { Route } from '../../../common';
import { AppDataService } from '../../../core';
import { AbstractNavigationComponent } from '../base/behavior/abstract-navigation.component';

@Directive({
  selector: '[a4wNavigation]',
  standalone: true
})
export class NavigationDirective {

  // private routes: Route[] = [];

  constructor(appDataService: AppDataService,
              public navigationComponent: AbstractNavigationComponent) {
    // this.routes = appDataService.getRoutesDom();
  }

  show(route: Route, event: DOMRect): void {
    this.navigationComponent.show(route, event)
  }

  hide(): void {
    this.navigationComponent.hide();
  }
}
