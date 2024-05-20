// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from 'jpd-core';

export const environment: Environment = {
  production: false,
  password: 'a4w2024!', // need only production
  apiUrl: 'http://localhost:3000',
  socketUrl: 'http://localhost:3000'
};
