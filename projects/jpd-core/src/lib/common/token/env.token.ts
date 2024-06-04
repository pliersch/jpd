import { InjectionToken } from '@angular/core';
import { Environment } from '../interfaces';

export const ENV_TOKEN = new InjectionToken<Environment>('environment token');
