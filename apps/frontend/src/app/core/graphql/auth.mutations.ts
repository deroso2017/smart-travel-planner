import { gql } from 'apollo-angular';

export const LOGIN_MUTATION = gql`
  mutation Login($input: UserDto!) {
    login(input: $input) {
      accessToken
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation Register($input: UserDto!) {
    register(input: $input) {
      accessToken
    }
  }
`;
