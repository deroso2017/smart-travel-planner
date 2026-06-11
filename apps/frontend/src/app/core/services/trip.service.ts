import { Injectable, inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_TRIPS } from '../graphql/trips.query';
import { CREATE_TRIP } from '../graphql/create-trip.mutation';
import { GET_TRIP, UPDATE_TRIP, DELETE_TRIP } from '../graphql/trip.operations';
import { CreateTripInput } from './models/create-trip-input';
import { Trip } from '../../features/trips/models/trip';

@Injectable({ providedIn: 'root' })
export class TripService {
  private apollo = inject(Apollo);

  /**
   * Get all trips
   */
  getTrips<T = { trips: Trip[] }>() {
    return this.apollo.watchQuery<T>({ query: GET_TRIPS }).valueChanges;
  }

  /**
   * Get single trip (FIXED: no CreateTripInput misuse)
   */
  getTrip(id: string) {
    return this.apollo.watchQuery<{ trip: Trip }>({
      query: GET_TRIP,
      variables: { id },
    }).valueChanges;
  }

  /**
   * Create trip (input only)
   */
  createTrip(input: CreateTripInput) {
    return this.apollo.mutate({
      mutation: CREATE_TRIP,
      variables: {
        input,
      },
      refetchQueries: [{ query: GET_TRIPS }],
    });
  }

  /**
   * Update trip (partial input is correct here)
   */
  updateTrip(id: string, input: Partial<CreateTripInput>) {
    return this.apollo.mutate({
      mutation: UPDATE_TRIP,
      variables: { id, ...input },
      refetchQueries: [{ query: GET_TRIPS }],
    });
  }

  /**
   * Delete trip
   */
  deleteTrip(id: string) {
    return this.apollo.mutate({
      mutation: DELETE_TRIP,
      variables: { id },
      refetchQueries: [{ query: GET_TRIPS }],
    });
  }
}
