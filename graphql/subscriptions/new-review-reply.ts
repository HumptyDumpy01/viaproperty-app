import gql from 'graphql-tag';

export const NEW_REVIEW_REPLY_SUBSCRIPTION = gql`
  subscription {
    newReviewReply {
      commentId
      id
      userType
      comment
      replierId
      replierInitials
      createdAt
    }
  }
`;