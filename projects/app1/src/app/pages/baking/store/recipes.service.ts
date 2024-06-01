import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getMockRecipe, Recipe } from '@app1/pages/baking/store/recipe.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

const API_URL = `${environment.apiUrl}/recipes`;

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getAll(): Array<Recipe> {
    return [getMockRecipe()];
  }

  loadAll(): Observable<Array<Recipe>> {
    return this.http.get<Recipe[]>(API_URL);
  }

}
