import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { getDocument } from 'ssr-window';

export function initApplication(breakpointObserver: BreakpointObserver): () => Promise<void> {
  return () => new Promise(resolve => {

    breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        tap(res => updateCssVar(res.matches)),
        map(result => result.matches)
      ).subscribe();
    resolve();
  });
}

function updateCssVar(isHandset: boolean): void {
  let appbarHeight = 64;
  // need detection. documentElement isn´t available on server (ssr)
  const style = getDocument().documentElement?.style
  if (style) {
    if (isHandset) {
      appbarHeight = 56;
    }
    style.setProperty('--appbar-height', `${appbarHeight}px`)
  }
}
