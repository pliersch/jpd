import { CommonModule, Location } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { fader, Route } from '../../../common';
import { BaseComponent } from '../../core/base/base.component';

export interface TabNavModel {
  routes: Route[];
}

@Component({
  selector: 'a4w-tab-nav',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatButtonModule, RouterOutlet],
  templateUrl: './tab-nav.component.html',
  styleUrl: './tab-nav.component.scss',
  animations: [fader]
  // animations: [slider]
})
export class TabNavComponent extends BaseComponent<TabNavModel> implements OnInit /*AfterViewInit*/ {

  @HostBinding('@.disabled')
  public animationsDisabled = false;

  activeLink: string;

  constructor(private location: Location) {
    super('TabNav');
  }

  ngOnInit(): void {
    this.activeLink = this.model.routes[0].path;
    this.activeLink = this.location.path();
    this.location.onUrlChange((url) => this.activeLink = url);
  }

  // ngAfterViewInit(): void {
  //   // ExpressionChangedAfterItHasBeenCheckedError 😜
  // TODO use signal!!!
  //
  //   setTimeout(() => this.animationsDisabled = false);
  // }

  navigateUrl(url: string): void {
    void this.router.navigateByUrl(url);
  }

  prepareRoute(outlet: RouterOutlet): any {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

  // getState(outlet: any) {
  //   // Changing the activatedRouteData.state triggers the animation
  //   // return outlet.activatedRouteData.state;
  // }

  // bgColor: ThemePalette = undefined;

  // toggleBackground(): void {
  //   this.background = this.background ? undefined : 'primary';
  // }

  // addLink(): void {
  //   this.links.push(`Link ${this.links.length + 1}`);
  // }
}
