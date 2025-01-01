import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DefaultYoutubePageComponent } from 'jpd-youtube';

@Component({
    selector: 'app-youtube-page',
  imports: [CommonModule, DefaultYoutubePageComponent],
    templateUrl: './youtube-page.component.html',
    styleUrl: './youtube-page.component.scss'
})
export class YoutubePageComponent {

}
