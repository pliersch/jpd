import { AfterViewInit, Component, OnInit, signal, viewChild, contentChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { BreakpointService, Dimension, ToggleSidenavService } from '../../../common';
import { ScrollDirective } from '../../../common/directives/scroll.directive';
import { SidenavComponent } from '../../navigation/sidenav/sidenav.component';
import { StickyAppbarComponent } from '../../toolbars/appbar/sticky/sticky-appbar.component';

@Component({
  selector: 'a4w-root',
  templateUrl: './a4w-root.component.html',
  styleUrls: ['./a4w-root.component.scss'],
  imports: [MatSidenavModule, MatListModule, RouterOutlet, MatButtonModule, SidenavComponent, ScrollDirective]
})
export class A4WRootComponent implements OnInit, AfterViewInit {

  readonly sidenav = viewChild.required(MatSidenav);

  readonly stickyAppbar = contentChild(StickyAppbarComponent);

  // avoid flickering of footer (is rendered before router content)
  showFooter = false;

  isMobile = signal(false);

  constructor(private toggleSidenavService: ToggleSidenavService,
              private breakpointService: BreakpointService,
              // protected adminService: AdminService,
  ) { }

  ngOnInit(): void {
    this.toggleSidenavService.showSidenav$.subscribe(() => this.toggleNav());
    this.breakpointService.dimension$.subscribe((dim) => {
      this.isMobile.set(dim === Dimension.XSmall);
    });
  }

  toggleNav(): void {
    void this.sidenav().toggle();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.showFooter = true, 200);
  };
}
