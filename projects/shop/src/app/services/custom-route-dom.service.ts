import { Injectable } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { Route, RouteDomService } from 'jpd-core';

@Injectable({
  providedIn: 'root'
})
export class CustomRouteDomService extends RouteDomService {

  getRouteDom(): Route {
    return {
      name: 'ROOT',
      path: '',
      children: [
        {name: 'Home', path: 'home', children: [], fragments: ['#top']},
        // {name: 'Blog', path: 'blog', children: []},
        {name: 'Kratom', path: 'shop/kratom', children: []},
        {name: 'CBD', path: 'shop/cbd', children: []},
        {name: 'Sonstiges', path: 'shop/sonstiges', children: []},
        // {name: 'Kontakt', path: 'kontakt', children: []},
        // {name: 'Datenschutz', path: 'datenschutz', children: []},
        // {name: 'Admin', path: 'admin', children: []},
      ]
    }
  }

  getIsActiveMatchOptions(): IsActiveMatchOptions {
    return {
      matrixParams: 'exact',
      queryParams: 'exact',
      paths: 'subset',
      fragment: 'ignored',
    };
  }

  getAppbarRoutes(): Route {
    return {name: 'Kontakt', path: 'kontakt', children: []};
  }

  getFooterRoutes(): Route {
    return {
      name: 'ROOT',
      path: '',
      children: [
        {name: 'Kontakt', path: 'kontakt', children: []},
        {name: 'Datenschutz', path: 'datenschutz', children: []},
        {name: 'Impressum', path: 'impressum', children: []},
      ]
    }
  };

}
