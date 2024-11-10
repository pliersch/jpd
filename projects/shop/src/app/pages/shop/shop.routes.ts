import { Route } from '@angular/router';
import { ShopPageComponent } from '@shop/pages/shop/shop-page.component';

const kratom = () => import('./kratom/kratom.component').then((x) => x.KratomComponent);
const cbd = () => import('./cbd/cbd.component').then((x) => x.CbdComponent);
const miscellaneous = () => import('./miscellaneous/miscellaneous.component').then((x) => x.MiscellaneousComponent);

export default [
  {
    path: '', component: ShopPageComponent, children: [
      {path: 'kratom', loadComponent: kratom},
      {path: 'cbd', loadComponent: cbd},
      {path: 'sonstiges', loadComponent: miscellaneous},
      {path: '**', redirectTo: 'kratom', pathMatch: 'full'},
    ]
  }
] as Route[];


