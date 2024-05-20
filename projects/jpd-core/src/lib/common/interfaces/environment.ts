//use custom-environment-service in app-projects

export interface Environment {
  production: boolean;
  password: string;
  apiUrl: string;
  socketUrl: string;
}
