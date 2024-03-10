import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AdminService } from '../../../modules/admin';
import { ActionComponent } from '../_base-action/action.component';

@Component({
  selector: 'a4w-enable-admin-action',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ActionComponent],
  templateUrl: './enable-admin-action.component.html',
  styleUrl: './enable-admin-action.component.scss'
})

export class EnableAdminActionComponent {

  @Input({transform: booleanAttribute}) fab: boolean;

  @Input({transform: booleanAttribute}) button: boolean;

  constructor(private adminService: AdminService) { }

  toggleAdminMode(): void {
    this.adminService.toggleAdminMode();
  }
}
