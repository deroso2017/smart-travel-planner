import { gql } from 'apollo-angular';

export const GET_TRIP = gql`
  query GetTrip($id: ID!) {
    trip(id: $id) {
      id
      title
      destination
      startDate
      endDate
    }
  }
`;

export const UPDATE_TRIP = gql`
  mutation UpdateTrip(
    $id: ID!
    $title: String
    $destination: String
    $startDate: String
    $endDate: String
  ) {
    updateTrip(
      id: $id
      title: $title
      destination: $destination
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      title
      destination
      startDate
      endDate
    }
  }
`;

export const DELETE_TRIP = gql`
  mutation DeleteTrip($id: ID!) {
    deleteTrip(id: $id) {
      id
    }
  }
`;
