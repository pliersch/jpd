import { Injectable } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { Route } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export abstract class RouteDomService {

  abstract getRouteDom(): Route;

  abstract getAppbarRoutes(): Route;

  abstract getFooterRoutes(): Route;

  abstract getIsActiveMatchOptions(): IsActiveMatchOptions;
}
