import gql from 'graphql-tag';

export const CREATE_PROPERTY_REVIEW_REPLY = gql`
  mutation CreateReply($propertyReplyInput: PropertyReplyInput!) {
    createReply(propertyReplyInput: $propertyReplyInput){
      id
      comment
      replier {
        id
        initials
      }
      createdAt
    }
  }
`;

/*
mutation {
    createReply(propertyReplyInput: {
        commentId: "fbd13112-3315-4d72-928b-6884ba17f396"
        propertyId: "d989027e-bd7f-45dc-9a8a-9ea36c810989"
        comment: "Thanks a lot for your review, Nick! I appreciate you guys!"
    }) {
        comment
        replier {
            id
            initials
        }
        createdAt

    }
}
*/
