import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MockService } from '@shop/pages/shop/_mock/mock.service';
import { ENV_TOKEN } from 'jpd-core';
import { Observable, of } from 'rxjs';
import { Article, Category, CreateArticle, UpdateArticle } from './articles/article.model';

@Injectable({providedIn: 'root'})
export class ShopService {

  private readonly API_URL: string = `${inject(ENV_TOKEN).apiUrl}/shop`;
  private readonly http = inject(HttpClient);
  private readonly mock = inject(MockService);

  getAll(category: Category): Observable<Article[]> {
    return of<Article[]>(this.mock.getKratomArticles());
    // return this.http.get<Article[]>(this.API_URL);
  }

  // getByProductCategory(product: Product, category: string): Observable<Article[]> {
  //   const articles = this.kratomArticles.filter(val => val.category == category);
  //   return of<Article[]>(articles);
  //   // return this.http.get<Article[]>(this.API_URL);
  // }

  create(item: CreateArticle): Observable<Article> {
    return this.http.post<Article>(this.API_URL, item);
  }

  update(id: string, dto: UpdateArticle): Observable<Article> {
    return this.http.patch<Article>(`${this.API_URL}/${id}`, dto);
  }

}
