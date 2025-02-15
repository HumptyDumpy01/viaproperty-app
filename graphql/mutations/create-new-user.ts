import gql from 'graphql-tag';
import { AuthenticationMethodType } from '@/components/Auth/RegisterForm';

export type UserInputType = {
  initials: string;
  email: string;
  confirmPassword: string;
  password: string;
  authMethod: AuthenticationMethodType;
  verificationToken: string;
}

export const CREATE_NEW_USER = gql`
  mutation CreateUser($userInput: UserInput!){
    createUser(userInput: $userInput){
      accessToken
    }
  }
`;

/*
mutation {
    createUser(userInput: {
        initials: "Nikolas Tuz"
        email: "tuznikolas@gmail.com"
        password: "Test1234!"
        confirmPassword: "Test1234!"
        authMethod: "password",
        verificationToken: "114681"
    }) {
    accessToken
    }
}
*/
