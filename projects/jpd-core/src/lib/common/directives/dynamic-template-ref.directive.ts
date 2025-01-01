import { Directive, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[a4wDynRef]',
  standalone: true
})
export class DynamicTemplateRefDirective {

  readonly dynRef = input.required<string>();

  constructor(public el: ElementRef) { }

  public get name(): string {
    return this.dynRef();
  }

}
