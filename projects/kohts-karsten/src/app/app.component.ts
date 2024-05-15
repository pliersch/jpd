import { AsyncPipe } from '@angular/common';
import { afterNextRender, AfterRenderPhase, Component, effect, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import {
  A4WRootComponent,
  ActionContainerComponent,
  AppbarNavComponent,
  AppbarTwoRowsComponent,
  AuthService,
  BreakpointService,
  CookieConsentService,
  FragmentDirective,
  LoginComponent,
  LogoContainerComponent,
  NavigationService,
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

  isRendered = signal(false);
  isLoggedIn = toSignal(this.authService.correctPassword$);

  constructor(private router: Router,
              protected authService: AuthService,
              navigationService: NavigationService,
              breakpointService: BreakpointService,
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              cookieConsentService: CookieConsentService) {

    navigationService.startSaveHistory();

    effect(() => {
      if (this.isLoggedIn()) {
        void this.router.navigateByUrl('/');
      }
    });

    afterNextRender(() => {
      cookieConsentService.initCookieConsent();
      // https://trello.com/c/N4Ixxe8z/90-appcomponent-signal-isrendered
      breakpointService.dimension$.subscribe(() => {
        this.isRendered.set(true);
      });
      // CookieConsent.showPreferences();

    }, {phase: AfterRenderPhase.Write});
  }

}
