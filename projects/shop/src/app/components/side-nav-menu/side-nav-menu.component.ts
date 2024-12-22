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
  imports: [MatExpansionModule, MatList, RouterLinkActive, RouterLink],
  templateUrl: './side-nav-menu.component.html',
  styleUrl: './side-nav-menu.component.scss',
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
        name: 'adslödösdöldsö', url: 'foo',
        children: [{url: 'foo', name: 'a11'}, {url: 'foo', name: 'a12'}, {url: 'foo', name: 'a13'}, {
          name: 'a14', url: 'foo',
          children: [{url: 'foo', name: 'a21'}, {url: 'foo', name: 'a22'}, {url: 'foo', name: 'a23'}, {
            url: 'foo',
            name: 'a24'
          },]
        },]
      },
      {
        name: 'bsölöfbxövbgc', url: 'foo',
        children: [{url: 'foo', name: 'b11'}, {url: 'foo', name: 'b12'}, {url: 'foo', name: 'b13'}, {
          url: 'foo',
          name: 'b14'
        },]
      },
      {
        name: 'cvcölcöbönn öfhl', url: 'foo',
        children: [{url: 'foo', name: 'c11'}, {url: 'foo', name: 'c12'}, {url: 'foo', name: 'c13'}, {
          url: 'foo',
          name: 'c14'
        },]
      }]
  }

}
