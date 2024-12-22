import { AsyncPipe } from '@angular/common';
import { afterNextRender, Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
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

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, A4WRootComponent, AppbarComponent,
        LogoContainerComponent, ThemeToggleActionComponent, SubNavComponent, NavigationDirective,
        ActionContainerComponent, ScrollTopActionComponent, FragmentDirective, AsyncPipe, LoginComponent, SmallFooter1Component, AppbarTwoRowsComponent, EnableAdminActionComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

  isLoading = signal(true);
  isLoggedIn = toSignal(this.authService.isLoggedIn$);

  constructor(protected authService: AuthService,
              // protected adminService: AdminService,
  ) {

    afterNextRender({ write: () => {
        this.isLoading.set(false);
    } }, );
  }

}
