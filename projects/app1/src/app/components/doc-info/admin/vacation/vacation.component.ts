import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatError, MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { DocVacationStore } from '@app1/components/doc-info/admin/vacation/doc-vacation.store';

@Component({
  selector: 'app-doc-vacation',
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
  templateUrl: './vacation.component.html',
  styleUrl: './vacation.component.scss'
})
export class VacationComponent {

  readonly store = inject(DocVacationStore);


}
