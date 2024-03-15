import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

  readonly correctPassword$: Subject<boolean> = new BehaviorSubject<boolean>(true);

  login(password: string): void {
    this.correctPassword$.next(password === 'a4w2024!');
  }
}
