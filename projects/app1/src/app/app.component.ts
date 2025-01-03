import { afterNextRender, Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  A4WRootComponent,
  ActionContainerComponent,
  AppbarTwoRowsComponent,
  AuthService,
  FragmentDirective,
  LoginComponent,
  LogoContainerComponent,
  NavigationDirective,
  ScrollTopActionComponent,
  SmallFooter1Component,
  SubNavComponent,
  ThemeToggleActionComponent,
} from 'jpd-core';

@Component({
  selector: 'app-root',
  imports: [A4WRootComponent, LogoContainerComponent, ThemeToggleActionComponent, SubNavComponent, NavigationDirective,
    ActionContainerComponent, ScrollTopActionComponent, FragmentDirective, LoginComponent, SmallFooter1Component, AppbarTwoRowsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  isLoading = signal(true);
  isLoggedIn = toSignal(this.authService.isLoggedIn$);

  constructor(protected authService: AuthService,
              // protected adminService: AdminService,
  ) {

    afterNextRender({
      write: () => {
        this.isLoading.set(false);
      }
    },);
  }

}
