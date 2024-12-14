import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from 'jpd-core';
import { Observable, of } from 'rxjs';
import { Metadata } from './account.model';

@Injectable({providedIn: 'root'})
export class AccountService {

  private baseUrl =
    `${this.environmentService.getEnvironment().apiUrl}/customer`;

  constructor(private http: HttpClient,
              private environmentService: EnvironmentService) { }

  loadMetadata(id: string): Observable<Metadata> {
    return this.http.post<Metadata>(this.baseUrl + '/meta', {id: id});
  }

  loadMetadataFake(): Observable<Metadata> {
    const wtf: Metadata = {
      orders: []
    };
    return of(wtf);
  }

}
