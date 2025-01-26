import gql from 'graphql-tag';

export const ADD_PROPERTY_QUESTION_REPLY = gql`
    mutation CreateReplyOnQuestion($propertyReplyInput: PropertyReplyInput!) {
        createReplyOnQuestion(propertyReplyInput: $propertyReplyInput) {
            comment
            replier {
                initials
                id
            }
            createdAt
        }
    }
`;

/*
mutation {
    createReplyOnQuestion(propertyReplyInput: {
        propertyId: "d989027e-bd7f-45dc-9a8a-9ea36c810989",
        commentId: "359226d2-62eb-4307-be6c-2ee32c9a2113"
        comment: "This apartment contains 4 beds, 2 bedrooms and 1 bathroom. Thanks for asking :)"
    }) {
        comment
        replier {
            initials
            id
        }
        createdAt
    }
}
*/
