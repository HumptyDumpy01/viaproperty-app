import gql from 'graphql-tag';

export const CHANGE_USER_INITIALS = gql`
  mutation ChangeUserInitials($updatedInitials: String!){
    changeUserInitials(updatedInitials: $updatedInitials){
      updatedInitials
      accessToken
    }
  }
`;

/*
mutation {
    changeUserInitials(updatedInitials: "Nikolas Baker") {
        updatedInitials
        accessToken
    }
}
*/
