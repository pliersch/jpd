import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseComponent } from '@lib/components/core/base/base.component';
import { TitleSubtitleDescriptionImg } from '@lib/content/content';

// fixme this is not a name
export interface Foo {
  headline: string;
  items: TitleSubtitleDescriptionImg[];
}

@Component({
  selector: 'app-services-icons',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './avatar-tsd4.component.html',
  styleUrls: ['./avatar-tsd4.component.scss']
})
export class AvatarTSD4Component extends BaseComponent<Foo> {

  constructor() {
    super();
  }
}
