import { afterNextRender, Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CartPopOverComponent } from '@shop/pages/shop/cart/components/pop-over/cart-pop-over.component';
import {
  A4WRootComponent,
  ActionContainerComponent,
  AnimationsSettingsComponent,
  AppbarTwoRowsComponent,
  AuthService,
  FragmentDirective,
  LoginComponent,
  LogoContainerComponent,
  NavigationDirective,
  PopOverComponent,
  ScrollTopActionComponent,
  SettingsOverlayComponent,
  SigninComponent,
  SmallFooter1Component,
  SubNavComponent,
  ThemeToggleActionComponent,
} from 'jpd-core';

@Component({
  selector: 'shop-root',
  imports: [A4WRootComponent, AnimationsSettingsComponent,
    LogoContainerComponent, ThemeToggleActionComponent, SubNavComponent, NavigationDirective,
    ActionContainerComponent, ScrollTopActionComponent, SigninComponent, FragmentDirective,
    LoginComponent, PopOverComponent, SmallFooter1Component, AppbarTwoRowsComponent,
    CartPopOverComponent, SettingsOverlayComponent],
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
