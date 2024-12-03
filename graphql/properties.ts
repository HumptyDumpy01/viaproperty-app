import gql from 'graphql-tag';

export const GET_PROPERTIES = gql`
    query GetProperties($filter: PropertyFilterInput) {
        properties(filter: $filter) {
            id
            images
            landlordId
            title
            propertyFor
            tags
            propertyArea
            propertyHas {
                beds
                bathrooms
            }
            description {
                overall
                priceAndTaskHistory {
                    price
                }
                location {
                    city,
                    country
                }
            }
            propertyFor
            createdAt
        }
    }
`;