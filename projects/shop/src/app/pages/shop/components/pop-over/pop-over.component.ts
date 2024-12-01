import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'shop-pop-over',
  standalone: true,
  imports: [
    CdkOverlayOrigin,
    CdkConnectedOverlay,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './pop-over.component.html',
  styleUrl: './pop-over.component.scss'
})
export class PopOverComponent {
  isOpen = false;

  close(): void {
    this.isOpen = false;
  }
}
