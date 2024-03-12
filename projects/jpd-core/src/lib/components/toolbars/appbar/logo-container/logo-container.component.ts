import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppDataService } from '../../../../core';

export interface LogoModel {
  logoUrl: string;
}

@Component({
  selector: 'a4w-logo-container',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './logo-container.component.html',
  styleUrl: './logo-container.component.scss'
})
export class LogoContainerComponent {

  private appDataService: AppDataService = inject(AppDataService);
  model: LogoModel = {logoUrl: 'foobar'};

  constructor() {
    const componentData = this.appDataService.getComponentData('LogoContainerComponent', '/');
    console.log('LogoContainerComponent constructor: ', componentData)
    this.model = componentData;
  }
}
