import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { PageScrollService } from '../../../common';
import { ActionComponent } from '../_base-action/action.component';

@Component({
  selector: 'a4w-scroll-top-action',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ActionComponent],
  templateUrl: './scroll-top-action.component.html',
  styleUrl: './scroll-top-action.component.scss'
})

export class ScrollTopActionComponent implements OnDestroy {

  @Input({transform: booleanAttribute}) fab: boolean;

  @Input({transform: booleanAttribute}) button: boolean;

  @ViewChild(ActionComponent)
  action!: ActionComponent;

  private subscription: Subscription;

  isTop = true;

  constructor(private scrollService: PageScrollService) {
    this.subscription = this.scrollService.scrollTop$.subscribe(scrollTop => {
      this.isTop = scrollTop <= 0;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  scrollTop(): void {
    this.scrollService.scrollTop()
  }
}
