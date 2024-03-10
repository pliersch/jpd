import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractDefaultPageComponent,
  FragmentDirective,
  Parallax7Component,
  Privacy1Component,
  SectionComponent
} from 'jpd-core';

@Component({
  selector: 'app-forest-page',
  standalone: true,
  imports: [
    CommonModule,
    FragmentDirective,
    SectionComponent,
    Privacy1Component,
    Parallax7Component,
  ],
  templateUrl: './forest-page.component.html',
  styleUrls: ['./forest-page.component.scss']
})
export class ForestPageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super()
  }

}
