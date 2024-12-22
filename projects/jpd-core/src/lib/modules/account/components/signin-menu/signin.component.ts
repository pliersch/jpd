// import { LoginFail, LoginWithEmail, LoginWithGoogle, Logout } from "@account/store/account.actions";
// import { AccountState } from "@account/store/account.state";
// import { GoogleUser } from "@account/store/google-user.model";
// import { User } from "@account/store/user.model";
import { NgIf } from "@angular/common";
import { Component, HostListener, inject, isDevMode, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { AccountStore } from '../../store/account.store';
// import { RouterState } from "@app/core/stores/routes/router.state";
// import { Select, Store } from "@ngxs/store";
// import { CredentialResponse } from "google-one-tap";
import { User } from '../../store/user.model';

@Component({
    selector: 'a4w-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    imports: [NgIf, MatButtonModule, MatMenuModule, MatIconModule]
})
export class SigninComponent implements OnInit {

  readonly store = inject(AccountStore);
  // @Select(AccountState.getUser)
  user$: Observable<User>;
  user: User;
  //
  // @Select(AccountState.getGoogleUser)
  // googleUser$: Observable<GoogleUser>;
  // googleUser: GoogleUser | null;

  isDevMode = isDevMode();

  // isDevMode = false;

  constructor(/*private store: Store,*/
              private router: Router) { }

  @HostListener('window:load')
  onLoad(): void {
    if (this.isDevMode) {
      return;
    }
    // if (!window.google?.accounts) {
    //   return;
    // }
    // window.google.accounts.id.initialize({
    //   client_id: '334979481378-o30p8vigr8pma4sdod58qepl6ekk1k8b.apps.googleusercontent.com',
    //   auto_select: true,
    //   callback: (credential) => {
    //     this.handleCredentialResponse(credential);
    //   }
    // });
    // window.google.accounts.id.prompt();
  }

  ngOnInit(): void {
    if (this.isDevMode) {
      this.store.login();
    }
    // this.googleUser$.subscribe(res => {
    //   this.googleUser = res;
    // });

    // todo
    // this.user$.subscribe(res => {
    //   const routeBeforeSignin = this.store.selectSnapshot(RouterState.getRouteBeforeSignin);
    //   if (routeBeforeSignin != '') {
    //     void this.router.navigateByUrl(routeBeforeSignin);
    //   }
    //   // if (!this.googleUser) { // prefer google user to show avatar
    //   //   this.user = res;
    //   // }
    //   this.user = res;
    // });
  }

  // handleCredentialResponse(response: CredentialResponse): void {
  //   if (this.isDevMode) {
  //     return;
  //   }
  //   const user = this.decodeCredentialResponse(response);
  //   if (user) {
  //     this.store.dispatch(new LoginWithGoogle(user));
  //   } else {
  //     this.store.dispatch(new LoginFail('Google User Probleme'));
  //   }
  // }
  //
  // decodeCredentialResponse(response: CredentialResponse): GoogleUser | null {
  //   let decodedToken: any | null = null;
  //   try {
  //     decodedToken = JSON.parse(atob(response?.credential.split('.')[1]));
  //   } catch (e) {
  //     console.error('Error while trying to decode token', e);
  //   }
  //   if (!decodedToken) {
  //     return null;
  //   }
  //   return this.createSocialUser(decodedToken);
  // }
  //
  // private createSocialUser(decodedToken: any): GoogleUser {
  //   const user = new GoogleUser();
  //   // user.id = decodedToken.sub;
  //   user.authToken = decodedToken.authToken;
  //   user.name = decodedToken.name;
  //   user.email = decodedToken.email;
  //   user.photoUrl = decodedToken.picture;
  //   user.givenName = decodedToken.given_name;
  //   user.lastName = decodedToken.family_name;
  //   return user;
  // }

  logout(): void {
    // window.google?.accounts?.id?.disableAutoSelect();
    // todo
    // this.store.dispatch(new Logout());
    void this.router.navigate(['']);
  }

  navigateToAccountProfile(): void {
    void this.router.navigate(['account']);
  }
}
