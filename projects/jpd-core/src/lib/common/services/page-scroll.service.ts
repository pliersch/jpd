import { CdkScrollable } from '@angular/cdk/scrolling';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageScrollService {

  scrollTop$ = new Subject<number>();
  private scroller: CdkScrollable;

  setScroller(scroller: CdkScrollable): void {
    this.scroller = scroller;
  }

  changeScrollTop(scrollTop: number): void {
    this.scrollTop$.next(scrollTop);
  }

  scrollToPosition(elementOffsetTop: number): void {

    // todo obsolete? https://trello.com/c/J9DT30ji/45-cssvarappbaroffset-ersetzen
    // const appbarHeight = Number(this.cssVarService.getValue(CssVar.AppbarOffset).slice(0, -2)); // slice 'px'
    // console.log('SidenavLayoutComponent scrollTo: ', appbarHeight)

    const top = elementOffsetTop /*- appbarHeight*/;

    // fixme stickyAppbar offset. how we can set
    // if (this.stickyAppbar?.isOpen) {
    //   top = top - 56; // todo hard coded (but should never change)
    // }

    // console.log('PageScrollService scrollToPosition: ', this.scroller)
    this.scroller.scrollTo({
      top: top,
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
