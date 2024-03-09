// todo find better place for the interfaces or rename the file

import { Company } from "@lib/content/company";

export interface ComponentData {
  name: string;
  fragment?: string;
  data: unknown; // todo make generic
}

export interface ComponentByUrl {
  url: string;
  data: ComponentData[]
}

export interface AppConfig {
  appName: string;
  company: Company;
  componentsByUrl: ComponentByUrl[];
}
