import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { YoutubePlayerComponent } from '../../components/player/youtube-player.component';
import { YoutubePlayListComponent } from '../../components/playlist/youtube-play-list.component';
import { Video } from '../../model';
import { YoutubeService } from '../../youtube.service';

@Component({
  selector: 'app-youtube-page',
  standalone: true,
  imports: [CommonModule, YoutubePlayerComponent, YoutubePlayListComponent],
  templateUrl: './youtube-watch-page.component.html',
  styleUrl: './youtube-watch-page.component.scss',
})
export class YoutubeWatchPageComponent /*implements OnInit */ {

  video$!: Observable<Video>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: YoutubeService) { }

  // ngOnInit(): void {
  //   this.video$ = this.route.paramMap.pipe(
  //     switchMap((params: ParamMap) => this.service.getVideo(params.get('id') || '1')));
  // }

  playVideo(video: Video): void {
    void this.router.navigate(['/youtube/watch', {id: video.id}]);
  }

}
