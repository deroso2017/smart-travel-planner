import { gql } from 'apollo-angular';

export const GET_TRIPS = gql`
  query {
    trips {
      id
      title
      destination
      startDate
      endDate
    }
  }
`;
