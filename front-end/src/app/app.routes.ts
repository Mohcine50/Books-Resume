import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/Landing Page/landing-page.component';
import { DashboardComponent } from './pages/Dashboard/dashboard.component';
import { SignUpComponent } from './pages/Authentification/sign-up/sign-up.component';
import { NotFoundComponent } from './pages/Not Found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WorkComponent } from './pages/work/work.component';
import { AuthenticationComponent } from './pages/Authentification/authentication.component';
import { SignInComponent } from './pages/Authentification/sign-in/sign-in.component';
import { ChaptersPanelComponent } from './pages/work/components/chapters-panel/chapters-panel.component';
import { BooksPanelComponent } from './pages/work/components/books-panel/books-panel.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: WorkComponent,
        children: [
          {
            path: 'books/:id',
            component: ChaptersPanelComponent,
          },
          {
            path: 'books',
            redirectTo: '',
          },
        ],
      },

      { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
    ],
  },

  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];
