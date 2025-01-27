import gql from 'graphql-tag';

export const LIKE_PROPERTY_REVIEW = gql`
  mutation LikePropertyReview($reviewId: String!) {
    likePropertyReview(reviewId: $reviewId){
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
    likePropertyReview(reviewId: "fbd13112-3315-4d72-928b-6884ba17f396") {
        id
        user {
            initials
        }
        likes

    }
}
*/
