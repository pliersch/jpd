import { Component, OnInit } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatToolbarRow } from '@angular/material/toolbar';
import { ActivatedRoute, IsActiveMatchOptions, Route, Router, RouterLink, RouterLinkActive } from '@angular/router';

import { RouteDomService } from 'jpd-core';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarRow,
    MatAnchor,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  routes: Route[] = [
    {title: 'White', path: 'shop/kratom/white-vein', children: []},
    {title: 'Green', path: 'shop/kratom/green-vein', children: []},
    {title: 'Red', path: 'shop/kratom/red-vein', children: []}];

  linkActiveOptions: IsActiveMatchOptions;
  private items$: Observable<any>;

  constructor(private routeDomService: RouteDomService,
              private router: Router,
              private route: ActivatedRoute) {
    // const children = this.routeDomService.getRouteDom().children;
    // const shop = children.find(c => c.name === 'Shop');
    // this.routes = shop!.children;

    this.linkActiveOptions = this.routeDomService.getIsActiveMatchOptions();
  }

  ngOnInit(): void {
    this.route.url.subscribe(route => console.log(route));
    this.items$ = this.route.paramMap.pipe(
      switchMap(params => {
        // this.selectedId = Number(params.get('id'));
        console.log('NavbarComponent : ', Number(params.get('id')))
        // return this.service.getHeroes();
        return of({a: 1, b: 2});
      })
    );
  }

}
