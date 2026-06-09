import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { catchError, of, map } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TripService } from '../../../../core/services/trip.service';

interface Trip {
  _id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
}

interface TripsResult {
  trips: Trip[];
}

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrl: './trips-list.component.scss',
  imports: [AsyncPipe, DatePipe, MatCardModule, MatIconModule, MatChipsModule, MatProgressSpinnerModule],
})
export class TripsListComponent {
  private tripService = inject(TripService);
  trips$ = this.tripService.getTrips<TripsResult>().pipe(
    map(result => result.data?.trips ?? []),
    catchError(() => of([] as Trip[]))
  );
}
