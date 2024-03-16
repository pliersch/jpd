import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";

export interface Small1FooterModel {

}

@Component({
  selector: 'a4w-small-footer-1',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatAnchor],
  templateUrl: './small-footer1.component.html',
  styleUrls: ['./small-footer1.component.scss']
})
export class SmallFooter1Component /*extends BaseComponent<Small1FooterModel> */ {

  @Input()
  headlineColor: string;

  @Input()
  textColor: string;

  navItems = ['Über Uns', 'Datenschutz', 'Cookies'];

  // constructor(override fragment?: FragmentDirective) {
  //   super('Footer', fragment)
  // }

}
