// todo find better place for the interfaces or rename the file

import { Company } from './company';

export interface ComponentData {
  name: string;
  fragment?: string;
  data: unknown; // todo make generic
}

export interface AppConfig {
  appName: string;
  company: Company;
  data: ComponentData[];
}
