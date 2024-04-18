import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[a4wFragment]',
  standalone: true
})
export class FragmentDirective implements OnInit {

  @Input({required: true,})
  a4wFragment: string;

  constructor(public el: ElementRef) { }

  public get name(): string {
    return this.a4wFragment;
  }

  public get id(): string {
    return this.el.nativeElement.id;
  }

  ngOnInit(): void {
    this.el.nativeElement.id = btoa(this.a4wFragment);
  }

}
