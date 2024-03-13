import { Route } from '@angular/router';
import { GalleryPageComponent } from '@app1/pages/gallery/gallery-page.component';

const thumbs = () => import('./thumb-list/thumbs-page.component').then((x) => x.ThumbsPageComponent);
const slideshow = () => import('./slideshow/slideshow-page.component').then((x) => x.SlideshowPageComponent);

export default [
  {
    path: '', component: GalleryPageComponent, children: [
      {path: '', title: 'Demo Galerie', loadComponent: thumbs},
      {path: 'images/:id', title: 'Demo Image', loadComponent: slideshow},
      {path: '**', redirectTo: 'articles', pathMatch: 'full'},
    ]
  }
] as Route[];


