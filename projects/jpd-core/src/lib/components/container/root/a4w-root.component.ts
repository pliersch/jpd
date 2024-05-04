import { CdkScrollable } from '@angular/cdk/scrolling';
import { AsyncPipe, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CssVarService, PageScrollService, ToggleSidenavService } from '../../../common';
import { DynamicHostComponent } from '../../dynamic-component/dynamic-host.component';
import { SidenavComponent } from '../../navigation/sidenav/sidenav.component';
import { AppbarComponent } from '../../toolbars/appbar/standard/appbar.component';
import { StickyAppbarComponent } from '../../toolbars/appbar/sticky/sticky-appbar.component';
import { RightSideComponent } from '../side/right/right-side.component';

@Component({
  selector: 'a4w-root',
  templateUrl: './a4w-root.component.html',
  styleUrls: ['./a4w-root.component.scss'],
  standalone: true,
  imports: [MatSidenavModule, MatListModule, NgFor, RouterLink, RouterLinkActive, RouterOutlet, AsyncPipe, NgIf, DynamicHostComponent, AppbarComponent, StickyAppbarComponent, NgClass, NgTemplateOutlet, MatButtonModule, SidenavComponent, RightSideComponent]
})
export class A4WRootComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  @ViewChild('scroller', {read: CdkScrollable, static: true})
  scroller: CdkScrollable;

  @ContentChild(StickyAppbarComponent)
  stickyAppbar?: StickyAppbarComponent;

  // avoid flickering of footer (is rendered before router content)
  showFooter = false;

  constructor(private toggleSidenavService: ToggleSidenavService,
              private scrollService: PageScrollService,
              // protected adminService: AdminService,
              private cssVarService: CssVarService,) { }

  ngOnInit(): void {
    this.scrollService.setScroller(this.scroller);
    this.toggleSidenavService.showSidenav$.subscribe(() => this.toggleNav());
  }

  toggleNav(): void {
    void this.sidenav.toggle();
  }

  onPageScroll($event: Event): void {
    this.scrollService.changeScrollTop(($event.target as HTMLElement).scrollTop);
  }

  ngAfterViewInit(): void {
    // avoid flickering of footer (render before router content)
    setTimeout(() => this.showFooter = true, 200);
  };
}
