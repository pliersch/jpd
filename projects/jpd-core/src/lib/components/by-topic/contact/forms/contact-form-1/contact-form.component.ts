import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';

@Component({
    selector: 'a4w-contact-form',
    imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatCheckboxModule],
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy {

  valid = false;
  private subscription: Subscription;

  contactForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.setupForm(fb);
  }

  ngOnInit(): void {
    this.subscription = this.contactForm.statusChanges.subscribe(result => {
      this.valid = result === 'VALID';
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    alert('TODO send msg');
  }

  private setupForm(fb: FormBuilder): void {
    this.contactForm = fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      // todo improve regex (01514 1122333 ok, 01514-1122333 ok, but 015141122333 not ok)
      // autoformat !?
      phone: [null/*, Validators.pattern(/(\+49|0)([- ()]?\d[- ()]?){6,11}$/g)*/],
      company: [null],
      message: [null, Validators.required],
      checked: [null, Validators.requiredTrue],
    });
  }

}
