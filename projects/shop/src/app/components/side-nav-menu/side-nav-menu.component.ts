import { Location, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListItem, MatNavList } from '@angular/material/list';
import { ActivatedRoute, IsActiveMatchOptions, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RouteDomService } from 'jpd-core';

export interface NavigationItem {
  name: string;
  children?: NavigationItem[];
  url: string;
  links?: string[];
}

// todo template: use ngTemplateOutlet for the whole mat-expansion-panel (recursive)
@Component({
  selector: 'shop-side-nav-menu',
  imports: [MatExpansionModule, RouterLink, RouterLinkActive, MatNavList, MatListItem, NgTemplateOutlet],
  templateUrl: './side-nav-menu.component.html',
  styleUrl: './side-nav-menu.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavMenuComponent implements OnInit {

  private location: Location = inject(Location);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  linkActiveOptions: IsActiveMatchOptions =
    inject(RouteDomService).getIsActiveMatchOptions();

  readonly data: NavigationItem[] = this.createData();
  productIndex = 0;
  categoryIndex = 0;

  ngOnInit(): void {
    this.expandPanels();
  }

  setProductIndex(index: number): void {
    this.productIndex = index;
  }

  setCategoryIndex(index: number): void {
    this.categoryIndex = index;
  }

  expandPanels(): void {
    const split = this.location.path().split('/');
    // todo recursive when another depth !?
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].url === split[2]) {
        this.productIndex = i;

        const product = this.data[i];
        const length = product.children?.length || 0;
        for (let j = 0; j < length; j++) {
          if (product.children![j].url === split[3]) {
            this.categoryIndex = j;
          }
        }
      }
    }
  }

  // hack. listen to complete mat-expansion-panel-header area
  navigate(url: string | undefined): void {
    if (url) {
      void this.router.navigate([url], {relativeTo: this.route});
    }
  }

  // todo introduce 'links' (items)
  createData(): NavigationItem[] {
    return [
      {
        name: 'Kratom',
        url: 'kratom',
        children: [
          {
            name: 'White',
            url: 'white-vein',
            // links: [
            //   'White Bali',
            //   'White Borneo',
            //   'White Thai',
            //   'White Sumatra',
            // ]
          },
          {
            name: 'Green',
            url: 'green-vein',
            // links: [
            //   'Green Bali',
            //   'Green Borneo',
            //   'Green Thai',
            //   'Green Sumatra',
            // ]
          },
          {
            name: 'Red',
            url: 'red-vein',
            // links: [
            //   'Red Bali',
            //   'Red Borneo',
            //   'Red Thai',
            //   'Red Sumatra',
            // ]
          },
        ],
      },
      {
        name: 'CBD',
        url: 'cbd',
        children: [{
          name: 'item 1',
          url: 'foo',
        }]
      },
      {
        name: 'Sonstiges',
        url: 'sonstiges',
      },
    ]
  }

}
