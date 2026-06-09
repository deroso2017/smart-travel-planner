import { gql } from 'apollo-angular';

export const CREATE_TRIP = gql`
  mutation CreateTrip(
    $title: String!
    $destination: String!
    $startDate: String!
    $endDate: String!
  ) {
    createTrip(
      title: $title
      destination: $destination
      startDate: $startDate
      endDate: $endDate
    ) {
      _id
      title
      destination
    }
  }
`;
