import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseComponent } from '../../../core/base/base.component';

export interface LogoModel {
  logoUrl: string;
}
@Component({
    selector: 'a4w-logo-container',
    imports: [CommonModule, RouterLink],
    templateUrl: './logo-container.component.html',
    styleUrl: './logo-container.component.scss'
})

export class LogoContainerComponent extends BaseComponent<LogoModel> {

  constructor(/*fragment: FragmentDirective*/) {
    super('LogoContainer');
  }
}
