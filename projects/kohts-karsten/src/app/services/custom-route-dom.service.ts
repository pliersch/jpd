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
        {
          name: 'Home', path: '', children: [],
          fragments: ['top', 'wir', 'service', 'skills', 'maps', 'kontakt']
        }
      ]
    }
  }

  getAppbarRoutes(): Route {
    return {name: 'Datenschutz', path: 'datenschutz', children: []};
  }

  getFooterRoutes(): Route {
    return {
      name: 'ROOT',
      path: '',
      children: [
        {name: 'Datenschutz', path: 'datenschutz', children: []},
        {name: 'Impressum', path: 'impressum', children: []},
      ]
    }
  };

  getIsActiveMatchOptions(): IsActiveMatchOptions {
    return {
      matrixParams: 'exact',
      queryParams: 'exact',
      paths: 'exact',
      fragment: 'exact',
    };
  }
}
