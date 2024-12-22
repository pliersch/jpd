import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import { ApplicationConfig, importProvidersFrom, LOCALE_ID, inject, provideAppInitializer } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { DateFnsAdapter } from '@angular/material-date-fns-adapter';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DomSanitizer, provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { initProjectIcons } from '@app1/common/icon.initializer';
import { CustomAppDataService } from '@app1/services/custom-app-data.service';
import { CustomEnvironmentService } from '@app1/services/custom-environment.service';
import { CustomImageService } from '@app1/services/custom-image.service';
import { CustomRouteDomService } from '@app1/services/custom-route-dom.service';
import {
  AppDataService,
  BreakpointService,
  ENV_TOKEN,
  EnvironmentService,
  ImageService,
  initApplication,
  initIcons,
  initTheme,
  RouteDomService,
  ThemeService
} from 'jpd-core';
import { environment } from '../environments/environment';
import { ROUTES } from './app.routes';

registerLocaleData(localeDe);

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    importProvidersFrom(MatSnackBarModule, MatDialogModule, GoogleMapsModule),
    provideAnimations(),
    provideHttpClient(withFetch(), /*withInterceptorsFromDi()*/),
    {provide: LOCALE_ID, useValue: 'de'},
    {provide: DateAdapter, useClass: DateFnsAdapter, deps: [MAT_DATE_LOCALE]},
    provideRouter(ROUTES,
      // withInMemoryScrolling({anchorScrolling: 'enabled', scrollPositionRestoration: 'top'})
    ),
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
    provideAppInitializer(() => {
        const initializerFn = (initProjectIcons)(inject(MatIconRegistry), inject(DomSanitizer));
        return initializerFn();
      }),
    {provide: ENV_TOKEN, useValue: environment},
    {provide: AppDataService, useClass: CustomAppDataService},
    {provide: RouteDomService, useClass: CustomRouteDomService},
    {provide: EnvironmentService, useClass: CustomEnvironmentService},
    {provide: ImageService, useClass: CustomImageService},
  ]
};
