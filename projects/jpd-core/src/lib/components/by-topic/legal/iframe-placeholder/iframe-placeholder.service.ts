import { Injectable, Type } from '@angular/core';
import { IframePlaceholderComponent } from './iframe-placeholder.component';

@Injectable({
  providedIn: 'root'
})
export class IframePlaceholderService {

  private iframeHost: IframePlaceholderComponent;
  private iframe: any;

  setIframeHost(component: IframePlaceholderComponent): void {
    this.iframeHost = component;
  }

  setIframe(iframe: Type<any>): void {
    // if (this.iframe != iframe) {
    this.iframe = iframe;
    this.iframeHost.loadIframe(iframe);
    // }
  }

  removeIframe(iframe: Type<any>): void {
    this.iframeHost.removeIframe(iframe);
  }

}
