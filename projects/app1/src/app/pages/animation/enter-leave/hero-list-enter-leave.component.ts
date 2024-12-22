import { animate, state, style, transition, trigger } from '@angular/animations';


import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '@app1/pages/animation/hero';

@Component({
    selector: 'app-hero-list-enter-leave',
    template: `
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
          [@flyInOut]="'in'">
        <button class="inner" type="button" (click)="removeHero(hero.id)">
          <span class="badge">{{ hero.id }}</span>
          <span class="name">{{ hero.name }}</span>
        </button>
      </li>
    </ul>
  `,
    styleUrls: ['./hero-list-page.component.css'],
    imports: [NgFor],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'translateX(100%)' }))
            ])
        ])
    ]
})
export class HeroListEnterLeaveComponent {
  @Input() heroes: Hero[] = [];

  @Output() remove = new EventEmitter<number>();

  removeHero(id: number) {
    this.remove.emit(id);
  }
}
