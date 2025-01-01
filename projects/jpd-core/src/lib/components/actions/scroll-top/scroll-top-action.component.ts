import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Signal, input, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { map } from 'rxjs/operators';
import { ScrollService } from '../../../common';
import { ActionComponent } from '../_base-action/action.component';

@Component({
    selector: 'a4w-scroll-top-action',
    imports: [CommonModule, MatButtonModule, MatIconModule, ActionComponent],
    templateUrl: './scroll-top-action.component.html',
    styleUrl: './scroll-top-action.component.scss'
})

export class ScrollTopActionComponent {

  readonly fab = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  readonly button = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  readonly action = viewChild.required(ActionComponent);

  top: Signal<boolean | undefined>

  constructor(private scrollService: ScrollService) {
    this.top = toSignal(this.scrollService.scrollTop$.pipe(
      map(scrollTop => scrollTop > 0)));
  }

  scrollTop(): void {
    this.scrollService.scrollTop()
  }
}
