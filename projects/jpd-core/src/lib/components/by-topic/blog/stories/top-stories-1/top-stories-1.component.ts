import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface TopStories1Model {
  title: string;
  imgUrl: string;
  link: string;
}

@Component({
  selector: 'a4w-top-stories-1',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './top-stories-1.component.html',
  styleUrl: './top-stories-1.component.scss'
})
export class TopStories1Component {

  @Input()
  stories: TopStories1Model[]

}
