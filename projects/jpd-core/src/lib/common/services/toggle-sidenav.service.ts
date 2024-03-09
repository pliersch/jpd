import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidenavService {

  showSidenav$ = new Subject<void>();

  toggleSidenav(): void {
    this.showSidenav$.next();
  }
}
