import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  booleanAttribute,
  Component,
  contentChild,
  ElementRef,
  HostListener,
  input,
  OnInit,
  viewChild
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IsActiveMatchOptions, RouterLink, RouterLinkActive } from '@angular/router';

import { Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Route,
  RouteDomService,
  ScrollService,
  Themes,
  ThemeService,
  ThemeToggleChange,
  ToggleSidenavService
} from '../../../../common';
import { NavigationDirective } from '../../../navigation/directives/navigation.directive';

@Component({
    selector: 'a4w-appbar',
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, RouterLinkActive, RouterLink, MatMenuModule, MatListModule],
    templateUrl: './appbar.component.html',
    styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit, AfterViewInit {

  readonly navigationDirective = contentChild(NavigationDirective);

  readonly navContainer = viewChild('navContainer', { read: ElementRef });

  readonly bgColorDark = input.required<string>(); // fixme set default value. current both colors must set

  readonly bgColorLight = input.required<string>(); // fixme set default value. current both colors must set

  bgColor: string;

  readonly transparent = input(false, { transform: booleanAttribute });
  _transparent = false;

  readonly blurry = input(false, { transform: booleanAttribute });

  readonly rounded = input(false, { transform: booleanAttribute });

  actionsVisible = true;
  routes: Route[] = [];
  rootRoute: Route;

  linkActiveOptions: IsActiveMatchOptions;

  constructor(private toggleSidenavService: ToggleSidenavService,
              scrollService: ScrollService,
              private cssDomService: ThemeService,
              private routeDomService: RouteDomService,
              private breakpointObserver: BreakpointObserver) {
    scrollService.scrollTop$.subscribe(scrollTop => this.onScroll(scrollTop));
    cssDomService.themeState$.subscribe(state => this.onToggleTheme(state));
  }

  isHandset$: Observable<boolean>;

  ngOnInit(): void {
    this.rootRoute = this.routeDomService.getRouteDom();
    this.linkActiveOptions = this.routeDomService.getIsActiveMatchOptions();
    this.bgColor = this.cssDomService.getTheme() === Themes.DARK ? this.bgColorDark() : this.bgColorLight();
    this._transparent = this.transparent();
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        tap(res => console.log(res.matches)),
        map(result => result.matches)
      );
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.onResize());
  }

  emitNavToggle(): void {
    this.toggleSidenavService.toggleSidenav();
  }

  private onScroll(scrollTop: number): void {
    if (this.transparent()) {
      this._transparent = scrollTop <= 50;
    }
  }

  showSubNav(route: Route, x: number): void {
    this.navigationDirective()?.show(route, x)
  }

  hideSubNav(): void {
    this.navigationDirective()?.hide();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    const navContainer = this.navContainer();
    if (!navContainer) {
      return;
    }
    const navContainerWidth = navContainer.nativeElement.offsetWidth;
    const appbarWidth = navContainerWidth + 150 + 150;
    this.actionsVisible = appbarWidth <= window.innerWidth;
  }

  private onToggleTheme(change: ThemeToggleChange): void {
    if (change.add === Themes.DARK) {
      this.bgColor = this.bgColorDark();
    } else {
      this.bgColor = this.bgColorLight();
    }
  }
}
