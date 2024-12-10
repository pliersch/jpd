import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';

export const cartIconAnimation =
  trigger('shakeAnimation', [
    transition(':increment', [
      query(':self', [
        style({color: 'red'/*, opacity: 0*/}),
        stagger(1, [
          animate(
            '1500ms cubic-bezier(.68,-0.73,.26,1.65)',
            keyframes([
              style({offset: 0.0, transform: 'translateX(0)'}),
              style({offset: 0.1, transform: 'translateX(-20%)'}),
              style({offset: 0.2, transform: 'translateX(20%)'}),
              style({offset: 0.3, transform: 'translateX(-20%)'}),
              style({offset: 0.4, transform: 'translateX(20%)'}),
              style({offset: 0.5, transform: 'translateX(-20%)'}),
              style({offset: 0.6, transform: 'translateX(20%)'}),
              style({offset: 0.7, transform: 'translateX(-20%)'}),
              style({offset: 0.8, transform: 'translateX(15%)'}),
              style({offset: 0.9, transform: 'translateX(-15%)'}),
              style({offset: 1, transform: 'translateX(0)'}),
            ]),
          ),
        ]),
      ], {optional: true})
    ]),
  ])
