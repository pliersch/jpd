import { CdkScrollable } from '@angular/cdk/scrolling';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageScrollService {

  scrollTop$: Subject<number> = new Subject();
  private scroller: CdkScrollable;

  setScroller(scroller: CdkScrollable): void {
    this.scroller = scroller;
  }

  changeScrollTop(scrollTop: number): void {
    this.scrollTop$.next(scrollTop);
  }

  scrollToPosition(elementOffsetTop: number): void {
    this.scroller.scrollTo({
      top: elementOffsetTop,
      behavior: "instant",
    })
  }

  scrollTop(): void {
    this.scroller.scrollTo({
      top: 0,
      behavior: "instant",
    })
  }

  getScrollTop(): number {
    return this.scroller.measureScrollOffset('top');
  }
}
