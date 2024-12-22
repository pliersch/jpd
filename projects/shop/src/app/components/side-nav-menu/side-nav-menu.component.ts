import { ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatList } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface MyData {
  name: string;
  content?: string;
  children?: MyData[];
  url?: string;
  links?: string[];
}

@Component({
  selector: 'shop-side-nav-menu',
  imports: [MatExpansionModule, MatList, RouterLink, RouterLinkActive, MatAnchor],
  templateUrl: './side-nav-menu.component.html',
  styleUrl: './side-nav-menu.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavMenuComponent {
  readonly panelOpenState = signal(false);

  readonly data: MyData[] = this.createData();
  step = 0;

  setStep(index: number): void {
    this.step = index;
  }

  createData(): MyData[] {
    return [
      {
        name: 'Kratom',
        children: [
          {
            name: 'White',
            content: 'Content of White',
            links: [
              'white-vein',
              'green-vein',
              'red-vein',
            ]
          },
          {
            name: 'Green',
            content: 'Content of Green',
            links: [
              'Green 1 Content of Green',
              'Green 2',
              'Green 3',
            ]
          }],
        // links: [
        //   '11111111111',
        //   '22222222222',
        //   '33333333333',
        // ]
      },
      {
        name: 'CBD',
        children: [{
          name: 'item 1',
          content: 'Content of  02-01',
        }]
      },
      {
        name: 'Sonstiges',
      },
    ]
  }

}
