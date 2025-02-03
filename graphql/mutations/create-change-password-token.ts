import gql from 'graphql-tag';

type CreateChangePasswordTokenInputType = {
  email: string;
}

export const GENERATE_CHANGE_PASSWORD_TOKEN = gql`
  mutation CreateChangePasswordToken($createChangePasswordTokenInput: CreateChangePasswordTokenInput!) {
    createChangePasswordToken(createChangePasswordTokenInput: $createChangePasswordTokenInput) {
      createdAt
    }
  }
`;

/*
mutation {
    createChangePasswordToken(createChangePasswordTokenInput: {
        email: "test@example.com"
    }) {
        createdAt
    }
}
*/
