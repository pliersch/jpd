import { Component, inject } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { IsActiveMatchOptions, Route, RouterLink, RouterLinkActive } from '@angular/router';
import { RouteDomService } from 'jpd-core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatAnchor,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  routes: Route[] = [
    {title: 'Home', path: 'shop/kratom/home', children: []},
    {title: 'White', path: 'shop/kratom/white-vein', children: []},
    {title: 'Green', path: 'shop/kratom/green-vein', children: []},
    {title: 'Red', path: 'shop/kratom/red-vein', children: []}];

  linkActiveOptions: IsActiveMatchOptions =
    inject(RouteDomService).getIsActiveMatchOptions();

}
