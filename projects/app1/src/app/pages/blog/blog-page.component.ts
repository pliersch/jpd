import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabNavComponent } from 'jpd-core';

@Component({
    selector: 'app-blog-page',
    imports: [CommonModule, RouterOutlet, TabNavComponent],
    templateUrl: './blog-page.component.html',
    styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {}
