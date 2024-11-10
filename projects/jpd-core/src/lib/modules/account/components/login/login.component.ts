import { NgIf } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { PosterComponent } from '../../../../components';
import { AuthService } from '../../store/auth.service';

@Component({
  selector: 'a4w-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, NgIf, MatButtonModule, PosterComponent]
})
export class LoginComponent implements OnInit {

  valid = false;

  form = this.fb.group({
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.form.setValue({
      password: ''
    });
    this.form.statusChanges.subscribe(result => {
      this.valid = result === 'VALID';
    });
  }

  onSubmit(): void {
    const controls = this.form.controls;
    this.authService.login(controls.password.value!);
  }

}
