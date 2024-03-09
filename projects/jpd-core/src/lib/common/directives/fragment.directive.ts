import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFragment]',
  standalone: true
})
export class FragmentDirective implements OnInit {

  @Input({required: true,})
  appFragment: string;

  constructor(public el: ElementRef) { }

  public get name(): string {
    return this.appFragment;
  }

  public get id(): string {
    return this.el.nativeElement.id;
  }

  ngOnInit(): void {
    this.el.nativeElement.id = btoa(this.appFragment);
  }

}
