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
        // {name: 'Home', path: 'home', children: [], fragments: ['#top']},
        {name: 'Galerie', path: 'gallery', children: []},
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
        {name: 'Kontakt', path: 'contact', children: []},
        {name: 'Forest', path: 'forest', children: []},
        {name: 'Datenschutz', path: 'privacy', children: []},
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
