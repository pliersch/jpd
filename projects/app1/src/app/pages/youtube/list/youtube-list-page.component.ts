import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {
  ChipFilterComponent,
  Video,
  YoutubePlayerComponent,
  YoutubePlayListComponent,
  YoutubeService
} from 'jpd-youtube';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-youtube-page',
  standalone: true,
  imports: [CommonModule, YoutubePlayerComponent, YoutubePlayListComponent, ChipFilterComponent],
  templateUrl: './youtube-list-page.component.html',
  styleUrl: './youtube-list-page.component.scss',
})
export class YoutubeListPageComponent implements OnInit {

  @ViewChild(YoutubePlayListComponent)
  list: YoutubePlayListComponent

  video$!: Observable<Video>;

  tags: string[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: YoutubeService) { }

  ngOnInit(): void {
    this.video$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getVideo(params.get('id') || '1')));
  }

  playVideo(video: Video) {
    void this.router.navigate(['/youtube/watch', {id: video.id}]);
  }

  onTagsChange($event: string[]) {
    this.tags = $event;

  }
}
