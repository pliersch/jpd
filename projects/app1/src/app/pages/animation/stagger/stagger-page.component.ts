import { Component } from '@angular/core';
import { HEROES } from '@app1/pages/animation/mock-heroes';

import { StaggerComponent } from './stagger.component';

@Component({
    selector: 'app-hero-list-groups-page',
    template: `
    <section>
      <h2 class="text-3xl">Hero List Group</h2>

      <app-hero-list-groups [heroes]="heroes" (remove)="onRemove($event)"></app-hero-list-groups>
    </section>
  `,
    imports: [StaggerComponent]
})
export class StaggerPageComponent {
  heroes = HEROES.slice();

  onRemove(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }
}
