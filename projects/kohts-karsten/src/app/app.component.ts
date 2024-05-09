import { afterNextRender, AfterRenderPhase, Component, signal } from '@angular/core';
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
import { BreakpointService } from '../../../jpd-core/src/lib/common';

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


  isRendered = signal(false);

  constructor(navigationService: NavigationService,
              breakpointService: BreakpointService,
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              cookieConsentService: CookieConsentService) {
    navigationService.startSaveHistory();

    afterNextRender(() => {
      cookieConsentService.initCookieConsent();
      // https://trello.com/c/N4Ixxe8z/90-appcomponent-signal-isrendered
      breakpointService.dimension$.subscribe(res => {
        this.isRendered.set(true);
      });
      // CookieConsent.showPreferences();

    }, {phase: AfterRenderPhase.Write});
  }

}
