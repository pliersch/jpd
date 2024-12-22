import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'shop-number-input',
    imports: [
        MatIcon,
        MatIconButton
    ],
    templateUrl: './number-input.component.html',
    styleUrl: './number-input.component.scss'
})
export class NumberInputComponent {

  @Input({required: true})
  text: string;

  @Input()
  disabled: boolean = false;

  // @Input()
  // color = 'yellow';

  @Output()
  numberChange = new EventEmitter<number>();

  @ViewChild('fileInput')
  input!: ElementRef;

  value: number = 0;

  onChange(): void {
    const value = this.input.nativeElement.value;
    if (value > 0) {
      this.value = value;
      this.emitChanges();
    } else {
      this.clear();
    }
  }

  increase(): void {
    this.input.nativeElement.value = ++this.value;
    this.emitChanges();
  }

  decrease(): void {
    const value = this.value;
    if (value > 1) {
      this.value = value - 1;
      this.input.nativeElement.value = this.value;
      this.emitChanges();
    } else if (value == 1) {
      this.clear();
    }
  }

  clear(): void {
    this.value = 0;
    this.input.nativeElement.value = '';
    this.emitChanges();
  }


  emitChanges(): void {
    this.numberChange.emit(this.value);
  }
}
