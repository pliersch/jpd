import { Platform } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENV_TOKEN } from 'jpd-core';
import { Observable, Subject } from 'rxjs';
import { CreateDocInfoItem, DocInfoItem, UpdateDocInfoItem } from './doc-widget.model';

@Injectable({providedIn: 'root'})
export class DocWidgetService {

  private readonly API_URL: string = `${inject(ENV_TOKEN).apiUrl}/doc`;
  private readonly SSE_URL: string = `${this.API_URL}/sse`;

  private readonly http = inject(HttpClient);

  items$ = new Subject<DocInfoItem>();

  constructor(private _platform: Platform) {
    if (this._platform.isBrowser) {
      this.setupSse();
    }
  }

  private setupSse(): void {
    const source = new EventSource(this.SSE_URL);
    source.onmessage = (event: MessageEvent): void => {
      this.items$.next(JSON.parse(event.data).payload);
    }
  }

  getAll(): Observable<DocInfoItem[]> {
    return this.http.get<DocInfoItem[]>(this.API_URL);
  }

  create(item: CreateDocInfoItem): Observable<DocInfoItem> {
    return this.http.post<DocInfoItem>(this.API_URL, item);
  }

  update(id: string, dto: UpdateDocInfoItem): Observable<DocInfoItem> {
    return this.http.patch<DocInfoItem>(`${this.API_URL}/${id}`, dto);
  }

}
