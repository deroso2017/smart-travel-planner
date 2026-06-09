import { gql } from 'apollo-angular';

export const GET_TRIPS = gql`
  query {
    trips {
      _id
      title
      destination
      startDate
      endDate
    }
  }
`;
