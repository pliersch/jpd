import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { AbstractNavigationComponent } from '@lib/components/navigation/base/behavior/abstract-navigation.component';

@Component({
  selector: 'a4w-image-sub-nav',
  standalone: true,
  imports: [CommonModule, MatMenuModule],
  templateUrl: './image-sub-nav.component.html',
  styleUrl: './image-sub-nav.component.scss'
})
export class ImageSubNavComponent extends AbstractNavigationComponent {

  constructor() {super();}
}
