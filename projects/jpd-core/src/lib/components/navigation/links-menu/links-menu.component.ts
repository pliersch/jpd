import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, viewChild } from '@angular/core';
import { MatMenu, MatMenuModule, MatMenuPanel } from '@angular/material/menu';

@Component({
    selector: 'a4w-links-menu',
    imports: [CommonModule, MatMenuModule],
    templateUrl: './links-menu.component.html',
    styleUrl: './link-menu.component.scss'
})
export class LinksMenuComponent implements AfterViewInit {

  readonly menu = viewChild(MatMenu);

  ngAfterViewInit(): void {
    console.log('LinkMenuComponent ngAfterViewInit: ',)
  }
}
