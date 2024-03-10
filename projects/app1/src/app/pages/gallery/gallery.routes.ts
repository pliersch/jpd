import { Route } from '@angular/router';
import { BlogPageComponent } from '@app1/pages/blog/blog-page.component';

const thumbs = () => import('./thumb-list/thumbs-page.component').then((x) => x.ThumbsPageComponent);
const slideshow = () => import('./slideshow/slideshow-page.component').then((x) => x.SlideshowPageComponent);

export default [
  {
    path: '', component: BlogPageComponent, children: [
      {path: '', title: 'Demo Galerie', loadComponent: thumbs},
      {path: 'images/:id', title: 'Demo Image', loadComponent: slideshow},
      {path: '**', redirectTo: 'articles', pathMatch: 'full'},
    ]
  }
] as Route[];


