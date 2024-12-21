import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatList } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface MyData {
  name: string;
  children?: MyData[];
  url: string;
}

@Component({
  selector: 'shop-side-nav-menu',
  standalone: true,
  imports: [MatExpansionModule, MatList, RouterLinkActive, RouterLink],
  templateUrl: './side-nav-menu.component.html',
  styleUrl: './side-nav-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
        name: 'adslödösdöldsö', url: 'foo',
        children: [{url: 'foo', name: 'a1'}, {url: 'foo', name: 'a1'}, {url: 'foo', name: 'a1'}, {
          name: 'a1', url: 'foo',
          children: [{url: 'foo', name: 'a2'}, {url: 'foo', name: 'a2'}, {url: 'foo', name: 'a2'}, {
            url: 'foo',
            name: 'a2'
          },]
        },]
      },
      {
        name: 'bsölöfbxövbgc', url: 'foo',
        children: [{url: 'foo', name: 'b1'}, {url: 'foo', name: 'b1'}, {url: 'foo', name: 'b1'}, {
          url: 'foo',
          name: 'b1'
        },]
      },
      {
        name: 'cvcölcöbönn öfhl', url: 'foo',
        children: [{url: 'foo', name: 'c1'}, {url: 'foo', name: 'c1'}, {url: 'foo', name: 'c1'}, {
          url: 'foo',
          name: 'c1'
        },]
      }]
  }

}
