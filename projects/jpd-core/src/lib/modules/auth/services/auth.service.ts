import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { EnvironmentService } from '../../../common';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private environmentService: EnvironmentService) { }

  readonly correctPassword$: Subject<boolean>
    = new BehaviorSubject<boolean>(
    !this.environmentService.getEnvironment().production);

  login(password: string): void {
    this.correctPassword$.next(
      password === this.environmentService.getEnvironment().login);
  }
}
