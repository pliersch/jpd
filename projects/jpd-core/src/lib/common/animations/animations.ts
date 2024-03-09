import { animate, animateChild, animation, group, query, state, style, transition, trigger } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          // position: 'absolute',
          // top: 100,
          // left: 50,
          // width: '100%',
          // color: 'red'
        })
      ]),
      query(':enter', [
        style({left: '-100%'})
      ], {optional: true}),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('300ms ease-out', style({left: '100%'}))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease-out', style({left: '0%'}))
        ], {optional: true}),
      ]),
    ]),
    transition('* <=> *', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], {optional: true}),
      query(':enter', [
        style({left: '-100%'})
      ], {optional: true}),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('200ms ease-out', style({left: '100%', opacity: 0}))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease-out', style({left: '0%'}))
        ], {optional: true}),
        query('@*', animateChild(), {optional: true})
      ]),
    ])
  ]);

export const transitionAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('{{ time }}')
]);

export const translateYAnimation = trigger('openClose',
  [
    state('open',
      style({transform: 'translateY(0px)'})
    ),
    state('closed',
      style({transform: 'translateY(-70px)'})
      // style({transform: 'translateY(-70px)', display: 'none'})
    ),
    transition('* => *', animate('500ms ease'))
  ]
);

export const slidingDoorAnimation = trigger('slidingDoorAnimation',
  [
    state('in',
      style({width: '0px', overflow: 'hidden'}),
      {params: {inWidth: '250px'}}),
    state('out',
      style({width: '{{ outWidth }}'}),
      {params: {outWidth: '*'}}
    ),
    transition('* <=> *', animate('{{ time }}'))
  ]
);

export const sampleAnimation = trigger('openClose', [
  state('open', style({
    height: '200px',
    opacity: 1,
    backgroundColor: 'yellow'
  })),
  state('closed', style({
    height: '100px',
    opacity: 0.5,
    backgroundColor: 'green'
  })),
  transition('open => closed', [
    animate('1s')
  ]),
  transition('closed => open', [
    animate('0.5s')
  ]),
  transition('* => closed', [
    animate('1s')
  ]),
  transition('* => open', [
    animate('0.5s')
  ]),
  transition('open <=> closed', [
    animate('0.5s')
  ]),
  transition('* => open', [
    animate('1s',
      style({opacity: '*'}),
    ),
  ]),
  transition('* => *', [
    animate('1s')
  ]),
]);

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ], {optional: true}),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({opacity: 1, transform: 'scale(1) translateY(0)'})),
      ], {optional: true})
    ]),
  ]);


export const slider =
  trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left')),
    transition('* => isRight', slideTo('right')),
    transition('isRight => *', slideTo('left')),
    transition('isLeft => *', slideTo('right'))
  ]);

function slideTo(direction: any): any[] {
  const optional = {optional: true};
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        // top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({[direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({[direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({[direction]: '0%'}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}
