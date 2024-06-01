import { Route } from '@angular/router';

const home = () => import('@app1/pages/home/home-page.component').then((x) => x.HomePageComponent);
// const admin = () => import('@app1/pages/admin/admin-page.component').then((x) => x.AdminPageComponent);
const team = () => import('@app1/pages/team/team-page.component').then((x) => x.TeamPageComponent);
const contact = () => import('@app1/pages/contact/contact-page.component').then((x) => x.ContactPageComponent);
const forest = () => import('@app1/pages/forest/forest-page.component').then((x) => x.ForestPageComponent);
const doc = () => import('@app1/pages/doc/doc-page.component').then((x) => x.DocPageComponent);
const baking = () => import('@app1/pages/baking/baking-page.component').then((x) => x.BakingPageComponent);
const youtube = () => import('@app1/pages/youtube/youtube-page.component').then((x) => x.YoutubePageComponent);
const privacy = () => import('@app1/pages/privacy/privacy-page.component').then((x) => x.PrivacyPageComponent);

// const youtubeRoutes = () => import('@app1/pages/youtube/youtube.routes');
const animationRoutes = () => import('@app1/pages/animation/animation.routes');
const serviceRoutes = () => import('@app1/pages/services/service.routes');
const blogRoutes = () => import('@app1/pages/blog/blog.routes');
const galleryRoutes = () => import('@app1/pages/gallery/gallery.routes');

export const ROUTES: Route[] = [
  // components
  {path: '', title: 'Demo Home', loadComponent: home},
  // {path: 'admin', title: 'Demo Admin', loadComponent: admin},
  // {path: 'home', title: 'Demo Home', loadComponent: home},
  {path: 'team', title: 'Demo Team', loadComponent: team},
  {path: 'kontakt', title: 'Demo Kontakt', loadComponent: contact},
  {path: 'doc', title: 'Demo Doc', loadComponent: doc},
  {path: 'baking', title: 'Demo Baking', loadComponent: baking},
  {path: 'youtube', title: 'Demo Youtube', loadComponent: youtube},
  {path: 'forest', title: 'Demo Parallax', loadComponent: forest},
  {path: 'datenschutz', title: 'Demo Datenschutz', loadComponent: privacy},

  // routes
  {path: 'galerie', loadChildren: galleryRoutes},
  {path: 'blog', loadChildren: blogRoutes},
  // {path: 'youtube', loadChildren: youtubeRoutes},
  {path: 'animation', loadChildren: animationRoutes},
  {path: 'service', loadChildren: serviceRoutes},

  {path: '**', redirectTo: '', pathMatch: 'full'},
];
