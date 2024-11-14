import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatAnchor, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AbstractDefaultPageComponent, FragmentDirective } from 'jpd-core';

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

  // routes: Route[] = [
  //   {title: 'Home', path: 'kratom/home', children: []},
  //   {title: 'White', path: 'kratom/white-vein', children: []},
  //   {title: 'Green', path: 'kratom/green-vein', children: []},
  //   {title: 'Red', path: 'kratom/red-vein', children: []}];
  //
  // linkActiveOptions: IsActiveMatchOptions;

  constructor(/*private routeDomService: RouteDomService*/) {
    super();
    // this.linkActiveOptions = this.routeDomService.getIsActiveMatchOptions();
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
