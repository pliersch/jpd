import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IsActiveMatchOptions, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Route, RouteDomService } from '../../../../common';

@Component({
    selector: 'a4w-scroll-out-appbar',
    imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterLinkActive, RouterLink, MatListModule],
    templateUrl: './scroll-out-appbar.component.html',
    styleUrls: ['./scroll-out-appbar.component.scss']
})
export class ScrollOutAppbarComponent implements OnInit {


  route$: Observable<Route>;
  linkActiveOptions: IsActiveMatchOptions;

  constructor(private routeDomService: RouteDomService,) {
  }

  ngOnInit(): void {
    this.route$ = of(this.routeDomService.getRouteDom());
    this.linkActiveOptions = this.routeDomService.getIsActiveMatchOptions()
  }

}
