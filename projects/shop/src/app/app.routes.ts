import { Route } from '@angular/router';

const home = () => import('@shop/pages/home/home-page.component').then((x) => x.HomePageComponent);
// const admin = () => import('@shop/pages/admin/admin-page.component').then((x) => x.AdminPageComponent);
const contact = () => import('@shop/pages/contact/contact-page.component').then((x) => x.ContactPageComponent);
const privacy = () => import('@shop/pages/privacy/privacy-page.component').then((x) => x.PrivacyPageComponent);


const shopRoutes = () => import('@shop/pages/shop/shop.routes');

export const ROUTES: Route[] = [
  // components
  {path: 'home', title: 'Home', loadComponent: home},
  // {path: 'admin', title: 'Admin', loadComponent: admin},
  {path: 'kontakt', title: 'Kontakt', loadComponent: contact},
  {path: 'datenschutz', title: 'Datenschutz', loadComponent: privacy},

  // routes
  {path: 'shop', loadChildren: shopRoutes},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];
