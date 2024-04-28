import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  isAdmin$: Observable<boolean>;

  private isAdminMode = false;
  isAdminMode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  componentData$: BehaviorSubject<object> = new BehaviorSubject<object>({});

  constructor() {
    this.setAdmin();
    this.toggleAdminMode();
  }

  setAdmin(): void {
    this.isAdmin$ = of(true);
    // this.toggleAdminMode();
  }

  toggleAdminMode(): void {
    this.isAdminMode = !this.isAdminMode;
    this.isAdminMode$.next(this.isAdminMode);
  }

  setActiveComponent(component: any): void {
    console.log('AdminService setActiveComponent: ', component.constructor.name)
  }

  setComponentData(data: object): void {
    this.componentData$.next(data);
  }
}
