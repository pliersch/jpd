import { group } from '@angular/animations';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatList, MatListItem } from '@angular/material/list';

export interface MyData {
  name: string;
  children?: MyData[];
  // url: string;
}

@Component({
  selector: 'shop-side-nav-menu',
  standalone: true,
  imports: [MatExpansionModule, MatList, MatListItem],
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
        name: 'Foo',
        children: [{name: 'a1'}, {name: 'a1'}, {name: 'a1'}, {
          name: 'a1',
          children: [{name: 'a1'}, {name: 'a1'}, {name: 'a1'}, {name: 'a1'},]
        },]
      },
      {
        name: 'Faa',
        children: [{name: 'a1'}, {name: 'a1'}, {name: 'a1'}, {name: 'a1'},]
      },
      {
        name: 'Fou',
        children: [{name: 'a1'}, {name: 'a1'}, {name: 'a1'}, {name: 'a1'},]
      },
      {
        name: 'Bar',
        children: [{name: 'a1'}, {name: 'a1'}, {name: 'a1'}, {name: 'a1'},]
      },
      {
        name: 'Baz',
        children: [{name: 'a1'}, {name: 'a1'}, {name: 'a1'}, {name: 'a1'},]
      }]
  }

  protected readonly group = group;
}
