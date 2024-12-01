import { Route } from '@angular/router';
import { ShopPageComponent } from '@shop/pages/shop/shop-page.component';

const productPage = () => import('./components/product-page/product-page.component').then((x) => x.ProductPageComponent);
const productCategory = () => import('./components/product-category/product-category.component').then((x) => x.ProductCategoryComponent);
const productDetail = () => import('./detail/components/product-detail/product-detail.component').then((x) => x.ProductDetailComponent);
const notFound = () => import('@shop/components/not-found/not-found.component').then((x) => x.default);

export default [
  {
    path: '',
    component: ShopPageComponent,
    children: [
      {
        path: 'kratom', loadComponent: productPage, children: [
          {path: '', loadComponent: productCategory, data: {animation: 'list'}},
          {path: 'detail/:articleId', loadComponent: productDetail, data: {animation: 'detail'}},
          {path: 'white-vein', loadComponent: productCategory, data: {animation: 'list'}},
          {path: 'green-vein', loadComponent: productCategory, data: {animation: 'list'}},
          {path: 'red-vein', loadComponent: productCategory, data: {animation: 'list'}},
          {path: '**', loadComponent: notFound},
          // {path: '**', redirectTo: '/shop/kratom/home', pathMatch: 'full'},
        ]
      },
      {path: 'cbd', loadComponent: productPage},
      {path: 'sonstiges', loadComponent: productPage},
      {path: '**', loadComponent: notFound},
      // {path: '**', redirectTo: '/home', pathMatch: 'full'},
    ]
  }
] as Route[];


