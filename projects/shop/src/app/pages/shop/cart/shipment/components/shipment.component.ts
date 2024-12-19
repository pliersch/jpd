import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Country, getCountries } from '@shop/pages/shop/cart/shipment/countries';

@Component({
  selector: 'shop-shipment',
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

  @Output()
  selectCountry = new EventEmitter<Country>();

  countries: Country[] = getCountries();
  selectedCountry = 'DE';

  onSelectCountry(): void {
    const country = this.countries.find(val => val.code === this.selectedCountry);
    this.selectCountry.emit(country!);


  }
}
