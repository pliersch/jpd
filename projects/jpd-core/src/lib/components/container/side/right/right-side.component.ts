import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminTabContainerComponent } from '@lib/modules/admin/components/nav-container/admin-tab-container.component';

@Component({
  selector: 'a4w-right-side',
  standalone: true,
  imports: [CommonModule, AdminTabContainerComponent],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.scss',
})
export class RightSideComponent {}
