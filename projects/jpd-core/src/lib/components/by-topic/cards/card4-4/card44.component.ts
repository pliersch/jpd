import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Card44Model {
  title: string
  imgUrl: string
  linkUrl: string
  linkText: string
  contentText: string
  postContentText?: string
  avatar?: string
}

@Component({
  selector: 'a4w-card44',
  imports: [CommonModule, RouterLink],
  templateUrl: './card44.component.html',
  styleUrl: './card44.component.scss'
})
export class Card44Component {

  readonly model = input.required<Card44Model>();

  readonly transparent = input(false);
}
