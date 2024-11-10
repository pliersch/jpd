import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { EnvironmentService } from '../../../common';
import { Role } from './role';
import { Status } from './status';
import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl =
    `${this.environmentService.getEnvironment().apiUrl}/user`;

  constructor(private http: HttpClient,
              private environmentService: EnvironmentService) { }

  // signin(user: GoogleUser): Observable<User> {
  //   return this.http.post<User>(baseUrl + '/signin', user);
  // }

  login(password: string): void {
    this.isLoggedIn$.next(
      password === this.environmentService.getEnvironment().password);
  }

  loginFake(): Observable<User> {
    const wtf: User = {
      id: 'dev',
      givenName: 'John',
      surName: 'Dev',
      email: 'dev@foo.com',
      role: Role.User,
      status: Status.accept,
      lastLogin: new Date(),
      created: new Date()
    };
    return of(wtf);
  }

  loginWithEmail(email: string, password: string): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/login', {email: email, password: password});
  }

  loginWithId(id: string): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/login-id', {id: id});
  }

  // readonly isLoggedIn$: Subject<boolean>
  //   = new BehaviorSubject<boolean>(false);

  readonly isLoggedIn$: Subject<boolean>
    = new BehaviorSubject<boolean>(
    !this.environmentService.getEnvironment().production);

}
