import gql from 'graphql-tag';

export const CHANGE_USER_AUTH_METHOD = gql`
  mutation changeUserAuthMethod($changeUserAuthMethodInput: ChangeUserAuthMethodInput!) {
    changeUserAuthMethod(changeUserAuthMethodInput: $changeUserAuthMethodInput){
      authMethod
    }
  }
`;

/*
mutation {
    changeUserAuthMethod(changeUserAuthMethodInput: {
        authMethod: "password"
    }) {
        authMethod
    }
}
*/
