import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from '@angular/router';
import { Route, RouteDomService } from '../../../common';

// export interface Small1FooterModel {}

@Component({
  selector: 'a4w-small-footer-1',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatAnchor, RouterLink],
  templateUrl: './small-footer1.component.html'
})
export class SmallFooter1Component /*extends BaseComponent<Small1FooterModel> */ {

  routes: Route[] = inject(RouteDomService).getFooterRoutes().children;
}
