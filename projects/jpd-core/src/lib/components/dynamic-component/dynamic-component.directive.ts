import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[a4wDynamicHost]',
  standalone: true
})
export class DynamicComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
