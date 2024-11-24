import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { createDealerInfo } from '@shop/pages/shop/store/dealer/dealer.mock-factory';
import { Dealer } from '@shop/pages/shop/store/dealer/dealer.model';
import { ENV_TOKEN } from 'jpd-core';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DealerService {

  private readonly dealerDetails: Dealer[];

  constructor() {
    this.dealerDetails = createDealerInfo();
  }

  private readonly API_URL: string = `${inject(ENV_TOKEN).apiUrl}/dealer`;

  private readonly http = inject(HttpClient);

  getAll(): Observable<Dealer[]> {
    return of<Dealer[]>(this.dealerDetails);
    // return this.http.get<DealerDetail[]>(this.API_URL);
  }

  getById(id: string): Observable<Dealer> {
    return of<Dealer>(this.dealerDetails.find(v => v.id === id)!);
  }

  // create(item: CreateDealerDetail): Observable<DealerDetail> {
  //   return this.http.post<DealerDetail>(this.API_URL, item);
  // }
  //
  // update(id: string, dto: UpdateDealerDetail): Observable<DealerDetail> {
  //   return this.http.patch<DealerDetail>(`${this.API_URL}/${id}`, dto);
  // }

}
