import gql from 'graphql-tag';

export type CreateRegistrationTokenType = {
  email: string;
};

export const CREATE_REGISTRATION_TOKEN = gql`
  mutation CreateRegistrationToken($createRegistrationTokenInput: CreateRegistrationTokenInput!){
    createRegistrationToken(createRegistrationTokenInput: $createRegistrationTokenInput){
      sent
    }
  }
`;

/*
mutation {
    createRegistrationToken(createRegistrationTokenInput: {
        email: "tuznikolas@gmail.com"
    }) {
        sent
    }
}
*/
