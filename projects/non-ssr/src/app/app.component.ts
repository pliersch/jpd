import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { A4WRootComponent, AppbarComponent, LogoContainerComponent, Privacy1Component } from 'jpd-core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Privacy1Component, A4WRootComponent, AppbarComponent, LogoContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'non-ssr';
}
