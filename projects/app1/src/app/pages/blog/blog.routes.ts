import { Route } from '@angular/router';
import { BlogPageComponent } from '@app1/pages/blog/blog-page.component';

const articles = () => import('./articles/articles-page.component').then((x) => x.ArticlesPageComponent);
const post = () => import('./post/post-page.component').then((x) => x.PostPageComponent);

export default [
  {
    path: '', component: BlogPageComponent, children: [
      {path: 'articles', title: 'Demo Blog', loadComponent: articles},
      {path: 'post/:id', title: 'Demo Blog Post', loadComponent: post},
      {path: '**', redirectTo: 'articles', pathMatch: 'full'},
    ]
  }
] as Route[];


