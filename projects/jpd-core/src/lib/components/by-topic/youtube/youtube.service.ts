import { Injectable } from '@angular/core';
import { Video } from '@lib/components/by-topic/youtube/model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export abstract class YoutubeService {

  abstract getVideos(): Observable<Video[]>;

  getVideo(id: string) {
    return this.getVideos().pipe(
      map((videos: Video[]) => videos.find(hero => hero.id === id)!)
    );
  }
}
