import { Route } from '@angular/router';
import { BlogPageComponent } from '@app1/pages/blog/blog-page.component';

const videos = () => import('./list/youtube-list-page.component').then((x) => x.YoutubeListPageComponent);
const watch = () => import('./watch/youtube-watch-page.component').then((x) => x.YoutubeWatchPageComponent);

export default [
  {
    path: '', component: BlogPageComponent, children: [
      {path: 'videos', title: 'Demo Youtube', loadComponent: videos},
      {path: 'watch/:id', title: 'Demo Video', loadComponent: watch},
      {path: '**', redirectTo: 'videos', pathMatch: 'full'},
    ]
  }
] as Route[];


