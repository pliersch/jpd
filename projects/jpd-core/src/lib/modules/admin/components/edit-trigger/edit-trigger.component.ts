import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { PosterComponent } from '../../../../components/poster/poster.component';

@Component({
  selector: 'a4w-edit-trigger',
  standalone: true,
  imports: [CommonModule, PosterComponent, MatButton],
  templateUrl: './edit-trigger.component.html',
  styleUrl: './edit-trigger.component.scss',
})
export class EditTriggerComponent {

  onClickEdit() {
    console.log('EditTriggerComponent onClickEdit: ',)
  }
}
