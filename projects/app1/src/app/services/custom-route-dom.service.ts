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
        // {name: 'Home', path: 'home', children: [], fragments: ['#top']},
        {name: 'Galerie', path: 'galerie', children: []},
        {name: 'Blog', path: 'blog', children: []},
        {name: 'Team', path: 'team', children: []},
        {name: 'Youtube', path: 'youtube', children: []},
        {
          name: 'Service', path: 'service', children: [
            {name: 'Gesundheit', path: 'health', children: []},
            {name: 'Pflege', path: 'care', children: [],},
            {name: 'Kräuter', path: 'herbal', children: []},
          ], fragments: ['#top']
        },
        {name: 'Animation', path: 'animation', children: []},
        // {name: 'Kontakt', path: 'kontakt', children: []},
        {name: 'Forest', path: 'forest', children: []},
        // {name: 'Datenschutz', path: 'datenschutz', children: []},
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
