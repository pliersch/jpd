import { MediaMatcher } from '@angular/cdk/layout';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import {
  AppDataService,
  BreakpointService,
  CssDomService,
  initApplication,
  initIcons,
  initTheme,
  RouteDomService
} from 'jpd-core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { ROUTES } from './app.routes';
import { CustomAppDataService } from './services/custom-app-data.service';
import { CustomRouteDomService } from './services/custom-route-dom.service';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideClientHydration(),
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
    {provide: APP_INITIALIZER, useFactory: initApplication, multi: true, deps: [BreakpointService]},
    {provide: APP_INITIALIZER, useFactory: initIcons, multi: true, deps: [MatIconRegistry, DomSanitizer]},
    {provide: RouteDomService, useClass: CustomRouteDomService},
    {provide: AppDataService, useClass: CustomAppDataService},
  ]
};
