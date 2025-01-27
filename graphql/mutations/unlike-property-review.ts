import gql from 'graphql-tag';

export const UNLIKE_PROPERTY_REVIEW = gql`
  mutation UnlikePropertyReview($reviewId: String!) {
    unlikePropertyReview(reviewId: $reviewId){
      id
      user {
        initials
      }
      likes
    }
  }
`;

/*
mutation {
    unlikePropertyReview(reviewId: "fbd13112-3315-4d72-928b-6884ba17f396") {
        id
        user {
            initials
        }
        likes

    }
}
*/
