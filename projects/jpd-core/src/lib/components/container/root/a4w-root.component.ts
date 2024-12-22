import { AsyncPipe, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, ContentChild, OnInit, signal, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BreakpointService, Dimension, ToggleSidenavService } from '../../../common';
import { ScrollDirective } from '../../../common/directives/scroll.directive';
import { DynamicHostComponent } from '../../dynamic-component/dynamic-host.component';
import { SidenavComponent } from '../../navigation/sidenav/sidenav.component';
import { AppbarComponent } from '../../toolbars/appbar/standard/appbar.component';
import { StickyAppbarComponent } from '../../toolbars/appbar/sticky/sticky-appbar.component';
import { RightSideComponent } from '../side/right/right-side.component';

@Component({
    selector: 'a4w-root',
    templateUrl: './a4w-root.component.html',
    styleUrls: ['./a4w-root.component.scss'],
    imports: [MatSidenavModule, MatListModule, NgFor, RouterLink, RouterLinkActive, RouterOutlet, AsyncPipe, NgIf, DynamicHostComponent, AppbarComponent, StickyAppbarComponent, NgClass, NgTemplateOutlet, MatButtonModule, SidenavComponent, RightSideComponent, MatToolbar, ScrollDirective]
})
export class A4WRootComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  @ContentChild(StickyAppbarComponent)
  stickyAppbar?: StickyAppbarComponent;

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
    void this.sidenav.toggle();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.showFooter = true, 200);
  };
}
