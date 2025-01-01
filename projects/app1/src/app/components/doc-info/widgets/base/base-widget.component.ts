import { Component, OnInit, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DocWidgetItem } from '@app1/components/doc-info/store/doc-widget.model';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
    selector: 'app-doc-info-default-widget',
    imports: [MatIcon],
    templateUrl: './base-widget.component.html',
    styleUrl: './base-widget.component.scss'
})
export class BaseWidgetComponent implements OnInit {

  readonly item = input.required<DocWidgetItem>();

  readonly size = input<Size>();

  svgSize = 2;

  imageUrl: string;

  ngOnInit(): void {
    switch (this.size()) {
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
    this.imageUrl = 'assets/svg/icons/' + this.item().svg + '.svg';
  }
}
