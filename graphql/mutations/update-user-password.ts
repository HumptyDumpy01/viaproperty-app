import gql from 'graphql-tag';

export type UpdateUserPasswordInputType = {
  userEmail: string;
  password: string;
  confirmPassword: string;
  token: string;
}

export const UPDATE_USER_PASSWORD = gql`
  mutation UpdateUserPassword($updateUserPasswordInput: UpdateUserPasswordInput!){
    updateUserPassword(updateUserPasswordInput: $updateUserPasswordInput){
      email
      initials
    }
  }
`;

/*
mutation {
    updateUserPassword(updateUserPasswordInput: {
        userEmail: "test@example.com"
        password: "MalFox10",
        confirmPassword: "MalFox10"
        token: "402040"
    }) {
        email
        initials
    }
}
*/
