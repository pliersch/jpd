import { AsyncPipe } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { YouTubePlayer } from '@angular/youtube-player';
import { AddVideoDialogComponent } from '../../components/add-video-dialog/add-video-dialog.component';
import { ChipFilterComponent } from '../../components/chip-filter/chip-filter.component';
import { YoutubePlayListComponent } from '../../components/playlist/youtube-play-list.component';
import { CreateVideoDto, Tag } from '../../store/model';
import { VideosStore } from '../../store/videos.store';

@Component({
  selector: 'a4w-default-youtube-page',
  standalone: true,
  imports: [
    ChipFilterComponent,
    YoutubePlayListComponent,
    AsyncPipe,
    YouTubePlayer,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './default-youtube-page.component.html',
  styleUrl: './default-youtube-page.component.scss'
})
export class DefaultYoutubePageComponent {

  @ViewChild(YoutubePlayListComponent)
  list: YoutubePlayListComponent;

  readonly store = inject(VideosStore);
  // readonly service = inject(VideoService);
  readonly dialog = inject(MatDialog);

  playerConfig = {
    controls: 1,
    autoplay: 1
  };

  tags: Tag[] = [];
  id: string;

  onTagsChange($event: Tag[]): void {
    this.store.setActiveTags($event);
    this.tags = $event;
  }

  openUpload(): void {
    const dialogRef =
      this.dialog.open(AddVideoDialogComponent, {
        data: {tags: this.store.tagsEntities()},
        restoreFocus: false,
        autoFocus: false
      });

    dialogRef.afterClosed().subscribe((dto: CreateVideoDto) => {
      if (!dto) {
        return;
      }
      this.store.addVideo(dto);
    });
  }

}
