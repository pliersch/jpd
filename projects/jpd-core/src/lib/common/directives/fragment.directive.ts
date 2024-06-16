import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[a4wFragment]',
  standalone: true
})
export class FragmentDirective {

  @Input({required: true})
  a4wFragment: string;

  // constructor(public el: ElementRef) { }

  public get name(): string {
    return this.a4wFragment;
  }

}
