import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, Signal, ViewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { map } from 'rxjs/operators';
import { PageScrollService } from '../../../common';
import { ActionComponent } from '../_base-action/action.component';

@Component({
  selector: 'a4w-scroll-top-action',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ActionComponent],
  templateUrl: './scroll-top-action.component.html',
  styleUrl: './scroll-top-action.component.scss'
})

export class ScrollTopActionComponent {

  @Input({transform: booleanAttribute}) fab: boolean;

  @Input({transform: booleanAttribute}) button: boolean;

  @ViewChild(ActionComponent)
  action!: ActionComponent;

  top: Signal<boolean | undefined>

  constructor(private scrollService: PageScrollService) {
    this.top = toSignal(this.scrollService.scrollTop$.pipe(
      map(scrollTop => scrollTop > 0)));
  }

  scrollTop(): void {
    this.scrollService.scrollTop()
  }
}
