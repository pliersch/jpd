import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractDefaultPageComponent, FragmentDirective, Parallax7Component, SectionComponent } from 'jpd-core';

@Component({
  selector: 'app-forest-page',
  standalone: true,
  imports: [
    CommonModule,
    FragmentDirective,
    SectionComponent,
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
