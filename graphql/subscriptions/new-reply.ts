import gql from 'graphql-tag';

export const NEW_REPLY_SUBSCRIPTION = gql`
    subscription {
        newReply {
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