import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DocInfoItemModel } from '@app1/components/doc-info/doc-info.model';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-doc-info-default-widget',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './default-widget.component.html',
  styleUrl: './default-widget.component.scss'
})
export class DefaultWidgetComponent implements OnInit {

  @Input({required: true})
  item: DocInfoItemModel;

  @Input(/*{required: true}*/)
  size: Size;

  svgSize = 2;

  imageUrl: string;

  ngOnInit(): void {
    switch (this.size) {
      case 'xs':
        this.svgSize = 20;
        break;
      case 'sm':
        this.svgSize = 40;
        break;
      case 'md':
        this.svgSize = 60;
        break;
      case 'lg':
        this.svgSize = 80;
        break;
      case 'xl':
        this.svgSize = 100;
        break;
    }
    this.imageUrl = 'assets/svg/icons/' + this.item.svgIcon + '.svg';
  }
}
