import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PosterComponent } from '../../../../poster/poster.component';
import { ContactFormComponent } from '../../forms/contact-form-1/contact-form.component';


@Component({
  selector: 'a4w-standard-contact',
  imports: [CommonModule, PosterComponent, ContactFormComponent],
  templateUrl: './contact-company.component.html',
  styleUrls: ['./contact-company.component.scss']
})
export class ContactCompanyComponent {

  // model: any = this.appDataService.getComponentData(this);

  // constructor(private appDataService: AppDataService) { }
}
