import { Injectable } from '@angular/core';
import { Video, YoutubeService } from 'jpd-core';
import { Observable, of } from 'rxjs';
import videos from '../../assets/json/youtube-songs.json'

@Injectable({
  providedIn: 'root'
})
export class CustomYoutubeService extends YoutubeService {

  constructor() {
    super();
  }

  getVideos(): Observable<Video[]> {
    return of(videos.favorites);
  }

}
