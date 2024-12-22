import { Component } from '@angular/core';
import { AppShellComponent } from './app-shell/app-shell.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [AppShellComponent]
})
export class AppComponent {

}
