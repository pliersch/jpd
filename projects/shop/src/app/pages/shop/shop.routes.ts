import { Route } from '@angular/router';
import { ShopPageComponent } from '@shop/pages/shop/shop-page.component';

const kratom = () => import('./kratom/kratom.component').then((x) => x.KratomComponent);
// const kratomOverview = () => import('./kratom/kratom-overview/kratom-overview.component').then((x) => x.KratomOverviewComponent);
const cbd = () => import('./cbd/cbd.component').then((x) => x.CbdComponent);
const miscellaneous = () => import('./miscellaneous/miscellaneous.component').then((x) => x.MiscellaneousComponent);
// const listDefault = () => import('./default-list/default-list.component').then((x) => x.DefaultListComponent);
const shopContainer = () => import('./components/shop-container/shop-container.component').then((x) => x.ShopContainerComponent);
const productDetail = () => import('./components/product-detail/product-detail.component').then((x) => x.ProductDetailComponent);

export default [
  {
    path: '', component: ShopPageComponent, children: [
      {path: 'product/:id', loadComponent: productDetail,},
      {path: 'category/:category', loadComponent: productDetail,},
      {
        path: 'kratom', loadComponent: kratom, children: [
          {path: '', loadComponent: shopContainer, data: {animation: 'enterLeavePage'}},
          {path: 'detail/:id', loadComponent: productDetail,},
          {path: 'white-vein', loadComponent: shopContainer, data: {animation: 'enterLeavePage'}},
          {path: 'green-vein', loadComponent: shopContainer, data: {animation: 'enterLeavePage'}},
          {path: 'red-vein', loadComponent: shopContainer, data: {animation: 'enterLeavePage'}},
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


