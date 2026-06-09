import { Injectable, inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_TRIPS } from '../graphql/trips.query';
import { CREATE_TRIP } from '../graphql/create-trip.mutation';

export interface CreateTripInput {
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
}

@Injectable({ providedIn: 'root' })
export class TripService {
  private apollo = inject(Apollo);

  getTrips<T = unknown>() {
    return this.apollo.watchQuery<T>({
      query: GET_TRIPS,
    }).valueChanges;
  }

  createTrip(input: CreateTripInput) {
    return this.apollo.mutate({
      mutation: CREATE_TRIP,
      variables: input,
      refetchQueries: [{ query: GET_TRIPS }],
    });
  }
}
