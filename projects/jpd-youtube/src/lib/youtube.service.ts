import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Video } from './model';

@Injectable({providedIn: 'root'})
export class YoutubeService {

  private _videos: Video[];
  private _videos$: ReplaySubject<Video[]> = new ReplaySubject();
  private _currentVideo$: ReplaySubject<Video> = new ReplaySubject();

  public get currentVideo$(): Observable<Video | undefined> {
    return this._currentVideo$;
  }

  setCurrentVideoId(id: string): void {
    this._currentVideo$.next(this._videos.find(video => video.id === id)!);
  }

  // setCurrentVideo(value: Video): void {
  //   this._currentVideo$.next(value);
  // }

  setVideos(videos: Video[]): void {
    this._videos = videos;
    this._videos$.next(videos);
  }

  get videos$(): Observable<Video[]> {
    return this._videos$;
  };

  // getVideo(id: string): Observable<Video> {
  //   return this._videos$.pipe(
  //     map((videos: Video[]) => videos.find(hero => hero.id === id)!)
  //   );
  // }
}
