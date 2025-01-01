import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  inject,
  provideAppInitializer,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, provideClientHydration, withEventReplay } from '@angular/platform-browser';
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
  ThemeService,
} from 'jpd-core';
import { ROUTES } from './app.routes';
import { CustomAppDataService } from './services/custom-app-data.service';
import { CustomEnvironmentService } from './services/custom-environment.service';
import { CustomRouteDomService } from './services/custom-route-dom.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(GoogleMapsModule),
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideRouter(ROUTES),
    provideAppInitializer(() => {
      return initTheme(inject(ThemeService), inject(Platform), inject(MediaMatcher))();
    }),
    provideAppInitializer(() => {
      return initApplication(inject(BreakpointService))();
    }),
    provideAppInitializer(() => {
      return initIcons(inject(MatIconRegistry), inject(DomSanitizer))();
    }),
    { provide: EnvironmentService, useClass: CustomEnvironmentService },
    { provide: RouteDomService, useClass: CustomRouteDomService },
    { provide: AppDataService, useClass: CustomAppDataService },
  ],
};
