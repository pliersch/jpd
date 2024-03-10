import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { A4WFooterComponent, AbstractDefaultPageComponent, FragmentDirective, TabNavComponent } from 'jpd-core';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [
    CommonModule,
    A4WFooterComponent,
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
