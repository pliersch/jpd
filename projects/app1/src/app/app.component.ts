import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  A4WRootComponent,
  ActionContainerComponent,
  AppbarComponent,
  AppbarNavComponent,
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
  standalone: true,
  imports: [RouterOutlet, A4WRootComponent, AppbarComponent,
    LogoContainerComponent, ThemeToggleActionComponent, SubNavComponent, NavigationDirective,
    ActionContainerComponent, ScrollTopActionComponent, FragmentDirective, AsyncPipe, LoginComponent, SmallFooter1Component, AppbarTwoRowsComponent, AppbarNavComponent],
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
