export interface Route {
  name: string;
  path: string;
  children: Route[];
  fragments?: string[];
}
