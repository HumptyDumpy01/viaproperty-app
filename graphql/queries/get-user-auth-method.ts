import gql from 'graphql-tag';

export const GET_USER_AUTH_METHOD = gql`
  query GetUserAuthMethod{
    getUserAuthMethod{
      authMethod
    }
  }
`;

/*
query {
    getUserAuthMethod {
        authMethod
    }
}
*/
