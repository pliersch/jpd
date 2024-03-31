import { Route } from '@angular/router';
import { HomePageComponent } from "./pages/home/home-page.component";
import { PrivacyPageComponent } from './pages/privacy/privacy-page.component';

export const ROUTES: Route[] = [
  {path: '', component: HomePageComponent},
  {path: 'datenschutz', component: PrivacyPageComponent},
];
