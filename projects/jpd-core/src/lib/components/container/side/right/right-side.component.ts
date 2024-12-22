import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminTabContainerComponent } from '../../../../modules/admin';

@Component({
    selector: 'a4w-right-side',
    imports: [CommonModule, AdminTabContainerComponent],
    templateUrl: './right-side.component.html',
    styleUrl: './right-side.component.scss'
})
export class RightSideComponent {}
