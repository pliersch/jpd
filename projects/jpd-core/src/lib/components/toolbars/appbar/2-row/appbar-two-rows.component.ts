import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, contentChild, input, OnInit, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IsActiveMatchOptions, RouterLink, RouterLinkActive } from '@angular/router';
import { map } from 'rxjs/operators';
import {
  BreakpointService,
  Dimension,
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
    selector: 'a4w-appbar-two-rows',
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, RouterLinkActive, RouterLink, MatMenuModule, MatListModule],
    templateUrl: './appbar-two-rows.component.html',
    styleUrls: ['./appbar-two-rows.component.scss']
})
export class AppbarTwoRowsComponent implements OnInit {

  readonly navigationDirective = contentChild(NavigationDirective);

  readonly bgColorDark = input<string>(); // fixme set default value. current both colors must set

  readonly bgColorLight = input<string>(); // fixme set default value. current both colors must set

  bgColor: string;

  readonly transparent = input(false, { transform: booleanAttribute });
  _transparent = false;

  readonly blurry = input(false, { transform: booleanAttribute });

  rootRoute: Route;

  isOpen = true;
  isScrollByRouter = true;
  scrollTop = 0;

  // for phone layout
  isXSmall: Signal<boolean | undefined>;
  // for 2 rows layout (extra navbar)
  isSmall: Signal<boolean | undefined>;

  linkActiveOptions: IsActiveMatchOptions;

  constructor(private toggleSidenavService: ToggleSidenavService,
              scrollService: ScrollService,
              cssDomService: ThemeService,
              private routeDomService: RouteDomService,
              private breakpointService: BreakpointService) {

    scrollService.scrollTop$.subscribe(scrollTop => this.onScroll(scrollTop));
    cssDomService.themeState$.subscribe(state => this.onToggleTheme(state));

    this.isXSmall = toSignal(this.breakpointService.dimension$.pipe(
      map(dimension => dimension === Dimension.XSmall)));

    this.isSmall = toSignal(this.breakpointService.dimension$.pipe(
      map(dimension => dimension === Dimension.Small)));
  }

  ngOnInit(): void {
    this.rootRoute = this.routeDomService.getRouteDom();
    this.linkActiveOptions = this.routeDomService.getIsActiveMatchOptions();
    // this.bgColor = this.cssDomService.getTheme() === Themes.DARK ? this.bgColorDark : this.bgColorLight;
    this._transparent = this.transparent();
  }

  emitNavToggle(): void {
    this.toggleSidenavService.toggleSidenav();
  }

  private onScroll(scrollTop: number): void {
    if (this.isScrollByRouter) {
      this.isOpen = true;
      this.isScrollByRouter = false;
      return;
    }
    // if (this.transparent) {
    //   this._transparent = scrollTop <= 50;
    // }

    this.isOpen =
      // show nav on scroll up
      scrollTop <= this.scrollTop
      // show nav first 100px
      || scrollTop <= 100
    this.scrollTop = scrollTop;
  }

  showSubNav(route: Route, x: number): void {
    this.navigationDirective()?.show(route, x)
  }

  hideSubNav(): void {
    this.navigationDirective()?.hide();
  }

  private onToggleTheme(change: ThemeToggleChange): void {
    if (change.add === Themes.DARK) {
      this.bgColor = this.bgColorDark() ? this.bgColorDark()! : 'no';
    } else {
      this.bgColor = this.bgColorLight() ? this.bgColorLight()! : 'no';
    }
  }

  onClickFragment(): void {
    this.isScrollByRouter = true;
  }
}
