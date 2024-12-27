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
        path: 'kratom', loadComponent: productPage, title: 'Kratom', children: [
          {path: '', loadComponent: productCategory, data: {animation: 'list'}},
          {
            path: 'detail/:articleId',
            loadComponent: productDetail,
            // title: articleTitleResolver,
            data: {animation: 'detail'}
          },
          {path: 'white-vein', loadComponent: productCategory, title: 'White', data: {animation: 'list'}},
          {path: 'green-vein', loadComponent: productCategory, title: 'Green', data: {animation: 'list'}},
          {path: 'red-vein', loadComponent: productCategory, title: 'Red', data: {animation: 'list'}},
          {path: '**', loadComponent: notFound, title: 'Not Found',},
          // {path: '**', redirectTo: '/shop/kratom/home', pathMatch: 'full'},
        ]
      },
      {path: 'cbd', loadComponent: productPage, title: 'CBD',},
      {path: 'sonstiges', loadComponent: productPage, title: 'Sonstiges',},
      {path: '**', loadComponent: notFound, title: 'Not Found',},
      // {path: '**', redirectTo: '/home', pathMatch: 'full'},
    ]
  }
] as Route[];


