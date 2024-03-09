import { animate, style, transition, trigger } from '@angular/animations'
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FragmentDirective } from '@lib/common';
import { BaseComponent } from '@lib/components';

export interface Banner2ItemModel {
  contentText: string;
  postContentText: string;
  bigMessage: string;
  bgImageUrl: string;
  linkUrl: string;
  color: string;
}

export interface Banner2Model {
  items: Banner2ItemModel[];
}

@Component({
  selector: 'a4w-banner-2',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './banner2.component.html',
  styleUrl: './banner2.component.scss',
  animations: [
    trigger('fade', [
      transition('void => *', [style({opacity: 0}), animate('300ms', style({opacity: 1}))]),
      transition('* => void', [style({opacity: 1}), animate('300ms', style({opacity: 0}))]),
    ])
  ]
})
export class Banner2Component extends BaseComponent<Banner2Model> implements OnInit {

  @Input()
  textColor: string;

  @Input()
  intervall = 5000;

  current = 0;
  color: string;
  alphaColor: string;

  constructor(override fragment?: FragmentDirective) {
    super(fragment);
  }

  ngOnInit(): void {
    this.color = this.model.items[this.current].color;
    this.alphaColor = this.color + '99';
    setInterval(() => {
      this.alphaColor = this.color + '99';
      this.current = ++this.current % this.model.items.length
      this.color = this.model.items[this.current].color;
    }, this.intervall);
  }
}
