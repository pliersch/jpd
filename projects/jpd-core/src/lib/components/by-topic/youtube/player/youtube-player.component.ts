import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'a4w-youtube-player',
  standalone: true,
  imports: [CommonModule, YouTubePlayer],
  templateUrl: './youtube-player.component.html',
  styleUrl: './youtube-player.component.scss',
})
export class YoutubePlayerComponent {

  // @Input({required: true})
  // video: Observable<YoutubeVideo>;

  @Input(/*{required: true}*/)
  id: string;

  playerConfig = {
    controls: 1,
    autoplay: 0
  };

}
