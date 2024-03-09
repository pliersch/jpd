import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Injectable } from '@angular/core';
import { Dimension } from "@lib/common/const/dimensions";
import { distinctUntilChanged, Observable, ReplaySubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  private dimension: ReplaySubject<string> = new ReplaySubject<string>();

  public get dimension$(): Observable<string> {
    return this.dimension;
  }

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.XLarge, Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      distinctUntilChanged()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }

  private breakpointChanged(): void {
    let dim: string = Dimension.XSmall;
    if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      dim = Dimension.XSmall;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
      dim = Dimension.Small;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      dim = Dimension.Medium;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      dim = Dimension.Large;
    } else if (this.breakpointObserver.isMatched(Breakpoints.XLarge)) {
      dim = Dimension.XLarge;
    }
    this.dimension.next(dim)
  }
}
