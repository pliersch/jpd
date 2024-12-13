import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'shop-account',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  setDiscount(): void {

  }
}
