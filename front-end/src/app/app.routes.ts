import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/Landing Page/landing-page.component';
import { DashboardComponent } from './pages/Dashboard/dashboard.component';
import { SignInComponent } from './pages/Authentification/sign-in/sign-in.component';
import { SignUpComponent } from './pages/Authentification/sign-up/sign-up.component';
import { AuthentificationComponent } from './pages/Authentification/authentification.component';
import { NotFoundComponent } from './pages/Not Found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: '',
    component: AuthentificationComponent,
    children: [
      { path: 'sign-in', component: SignInComponent, canActivate: [AuthGuard] },
      { path: 'sign-up', component: SignUpComponent, canActivate: [AuthGuard] },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: '404', component: NotFoundComponent },
];
