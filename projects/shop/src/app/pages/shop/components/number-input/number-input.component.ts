import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-number-input',
  standalone: true,
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

  // @Input()
  // color = 'yellow';

  @ViewChild('fileInput')
  input!: ElementRef;

  value: number = 0;

  onChange(): void {
    const value = this.input.nativeElement.value;
    if (value > 0) {
      this.value = value;
    } else {
      this.clear();
    }
  }

  increase(): void {
    this.input.nativeElement.value = ++this.value;
  }

  decrease(): void {
    const value = this.value;
    if (value > 1) {
      this.value = value - 1;
      this.input.nativeElement.value = this.value;
    } else if (value == 1) {
      this.clear()
    }
  }

  clear(): void {
    this.value = 0;
    this.input.nativeElement.value = '';
  }
}
