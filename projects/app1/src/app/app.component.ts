import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { A4WRootComponent } from 'jpd-core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, A4WRootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app1';
}
