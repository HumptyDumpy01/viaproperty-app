import gql from 'graphql-tag';

export const GET_PROPERTIES = gql`
    query {
        properties {
            id
            images
            landlordId
            title
            propertyFor
            description {
                overall
                priceAndTaskHistory {
                    price
                }
            }
            propertyFor
            createdAt

        }
    }
`;
