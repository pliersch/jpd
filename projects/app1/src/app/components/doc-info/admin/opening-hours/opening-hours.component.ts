import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatError, MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { DailyOpeningHours } from '@app1/components/doc-info/admin/opening-hours/doc-opening.model';
import { DocOpeningStore } from '@app1/components/doc-info/admin/opening-hours/doc-opening.store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-opening-hours',
    imports: [
        MatButton,
        MatCheckbox,
        MatError,
        MatFormField,
        MatInput,
        NgIf,
        ReactiveFormsModule
    ],
    templateUrl: './opening-hours.component.html',
    styleUrl: './opening-hours.component.scss'
})
export class OpeningHoursComponent implements OnInit {

  readonly store = inject(DocOpeningStore);
  lastUpdate$: Observable<DailyOpeningHours[]> = toObservable(this.store.entities);
  formGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.setupForm(fb);
  }

  ngOnInit(): void {
    this.lastUpdate$.subscribe(items => this.fillForm(items))
  }

  onSubmit(): void {
    alert('TODO send msg');
  }

  private setupForm(fb: FormBuilder): void {
    this.formGroup = fb.group({
      monday1b: [], monday1e: [], monday2b: [], monday2e: [],
      tuesday1b: [], tuesday1e: [], tuesday2b: [], tuesday2e: [],
      wednesday1b: [], wednesday1e: [], wednesday2b: [], wednesday2e: [],
      thursday1b: [], thursday1e: [], thursday2b: [], thursday2e: [],
      friday1b: [], friday1e: [], friday2b: [], friday2e: []
    });
  }

  private fillForm(items: DailyOpeningHours[]): void {
    if (items.length === 0) {
      return;
    }
    this.formGroup.setValue({
      monday1b: items[0].morningBegin,
      monday1e: items[0].morningEnd,
      monday2b: items[0].afterNoonBegin,
      monday2e: items[0].afterNoonEnd,

      tuesday1b: items[1].morningBegin,
      tuesday1e: items[1].morningEnd,
      tuesday2b: items[1].afterNoonBegin,
      tuesday2e: items[1].afterNoonEnd,

      wednesday1b: items[2].morningBegin,
      wednesday1e: items[2].morningEnd,
      wednesday2b: items[2].afterNoonBegin,
      wednesday2e: items[2].afterNoonEnd,

      thursday1b: items[3].morningBegin,
      thursday1e: items[3].morningEnd,
      thursday2b: items[3].afterNoonBegin,
      thursday2e: items[3].afterNoonEnd,

      friday1b: items[4].morningBegin,
      friday1e: items[4].morningEnd,
      friday2b: items[4].afterNoonBegin,
      friday2e: items[4].afterNoonEnd,
    });
  }

}
