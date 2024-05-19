import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageScrollService {

  scrollTop$: Subject<number> = new Subject();
  private scrollY: number;

  constructor(private viewportScroller: ViewportScroller) { }

  setWindowScrollY(scrollY: number): void {
    this.scrollY = scrollY;
    this.scrollTop$.next(scrollY);
  }

  scrollToPosition(elementOffsetTop: number): void {
    this.viewportScroller.scrollToPosition([0, elementOffsetTop]);
  }

  scrollTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  getScrollTop(): number {
    return this.scrollY;
  }
}
