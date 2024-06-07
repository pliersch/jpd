import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENV_TOKEN } from 'jpd-core';
import { Observable } from 'rxjs';
import { CreateVideoDto, Video } from './model';

@Injectable({providedIn: 'root'})
export class VideoService {

  private readonly API_URL: string = `${inject(ENV_TOKEN).apiUrl}/videos`;
  private readonly http = inject(HttpClient);

  getAll(): Observable<Video[]> {
    return this.http.get<Video[]>(this.API_URL);
  }

  create(dto: CreateVideoDto): Observable<Video> {
    return this.http.post<Video>(this.API_URL, dto);
  }

}
