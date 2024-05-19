import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

export type RotationState = 'landscape' | 'portrait';
export type DeviceState = 'mobile' | 'desktop';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private _rotation$: ReplaySubject<RotationState> = new ReplaySubject();

  public get rotation$(): Observable<string> {
    return this._rotation$;
  }

  private _device$: ReplaySubject<RotationState> = new ReplaySubject();

  public get device$(): Observable<string> {
    return this._device$;
  }

  private landscape = window.matchMedia("(orientation: landscape)");

  constructor(/*private breakpointService: BreakpointService*/) {
    this.listenLandscapeChange();
  }

  private listenLandscapeChange(): void {
    this.landscape.addEventListener("change", () => {
      const state: RotationState = this.landscape.matches ? 'landscape' : 'portrait';
      this._rotation$.next(state);
    });
  }

  // private listenBreakpointChange(): void {
  //   this.breakpointService.dimension$.subscribe((dim) => {
  //     this.isMobile.set(dim === Dimension.XSmall || dim === Dimension.Small);
  //   });
  // }

}
