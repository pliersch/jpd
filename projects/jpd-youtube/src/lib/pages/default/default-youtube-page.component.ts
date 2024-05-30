import { AsyncPipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { ChipFilterComponent } from '../../components/chip-filter/chip-filter.component';
import { YoutubePlayListComponent } from '../../components/playlist/youtube-play-list.component';
import { Video } from '../../model';
import { YoutubeService } from '../../youtube.service';

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
export class DefaultYoutubePageComponent implements OnInit {

  @ViewChild(YoutubePlayListComponent)
  list: YoutubePlayListComponent

  @Input({required: true})
  videos: Video[]

  tags: string[] = [];

  id: string;

  playerConfig = {
    controls: 1,
    autoplay: 1
  };

  constructor(protected service: YoutubeService) { }

  ngOnInit(): void {
    this.service.setVideos(this.videos);
  }

  onTagsChange($event: string[]): void {
    this.tags = $event;
  }
}
