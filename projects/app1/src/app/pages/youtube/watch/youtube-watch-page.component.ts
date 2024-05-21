import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Video, YoutubePlayerComponent, YoutubePlayListComponent, YoutubeService } from 'jpd-youtube';

import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-youtube-page',
  standalone: true,
  imports: [CommonModule, YoutubePlayerComponent, YoutubePlayListComponent],
  templateUrl: './youtube-watch-page.component.html',
  styleUrl: './youtube-watch-page.component.scss',
})
export class YoutubeWatchPageComponent implements OnInit {

  video$!: Observable<Video>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: YoutubeService) { }

  ngOnInit(): void {
    this.video$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getVideo(params.get('id') || '1')));
  }

  playVideo(video: Video): void {
    void this.router.navigate(['/youtube/watch', {id: video.id}]);
  }

}
