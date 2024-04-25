import { Injectable } from '@angular/core';
import { Video, YoutubeService } from 'jpd-youtube';
import { Observable, of } from 'rxjs';
import videos from '../../assets/json/youtube-songs.json'

@Injectable({
  providedIn: 'root'
})
export class CustomYoutubeService extends YoutubeService {

  getVideos(): Observable<Video[]> {
    return of(videos.favorites);
  }

}
