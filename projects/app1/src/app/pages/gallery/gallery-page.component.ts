import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-gallery-page',
    imports: [CommonModule, RouterOutlet],
    templateUrl: './gallery-page.component.html',
    styleUrl: './gallery-page.component.scss'
})
export class GalleryPageComponent {}
