import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[a4wDynRef]',
  standalone: true
})
export class DynamicTemplateRefDirective {

  @Input({required: true,})
  dynRef: string;

  constructor(public el: ElementRef) { }

  public get name(): string {
    return this.dynRef;
  }

}
