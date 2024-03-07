import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IsActiveMatchOptions, RouterLink, RouterLinkActive } from '@angular/router';
// import { Route } from '@lib/common/interfaces/route';
// import { RouteDomService } from '@lib/common/services/route-dom.service';
// import { PhoneActionComponent } from '@lib/components/actions/phone/phone-action.component';
// import { ThemeToggleActionComponent } from '@lib/components/actions/theme-toggle/theme-toggle-action.component';
// import { Observable, of } from 'rxjs';

@Component({
  selector: 'a4w-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterLinkActive, RouterLink, MatSidenavModule, MatIcon, MatIconButton],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent /*implements OnInit*/ {

  // route$: Observable<Route>;
  // linkActiveOptions: IsActiveMatchOptions;
  //
  // constructor(private routeDomService: RouteDomService,) { }
  //
  // ngOnInit(): void {
  //   this.route$ = of(this.routeDomService.getRouteDom());
  //   this.linkActiveOptions = this.routeDomService.getIsActiveMatchOptions()
  // }
}
