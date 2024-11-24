import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { DateFnsAdapter } from '@angular/material-date-fns-adapter';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DomSanitizer, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { initProjectIcons } from '@shop/common/icon.initializer';
import { CustomAppDataService } from '@shop/services/custom-app-data.service';
import { CustomEnvironmentService } from '@shop/services/custom-environment.service';
import { CustomImageService } from '@shop/services/custom-image.service';
import { CustomRouteDomService } from '@shop/services/custom-route-dom.service';
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
    importProvidersFrom(MatSnackBarModule, MatDialogModule, GoogleMapsModule, BrowserAnimationsModule),
    provideAnimations(),
    provideHttpClient(withFetch(), /*withInterceptorsFromDi()*/),
    {provide: LOCALE_ID, useValue: 'de'},
    {provide: DateAdapter, useClass: DateFnsAdapter, deps: [MAT_DATE_LOCALE]},
    // provideRouter(ROUTES,
    provideRouter(ROUTES, withComponentInputBinding()
      // withInMemoryScrolling({anchorScrolling: 'enabled', scrollPositionRestoration: 'top'})
    ),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initTheme,
      deps: [/*SsrCookieService,*/ ThemeService, Platform, MediaMatcher]
    },
    {provide: APP_INITIALIZER, useFactory: initApplication, multi: true, deps: [BreakpointService]},
    {provide: APP_INITIALIZER, useFactory: initIcons, multi: true, deps: [MatIconRegistry, DomSanitizer]},
    {provide: APP_INITIALIZER, useFactory: initProjectIcons, multi: true, deps: [MatIconRegistry, DomSanitizer]},
    {provide: ENV_TOKEN, useValue: environment},
    {provide: AppDataService, useClass: CustomAppDataService},
    {provide: RouteDomService, useClass: CustomRouteDomService},
    {provide: EnvironmentService, useClass: CustomEnvironmentService},
    {provide: ImageService, useClass: CustomImageService},
  ]
};
