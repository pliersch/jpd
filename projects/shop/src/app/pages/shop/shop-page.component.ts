import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatAnchor, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { IsActiveMatchOptions, Route, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AbstractDefaultPageComponent, FragmentDirective, RouteDomService } from 'jpd-core';

// fixme import from jpd-core
// import { AbstractDefaultPageComponent } from '../../../../../jpd-core/src/lib/components';

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [
    CommonModule,
    FragmentDirective,
    RouterOutlet,
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatAnchor,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent extends AbstractDefaultPageComponent {

  routes: Route[] = [
    {title: 'White', path: 'white', children: []},
    {title: 'Green', path: 'green', children: []},
    {title: 'Red', path: 'red', children: []}];

  linkActiveOptions: IsActiveMatchOptions;

  constructor(private routeDomService: RouteDomService) {
    super();
    this.linkActiveOptions = this.routeDomService.getIsActiveMatchOptions();
  }

  // override ngOnInit(): void {
  //   this.router.events
  //     .pipe(
  //       filter(event => event instanceof NavigationEnd)
  //     ).subscribe((event) => {
  //     console.log(event);
  //
  //   });
  // }

}
