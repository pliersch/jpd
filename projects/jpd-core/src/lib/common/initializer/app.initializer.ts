import { getDocument } from 'ssr-window';
import { Dimension } from '../const';
import { BreakpointService } from '../services';

export function initApplication(breakpointService: BreakpointService): () => Promise<void> {
  return () => new Promise(resolve => {

    breakpointService.dimension$.subscribe(res => {
      let appbarHeight = 64;
      let navBarHeight = 0;
      switch (res) {
        case Dimension.XSmall:
          appbarHeight = 56;
          break;
        case Dimension.Small:
          navBarHeight = 56;
          break;
      }

      updateCssVar('--appbar-height', appbarHeight);
      updateCssVar('--navbar-height', navBarHeight);
    })

    resolve();
  });
}

function updateCssVar(property: string, value: number): void {
  // need detection. documentElement isn´t available on server (ssr)
  const style = getDocument().documentElement?.style;
  if (style) {
    style.setProperty(property, `${value}px`)
  }
}


