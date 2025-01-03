import { animate, group, state, style, transition, trigger } from '@angular/animations';

import { NgFor } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Hero } from '@app1/pages/animation/hero';

@Component({
    selector: 'app-hero-list-groups',
    template: `
    <ul class="heroes">
      <li *ngFor="let hero of heroes()" [@flyInOut]="'in'">
        <button class="inner" type="button" (click)="removeHero(hero.id)">
          <span class="badge">{{ hero.id }}</span>
          <span class="name">{{ hero.name }}</span>
        </button>
      </li>
    </ul>
  `,
    styleUrls: ['./stagger.css'],
    imports: [NgFor],
    animations: [
        trigger('flyInOut', [
            state('in', style({
                width: '*',
                transform: 'translateX(0)', opacity: 1
            })),
            transition(':enter', [
                style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
                group([
                    animate('0.3s 0.1s ease', style({
                        transform: 'translateX(0)',
                        width: '*'
                    })),
                    animate('0.3s ease', style({
                        opacity: 1
                    }))
                ])
            ]),
            transition(':leave', [
                group([
                    animate('0.3s ease', style({
                        transform: 'translateX(50px)',
                        width: 10
                    })),
                    animate('0.3s 0.2s ease', style({
                        opacity: 0
                    }))
                ])
            ])
        ])
    ]
})
export class StaggerComponent {
  readonly heroes = input<Hero[]>([]);

  readonly remove = output<number>();

  removeHero(id: number) {
    this.remove.emit(id);
  }
}
