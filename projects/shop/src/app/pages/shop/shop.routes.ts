import { Route } from '@angular/router';
import { ShopPageComponent } from '@shop/pages/shop/shop-page.component';

const kratom = () => import('./kratom/kratom.component').then((x) => x.KratomComponent);
// const kratomOverview = () => import('./kratom/kratom-overview/kratom-overview.component').then((x) => x.KratomOverviewComponent);
const cbd = () => import('./cbd/cbd.component').then((x) => x.CbdComponent);
const miscellaneous = () => import('./miscellaneous/miscellaneous.component').then((x) => x.MiscellaneousComponent);
const listDefault = () => import('./default-list/default-list.component').then((x) => x.DefaultListComponent);

export default [
  {
    path: '', component: ShopPageComponent, children: [
      {
        path: 'kratom', loadComponent: kratom, children: [
          {path: '', loadComponent: listDefault, data: {animation: 'enterLeavePage'}},
          {path: 'white-vein', loadComponent: listDefault, data: {animation: 'enterLeavePage'}},
          {path: 'green-vein', loadComponent: listDefault, data: {animation: 'enterLeavePage'}},
          {path: 'red-vein', loadComponent: listDefault, data: {animation: 'enterLeavePage'}},
          // {path: '', redirectTo: '/shop/kratom/home', pathMatch: 'full'},
          // {path: '**', redirectTo: '/shop/kratom/home', pathMatch: 'full'},
        ]
      },
      {path: 'cbd', loadComponent: cbd},
      {path: 'sonstiges', loadComponent: miscellaneous},
      {path: '**', redirectTo: 'kratom', pathMatch: 'full'},
    ]
  }
] as Route[];


