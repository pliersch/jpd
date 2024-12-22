import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'a4w-action',
    imports: [CommonModule, MatIconModule, MatButtonModule],
    templateUrl: './action.component.html',
    styleUrl: './action.component.scss'
})
export class ActionComponent implements OnInit {

  @Input({transform: booleanAttribute})
  fab: boolean;

  @Input({transform: booleanAttribute})
  button: boolean;

  @Input({transform: booleanAttribute})
  iconTextButton: boolean;

  @Input({required: true})
  name: string;

  @Input({required: true})
  icon: string;

  @Input({required: true})
  ariaLabel: string;

  @Input()
  text: string;

  @Output()
  actionEvent = new EventEmitter<void>();

  execute(): void {
    this.actionEvent.emit();
  }

  ngOnInit(): void {
    if (this.fab && this.button
      || this.fab && this.iconTextButton
      || this.button && this.iconTextButton) {
      throw new Error(this.name + ' action: Only one button-type is allowed.')
    }
  }

}
