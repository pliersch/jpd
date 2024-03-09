import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Observable, startWith } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'a4w-search-autocomplete-input',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatAutocompleteModule],
  templateUrl: './search-autocomplete-input.component.html',
  styleUrls: ['./search-autocomplete-input.component.scss']
})
export class SearchAutocompleteInputComponent implements OnInit {
  control = new FormControl('');
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets: Observable<string[]>;

  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
