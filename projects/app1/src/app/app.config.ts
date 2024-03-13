import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { CustomAppDataService } from '@app1/services/custom-app-data.service';
import { CustomImageService } from '@app1/services/custom-image.service';
import { CustomRouteDomService } from '@app1/services/custom-route-dom.service';
import { CustomYoutubeService } from '@app1/services/custom-youtube.service';
import { AppDataService, CssDomService, ImageService, initApplication, initTheme, RouteDomService } from 'jpd-core';
import { YoutubeService } from 'jpd-youtube';

import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideClientHydration(),
    importProvidersFrom(MatSnackBarModule, MatDialogModule, GoogleMapsModule),
    provideAnimations(),
    provideHttpClient(withFetch(), /*withInterceptorsFromDi()*/),
    // provideRouter(ROUTES, withInMemoryScrolling({anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'})),
    provideRouter(ROUTES),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initTheme,
      deps: [SsrCookieService, CssDomService, MediaMatcher]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initApplication,
      multi: true,
      deps: [BreakpointObserver]
    },
    {provide: AppDataService, useClass: CustomAppDataService},
    {provide: RouteDomService, useClass: CustomRouteDomService},
    {provide: ImageService, useClass: CustomImageService},
    {provide: YoutubeService, useClass: CustomYoutubeService},
  ]
};
