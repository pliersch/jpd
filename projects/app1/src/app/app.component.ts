import { AsyncPipe } from '@angular/common';
import { afterNextRender, AfterRenderPhase, Component, effect, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
export class AppComponent {

  isRendered = signal(false);
  isLoggedIn = toSignal(this.authService.isLoggedIn$);

  constructor(protected authService: AuthService,
              breakpointService: BreakpointService,
              // protected adminService: AdminService,
              private router: Router) {

    effect(() => {
      if (this.isLoggedIn()) {
        void this.router.navigateByUrl('/');
      }
    });

    afterNextRender(() => {
      // https://trello.com/c/N4Ixxe8z/90-appcomponent-signal-isrendered
      breakpointService.dimension$.subscribe(() => {
        this.isRendered.set(true);
      });
    }, {phase: AfterRenderPhase.Write});
  }

}
