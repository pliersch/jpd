import { Route } from '@angular/router';
import { ServicesPageComponent } from '@shop/pages/services/services-page.component';

const care = () => import('./care/care-page.component').then((x) => x.CarePageComponent);
const health = () => import('./health/health-page.component').then((x) => x.HealthPageComponent);
const herbal = () => import('./herbal/herbal-page.component').then((x) => x.HerbalPageComponent);

export default [
  {
    path: '', component: ServicesPageComponent, children: [
      {path: 'care', loadComponent: care, data: {animation: 'isRight'}},
      {path: 'health', loadComponent: health, data: {animation: 'isLeft'}},
      {path: 'herbal', loadComponent: herbal, data: {animation: 'isFoo'}},
      {path: '**', redirectTo: 'health', pathMatch: 'full'},
    ]
  }
] as Route[];


