import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { CardVideo1Component } from 'jpd-core';
import { Tag, Video } from '../../store/model';

@Component({
    selector: 'a4w-youtube-playlist',
    imports: [CommonModule, CardVideo1Component],
    templateUrl: './youtube-play-list.component.html',
    styleUrl: './youtube-play-list.component.scss'
})
export class YoutubePlayListComponent {

  readonly videos = input<Video[]>();

  readonly tags = input<Tag[]>([]);

  readonly videoIdChangeEvent = output();

  onCurrentVideoChange(videoId: string): void {
    this.videoIdChangeEvent.emit(videoId);
    // this.store.setActiveVideoId(videoId);
  }

  // upload() {
  //   this.service.uploadVideos();
  // }
}
