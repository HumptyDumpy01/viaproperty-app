import gql from 'graphql-tag';

export const CREATE_QUESTION = gql`
    mutation CreatePropertyQuestion($propertyQuestionInput: PropertyQuestionInput!) {
        createPropertyQuestion(propertyQuestionInput: $propertyQuestionInput) {
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