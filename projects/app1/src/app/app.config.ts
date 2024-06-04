import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
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

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    importProvidersFrom(MatSnackBarModule, MatDialogModule, GoogleMapsModule),
    provideAnimations(),
    provideHttpClient(withFetch(), /*withInterceptorsFromDi()*/),
    provideRouter(ROUTES,
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
