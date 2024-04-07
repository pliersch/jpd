import { getDocument } from 'ssr-window';
import { Dimension } from '../const';
import { BreakpointService } from '../services';

export function initApplication(breakpointService: BreakpointService): () => Promise<void> {
  return () => new Promise(resolve => {

    breakpointService.dimension$.subscribe(res => {
      let appbarHeight = 64;
      switch (res) {
        case Dimension.XSmall:
          appbarHeight = 56;
          break;
        case Dimension.Small:
          appbarHeight = 120;
          break;
      }

      updateCssVar(appbarHeight)
    })

    resolve();
  });
}

function updateCssVar(appbarHeight: number): void {
  // need detection. documentElement isn´t available on server (ssr)
  const style = getDocument().documentElement?.style;
  if (style) {
    style.setProperty('--appbar-height', `${appbarHeight}px`)
  }
}


