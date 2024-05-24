import { Component } from '@angular/core';
import { HEROES } from '@app1/pages/animation/mock-heroes';

import { HeroListAutoComponent } from './hero-list-auto.component';

@Component({
  standalone: true,
  selector: 'app-hero-list-auto-page',
  template: `
    <section>
      <h2 class="text-3xl">Automatic Calculation</h2>

      <app-hero-list-auto [heroes]="heroes" (remove)="onRemove($event)"></app-hero-list-auto>
    </section>
  `,
  imports: [HeroListAutoComponent]
})
export class HeroListAutoCalcPageComponent {
  heroes = HEROES.slice();

  onRemove(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }
}
