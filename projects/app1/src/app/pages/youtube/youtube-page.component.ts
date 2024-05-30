import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultYoutubePageComponent, Video } from 'jpd-youtube';
import videos from '../../../assets/json/youtube-songs.json'

@Component({
  selector: 'app-youtube-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DefaultYoutubePageComponent],
  templateUrl: './youtube-page.component.html',
  styleUrl: './youtube-page.component.scss',
})
export class YoutubePageComponent {

  videos: Video[] = videos;

}
