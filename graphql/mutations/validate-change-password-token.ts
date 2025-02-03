import gql from 'graphql-tag';

export type ValidateTokenInputType = {
  email: string;
  token: string;
}

export const VALIDATE_CHANGE_PASSWORD_TOKEN = gql`
  mutation ValidateToken($validateTokenInput: ValidateTokenInput!) {
    validateToken(validateTokenInput: $validateTokenInput) {
      tokenIsValid
    }
  }
`;

/*
query {
    validateToken(validateTokenInput: {
        email: "test@example.com",
        token: "017051"
    }) {
        tokenIsValid
    }
}
*/
