import { Injectable } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { Route } from '@lib/common/interfaces/route';

@Injectable({
  providedIn: 'root'
})
export abstract class RouteDomService {

  abstract getRouteDom(): Route;

  abstract getIsActiveMatchOptions(): IsActiveMatchOptions;
}
