import { Component } from '@angular/core';
import {
  A4WRootComponent,
  ActionContainerComponent,
  AppbarComponent,
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
    AppbarComponent,
    StickyAppbarComponent,
    PhoneActionComponent,
    ActionContainerComponent,
    ThemeToggleActionComponent,
    LogoContainerComponent,
    ShopFooter1Component,
    FragmentDirective,
    SmallFooter2Component,
  ],
  standalone: true
})
export class AppComponent {

  constructor(navigationService: NavigationService) {
    navigationService.startSaveHistory();
  }
}
