import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Themes } from '../const';
import { ThemeService } from '../services';

export function initTheme(cssDomService: ThemeService,
                          platform: Platform,
                          // cookieService: SsrCookieService,
                          mediaMatcher: MediaMatcher): () => Promise<void> {
  return () => new Promise(resolve => {
    if (platform.isBrowser) {
      const theme: string | null = localStorage.getItem('theme');
      // const theme = cookieService.get('theme');
      if (theme) {
        if (theme === Themes.DARK) {
          cssDomService.setDarkTheme();
        } else {
          cssDomService.setLightTheme();
        }
      } else if (mediaMatcher.matchMedia('(prefers-color-scheme: light)').matches) {
        cssDomService.setLightTheme();
      }
    }
    resolve();
  });
}
