import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MockService } from '@shop/pages/shop/_mock/mock.service';
import { Article } from '@shop/pages/shop/store/articles/article.model';
import { Observable, of } from 'rxjs';

const API_URL = 'http://localhost:3000/songs';

@Injectable({providedIn: 'root'})
export class DetailService {

  private readonly http = inject(HttpClient);
  private readonly mock = inject(MockService);

  getById(id: string): Observable<Article> {
    return of<Article>(this.mock.getKratomArticles().find(v => v.id === id)!);
    // return this.http.get<Article>(API_URL, {params: {id: id}});
  }
}
