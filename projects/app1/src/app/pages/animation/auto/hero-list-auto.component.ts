import { animate, state, style, transition, trigger } from '@angular/animations';

import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '@app1/pages/animation/hero';

@Component({
    selector: 'app-hero-list-auto',
    templateUrl: 'hero-list-auto.component.html',
    styleUrls: ['./hero-list-page.component.css'],
    imports: [NgFor],
    animations: [
        trigger('shrinkOut', [
            state('in', style({ height: '*' })),
            transition('* => void', [
                style({ height: '*' }),
                animate(250, style({ height: 0 }))
            ])
        ])
    ]
})
export class HeroListAutoComponent {
  @Input() heroes: Hero[] = [];

  @Output() remove = new EventEmitter<number>();

  removeHero(id: number) {
    this.remove.emit(id);
  }
}
