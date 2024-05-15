import { Injectable } from '@angular/core';
import { Environment } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export abstract class EnvironmentService {

  abstract getEnvironment(): Environment;
}
