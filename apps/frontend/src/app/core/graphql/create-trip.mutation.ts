import { gql } from 'apollo-angular';

export const CREATE_TRIP = gql`
  mutation CreateTrip($input: CreateTripDto!) {
    createTrip(input: $input) {
      id
      title
      destination
    }
  }
`;
