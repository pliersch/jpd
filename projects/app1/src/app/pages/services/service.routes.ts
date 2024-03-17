import { Route } from '@angular/router';
import { ServicesPageComponent } from '@app1/pages/services/services-page.component';

const care = () => import('./care/care-page.component').then((x) => x.CarePageComponent);
const health = () => import('./health/health-page.component').then((x) => x.HealthPageComponent);
const herbal = () => import('./herbal/herbal-page.component').then((x) => x.HerbalPageComponent);

export default [
  {
    path: '', component: ServicesPageComponent, children: [
      {path: 'pflege', loadComponent: care, data: {animation: 'isRight'}},
      {path: 'gesundheit', loadComponent: health, data: {animation: 'isLeft'}},
      {path: 'notfall', loadComponent: herbal, data: {animation: 'isFoo'}},
      {path: '**', redirectTo: 'health', pathMatch: 'full'},
    ]
  }
] as Route[];


