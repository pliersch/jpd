import { Route } from '@angular/router';
import { YoutubePageComponent } from '@app1/pages/youtube/youtube-page.component';

const videos = () => import('./default/default-youtube-page.component').then((x) => x.DefaultYoutubePageComponent);
const watch = () => import('./watch/youtube-watch-page.component').then((x) => x.YoutubeWatchPageComponent);

export default [
  {
    path: '', component: YoutubePageComponent, children: [
      {path: 'videos', title: 'Demo Youtube', loadComponent: videos},
      {path: 'watch/:id', title: 'Demo Video', loadComponent: watch},
      {path: '**', redirectTo: 'videos', pathMatch: 'full'},
    ]
  }
] as Route[];


