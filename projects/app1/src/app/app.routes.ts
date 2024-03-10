import { Route } from '@angular/router';

const home = () => import('@app1/pages/home/home-page.component').then((x) => x.HomePageComponent);
const team = () => import('@app1/pages/team/team-page.component').then((x) => x.TeamPageComponent);
const contact = () => import('@app1/pages/contact/contact-page.component').then((x) => x.ContactPageComponent);
const forest = () => import('@app1/pages/forest/forest-page.component').then((x) => x.ForestPageComponent);
const privacy = () => import('@app1/pages/privacy/privacy-page.component').then((x) => x.PrivacyPageComponent);

const youtubeRoutes = () => import('@app1/pages/youtube/youtube.routes');
const animationRoutes = () => import('@app1/pages/animation/animation.routes');
const serviceRoutes = () => import('@app1/pages/services/service.routes');
const blogRoutes = () => import('@app1/pages/blog/blog.routes');
const galleryRoutes = () => import('@app1/pages/gallery/gallery.routes');

export const ROUTES: Route[] = [
  // components
  {path: 'home', title: 'Demo Home', loadComponent: home},
  {path: 'team', title: 'Demo Team', loadComponent: team},
  {path: 'contact', title: 'Demo Kontakt', loadComponent: contact},
  {path: 'forest', title: 'Demo Parallax', loadComponent: forest},
  {path: 'privacy', title: 'Demo Datenschutz', loadComponent: privacy},

  // routes
  {path: 'gallery', loadChildren: galleryRoutes},
  {path: 'blog', loadChildren: blogRoutes},
  {path: 'youtube', loadChildren: youtubeRoutes},
  {path: 'animation', loadChildren: animationRoutes},
  {path: 'service', loadChildren: serviceRoutes},

  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
