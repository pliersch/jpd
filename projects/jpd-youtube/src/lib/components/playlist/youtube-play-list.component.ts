import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CardVideo1Component } from 'jpd-core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Video } from '../../model';
import { YoutubeService } from '../../youtube.service';

@Component({
  selector: 'a4w-youtube-playlist',
  standalone: true,
  imports: [CommonModule, CardVideo1Component],
  templateUrl: './youtube-play-list.component.html',
  styleUrl: './youtube-play-list.component.scss',
  animations: [
    trigger('flyIn', [
      transition('* => *', [
        query(':enter', [
          style({
            transform: 'translateX(20px) translateY(20px) rotateZ(20deg)',
            opacity: 0,
          }),
          stagger(100, [
            animate(
              '200ms',
              style({
                transform: 'none',
                opacity: 1,
              })
            ),
          ]),
        ], {
          optional: true
        }),
        query(':leave', [
          animate(200, style({
            opacity: 0
          }))
        ], {optional: true})
      ]),
    ]),
  ],
})
export class YoutubePlayListComponent implements OnInit, OnChanges {

  @Input()
  tags: string[] = [];

  videos$: Observable<Video[]> = new Observable<Video[]>();
  filteredVideos$: Observable<Video[]> = new Observable<Video[]>();

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.videos$ = this.youtubeService.getVideos();
    this.filteredVideos$ = this.videos$ || new Observable<Video[]>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showVideosByTags(changes['tags'].currentValue);
  }

  private showVideosByTags(tags: string[]) {
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
}
