import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Component, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'a4w-pop-over',
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

  readonly icon = input.required<string>();

  isOpen = false;

  close(): void {
    this.isOpen = false;
  }
}
