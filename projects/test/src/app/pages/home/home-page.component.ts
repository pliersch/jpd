import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  imports: [
    CommonModule,
  ],
  selector: 'app-home-page',
  standalone: true,
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

}
