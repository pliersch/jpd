import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Injectable } from '@angular/core';
import { distinctUntilChanged, Observable, ReplaySubject } from "rxjs";
import { Dimension } from '../const';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  private _dimension$: ReplaySubject<string> = new ReplaySubject();

  public get dimension$(): Observable<string> {
    return this._dimension$;
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
    this._dimension$.next(dim)
  }
}
