import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactCompanyInfoComponent, ContactFormComponent, PosterComponent } from '@lib/components';

@Component({
  selector: 'a4w-standard-contact',
  standalone: true,
  imports: [CommonModule, PosterComponent, ContactFormComponent, ContactCompanyInfoComponent],
  templateUrl: './contact-company.component.html',
  styleUrls: ['./contact-company.component.scss']
})
export class ContactCompanyComponent {

  // model: any = this.appDataService.getComponentData(this);

  // constructor(private appDataService: AppDataService) { }
}
