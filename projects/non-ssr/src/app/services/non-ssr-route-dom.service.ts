import { Injectable } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { Route } from 'jpd-core';

@Injectable({
  providedIn: 'root'
})
export class NonSsrRouteDomService {

  getRouteDom(): Route {
    return {
      name: 'ROOT',
      path: '',
      children: [
        {name: 'Home', path: '', children: [], fragments: ['top']},
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
}
