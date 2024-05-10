import { AsyncPipe } from '@angular/common';
import { afterNextRender, AfterRenderPhase, AfterViewInit, Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  A4WRootComponent,
  ActionContainerComponent,
  AppbarComponent,
  AppbarTwoRowsComponent,
  AuthService,
  EnableAdminActionComponent,
  FragmentDirective,
  LoginComponent,
  LogoContainerComponent,
  NavigationDirective,
  ScrollTopActionComponent,
  SmallFooter1Component,
  SubNavComponent,
  ThemeToggleActionComponent,
} from 'jpd-core';
import { BreakpointService } from '../../../jpd-core/src/lib/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, A4WRootComponent, AppbarComponent,
    LogoContainerComponent, ThemeToggleActionComponent, SubNavComponent, NavigationDirective,
    ActionContainerComponent, ScrollTopActionComponent, FragmentDirective, AsyncPipe, LoginComponent, SmallFooter1Component, AppbarTwoRowsComponent, EnableAdminActionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  isRendered = signal(false);

  constructor(protected authService: AuthService,
              breakpointService: BreakpointService,
              // protected adminService: AdminService,
              private router: Router) {
    afterNextRender(() => {
      // cookieConsentService.initCookieConsent();
      // https://trello.com/c/N4Ixxe8z/90-appcomponent-signal-isrendered
      breakpointService.dimension$.subscribe(() => {
        this.isRendered.set(true);
      });
      // CookieConsent.showPreferences();

    }, {phase: AfterRenderPhase.Write});
  }

  ngAfterViewInit(): void {
    this.authService.correctPassword$.subscribe((correct: boolean) => {
      if (!correct) {
        this.router.navigateByUrl('/');
      }
    })
  }
}
