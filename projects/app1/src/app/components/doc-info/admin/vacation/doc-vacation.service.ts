import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  CreateVacationDto,
  UpdateVacationDto,
  Vacation
} from '@app1/components/doc-info/admin/vacation/doc-vacation.model';
import { ENV_TOKEN } from 'jpd-core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DocVacationService {

  private readonly API_URL: string = `${inject(ENV_TOKEN).apiUrl}/doc-vacation`;
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

  getAll(): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(this.API_URL);
  }

  create(item: CreateVacationDto): Observable<Vacation> {
    return this.http.post<Vacation>(this.API_URL, item);
  }

  update(id: string, dto: UpdateVacationDto): Observable<Vacation> {
    return this.http.patch<Vacation>(`${this.API_URL}/${id}`, dto);
  }

}
