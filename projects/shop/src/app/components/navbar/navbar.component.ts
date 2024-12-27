import { Component, inject } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { IsActiveMatchOptions, Route } from '@angular/router';
import { RouteDomService } from 'jpd-core';

@Component({
  selector: 'shop-navbar',
  imports: [
    MatSlideToggle
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  routes: Route[] = [
    // {title: 'Home', path: 'home', children: []},
    {title: 'White', path: 'white-vein', children: []},
    {title: 'Green', path: 'green-vein', children: []},
    {title: 'Red', path: 'red-vein', children: []}];

  linkActiveOptions: IsActiveMatchOptions =
    inject(RouteDomService).getIsActiveMatchOptions();

}
