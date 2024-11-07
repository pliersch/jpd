import { Injectable } from '@angular/core';
import { Environment, EnvironmentService } from 'jpd-core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomEnvironmentService extends EnvironmentService {

  override getEnvironment(): Environment {
    return environment;
  }
}
