import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatError, MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

export interface OpeningHoursModel {
  monday: DailyOpeningHours;
  tuesday: DailyOpeningHours;
  wednesday: DailyOpeningHours;
  thursday: DailyOpeningHours;
  friday: DailyOpeningHours;
}

export interface DailyOpeningHours {
  morningBegin: string;
  morningEnd: string;
  afterNoonBegin: string;
  afterNoonEnd: string;
  comment: string;
}

@Component({
  selector: 'app-opening-hours',
  standalone: true,
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
export class OpeningHoursComponent {

  formGroup: FormGroup;

  private model: OpeningHoursModel = {
    monday: {
      morningBegin: '07:30',
      morningEnd: '12:00',
      afterNoonBegin: '15:00',
      afterNoonEnd: '17:00',
      comment: ''
    },
    tuesday: {
      morningBegin: '07:30',
      morningEnd: '12:00',
      afterNoonBegin: '15:00',
      afterNoonEnd: '17:00',
      comment: ''
    },
    wednesday: {
      morningBegin: '07:30',
      morningEnd: '12:00',
      afterNoonBegin: '15:00',
      afterNoonEnd: '17:00',
      comment: ''
    },
    thursday: {
      morningBegin: '07:30',
      morningEnd: '12:00',
      afterNoonBegin: '15:00',
      afterNoonEnd: '17:00',
      comment: ''
    },
    friday: {
      morningBegin: '07:30',
      morningEnd: '12:00',
      afterNoonBegin: '15:00',
      afterNoonEnd: '17:00',
      comment: ''
    }
  }

  constructor(fb: FormBuilder) {
    this.setupForm(fb);
    this.fillForm(this.model);
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

  private fillForm(model: OpeningHoursModel): void {
    this.formGroup.setValue({
      monday1b: model.monday.morningBegin,
      monday1e: model.monday.morningEnd,
      monday2b: model.monday.afterNoonBegin,
      monday2e: model.monday.afterNoonEnd,

      tuesday1b: model.tuesday.morningBegin,
      tuesday1e: model.tuesday.morningEnd,
      tuesday2b: model.tuesday.afterNoonBegin,
      tuesday2e: model.tuesday.afterNoonEnd,

      wednesday1b: model.wednesday.morningBegin,
      wednesday1e: model.wednesday.morningEnd,
      wednesday2b: model.wednesday.afterNoonBegin,
      wednesday2e: model.wednesday.afterNoonEnd,

      thursday1b: model.thursday.morningBegin,
      thursday1e: model.thursday.morningEnd,
      thursday2b: model.thursday.afterNoonBegin,
      thursday2e: model.thursday.afterNoonEnd,

      friday1b: model.friday.morningBegin,
      friday1e: model.friday.morningEnd,
      friday2b: model.friday.afterNoonBegin,
      friday2e: model.friday.afterNoonEnd,
    });
  }
}
