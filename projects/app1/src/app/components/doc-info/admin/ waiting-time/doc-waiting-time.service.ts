import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  CreateWaitingTime,
  UpdateWaitingTime,
  WaitingTime
} from '@app1/components/doc-info/admin/ waiting-time/doc-waiting-time.model';
import { ENV_TOKEN } from 'jpd-core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DocWaitingTimeService {

  private readonly API_URL: string = `${inject(ENV_TOKEN).apiUrl}/doc-waiting-time`;
  // private readonly SSE_URL: string = `${this.API_URL}/sse`;

  private readonly http = inject(HttpClient);

  // items$ = new Subject<DocWidgetItem>();

  // constructor(private _platform: Platform) {
  //   if (this._platform.isBrowser) {
  //     this.setupSse();
  //   }
  // }

  // private setupSse(): void {
  //   const source = new EventSource(this.SSE_URL);
  //   source.onmessage = (event: MessageEvent): void => {
  //     this.items$.next(JSON.parse(event.data).payload);
  //   }
  // }

  getAll(): Observable<WaitingTime[]> {
    return this.http.get<WaitingTime[]>(this.API_URL);
  }

  create(item: CreateWaitingTime): Observable<WaitingTime> {
    return this.http.post<WaitingTime>(this.API_URL, item);
  }

  update(id: string, dto: UpdateWaitingTime): Observable<WaitingTime> {
    return this.http.patch<WaitingTime>(`${this.API_URL}/${id}`, dto);
  }

}
