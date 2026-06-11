import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { catchError, of, map } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { TripService } from '../../../../core/services/trip.service';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { Trip } from '../../models/trip';

interface TripsResult {
  trips: Trip[];
}

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  imports: [
    AsyncPipe,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    TripCardComponent,
  ],
})
export class TripsListComponent {
  private tripService = inject(TripService);
  router = inject(Router);

  trips$ = this.tripService.getTrips<TripsResult>().pipe(
    map((result) =>
      (result.data?.trips ?? []).map(
        (t) =>
          ({
            ...t,
          }) as Trip,
      ),
    ),
    catchError(() => of([] as Trip[])),
  );

  navigateTo(id: string) {
    this.router.navigate(['/trips', id]);
  }

  navigateToCreateTrip() {
    this.router.navigate(['/create-trip']);
  }
}
