import { MediaMatcher } from '@angular/cdk/layout';
import { Themes } from '@lib/common/const/themes';
import { CssDomService } from '@lib/common/services/css-dom.service';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

export function initTheme(cookieService: SsrCookieService,
                          cssDomService: CssDomService,
                          mediaMatcher: MediaMatcher): () => Promise<void> {
  return () => new Promise(resolve => {
    const theme = cookieService.get('theme');
    if (theme) {
      if (theme === Themes.DARK) {
        cssDomService.setDarkTheme();
      } else {
        cssDomService.setLightTheme();
      }
    } else if (mediaMatcher.matchMedia('(prefers-color-scheme: light)').matches) {
      cssDomService.setLightTheme();
    } else {
      cssDomService.setDarkTheme();
    }
    resolve();
  });
}
