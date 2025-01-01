import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, OnInit, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'a4w-action',
    imports: [CommonModule, MatIconModule, MatButtonModule],
    templateUrl: './action.component.html',
    styleUrl: './action.component.scss'
})
export class ActionComponent implements OnInit {

  readonly fab = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  readonly button = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  readonly iconTextButton = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  readonly name = input.required<string>();

  readonly icon = input.required<string>();

  readonly ariaLabel = input.required<string>();

  readonly text = input<string>();

  readonly actionEvent = output<void>();

  execute(): void {
    this.actionEvent.emit();
  }

  ngOnInit(): void {
    const fab = this.fab();
    const button = this.button();
    const iconTextButton = this.iconTextButton();
    if (fab && button
      || fab && iconTextButton
      || button && iconTextButton) {
      throw new Error(this.name() + ' action: Only one button-type is allowed.')
    }
  }

}
