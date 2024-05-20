import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IsActiveMatchOptions, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Route, RouteDomService, ScrollService } from '../../../../common';

@Component({
  selector: 'a4w-sticky-appbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterLinkActive, RouterLink, MatListModule],
  templateUrl: './sticky-appbar.component.html',
  styleUrls: ['./sticky-appbar.component.scss']
})
export class StickyAppbarComponent implements OnInit {

  @Input({transform: booleanAttribute})
  showOnScrollTop: boolean;

  isOpen = false;
  // todo move it into config file
  scrollTop = 200;

  route$: Observable<Route>;
  linkActiveOptions: IsActiveMatchOptions;

  constructor(scrollService: ScrollService,
              private routeDomService: RouteDomService,) {
    scrollService.scrollTop$.subscribe(scrollTop => this.handleDisplayBehavior(scrollTop));
  }

  ngOnInit(): void {
    this.route$ = of(this.routeDomService.getRouteDom());
    this.linkActiveOptions = this.routeDomService.getIsActiveMatchOptions()
  }

  private handleDisplayBehavior(scrollTop: number): void {
    if (this.showOnScrollTop) {
      this.isOpen = scrollTop < this.scrollTop;
    } else {
      this.isOpen = scrollTop >= this.scrollTop;
    }
    this.scrollTop = scrollTop;
  }

}
