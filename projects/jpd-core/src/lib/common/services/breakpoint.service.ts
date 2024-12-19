import { BreakpointObserver } from "@angular/cdk/layout";
import { Injectable } from '@angular/core';
import { distinctUntilChanged, ReplaySubject } from "rxjs";
import { Dimension } from '../const';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  readonly dimension$: ReplaySubject<string> = new ReplaySubject();

  private breakpoint$ = this.breakpointObserver
    .observe([Dimension.XXXLarge, Dimension.XXLarge, Dimension.XLarge, Dimension.Large, Dimension.Medium, Dimension.Small, Dimension.XSmall])
    .pipe(
      distinctUntilChanged()
    );

  // private breakpoint$ = this.breakpointObserver
  //   .observe([Breakpoints.XLarge, Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
  //   .pipe(
  //     distinctUntilChanged()
  //   );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }

  private breakpointChanged(): void {
    let dim: string = Dimension.XSmall;
    if (this.breakpointObserver.isMatched(Dimension.XSmall)) {
      dim = Dimension.XSmall;
    } else if (this.breakpointObserver.isMatched(Dimension.Small)) {
      dim = Dimension.Small;
    } else if (this.breakpointObserver.isMatched(Dimension.Medium)) {
      dim = Dimension.Medium;
    } else if (this.breakpointObserver.isMatched(Dimension.Large)) {
      dim = Dimension.Large;
    } else if (this.breakpointObserver.isMatched(Dimension.XLarge)) {
      dim = Dimension.XLarge;
    } else if (this.breakpointObserver.isMatched(Dimension.XXLarge)) {
      dim = Dimension.XXLarge;
    } else if (this.breakpointObserver.isMatched(Dimension.XXXLarge)) {
      dim = Dimension.XXXLarge;
    } else if (this.breakpointObserver.isMatched(Dimension.XXXXLarge)) {
      dim = Dimension.XXXXLarge;
    }
    this.dimension$.next(dim)
  }
}
