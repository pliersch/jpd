import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  A4WFooterComponent,
  A4WRootComponent,
  ActionContainerComponent,
  AppbarComponent,
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
  standalone: true,
  imports: [RouterOutlet, A4WRootComponent, AppbarComponent,
    LogoContainerComponent, ThemeToggleActionComponent, SubNavComponent, NavigationDirective,
    ActionContainerComponent, ScrollTopActionComponent, A4WFooterComponent, FragmentDirective, AsyncPipe, LoginComponent, SmallFooter1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  constructor(protected authService: AuthService,
              private router: Router) { }

  ngAfterViewInit(): void {
    this.authService.correctPassword$.subscribe((correct: boolean) => {
      if (!correct) {
        this.router.navigateByUrl('/');
      }
    })
  }
}
