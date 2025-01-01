import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AdminService } from '../../../modules/admin';
import { ActionComponent } from '../_base-action/action.component';

@Component({
    selector: 'a4w-enable-admin-action',
    imports: [CommonModule, MatButtonModule, MatIconModule, ActionComponent],
    templateUrl: './enable-admin-action.component.html',
    styleUrl: './enable-admin-action.component.scss'
})

export class EnableAdminActionComponent {

  readonly fab = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  readonly button = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  constructor(private adminService: AdminService) { }

  toggleAdminMode(): void {
    this.adminService.toggleAdminMode();
  }
}
