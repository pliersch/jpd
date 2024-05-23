import { AsyncPipe } from '@angular/common';
import { afterNextRender, AfterRenderPhase, Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import {
  A4WRootComponent,
  ActionContainerComponent,
  AppbarNavComponent,
  AppbarTwoRowsComponent,
  AuthService,
  CookieConsentService,
  FragmentDirective,
  LoginComponent,
  LogoContainerComponent,
  PhoneActionComponent,
  ShopFooter1Component,
  SmallFooter2Component,
  StickyAppbarComponent,
  ThemeToggleActionComponent
} from 'jpd-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    A4WRootComponent,
    // AppbarComponent,
    StickyAppbarComponent,
    PhoneActionComponent,
    ActionContainerComponent,
    ThemeToggleActionComponent,
    LogoContainerComponent,
    ShopFooter1Component,
    FragmentDirective,
    SmallFooter2Component,
    AppbarTwoRowsComponent,
    AppbarNavComponent,
    AsyncPipe,
    LoginComponent,
  ],
  standalone: true
})
export class AppComponent {

  isLoading = signal(true);
  isLoggedIn = toSignal(this.authService.isLoggedIn$);

  constructor(private router: Router,
              protected authService: AuthService,
              // navigationService: NavigationService,
              cookieConsentService: CookieConsentService) {

    // navigationService.startSaveHistory();

    afterNextRender(() => {
      cookieConsentService.initCookieConsent();
      // https://trello.com/c/N4Ixxe8z/90-appcomponent-signal-isrendered
      this.isLoading.set(false)
    }, {phase: AfterRenderPhase.Write});
  }

}
