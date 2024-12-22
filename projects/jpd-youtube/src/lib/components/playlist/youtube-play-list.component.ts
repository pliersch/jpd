import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardVideo1Component } from 'jpd-core';
import { Tag, Video } from '../../store/model';

@Component({
    selector: 'a4w-youtube-playlist',
    imports: [CommonModule, CardVideo1Component],
    templateUrl: './youtube-play-list.component.html',
    styleUrl: './youtube-play-list.component.scss'
})
export class YoutubePlayListComponent {

  @Input()
  videos: Video[] | undefined;

  @Input()
  tags: Tag[] = [];

  @Output()
  videoIdChangeEvent: EventEmitter<string> = new EventEmitter();

  onCurrentVideoChange(videoId: string): void {
    this.videoIdChangeEvent.emit(videoId);
    // this.store.setActiveVideoId(videoId);
  }

  // upload() {
  //   this.service.uploadVideos();
  // }
}
