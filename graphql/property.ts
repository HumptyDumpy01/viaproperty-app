import gql from 'graphql-tag';

export const GET_PROPERTY = gql`
    query GetProperty($id: String!) {
        property(id: $id) {
            images
            rating {
                overall
                count
                location
                condition
                ownership
                noiseLevel
                security
                amenities
            }
            tags
            propertyArea
            additionalConveniences
            title
            propertyHas {
                bedrooms
                livingRooms
                parkingSpaces
                bathrooms
                beds
                kitchens
            }
            description {
                overall
                features {
                    title
                    images
                    description
                }
                location {
                    title
                    description
                    location {
                        type
                        coordinates
                    }
                    city
                    country
                }
                videoTour
                contacts {
                    description
                    contacts {
                        initials
                        phones
                    }
                }
                priceAndTaskHistory {
                    price
                    history
                }
                floorPlans {
                    title
                    images
                    description
                }
            }
            landlord {
                initials
                id
                online
                bio
            }
            propertyFor
            onSale {
                isOnSale
                discount
                newPrice
            }
            extraPricing {
                title
                price
            }
        }}
`;