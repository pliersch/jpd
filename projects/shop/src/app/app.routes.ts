import { Route } from '@angular/router';

const home = () => import('@shop/pages/home/home-page.component').then((x) => x.HomePageComponent);
// const admin = () => import('@shop/pages/admin/admin-page.component').then((x) => x.AdminPageComponent);
const contact = () => import('@shop/pages/contact/contact-page.component').then((x) => x.ContactPageComponent);
const privacy = () => import('@shop/pages/privacy/privacy-page.component').then((x) => x.PrivacyPageComponent);
const notFound = () => import('@shop/components/not-found/not-found.component').then((x) => x.default);

const shopRoutes = () => import('@shop/pages/shop/shop.routes');

export const ROUTES: Route[] = [
  // components
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', title: 'Home', loadComponent: home},
  {path: 'kontakt', title: 'Kontakt', loadComponent: contact},
  {path: 'datenschutz', title: 'Datenschutz', loadComponent: privacy},
  {path: 'not-found', title: 'Not Found', loadComponent: notFound},
  // {path: 'admin', title: 'Admin', loadComponent: admin},

  // routes
  {path: 'shop', loadChildren: shopRoutes},
  // {path: '**', redirectTo: '', pathMatch: 'full'},
  {path: '**', redirectTo: '/not-found'},
];
