import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { NonSsrAppDataService } from '@app2/services/non-ssr-app-data.service';
import { NonSsrRouteDomService } from '@app2/services/non-ssr-route-dom.service';
import { AppDataService, RouteDomService } from 'jpd-core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    {provide: AppDataService, useClass: NonSsrAppDataService},
    {provide: RouteDomService, useClass: NonSsrRouteDomService},
  ]
};
