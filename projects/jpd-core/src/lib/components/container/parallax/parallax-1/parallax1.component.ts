import { Component, OnDestroy, input } from '@angular/core';
import { Subscription } from 'rxjs';
import { FragmentDirective, ScrollService } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';

export interface Parallax1Model {
  backgroundImage: string;
}

@Component({
  selector: 'a4w-parallax-1',
  templateUrl: './parallax1.component.html',
  styleUrls: ['./parallax1.component.scss'],
  standalone: true,
})

export class Parallax1Component extends BaseComponent<Parallax1Model> implements OnDestroy {

  readonly darkenBG = input(true);

  parallax = 0;
  alpha = 1;
  basis = 500;

  private subscription: Subscription;

  constructor(scrollService: ScrollService,
              override fragment?: FragmentDirective) {
    super('Parallax1', fragment);
    this.subscription = scrollService.scrollTop$.subscribe(scrollTop => this.updateParallax(scrollTop));
  }

  private updateParallax(scrollTop: number): void {
    this.parallax = 0.4 * scrollTop;
    this.alpha = (this.basis - scrollTop) / this.basis;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
