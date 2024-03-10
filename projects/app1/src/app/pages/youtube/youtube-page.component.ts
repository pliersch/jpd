import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-youtube-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './youtube-page.component.html',
  styleUrl: './youtube-page.component.scss',
})
export class YoutubePageComponent {}
