import { Component, inject, OnInit } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatToolbarRow } from '@angular/material/toolbar';
import { ActivatedRoute, IsActiveMatchOptions, Route, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RouteDomService } from 'jpd-core';

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
    {title: 'Home', path: 'shop/kratom/home', children: []},
    {title: 'White', path: 'shop/kratom/white-vein', children: []},
    {title: 'Green', path: 'shop/kratom/green-vein', children: []},
    {title: 'Red', path: 'shop/kratom/red-vein', children: []}];

  linkActiveOptions: IsActiveMatchOptions =
    inject(RouteDomService).getIsActiveMatchOptions();

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(route => console.log(route));
    // this.items$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     // this.selectedId = Number(params.get('id'));
    //     console.log('NavbarComponent : ', Number(params.get('id')))
    //     // return this.service.getHeroes();
    //     return of({a: 1, b: 2});
    //   })
    // );
  }

}
