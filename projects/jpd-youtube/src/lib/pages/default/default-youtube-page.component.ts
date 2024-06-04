import { AsyncPipe } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { ChipFilterComponent } from '../../components/chip-filter/chip-filter.component';
import { YoutubePlayListComponent } from '../../components/playlist/youtube-play-list.component';
import { VideosStore } from '../../store/videos.store';

@Component({
  selector: 'a4w-default-youtube-page',
  standalone: true,
  imports: [
    ChipFilterComponent,
    YoutubePlayListComponent,
    AsyncPipe,
    YouTubePlayer
  ],
  templateUrl: './default-youtube-page.component.html',
  styleUrl: './default-youtube-page.component.scss'
})
export class DefaultYoutubePageComponent {

  @ViewChild(YoutubePlayListComponent)
  list: YoutubePlayListComponent;

  readonly store = inject(VideosStore);

  tags: string[] = [];

  id: string;

  playerConfig = {
    controls: 1,
    autoplay: 1
  };

  onTagsChange($event: string[]): void {
    this.tags = $event;
  }
}
