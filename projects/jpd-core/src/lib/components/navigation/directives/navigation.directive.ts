import { Directive } from '@angular/core';
import { Route } from '@lib/common/interfaces/route';
import { AbstractNavigationComponent } from '@lib/components/navigation/base/behavior/abstract-navigation.component';
import { AppDataService } from '@lib/core/app-data.service';

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
