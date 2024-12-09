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
            additionalConveniences
            propertyArea
            onSale {
                isOnSale
                discount
                newPrice
            }
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
                    city
                    country
                    location {
                        coordinates
                    }
                }
            }
            propertyFor
            createdAt
        }
    }
`;