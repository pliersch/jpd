import { Injectable } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { Route } from 'jpd-core';

@Injectable({
  providedIn: 'root'
})
export class CustomRouteDomService {

  getRouteDom(): Route {
    return {
      name: 'ROOT',
      path: '',
      children: [
        {
          name: 'Home', path: '', children: [],
          fragments: ['top', 'wir', 'service', 'skills', 'maps', 'kontakt']
        }]
    }
  }

  getIsActiveMatchOptions(): IsActiveMatchOptions {
    return {
      matrixParams: 'exact',
      queryParams: 'exact',
      paths: 'exact',
      fragment: 'exact',
    };
  }
}
