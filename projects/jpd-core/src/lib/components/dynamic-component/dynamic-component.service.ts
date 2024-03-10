import { Injectable, Type } from '@angular/core';
import { DynamicHostComponent } from './dynamic-host.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  private host: DynamicHostComponent;
  private component: any;

  setHost(host: DynamicHostComponent): void {
    this.host = host;
    if (this.component) {
      host.loadWidget(this.component);
    }
  }

  setComponent(component: Type<any>): void {
    this.component = component;
    if (this.host) {
      this.host.loadWidget(component);
    }
  }

  removeComponent(component: Type<any>): void {
    this.host.removeWidget(component);
  }

}
