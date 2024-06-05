import { AsyncPipe } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { ChipFilterComponent } from '../../components/chip-filter/chip-filter.component';
import { YoutubePlayListComponent } from '../../components/playlist/youtube-play-list.component';
import { Tag } from '../../store/model';
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

  playerConfig = {
    controls: 1,
    autoplay: 0
  };

  tags: Tag[] = [];
  id: string;

  onTagsChange($event: Tag[]): void {
    this.store.setActiveTags($event);
    this.tags = $event;
  }
}
