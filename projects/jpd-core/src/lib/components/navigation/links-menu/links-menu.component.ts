import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatMenu, MatMenuModule, MatMenuPanel } from '@angular/material/menu';

@Component({
  selector: 'a4w-links-menu',
  standalone: true,
  imports: [CommonModule, MatMenuModule],
  templateUrl: './links-menu.component.html',
  styleUrl: './link-menu.component.scss'
})
export class LinksMenuComponent implements AfterViewInit {

  @ViewChild(MatMenu, {static: true})
  menu: MatMenuPanel;

  ngAfterViewInit(): void {
    console.log('LinkMenuComponent ngAfterViewInit: ',)
  }
}
