import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CardVideo1Component } from 'jpd-core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from '../../store/model';
import { VideoService } from '../../store/video.service';
import { VideosStore } from '../../store/videos.store';

@Component({
  selector: 'a4w-youtube-playlist',
  standalone: true,
  imports: [CommonModule, CardVideo1Component],
  templateUrl: './youtube-play-list.component.html',
  styleUrl: './youtube-play-list.component.scss',
})
export class YoutubePlayListComponent implements OnChanges {

  @Input()
  tags: string[] = [];

  videos$: Observable<Video[]> = new Observable<Video[]>();
  filteredVideos$: Observable<Video[]> = new Observable<Video[]>();

  readonly store = inject(VideosStore);
  readonly service = inject(VideoService);

  ngOnChanges(changes: SimpleChanges): void {
    this.showVideosByTags(changes['tags'].currentValue);
  }

  private showVideosByTags(tags: string[]): void {
    this.filteredVideos$ = this.videos$.pipe(
      map(videos => this.filterByTags(videos, tags))
    );
  }

  private filterByTags(videos: Video[], tags: string[]): Video[] {
    const result = [];
    for (const video of videos) {
      const containsAllTags = tags.every(tag => video.tags.find(tag2 => tag === tag2));
      if (containsAllTags) {
        result.push(video);
      }
    }
    return result;
  }

  onCurrentVideoChange(videoId: string): void {
    this.store.setActiveVideoId(videoId);
  }

  // upload() {
  //   this.service.uploadVideos();
  // }
}
