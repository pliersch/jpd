//use custom-environment-service in app-projects

export interface Environment {
  production: boolean;
  login: string;
  apiUrl: string;
  socketUrl: string;
}
