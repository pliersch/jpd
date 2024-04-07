import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  booleanAttribute,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from "@angular/material/toolbar";
import { IsActiveMatchOptions, RouterLink, RouterLinkActive } from "@angular/router";

import { Observable, of } from "rxjs";
import {
  BreakpointService,
  CssDomService,
  Dimension,
  PageScrollService,
  Route,
  RouteDomService,
  Themes,
  ThemeToggleChange,
  ToggleSidenavService
} from '../../../../common';
import { NavigationDirective } from '../../../navigation/directives/navigation.directive';

@Component({
  selector: 'a4w-appbar-two-rows',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, RouterLinkActive, RouterLink, MatMenuModule, MatListModule],
  templateUrl: './appbar-two-rows.component.html',
  styleUrls: ['./appbar-two-rows.component.scss'],
})
export class AppbarTwoRowsComponent implements OnInit, AfterViewInit {

  @ContentChild(NavigationDirective)
  navigationDirective?: NavigationDirective;

  @ViewChild('navContainer', {read: ElementRef})
  navContainer: ElementRef;

  @Input()
  bgColorDark: string; // fixme set default value. current both colors must set

  @Input()
  bgColorLight: string; // fixme set default value. current both colors must set

  bgColor: string;

  @Input({transform: booleanAttribute})
  showOnScrollTop: boolean = true;

  @Input({transform: booleanAttribute})
  transparent = false;
  _transparent = false;

  @Input({transform: booleanAttribute})
  blurry = false;

  @Input({transform: booleanAttribute})
  rounded = false;

  navVisible = 'hidden';

  routes: Route[] = [];
  rootRoute: Route;

  isOpen = true;
  // todo move it into config file
  scrollTop = 200;

  isSmall$: Observable<boolean>;
  isXSmall$: Observable<boolean>;

  linkActiveOptions: IsActiveMatchOptions;

  constructor(private toggleSidenavService: ToggleSidenavService,
              scrollService: PageScrollService,
              private cssDomService: CssDomService,
              private routeDomService: RouteDomService,
              private breakpointService: BreakpointService) {
    scrollService.scrollTop$.subscribe(scrollTop => this.onScroll(scrollTop));
    cssDomService.themeToggle$.subscribe(state => this.onToggleTheme(state));
  }

  ngOnInit(): void {
    this.rootRoute = this.routeDomService.getRouteDom();
    this.linkActiveOptions = this.routeDomService.getIsActiveMatchOptions();
    this.bgColor = this.cssDomService.getTheme() === Themes.DARK ? this.bgColorDark : this.bgColorLight;
    this._transparent = this.transparent;
    this.breakpointService.dimension$.subscribe(res => {
      console.log(res)
      this.isSmall$ = of(res === Dimension.Small);
      this.isXSmall$ = of(res === Dimension.XSmall);
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.navVisible = 'visible');
  }

  emitNavToggle(): void {
    this.toggleSidenavService.toggleSidenav();
  }

  private onScroll(scrollTop: number): void {
    if (this.transparent) {
      this._transparent = scrollTop <= 50;
    }
    if (this.showOnScrollTop) {
      this.isOpen = scrollTop < this.scrollTop;
    } else {
      this.isOpen = scrollTop >= this.scrollTop;
    }
    this.scrollTop = scrollTop;
  }

  showSubNav(route: Route, x: number): void {
    this.navigationDirective?.show(route, x)
  }

  hideSubNav(): void {
    this.navigationDirective?.hide();
  }

  private onToggleTheme(change: ThemeToggleChange): void {
    if (change.add === Themes.DARK) {
      this.bgColor = this.bgColorDark;
    } else {
      this.bgColor = this.bgColorLight;
    }
  }
}
