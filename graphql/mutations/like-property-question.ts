import gql from 'graphql-tag';

export const LIKE_PROPERTY_QUESTION = gql`
    mutation LikeQuestion($questionId: String!) {
        likeQuestion(questionId: $questionId) {
            id
            propertyId
            userId
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
  likeQuestion(questionId: "23842331-faf3-4206-81b8-30ebf47b6057") {
    id
    propertyId
    userId
    likes
    createdAt
    replies {
      comment
    }
  }
}

*/
