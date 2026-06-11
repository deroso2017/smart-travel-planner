import { Route } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./features/welcome/welcome.component').then(
        (m) => m.WelcomeComponent,
      ),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./features/auth/auth.component').then((m) => m.AuthComponent),
  },
  {
    path: 'my-trips',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/trips/components/trip-list/trips-list.component').then(
        (m) => m.TripsListComponent,
      ),
  },
  {
    path: 'create-trip',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/trips/components/create-trip/create-trip.component').then(
        (m) => m.CreateTripComponent,
      ),
  },
  {
    path: 'trips/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/trips/components/trip-detail/trip-detail.component').then(
        (m) => m.TripDetailComponent,
      ),
  },
  { path: '**', redirectTo: '' },
];
