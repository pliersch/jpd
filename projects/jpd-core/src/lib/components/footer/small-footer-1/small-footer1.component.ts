import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from '@angular/router';
import { Route } from '../../../common';

export interface Small1FooterModel {}

@Component({
  selector: 'a4w-small-footer-1',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatAnchor, RouterLink],
  templateUrl: './small-footer1.component.html'
})
export class SmallFooter1Component /*extends BaseComponent<Small1FooterModel> */ {

  routes: Route[] = [
    {name: 'Kontakt', path: 'kontakt', children: []},
    // {name: 'Impressum', path: 'impressum', children: []},
    {name: 'Datenschutz', path: 'datenschutz', children: []},
  ];

  // constructor(override fragment?: FragmentDirective) {
  //   super('Footer', fragment)
  // }

}
