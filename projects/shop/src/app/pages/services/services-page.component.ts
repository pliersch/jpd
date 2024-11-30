import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractDefaultPageComponent, FragmentDirective, TabNavComponent } from 'jpd-core';

@Component({
  selector: 'shop-service-page',
  standalone: true,
  imports: [
    CommonModule,
    FragmentDirective,
    TabNavComponent,
  ],
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent extends AbstractDefaultPageComponent {

  bg = '1x/11.jpg'

  constructor() {
    super()
  }

}
