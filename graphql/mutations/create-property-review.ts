import gql from 'graphql-tag';

export const CREATE_PROPERTY_REVIEW = gql`
    mutation CreateComment($propertyCommentInput: PropertyCommentInput!) {
        createComment(propertyCommentInput: $propertyCommentInput){
            id
            propertyId
            userId
            rated {
                overall
                location
                condition
                security
                noiseLevel
                amenities
                ownership
            }
            comment
            likes
            createdAt
            replies {
                comment
            }
        }
    }
`;

/*
mutation {
  createComment(propertyCommentInput: {
    propertyId: "c676687a-65e0-4b95-8a6c-f44e22f11639"
    comment: "Test Comment goes here..."
    rated: {
        overall: 4,
      location: 4
      condition: 4
      security: 4
      noiseLevel: 5
      amenities: 3
      ownership: 4
    }
  }) {
    id
    propertyId
    userId
    rated {
      overall
      location
      condition
      security
      noiseLevel
      amenities
      ownership
    }
    likes
    createdAt
    replies {
      comment
    }
  }
}

*/
