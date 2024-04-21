import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[a4wIframeHost]',
  standalone: true
})
export class WidgetDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
