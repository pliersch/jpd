import { afterNextRender, AfterRenderPhase, Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CartPopOverComponent } from '@shop/pages/shop/cart/components/pop-over/cart-pop-over.component';
import {
  A4WRootComponent,
  ActionContainerComponent,
  AppbarComponent,
  AppbarTwoRowsComponent,
  AuthService,
  CardH1Component,
  EnableAdminActionComponent,
  FragmentDirective,
  LoginComponent,
  LogoContainerComponent,
  NavigationDirective,
  ScrollTopActionComponent,
  SigninComponent,
  SmallFooter1Component,
  SubNavComponent,
  ThemeToggleActionComponent,
} from 'jpd-core';

@Component({
  selector: 'shop-root',
  standalone: true,
  imports: [A4WRootComponent, AppbarComponent,
    LogoContainerComponent, ThemeToggleActionComponent, SubNavComponent, NavigationDirective,
    ActionContainerComponent, ScrollTopActionComponent, SigninComponent, FragmentDirective,
    LoginComponent, SmallFooter1Component, AppbarTwoRowsComponent, EnableAdminActionComponent,
    CardH1Component, CartPopOverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  isLoading = signal(true);
  isLoggedIn = toSignal(this.authService.isLoggedIn$);

  constructor(protected authService: AuthService,
              // protected adminService: AdminService,
  ) {

    afterNextRender(() => {
      this.isLoading.set(false)
    }, {phase: AfterRenderPhase.Write});
  }

}
