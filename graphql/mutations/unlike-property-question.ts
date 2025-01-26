import gql from 'graphql-tag';

export const UNLIKE_PROPERTY_QUESTION = gql`
    mutation UnlikeQuestion($questionId: String!) {
        unlikeQuestion(questionId: $questionId) {
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
  unlikeQuestion(questionId: "23842331-faf3-4206-81b8-30ebf47b6057") {
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
