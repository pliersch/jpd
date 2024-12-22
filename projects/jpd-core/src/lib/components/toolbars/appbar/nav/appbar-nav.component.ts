import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { IsActiveMatchOptions, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Route, RouteDomService } from '../../../../common';

@Component({
  selector: 'a4w-appbar-nav',
  imports: [
    MatAnchor,
    RouterLinkActive,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './appbar-nav.component.html',
  styleUrl: './appbar-nav.component.scss'
})

export class AppbarNavComponent implements OnInit {

  route$: Observable<Route>;
  linkActiveOptions: IsActiveMatchOptions;

  constructor(private routeDomService: RouteDomService,) { }

  ngOnInit(): void {
    this.route$ = of(this.routeDomService.getRouteDom());
    this.linkActiveOptions = this.routeDomService.getIsActiveMatchOptions()
  }

  showSubNav(route: Route, x: number): void {
    // this.navigationDirective?.show(route, x)
  }

  hideSubNav(): void {
    // this.navigationDirective?.hide();
  }

}
