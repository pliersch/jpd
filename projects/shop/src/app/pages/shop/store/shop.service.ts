import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { createKratomArticles } from '@shop/pages/shop/store/artilce.mock-factory';
import { ENV_TOKEN } from 'jpd-core';
import { Observable, of } from 'rxjs';
import { Article, Category, CreateArticle, Family, UpdateArticle } from './shop.model';

@Injectable({providedIn: 'root'})
export class ShopService {

  private readonly API_URL: string = `${inject(ENV_TOKEN).apiUrl}/shop`;

  private readonly http = inject(HttpClient);

  getAll(): Observable<Article[]> {
    return of<Article[]>(createKratomArticles());
    // return this.http.get<Article[]>(this.API_URL);
  }

  getByCategoryAndFamily(family: Family, category: Category): Observable<Article[]> {
    const articles = createKratomArticles().filter(val => val.category == category);
    return of<Article[]>(articles);
    // return this.http.get<Article[]>(this.API_URL);
  }

  create(item: CreateArticle): Observable<Article> {
    return this.http.post<Article>(this.API_URL, item);
  }

  update(id: string, dto: UpdateArticle): Observable<Article> {
    return this.http.patch<Article>(`${this.API_URL}/${id}`, dto);
  }

}
