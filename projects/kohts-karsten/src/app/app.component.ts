import { afterNextRender, AfterRenderPhase, Component } from '@angular/core';
import {
  A4WRootComponent,
  ActionContainerComponent,
  AppbarNavComponent,
  AppbarTwoRowsComponent,
  CookieConsentService,
  FragmentDirective,
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
  ],
  standalone: true
})
export class AppComponent {

  constructor(navigationService: NavigationService,
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              cookieConsentService: CookieConsentService) {
    navigationService.startSaveHistory();

    afterNextRender(() => {
      cookieConsentService.initCookieConsent();
      // CookieConsent.showPreferences();

    }, {phase: AfterRenderPhase.Write});
  }

}
