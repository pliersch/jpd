import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreadTableComponent } from '@app1/pages/baking/bread-table/bread-table.component';
import { AbstractDefaultPageComponent } from 'jpd-core';

@Component({
  selector: 'app-baking-page',
  standalone: true,
  imports: [
    CommonModule,
    BreadTableComponent,
  ],
  templateUrl: './baking-page.component.html',
  styleUrls: ['./baking-page.component.scss']
})
export class BakingPageComponent extends AbstractDefaultPageComponent {

  edit = false;

  constructor() {
    super();
  }

  onEdit($event: boolean): void {
    this.edit = $event;
  }

  onSave(): void {
    this.edit = false;
  }
}
