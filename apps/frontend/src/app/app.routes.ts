import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'my-trips',
    pathMatch: 'full',
  },
  {
    path: 'create-trip',
    loadComponent: () =>
      import('./features/trips/components/create-trip/create-trip.component').then(
        (m) => m.CreateTripComponent
      ),
  },
  {
    path: 'my-trips',
    loadComponent: () =>
      import('./features/trips/components/trip-list/trips-list.component').then(
        (m) => m.TripsListComponent
      ),
  },
];
