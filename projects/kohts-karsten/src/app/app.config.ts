import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, inject, provideAppInitializer } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import {
  AppDataService,
  BreakpointService,
  EnvironmentService,
  initApplication,
  initIcons,
  initTheme,
  RouteDomService,
  ThemeService
} from 'jpd-core';
import { ROUTES } from './app.routes';
import { CustomAppDataService } from './services/custom-app-data.service';
import { CustomEnvironmentService } from './services/custom-environment.service';
import { CustomRouteDomService } from './services/custom-route-dom.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    importProvidersFrom(GoogleMapsModule),
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideRouter(ROUTES),
    provideAppInitializer(() => {
        const initializerFn = (initTheme)(inject(ThemeService), inject(Platform), inject(MediaMatcher));
        return initializerFn();
      }),
    provideAppInitializer(() => {
        const initializerFn = (initApplication)(inject(BreakpointService));
        return initializerFn();
      }),
    provideAppInitializer(() => {
        const initializerFn = (initIcons)(inject(MatIconRegistry), inject(DomSanitizer));
        return initializerFn();
      }),
    {provide: EnvironmentService, useClass: CustomEnvironmentService},
    {provide: RouteDomService, useClass: CustomRouteDomService},
    {provide: AppDataService, useClass: CustomAppDataService},
  ]
};
