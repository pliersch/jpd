import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ContactFormComponent, PosterComponent } from '@lib/components';

@Component({
  selector: 'a4w-contact-company-info',
  standalone: true,
  imports: [CommonModule, PosterComponent, ContactFormComponent, MatIconModule],
  templateUrl: './contact-company-info.component.html',
  styleUrls: ['./contact-company-info.component.scss']
})
export class ContactCompanyInfoComponent {

  // model: any = this.appDataService.getComponentData(this);

  // constructor(private appDataService: AppDataService) { }
}
