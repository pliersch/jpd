import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  A4WFooterComponent,
  A4WRootComponent,
  ActionContainerComponent,
  AppbarComponent,
  FooterComponent,
  FragmentDirective,
  LogoContainerComponent,
  NavigationDirective,
  ScrollTopActionComponent,
  SubNavComponent,
  ThemeToggleActionComponent,
} from 'jpd-core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, A4WRootComponent, AppbarComponent,
    LogoContainerComponent, ThemeToggleActionComponent, SubNavComponent, NavigationDirective,
    ActionContainerComponent, ScrollTopActionComponent, FooterComponent, A4WFooterComponent, FragmentDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app1';
}
