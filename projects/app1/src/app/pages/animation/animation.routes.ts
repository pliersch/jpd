import { Route } from '@angular/router';
import { AnimationComponent } from '@app1/pages/animation/animation.component';
import { HeroListAutoCalcPageComponent } from '@app1/pages/animation/auto/hero-list-auto-page.component';
import {
  HeroListEnterLeavePageComponent
} from '@app1/pages/animation/enter-leave/hero-list-enter-leave-page.component';
import { HeroListPageComponent } from '@app1//pages/animation/filter/hero-list-page.component';
import { HeroListGroupPageComponent } from '@app1/pages/animation/hero/hero-list-group-page.component';

export default [
  {
    path: '', component: AnimationComponent, children: [
      {
        path: 'auto',
        component: HeroListAutoCalcPageComponent,
        data: {animation: 'autoPage'}
      },
      {
        path: 'enter-leave',
        component: HeroListEnterLeavePageComponent,
        data: {animation: 'enterLeavePage'}
      },
      {
        path: 'heroes',
        component: HeroListPageComponent,
        data: {animation: 'filterPage'}
      },
      {
        path: 'hero-groups',
        component: HeroListGroupPageComponent,
        data: {animation: 'heroGroupPage'}
      },
      {path: '', pathMatch: 'full', redirectTo: 'enter-leave'},
      {path: '**', pathMatch: 'full', redirectTo: 'enter-leave'},
    ]
  }
] as Route[];
