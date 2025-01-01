import { NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipListbox, MatChipOption } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CreateVideoDto, Tag } from '../../store/model';

export interface AddVideoDialogData {
  tags: Tag[]
}

@Component({
    selector: 'a4w-add-video-dialog',
    templateUrl: './add-video-dialog.component.html',
    imports: [MatDialogModule, MatFormFieldModule, MatSelectModule, MatOptionModule, NgFor, MatButtonModule, MatInput, ReactiveFormsModule, NgIf, MatChipListbox, MatChipOption]
})
export class AddVideoDialogComponent implements OnInit {

  form = this.fb.group({
    artist: ['', Validators.required],
    title: ['', Validators.required],
    videoId: ['', Validators.required],
    posterUrl: ['', Validators.required],
    tags: [''],
  });

  readonly chipListBox = viewChild(MatChipListbox);

  valid = false;
  tags: Array<Tag>;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<AddVideoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AddVideoDialogData) {
    this.tags = data.tags;
  }

  ngOnInit(): void {
    this.form.statusChanges.subscribe(result => {
      this.valid = result === 'VALID';
    });
  }

  onSubmit(): void {
    this.dialogRef.close(this.createVideoDto());
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  private createVideoDto(): CreateVideoDto {
    const controls = this.form.controls;

    return {
      artist: controls.artist.value!,
      title: controls.title.value!,
      videoId: controls.videoId.value!,
      posterUrl: controls.posterUrl.value!,
      tags: this.getTagsFromChipList()
    };
  }

  getTagsFromChipList(): string[] {
    const selected = this.chipListBox().selected;
    const result: string[] = [];
    if (Array.isArray(selected)) {
      for (const item of selected) {
        result.push(item.value);
      }
    } else {
      result.push(selected.value);
    }
    return result;
  }
}
