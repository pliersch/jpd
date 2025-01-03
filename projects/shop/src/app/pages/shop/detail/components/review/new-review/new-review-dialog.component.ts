import { NgIf } from '@angular/common';
import { Component, inject, model, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Comment } from '@shop/pages/shop/store/articles/article.model';

export interface ReviewDialogData {
  review: Comment;
}

@Component({
  selector: 'shop-review-dialog',
  templateUrl: './new-review-dialog.component.html',
  styleUrls: ['./new-review-dialog.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatInput,
    ReactiveFormsModule,
    NgIf,
  ],
})
export class NewReviewDialogComponent implements OnInit {
  dialogTitle = 'Neue Bewertung';

  readonly dialogRef = inject(MatDialogRef<NewReviewDialogComponent>);
  readonly data = inject<ReviewDialogData>(MAT_DIALOG_DATA);
  readonly review = model(this.data.review ? this.data.review : this.createEmptyReview());

  private fb: FormBuilder = inject(FormBuilder);

  form = this.fb.group({
    name: [''],
    rating: ['', Validators.required],
    title: ['', Validators.required],
    comment: ['', Validators.required],
  });

  ngOnInit(): void {
    if (this.data?.review) {
      this.dialogTitle = 'Bearbeite Bewertung';
    }
  }

  onSubmit(): void {
    this.dialogRef.close(this.review());
  }

  cancel(): void {
    this.dialogRef.close();
  }

  createEmptyReview(): Comment {
    return {
      userName: '',
      date: new Date(),
      rating: 0,
      title: '',
      message: '',
    };
  }
}
