import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Country, getCountries } from '@shop/pages/shop/cart/store/countries';

@Component({
  selector: 'shop-info',
  standalone: true,
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.scss',
  imports: [
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
})
export class ShipmentComponent {

  countries: Country[] = getCountries();
  selectedCountry = 'DE';
}
