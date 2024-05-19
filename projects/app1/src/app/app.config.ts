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
import { CustomYoutubeService } from '@app1/services/custom-youtube.service';
import {
  AppDataService,
  BreakpointService,
  CssDomService,
  EnvironmentService,
  ImageService,
  initApplication,
  initIcons,
  initTheme,
  RouteDomService
} from 'jpd-core';
import { YoutubeService } from 'jpd-youtube';
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
      deps: [/*SsrCookieService,*/ CssDomService, Platform, MediaMatcher]
    },
    {provide: APP_INITIALIZER, useFactory: initApplication, multi: true, deps: [BreakpointService]},
    {provide: APP_INITIALIZER, useFactory: initIcons, multi: true, deps: [MatIconRegistry, DomSanitizer]},
    {provide: APP_INITIALIZER, useFactory: initProjectIcons, multi: true, deps: [MatIconRegistry, DomSanitizer]},
    {provide: AppDataService, useClass: CustomAppDataService},
    {provide: RouteDomService, useClass: CustomRouteDomService},
    {provide: EnvironmentService, useClass: CustomEnvironmentService},
    {provide: ImageService, useClass: CustomImageService},
    {provide: YoutubeService, useClass: CustomYoutubeService},
  ]
};
