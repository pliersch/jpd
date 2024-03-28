import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppDataService, CssDomService, initApplication, initTheme, RouteDomService } from 'jpd-core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { ROUTES } from './app.routes';
import { CustomAppDataService } from './services/custom-app-data.service';
import { CustomRouteDomService } from './services/custom-route-dom.service';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(GoogleMapsModule),
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideRouter(ROUTES),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initTheme,
      deps: [SsrCookieService, CssDomService, MediaMatcher]
    },
    {provide: APP_INITIALIZER, useFactory: initApplication, multi: true, deps: [BreakpointObserver]},
    {provide: RouteDomService, useClass: CustomRouteDomService},
    {provide: AppDataService, useClass: CustomAppDataService},
  ]
};
