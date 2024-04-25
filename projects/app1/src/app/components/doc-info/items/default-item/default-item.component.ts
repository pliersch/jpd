import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DocInfoItem } from '@app1/components/doc-info/doc-info.model';

export type ItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-doc-info-default-item',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './default-item.component.html',
  styleUrl: './default-item.component.scss'
})
export class DefaultItemComponent implements OnInit {

  @Input({required: true})
  item: DocInfoItem;

  @Input({required: true})
  size: ItemSize;

  svgSize = 2;

  imageUrl: string;

  ngOnInit(): void {
    switch (this.size) {
      case 'xs':
        this.svgSize = 50;
        break;
      case 'sm':
        this.svgSize = 50;
        break;
      case 'md':
        this.svgSize = 50;
        break;
      case 'lg':
        this.svgSize = 80;
        break;
      case 'xl':
        this.svgSize = 80;
        break;
    }
    this.imageUrl = 'assets/svg/icons/' + this.item.svgIcon + '.svg';
  }
}
