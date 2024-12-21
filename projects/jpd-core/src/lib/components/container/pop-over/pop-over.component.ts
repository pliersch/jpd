import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Component, Input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'a4w-pop-over',
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

  @Input({required: true})
  icon: string;

  isOpen = false;

  close(): void {
    this.isOpen = false;
  }
}
