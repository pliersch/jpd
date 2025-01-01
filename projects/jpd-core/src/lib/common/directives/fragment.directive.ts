import { Directive, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[a4wFragment]',
  standalone: true
})
export class FragmentDirective {

  readonly a4wFragment = input.required<string>();

  constructor(public el: ElementRef) { }

  public get name(): string {
    return this.a4wFragment();
  }

}
